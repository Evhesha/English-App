import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function EditUserPopUp({
                           id,
                           name: initialName,
                           email: initialEmail,
                           onPut
                       }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setError(null);
        setPassword("");
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const updateData = {
                name,
                email,
            };

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
            } else {
                setError(response.data.message || t("edit-user.error-message"));
            }
        } catch (error) {
            console.error("Edit error:", error);
            setError(
                error.response?.data?.message ||
                error.response?.data?.title ||
                t("edit-user.error-message")
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={togglePopup}>
                <i className="bi bi-pencil"></i> {t("edit-user.edit-button")}
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
                        <h3>{t("edit-user.edit-user-title")}</h3>
                        <form onSubmit={handleEdit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    {t("edit-user.name-label")}
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
                                    {t("edit-user.email-label")}
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
                                    {t("edit-user.email-help")}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    {t("edit-user.password-label")}
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={t("edit-user.password-placeholder")}
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
                                {isLoading ? t("edit-user.saving-button") : t("edit-user.save-button")}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditUserPopUp;
