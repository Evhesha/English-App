import CheckDictCardPopUp from "../../Components/PopUps/CheckDictCardPopUp"

function Card({image, title, text}) {
 
    return (
    <>
      <div className="card" style={{ width: "18rem" }}>
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