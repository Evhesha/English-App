import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";
import CreateUserPopUp from "../../Components/PopUps/User/CreateUserPopUp.jsx";
import {useTranslation} from "react-i18next";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Dropdown} from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function AdminPanel() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [delayCompleted, setDelayCompleted] = useState(false);
    const {t} = useTranslation();

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [roleInput, setRoleInput] = useState("");

    const [appliedName, setAppliedName] = useState("");
    const [appliedEmail, setAppliedEmail] = useState("");
    const [appliedRole, setAppliedRole] = useState("");

    const deleteNotify = () => {
        toast.success("Data delete successfully!", {
            position: "bottom-right"
        });
    }

    const mistakeNotify = () => {
        toast.error("Error loading data!", {
            position: "bottom-right"
        });
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                setHasError(false);

                const url = `${API_BASE_URL}/api/users/params/users`;

                const params = {};
                if (appliedRole) {
                    params.Role = appliedRole;
                }

                if (appliedName) {
                    params.Name = appliedName;
                }

                if (appliedEmail) {
                    params.Email = appliedEmail;
                }

                const response = await axios.get(url, {params});

                setUsers(response.data);
                setIsLoading(false);
                console.log("Данные успешно загружены:", response.data);
            } catch (error) {
                console.error("Ошибка при получении пользователей:", error);
                setIsLoading(false);
                setHasError(true);
                mistakeNotify();
            }
        };
        fetchUsers();
    }, [appliedName, appliedEmail, appliedRole]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                setDelayCompleted(true);
                setHasError(true);
                console.log("Загрузка данных занимает слишком много времени.");
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [isLoading]);

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
        deleteNotify();
    };

    const handleRole = (role) => {
        setRoleInput(role);
        setAppliedRole(role);
    };

    const handleSearch = () => {
        setAppliedName(nameInput);
        setAppliedEmail(emailInput);
    };

    return (
        <>
            <ToastContainer/>
            <div style={{display: "flex", alignItems: "center"}}>
                <ToLinkButton link="/home" placeholder={"Home"}/>
                <h1 style={{marginLeft: "20px"}}>{t("account-page.admin-panel")}</h1>
            </div>
            <p></p>

            <div style={{display: "flex", gap: "10px", marginBottom: "10px"}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Filter by name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Filter by email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <Dropdown onSelect={handleRole}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {roleInput || "Filter by role"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={""}>No filter</Dropdown.Item>
                        <Dropdown.Item eventKey={"User"}>User</Dropdown.Item>
                        <Dropdown.Item eventKey={"Admin"}>Admin</Dropdown.Item>
                        <Dropdown.Item eventKey={"Teacher"}>Teacher</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <CreateUserPopUp onPost={(newUser) => setUsers([...users, newUser])}/>
            </div>
            <p></p>
            <p>
                {t("account-page.num-of-users")} <b>{users.length}</b>
            </p>
            {isLoading ? (
                <div>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    {delayCompleted && hasError && (
                        <div className="alert alert-danger" role="alert">
                            Данные не были загружены. Пожалуйста, проверьте соединение и попробуйте снова.
                        </div>
                    )}
                </div>
            ) : (
                <div className="list-group">
                    {users.map((user, index) => (
                        <ListGroupElement
                            key={index}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            role={user.role}
                            onDelete={() => handleDelete(user.id)}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default AdminPanel;