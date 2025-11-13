import EditUserPopUp from '../PopUps/User/EditUserPopUp.jsx';
import ChangeUserRolePopUp from '../PopUps/User/ChangeUserRolePopUp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function ListGroupElement({ id, name, email, role, onDelete, onUpdate }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure that you want to delete the user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/users/${id}`);
      onDelete(id);
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
          <div style={{ flex: 1 }}>
              <p><b>Role: </b> {role}</p>
          </div>
      </div>
      <div>
        <EditUserPopUp 
          id={id}
          name={name}
          email={email}
          onPut={onUpdate}
        />
          <p></p>
          <ChangeUserRolePopUp
          id={id}
          role={role}
          />
        <p></p>
        <button type="button" className="btn btn-danger" onClick={handleDelete}><i className="bi bi-trash3"></i> Delete</button>
      </div>
    </li>
  );
}

export default ListGroupElement;
