import CheckDictCardPopUp from "../../Components/PopUps/CheckDictCardPopUp"
import axios from "axios";

function Card({id, image, title, text, onDelete}) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure that you want to delete the card?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://localhost:5001/api/UsersCards/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Ошибка при удалении карточки:', error);
    }
  };

    return (
    <>
      <div className="card" style={{ width: "18rem" }}>
      <button type="button" className="btn btn-danger" onClick={handleDelete}></button>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <CheckDictCardPopUp title={title} cardText={text}></CheckDictCardPopUp>
        </div>
      </div>
    </>
  );
}

export default Card;