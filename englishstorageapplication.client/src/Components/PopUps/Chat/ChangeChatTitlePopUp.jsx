import "../PopUp.css";
import {useState} from "react";
import axios from "axios";
import {Pen} from "react-bootstrap-icons";

function ChangeChatTitlePopUp({title, id, OnPatch}) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(title);
    const [error, setError] = useState(null);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
    };

    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const handleChangeName = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.patch(
                `http://localhost:5199/chat/${id}/title`,
                {
                    newChatTitle: name
                }
            );

            console.log(response);
            togglePopup();
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ display: 'inline-block' }}>
            <button className="btn" style={{border: "1px solid black", padding: "4px 8px"}} onClick={togglePopup}>
                <Pen/>
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3 style={{color: "black"}}>Change chat title</h3>
                        <form onSubmit={handleChangeName}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{color: "black"}}>
                                    New chat title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
    );
}

export default ChangeChatTitlePopUp;