import "../modal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ExistTestQuestion, TestQuestion } from "@/Components/Teacher";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CheckTestPopUp({ name, description, onPut, id, isPublic: initialIsPublic }) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [testName, setTestName] = useState(name);
    const [testDescription, setTestDescription] = useState(description);
    const [isPublic, setIsPublic] = useState(initialIsPublic);
    const [testQuestions, setTestQuestions] = useState([]);
    const [pendingUpdates, setPendingUpdates] = useState({});

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
    };

    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            const fetchTestQuestions = async () => {
                try {
                    const response = await axios.get(`${API_BASE_URL}/api/TestQuestion/${id}`);
                    setTestQuestions(response.data);
                } catch (e) {
                    console.error(e);
                }
            };
            fetchTestQuestions();
        } else {
            setPendingUpdates({});
        }
    }, [isOpen, id]);

    const handleDelete = (deletedId) => {
        setTestQuestions(prev => prev.filter(q => q.id !== deletedId));
        setPendingUpdates(prev => {
            const updated = { ...prev };
            delete updated[deletedId];
            return updated;
        });
    };

    const handleCreate = (newQuestion) => {
        const createdQuestion = newQuestion.data || newQuestion;
        setTestQuestions(prev => [...prev, createdQuestion]);
    };

    const handleQuestionUpdate = (questionId, updatedData) => {
        setPendingUpdates(prev => ({
            ...prev,
            [questionId]: updatedData,
        }));
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            const token = Cookies.get("token");

            await axios.put(
                `${API_BASE_URL}/api/Tests/${id}`,
                {
                    name: testName,
                    description: testDescription,
                    isPublic: isPublic,
                },
                {
                    headers: { 'Authorization': `Bearer ${token}` }
                }
            );

            await Promise.all(
                Object.entries(pendingUpdates).map(([questionId, data]) =>
                    axios.put(`${API_BASE_URL}/api/TestQuestion/${questionId}`, {
                        type: data.type,
                        question: data.question,
                        options: data.options.split(',').map(o => o.trim()).filter(Boolean),
                        correctAnswer: data.correctAnswer,
                    })
                )
            );

            setPendingUpdates({});
            togglePopup();
            window.location.reload();
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message ?? "Something went wrong");
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={togglePopup}>
                Check test <i className="bi bi-cloud-check"></i>
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={togglePopup}>&times;</span>
                        <h3>Check test</h3>
                        <form onSubmit={handleEdit}>
                            <div className="mb-3">
                                <label htmlFor="testName" className="form-label">
                                    Test title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="testName"
                                    value={testName}
                                    onChange={(e) => setTestName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="testDescription" className="form-label">
                                    Test description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="testDescription"
                                    value={testDescription}
                                    onChange={(e) => setTestDescription(e.target.value)}
                                />
                            </div>
                            <div
                                className="questions-container"
                                style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '15px', paddingRight: '10px' }}
                            >
                                {testQuestions.map((testQuestion) => (
                                    <ExistTestQuestion
                                        key={testQuestion.id}
                                        id={testQuestion.id}
                                        question={testQuestion.question}
                                        correctAnswer={testQuestion.correctAnswer}
                                        options={testQuestion.options}
                                        type={testQuestion.type}
                                        onDelete={handleDelete}
                                        onUpdate={handleQuestionUpdate}
                                    />
                                ))}
                                <TestQuestion testId={id} onCreate={handleCreate} />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="isPublic"
                                    checked={isPublic}
                                    onChange={(e) => setIsPublic(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="isPublic">
                                    Public test
                                </label>
                            </div>
                            {Object.keys(pendingUpdates).length > 0 && (
                                <div className="alert alert-warning py-1 mb-2">
                                    {Object.keys(pendingUpdates).length} question(s) have unsaved changes
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <div className="d-flex gap-2">
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                                <button type="button" onClick={closePopup} className="btn btn-danger">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckTestPopUp;