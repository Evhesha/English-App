import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadLessonPopUp from "@/Components/PopUps/Lesson/ReadLessonPopUp.jsx";
import "./LessonsListElement.css"

function LessonListElementForUsers({ id, name, text, watchCount, author }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center lesson-list-element">
            <div className="lesson-content">
                <h3 className="lesson-title">{name}</h3>
                <div className="lesson-info">
                    <div className="info-item">
                        <span className="info-label">Views:</span>
                        <span className="info-value">{watchCount}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Author:</span>
                        <span className="info-value">{author}</span>
                    </div>
                </div>
            </div>
            <div className="lesson-actions">
                <ReadLessonPopUp id={id} title={name} text={text} />
            </div>
        </li>
    );
}

LessonListElementForUsers.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    watchCount: PropTypes.number,
    author: PropTypes.string
};

export default LessonListElementForUsers;