import "../CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CheckLessonPopUp({ title, text, userId, id }) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);

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
            <button className="btn btn-primary" onClick={togglePopup}>
                Read <i className="bi bi-book"></i>
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3 style={{color : "black"}}>Check card</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{color : "black"}}>
                                    Card name
                                </label>
                                <input
                                    type="text"
                                    required={true}
                                    className="form-control"
                                    id="name"
                                    value={title}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label" style={{color : "black"}}>
                                    Card text
                                </label>
                                <textarea
                                    className="form-control"
                                    readOnly={true}
                                    id="text"
                                    rows="5"
                                    value={text}
                                />
                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
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