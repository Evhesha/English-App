import EditUserPopUp from '../PopUps/User/EditUserPopUp.jsx';
import ChangeUserRolePopUp from '../PopUps/User/ChangeUserRolePopUp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import './ListGroupElement.css';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function ListGroupElement({id, name, email, role, onDelete, onUpdate}) {
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the user?");
        if (!confirmDelete) return;

        try {
            const token = Cookies.get('token');

            if (!token) {
                alert('Ошибка авторизации. Пожалуйста, войдите заново.');
                return;
            }

            await axios.delete(`${API_BASE_URL}/api/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            onDelete(id);
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error);
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center user-list-element">
            <div className="user-content">
                <h3 className="user-name">{name}</h3>
                <div className="user-info">
                    <div className="info-item">
                        <span className="info-label">ID:</span>
                        <span className="info-value">{id}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{email}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Role:</span>
                        <span className="info-value role-badge">{role}</span>
                    </div>
                </div>
            </div>
            <div className="user-actions">
                <EditUserPopUp
                    id={id}
                    name={name}
                    email={email}
                    onPut={onUpdate}
                />
                <ChangeUserRolePopUp
                    id={id}
                    role={role}
                />
                <button type="button" className="btn btn-danger btn-action" onClick={handleDelete}>
                    <i className="bi bi-trash3"></i> Delete
                </button>
            </div>
        </li>
    );
}

export default ListGroupElement;