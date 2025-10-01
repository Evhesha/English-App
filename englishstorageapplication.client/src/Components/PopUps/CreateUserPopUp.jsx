import "../PopUps/CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

function CreateUserPopUp({ onPost }) {

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setError(null); 
  };

  const handleCreate = async (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы по умолчанию
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/Auth/register`,
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200 || response.status === 201) {
        onPost(response.data); // Передаем данные о новом пользователе в родительский компонент
        togglePopup(); // Закрываем всплывающее окно после успешного создания пользователя
      } else {
        setError(response.data.message || "Ошибка при создании пользователя.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message || "Ошибка при создании пользователя."
        );
      } else {
        setError("Ошибка при создании пользователя.");
      }
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={togglePopup}>
        Add user <i className="bi bi-plus-circle"></i>
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h3>Add user</h3>
            <form onSubmit={handleCreate}>
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
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateUserPopUp;
