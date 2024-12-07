import CreateDictCardPop from "../../../Components/PopUps/CreateDictCardPopUp"
import { useState } from "react";


function Card({image, title, text, onUpdate}) {
  const [cards, setCards] = useState([]);
  
    return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
          </p>
          <CreateDictCardPop onPost={(newCard) => setCards([...cards, newCard])}></CreateDictCardPop>
        </div>
      </div>
    </>
  );
}

export default Card;