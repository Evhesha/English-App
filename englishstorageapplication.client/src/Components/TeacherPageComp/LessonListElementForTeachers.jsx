import axios from "axios";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function LessonListElementForTeachers({ id, name, watches, isPublic, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure that you want to delete the article?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/Lessons/${id}`); // Измени URL на правильный
      onDelete(id);
    } catch (error) {
      console.error('Ошибка при удалении статьи:', error);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" style={{ border: '2px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
      <div> 
        {/*<div style={{ flex: 1 }}> */}
        {/*  <p><b>Article Id: </b> {id}</p>*/}
        {/*</div>*/}
        <div style={{ flex: 1 }}> 
          <p><b>Name: </b> {name}</p>
        </div>
          <div style={{ flex: 1 }}>
              <p><b>Views: </b> {watches}</p>
          </div>
          <div style={{ flex: 1 }}>
              <p><b>Is public: </b> {isPublic ? "true" : "false"}</p>
          </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary" ><i className="bi bi-book"> </i>Open</button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}><i className="bi bi-trash3"> 
        </i>Delete</button>
      </div>
    </li>
  );
}

LessonListElementForTeachers.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default LessonListElementForTeachers;
