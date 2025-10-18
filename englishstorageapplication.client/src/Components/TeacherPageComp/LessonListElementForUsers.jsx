import axios from "axios";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function LessonListElementForUsers({ id, name, watchCount, author }) {


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
                <button type="button" className="btn btn-primary" ><i className="bi bi-book"> </i>Read</button>
            </div>
        </li>
    );
}

LessonListElementForUsers.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default LessonListElementForUsers;
