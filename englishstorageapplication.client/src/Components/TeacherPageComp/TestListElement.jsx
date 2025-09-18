import axios from "axios";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function TestListElement({ id, name, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure, that you want to delete the test?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/Test/${id}`); // Измени URL на правильный
      onDelete(id);
    } catch (error) {
      console.error("Ошибка при удалении теста:", error);
    }
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{
        border: "2px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p>
          <b>Test Id: </b> {id}
        </p>
        <p>
          <b>Name: </b> {name}
        </p>
      </div>
      <div>
        <button type="button" className="btn btn-primary" ><i className="bi bi-trash3"></i>Pass</button>
      </div>
      <div>
        <button type="button" className="btn btn-danger" onClick={handleDelete}><i className="bi bi-trash3"></i>Delete</button>
      </div>
    </li>
  );
}

TestListElement.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TestListElement;