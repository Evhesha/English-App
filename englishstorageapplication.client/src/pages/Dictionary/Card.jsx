import CheckDictCardPopUp from "../../Components/PopUps/CheckDictCardPopUp";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Card({ id, image, title, text, onDelete, onUpdate }) {
  const [userId, setUserId] = useState(null);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure that you want to delete the card?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/UsersCards/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Ошибка при удалении карточки:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.UserId);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <button type="button" className="btn btn-danger" onClick={handleDelete}></button>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <CheckDictCardPopUp title={title} cardText={text} onPut={onUpdate} userId={userId} id={id}></CheckDictCardPopUp>
        </div>
      </div>
    </>
  );
}

export default Card;