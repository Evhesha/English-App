import "../PopUp.css";
import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CreateTestPopUp({onPost}) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Title");
    const [description, setDescription] = useState("Description");
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
                `${API_BASE_URL}/api/Tests`,
                {
                    userId: userId,
                    name: name,
                    description: description,
                    isPublic: isPublic,
                },{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            togglePopup();
            window.location.reload();
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={togglePopup}>
                    Create test <i className="bi bi-plus-circle"></i>
                </button>
                {isOpen && (
                    <div className="popup">
                        <div className="popup-content">
              <span className="close" onClick={togglePopup}>
                &times;
              </span>
                            <h3>Add test</h3>
                            <h4>All questions add in created test by clicking "Check test" button</h4>
                            <form onSubmit={handleCreate}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Test title
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
                                        Test description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="text"
                                        className="form-label"
                                    >
                                        Test questions
                                    </label>
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