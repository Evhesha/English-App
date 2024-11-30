import CreateDictCardPop from "../../Components/PopUps/CreateDictCardPopUp"

function Card({image, title, text}) {
 
    return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
          </p>
          <CreateDictCardPop></CreateDictCardPop>
        </div>
      </div>
    </>
  );
}

export default Card;