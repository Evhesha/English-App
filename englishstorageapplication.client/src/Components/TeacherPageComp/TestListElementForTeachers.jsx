import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LessonsListElement.css"
import {useTranslation} from "react-i18next";
import Cookies from "js-cookie";
import CheckTestPopUp from "@/Components/PopUps/Test/CheckTestPopUp.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function TestListElementForTeachers({ id, description, name, date, passCount, isPublic, onDelete, onUpdate }) {
    const { t } = useTranslation();
    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-CA');
    };
    
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the article?");
        if (!confirmDelete) return;

        try {
            const token = Cookies.get('token');

            if (!token) {
                alert('Ошибка авторизации. Пожалуйста, войдите заново.');
                return;
            }

            await axios.delete(`${API_BASE_URL}/api/Tests/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            onDelete(id);
        } catch (error) {
            console.error('Ошибка при удалении статьи:', error);
        }
    };
    
    return (<li className="list-group-item d-flex justify-content-between align-items-center lesson-list-element">
        <div className="lesson-content">
            <h3 className="lesson-title">{name}</h3>
            <div className="lesson-info">
                <div className="info-item">
                    <span className="info-label">{t("teacher-page.pass-count")}:</span>
                    <span className="info-value">{passCount}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">{t("teacher-page.is-public")}:</span>
                    <span className="info-value">{isPublic ? "true" : "false"}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">{t("teacher-page.last-update-date")}:</span>
                    <span className="info-value">{formatDate(date)}</span>
                </div>
            </div>
        </div>
        <div className="lesson-actions">
            <CheckTestPopUp id={id} name={name} description={description} onPut={onUpdate} isPublic={isPublic} />
            <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>
                <i className="bi bi-trash3"></i> {t("teacher-page.delete")}
            </button>
        </div>
    </li>)
}

export default TestListElementForTeachers;