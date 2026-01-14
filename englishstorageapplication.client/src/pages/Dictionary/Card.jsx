import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CheckDictCardPopUp from "../../Components/PopUps/Dict/CheckDictCardPopUp";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Card({ id, image, title, text, onDelete, onUpdate }) {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.userId);
    }
  }, []);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/UsersCards/${id}`);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
      <div className="card border shadow-sm rounded-3 overflow-hidden h-100">
        <div className="card-header bg-light border-0 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 fw-semibold text-truncate">{title}</h5>
            <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={handleDelete}
                title="Delete card"
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>

        <div className="card-body p-3 d-flex flex-column">
          <div className="flex-grow-1 mb-3">
            <div className="ratio ratio-16x9 ">
              {image }
            </div>
          </div>

          <div className="mt-auto">
            <CheckDictCardPopUp
                title={title}
                cardText={text}
                onPut={onUpdate}
                userId={userId}
                id={id}
                className="w-100"
            />
          </div>
        </div>
      </div>
  );
}

export default Card;