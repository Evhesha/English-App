import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function ListGroupElement({ id, name, email, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:5001/api/users/${id}`);
      onDelete(id); // Уведомляем родительский компонент об удалении пользователя
    } catch (error) {
      console.error('Ошибка при удалении пользователя:', error);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" style={{ border: '2px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
      <div> 
        <div style={{ flex: 1 }}> 
          <p><b>Id: </b> {id}</p>
        </div>
        <div style={{ flex: 1 }}> 
          <p><b>Name: </b> {name}</p>
        </div>
        <div style={{ flex: 1 }}>
          <p><b>Email: </b> {email}</p>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary"><i className="bi bi-pencil"></i> Edit</button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}><i className="bi bi-trash3"></i> Delete</button>
      </div>
    </li>
  );
}

export default ListGroupElement;
