import "../PopUps/CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function EditUserPopUp({ id,
                           name: initialName,
                           email: initialEmail,
                           role: initialRole,
                           password: initialPassword,
                           onPut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [role, setRole] = useState(initialRole);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setError(null);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/users/${id}`,
        {
          name,
          email,
          password, 
            role,
        }
      );

      console.log(response);

      if (response.status === 200 || response.status === 201) {
        if (typeof onPut === 'function') {
          onPut(response.data);
        }
        togglePopup();
        window.location.reload();
      } else {
        setError(response.data.message || "Ошибка при изменении пользователя.");
      }
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message || "Ошибка при изменении пользователя."
      );
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={togglePopup}>
        <i className="bi bi-pencil"></i> Edit
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h3>Edit user</h3>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                        Role
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Save edit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditUserPopUp;