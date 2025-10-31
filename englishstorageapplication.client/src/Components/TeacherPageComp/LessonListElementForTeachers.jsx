import axios from "axios";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckLessonPopUp from "@/Components/PopUps/Lesson/CheckLessonPopUp.jsx";
import "./LessonsListElement.css"

const API_BASE_URL = import.meta.env.VITE_API_URL;

function LessonListElementForTeachers({ id, text, name, watches, isPublic, onDelete, onUpdate }) {
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the article?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE_URL}/api/Lessons/${id}`);
            onDelete(id);
        } catch (error) {
            console.error('Ошибка при удалении статьи:', error);
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center lesson-list-element">
            <div className="lesson-content">
                <h3 className="lesson-title">{name}</h3>
                <div className="lesson-info">
                    <div className="info-item">
                        <span className="info-label">Views:</span>
                        <span className="info-value">{watches}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Is public:</span>
                        <span className="info-value">{isPublic ? "true" : "false"}</span>
                    </div>
                </div>
            </div>
            <div className="lesson-actions">
                <CheckLessonPopUp id={id} title={name} text={text} onPut={onUpdate} />
                <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>
                    <i className="bi bi-trash3"></i> Delete
                </button>
            </div>
        </li>
    );
}

LessonListElementForTeachers.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    watches: PropTypes.number,
    isPublic: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
};
export default LessonListElementForTeachers;