import { Link } from "react-router-dom";

function TopicCard({image, title, text, link}) {
 
    return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
          </p>
          <Link to={link} className="btn btn-primary">
            Open topic
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopicCard;