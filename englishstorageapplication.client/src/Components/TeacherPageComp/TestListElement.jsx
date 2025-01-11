import axios from "axios";

function TestListElement(id, name) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure, that you want to delete the test?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://localhost:5001/api/users/${id}`); //test
      onDelete(id);
    } catch (error) {
      console.error("Ошибка при удалении пользователя:", error);
    }
  };

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={{
          border: "2px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        <div>
          <div style={{ flex: 1 }}>
            <p>
              <b>Test Id: </b> {id}
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p>
              <b>Name: </b> {name}
            </p>
          </div>
        </div>
        <div>
          <p></p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i className="bi bi-trash3"></i> Delete
          </button>
        </div>
      </li>
    </>
  );
}

export default TestListElement;
