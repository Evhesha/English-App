import "../PopUp.css";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function EditUserPopUp({
                           id,
                           name: initialName,
                           email: initialEmail,
                           onPut
                       }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
        setPassword(""); // Сбрасываем пароль при закрытии
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Подготавливаем данные для отправки
            const updateData = {
                name,
                email,
            };

            // Добавляем пароль только если он был введен
            if (password.trim() !== "") {
                updateData.password = password;
            }

            const response = await axios.put(
                `${API_BASE_URL}/api/users/${id}`,
                updateData
            );

            if (response.status === 200) {
                if (typeof onPut === 'function') {
                    onPut(response.data);
                }
                togglePopup();
                // Убираем window.location.reload() - используем callback
            } else {
                setError(response.data.message || "Ошибка при изменении пользователя.");
            }
        } catch (error) {
            console.error("Edit error:", error);
            setError(
                error.response?.data?.message ||
                error.response?.data?.title ||
                "Ошибка при изменении пользователя."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={togglePopup}>
                <i className="bi bi-pencil"></i> Edit
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3>Edit user</h3>
                        <form onSubmit={handleEdit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    New Password (optional)
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Leave empty to keep current password"
                                />
                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading ? "Saving..." : "Save changes"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditUserPopUp;