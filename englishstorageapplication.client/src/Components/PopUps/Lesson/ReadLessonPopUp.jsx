import "../PopUp.css";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CheckLessonPopUp({ userId, id }) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [lesson, setLesson] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLesson = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/api/Lessons/lesson/${id}`);
            setLesson(response.data);
            console.log("Данные успешно загружены:", response.data);
        } catch (error) {
            console.error("Ошибка при получении урока:", error);
            setError("Не удалось загрузить данные урока");
        } finally {
            setIsLoading(false);
        }
    };

    const handleButtonClick = async () => {
        await fetchLesson();
        setIsOpen(true);
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
    };

    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    return <>
        <div>
            <button className="btn btn-primary" onClick={handleButtonClick}>
                Read <i className="bi bi-book"></i>
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={togglePopup}>
                            &times;
                        </span>
                        <h3 style={{color: "black"}}>Check lesson</h3>

                        {isLoading && (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        {!isLoading && lesson && (
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" style={{color: "black"}}>
                                        Lesson name
                                    </label>
                                    <input
                                        type="text"
                                        required={true}
                                        className="form-control"
                                        id="name"
                                        value={lesson.title || ""}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label" style={{color: "black"}}>
                                        Lesson text
                                    </label>
                                    <textarea
                                        className="form-control"
                                        readOnly={true}
                                        id="text"
                                        rows="5"
                                        value={lesson.text || ""}
                                    />
                                </div>
                                <button type="button" onClick={closePopup} className="btn btn-danger">
                                    Close
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    </>;
}

export default CheckLessonPopUp;