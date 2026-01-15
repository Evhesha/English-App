import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import axios from "axios";

function ChatLink({name, id, onDelete}){
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the chat?");
        if (!confirmDelete) return;

        try {
            await axios.delete(` http://localhost:5199/chat/${id}`);
            onDelete(id);
        } catch (error) {
            console.error('Mistake on deleting chat:', error);
        }
    };
    
    return(
        <li>
            <Link
                to="/chat"
                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
                {name}
            </Link>
            <button className="btn" style={{ border: "always" }} onClick={handleDelete}>
                <Trash/>
            </button>
        </li>
    )
}

export default ChatLink;