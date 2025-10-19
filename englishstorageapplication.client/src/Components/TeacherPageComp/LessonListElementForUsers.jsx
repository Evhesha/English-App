import axios from "axios";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadLessonPopUp from "@/Components/PopUps/Lesson/ReadLessonPopUp.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function LessonListElementForUsers({ id, name, text, watchCount, author }) {


    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{ border: '2px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
            <div>
                <div style={{ flex: 1 }}>
                    <p><b>Name: </b> {name}</p>
                </div>
                <div style={{ flex: 1 }}>
                    <p><b>Views: </b> {watchCount}</p>
                </div>
                <div style={{ flex: 1 }}>
                    <p><b>Author: </b> {author}</p>
                </div>
            </div>
            <div>
                <ReadLessonPopUp id={id} title={name} text={text}></ReadLessonPopUp>
            </div>
        </li>
    );
}

LessonListElementForUsers.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default LessonListElementForUsers;
