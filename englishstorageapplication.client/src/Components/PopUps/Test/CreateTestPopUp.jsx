import "../PopUp.css";
import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CreateTestPopUp() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Name");
    const [text, setText] = useState("Text");
    const [error, setError] = useState(null);
    const [isPublic, setIsPublic] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
    };

    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            const token = Cookies.get("token");
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            const response = await axios.post(
                `${API_BASE_URL}/api/Lessons`,
                {
                    userId: userId,
                    title: name,
                    text: text,
                    isPublic: isPublic,
                    images: []
                },{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            if (response.status === 200 || response.status === 201) {
                if (onPost) {
                    onPost(response.data);
                }
                togglePopup();
                window.location.reload();
            } else {
                setError(response.data.message || "Ошибка при создании статьи.");
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || "Ошибка при создании статьи.");
            } else {
                setError("Ошибка при создании статьи.");
            }
        }
    };

    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={togglePopup}>
                    Create lesson <i className="bi bi-plus-circle"></i>
                </button>
                {isOpen && (
                    <div className="popup">
                        <div className="popup-content">
              <span className="close" onClick={togglePopup}>
                &times;
              </span>
                            <h3>Add lesson</h3>
                            <form onSubmit={handleCreate}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Lesson name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="text"
                                        className="form-label"
                                    >
                                        Lesson text
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="text"
                                        rows="5"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="isPublic"
                                        checked={isPublic}
                                        onChange={(e) => setIsPublic(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="Public">
                                        Public lesson
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
                                <button
                                    type="button"
                                    onClick={closePopup}
                                    className="btn btn-danger"
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CreateTestPopUp;