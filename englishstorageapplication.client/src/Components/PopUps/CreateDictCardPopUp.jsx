import "../PopUps/CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

function CreateDictCardPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Name");
    const [text, setText] = useState("")
    const [error, setError] = useState(null);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
      setError(null); // Сброс ошибки при закрытии/открытии формы
    };
  
    const handleCreate = async (event) => {
      event.preventDefault(); // Предотвращаем перезагрузку страницы по умолчанию
      try {
        const response = await axios.post(
          "https://localhost:5001/api/UsersCards",
          {
            userId,
            nameOfUserCard,
            userCardData,
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
          Your own card <i className="bi bi-plus-circle"></i>
        </button>
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={togglePopup}>
                &times;
              </span>
              <h3>Add card</h3>
              <form onSubmit={handleCreate}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Card name
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
                  <label htmlFor="name" className="form-label">
                    Card text
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={text}
                    onChange={(e) => setName(e.target.value)}
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

export default CreateDictCardPopUp;