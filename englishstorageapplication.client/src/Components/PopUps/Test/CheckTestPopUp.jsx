import "../PopUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ExistTestQuestion from "@/Components/TeacherPageComp/ExistTestQuestion.jsx";
import testQuestion from "@/Components/TeacherPageComp/ExistTestQuestion.jsx";
import ListGroupElement from "@/Components/ListGroupElement/ListGroupElement.jsx";
import TestQuestion from "@/Components/TeacherPageComp/TestQuestion.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CheckTestPopUp({ name, description, onPut, id, isPublic: initialIsPublic }) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [testName, setTestName] = useState(name);
    const [testDescription, setTestDescription] = useState(description);
    const [isPublic, setIsPublic] = useState(initialIsPublic);
    const [testQuestions, setTestQuestions] = useState([]);

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
                try{
                    const response = await axios.get(`https://localhost:7298/api/TestQuestion/${id}`);
                    setTestQuestions(response.data);
                    console.log(testQuestions);
                    console.log(response);
                }
                catch(e){
                    console.log(e);
                }
            }

            fetchTestQuestions();
        }
    }, [isOpen, id]); 
    
    const handleDelete = (id) => {
        setTestQuestions(testQuestions.filter(testQuestions => testQuestions.id !== id));
    }

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            const token = Cookies.get("token");
            const response = await axios.put(
                `${API_BASE_URL}/api/Tests/${id}`,
                {
                    name: testName,
                    description: testDescription,
                    isPublic: isPublic,
                },{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log(response);
            togglePopup();
            window.location.reload();
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message);
        }
    };

    return <>
        <div>
            <button className="btn btn-primary" onClick={togglePopup}>
                Check test <i className="bi bi-cloud-check"></i>
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3>Check test</h3>
                        <form onSubmit={handleEdit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Test title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={testName}
                                    onChange={(e) => setTestName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">
                                    Test Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={testDescription}
                                    onChange={(e) => setTestDescription(e.target.value)}
                                />
                            </div>
                            <div className="questions-container" style={{
                                maxHeight: '400px',
                                overflowY: 'auto',
                                marginBottom: '15px',
                                paddingRight: '10px'
                            }}>
                                {testQuestions.map((testQuestion, index) => (
                                    <ExistTestQuestion
                                        key={index}
                                        id={testQuestion.id}
                                        question={testQuestion.question}
                                        correctAnswer={testQuestion.correctAnswer}
                                        options={testQuestion.options}
                                        type={testQuestion.type}
                                        onDelete={() => handleDelete(testQuestion.id)}
                                    />
                                ))}
                                <TestQuestion testId={id}/>
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
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                            <button type="button" onClick={closePopup} className="btn btn-danger">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    </>;
}

export default CheckTestPopUp;