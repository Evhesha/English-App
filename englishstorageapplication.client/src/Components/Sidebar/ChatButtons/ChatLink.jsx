import { Link } from "react-router-dom";

function ChatLink({name}){
    
    return(
        <li>
            <Link
                to="/chat"
                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
                {name}
            </Link>
        </li>
    )
}

export default ChatLink;