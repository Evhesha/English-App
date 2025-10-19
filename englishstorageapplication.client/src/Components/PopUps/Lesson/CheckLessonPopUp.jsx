import "../CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CheckLessonPopUp({ title, text, onPut, userId, id }) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [lessonTitle, setLessonTitle] = useState(title);
    const [lessonText, setLessonText] = useState(text);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
    };

    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `${API_BASE_URL}/api/Lessons/${id}`,
                {
                    title: lessonTitle,
                    text: lessonText,
                }
            );

            console.log(response);

            if (response.status === 200 || response.status === 201) {
                if (typeof onPut === "function") {
                    onPut(response.data);
                }
                togglePopup();
                window.location.reload();
            } else {
                setError(response.data.message || "Ошибка при изменении урока.");
            }
        } catch (error) {
            console.error(error);
            setError(
                error.response?.data?.message || "Ошибка при изменении укрока."
            );
        }
    };

    return <>
        <div>
            <button className="btn btn-primary" onClick={togglePopup}>
                Check lesson <i className="bi bi-cloud-check"></i>
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3 style={{color : "black"}}>Check Lesson</h3>
                        <form onSubmit={handleEdit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{color : "black"}}>
                                    Lesson name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={lessonTitle}
                                    onChange={(e) => setLessonTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label" style={{color : "black"}}>
                                    Lesson text
                                </label>
                                <textarea
                                    className="form-control"
                                    id="text"
                                    rows="5"
                                    value={lessonText}
                                    onChange={(e) => setLessonText(e.target.value)}
                                />
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

export default CheckLessonPopUp;