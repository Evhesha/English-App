import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadLessonPopUp from "@/Components/PopUps/Lesson/ReadLessonPopUp.jsx";
import "./LessonsListElement.css"
import { useTranslation } from "react-i18next";

function TestListElementForUsers({ id, name, description, passCount, author, createdDate }) {
    const { t } = useTranslation();

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-CA');
    };

    return (
        <li className="list-group-item lesson-list-element">
            <div className="lesson-content">
                <h3 className="lesson-title">{name}</h3>
                <div className="lesson-info">
                    <div className="info-item">
                        <span className="info-label">{t("online-lessons.pass-count")}:</span>
                        <span className="info-value">{passCount}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">{t("online-lessons.author")}:</span>
                        <span className="info-value">{author}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-value">{description}</span>
                    </div>
                    <div className="info-item date-item">
                        <span className="info-label">{t("online-lessons.created-date")}:</span>
                        <span className="info-value">
                            {createdDate && (
                                <small className="text-muted">
                                    {formatDate(createdDate)}
                                </small>
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <div className="lesson-actions">
                <button className="btn-primary">Pass the test</button>
            </div>
        </li>
    );
}

TestListElementForUsers.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    watchCount: PropTypes.number,
    author: PropTypes.string
};

export default TestListElementForUsers;