import "../modal.css";
import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function ChangeUserRolePopUp({
                                 id,
                                 role: initialRole
                             }) {
    const [isOpen, setIsOpen] = useState(false);
    const [role, setRole] = useState(initialRole);
    const [error, setError] = useState(null);
    const options = ['User', 'Admin', 'Teacher'];

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
    };

    const handleEditRole = async (event) => {
        event.preventDefault();
        try {
            const token = Cookies.get("token");
            const response = await axios.patch(
                `${API_BASE_URL}/api/users/${id}`,
                {role},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(response);
            if (response.status === 200) {
                togglePopup();
                window.location.reload();
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || "Вы можете задать только роли Admin, Teacher, User");
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={togglePopup}>
                <i className="bi bi-pencil"></i> Change role
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content" style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '100px'
                    }}>
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3>Edit user role</h3>
                        <form onSubmit={handleEditRole}>
                            <div className="mb-3">
                                <Dropdown onSelect={(eventKey) => setRole(eventKey)}>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-role">
                                        {role || 'Выберите роль...'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {options.map((option) => (
                                            <Dropdown.Item key={option} eventKey={option}>
                                                {option}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary">
                                Save edit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChangeUserRolePopUp;
