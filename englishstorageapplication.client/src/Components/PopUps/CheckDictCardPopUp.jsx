import "../PopUps/CreateUserPopUp.css";
import { useState } from "react";
import axios from "axios";

function CheckDictCardPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Name");
    const [text, setText] = useState("")
    const [error, setError] = useState(null);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
      setError(null); // Сброс ошибки при закрытии/открытии формы
    };
  
    return (
      <div>
        <button className="btn btn-primary" onClick={togglePopup}>
        Check card <i class="bi bi-cloud-check"></i>
        </button>
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={togglePopup}>
                &times;
              </span>
              <h3>Check card</h3>
              <form //</div>onSubmit={handleCreate}
              >
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
                <button className="btn btn-danger">
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