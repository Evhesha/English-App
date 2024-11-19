import "../PopUps/CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

function EditUserPopUp({ id, name: initialName, email: initialEmail, onPut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setError(null); // Сброс ошибки при закрытии/открытии формы
  };

  const handleEdit = async (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы по умолчанию
    try {
      const response = await axios.put(
        `https://localhost:5001/api/users/${id}`,
        {
          name,
          email,
          password,
        }
      );

      console.log(response); // Логирование ответа сервера

      if (response.status === 200 || response.status === 201) {
        if (typeof onPut === 'function') {
          onPut(response.data); // Передаем данные о новом пользователе в родительский компонент
        }
        togglePopup(); // Закрываем всплывающее окно после успешного изменения пользователя
        window.location.reload(); // Обновляем страницу для отображения изменений
      } else {
        setError(response.data.message || "Ошибка при изменении пользователя.");
      }
    } catch (error) {
      console.error(error); // Логирование ошибки
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
