import { Link } from "react-router-dom";

function NewChatButton(){
    
    return(
        <Link
            to="/chat"
            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
        >
            New chat <i className="bi bi-plus-circle"></i>
        </Link>
    )
}

export default NewChatButton;