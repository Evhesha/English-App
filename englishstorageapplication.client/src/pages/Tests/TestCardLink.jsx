import { Link } from "react-router-dom";

function TestCardLink({image, title, text, link}){
    
    return<>
     <div className="card" style={{ width: "18rem" }}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
          </p>
          <Link to={link} className="btn btn-primary">
            Start test <i class="bi bi-skip-start-circle"></i>
          </Link>
        </div>
      </div>
    </>
}

export default TestCardLink;