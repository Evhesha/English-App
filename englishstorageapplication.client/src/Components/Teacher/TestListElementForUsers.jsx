import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./LessonsListElement.css";
import { useTranslation } from "react-i18next";

function TestListElementForUsers({ id, name, description, passCount, author, createdDate, to }) {
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
                        <span className="info-label">{t("online-tests.pass-count", "Pass count")}:</span>
                        <span className="info-value">{passCount}</span>
                    </div>
                    {author && (
                        <div className="info-item">
                            <span className="info-label">{t("online-lessons.author")}:</span>
                            <span className="info-value">{author}</span>
                        </div>
                    )}
                    {description && (
                        <div className="info-item">
                            <span className="info-value">{description}</span>
                        </div>
                    )}
                    {createdDate && (
                        <div className="info-item date-item">
                            <span className="info-label">{t("online-lessons.created-date")}:</span>
                            <span className="info-value">
                                <small className="text-muted">
                                    {formatDate(createdDate)}
                                </small>
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="lesson-actions">
                {to ? (
                    <Link to={to} className="btn-primary">
                        {t("online-tests.pass-test", "Pass the test")}
                    </Link>
                ) : (
                    <button className="btn-primary">
                        {t("online-tests.pass-test", "Pass the test")}
                    </button>
                )}
            </div>
        </li>
    );
}

TestListElementForUsers.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    passCount: PropTypes.number,
    author: PropTypes.string,
    createdDate: PropTypes.string,
    to: PropTypes.string
};

export default TestListElementForUsers;
