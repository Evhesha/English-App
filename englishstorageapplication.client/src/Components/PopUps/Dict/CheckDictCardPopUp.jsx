import "../PopUp.css";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CheckDictCardPopUp({ title, cardText, onPut, userId, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(title);
  const [text, setText] = useState(cardText);
  const [error, setError] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setError(null); 
  };

  const closePopup = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/UsersCards/${id}`,
        {
          userId: userId, 
            nameOfUsersCard: name,
          userCardData: text,
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
        setError(response.data.message || "Ошибка при изменении карточки.");
      }
    } catch (error) {
      console.error(error); 
      setError(
        error.response?.data?.message || "Ошибка при изменении карточки."
      );
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={togglePopup}>
        Check card <i className="bi bi-cloud-check"></i>
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h3 style={{color : "black"}}>Check card</h3>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{color : "black"}}>
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
                <label htmlFor="text" className="form-label" style={{color : "black"}}>
                  Card text
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="5"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
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
              <button type="button" onClick={closePopup} className="btn btn-danger">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckDictCardPopUp;