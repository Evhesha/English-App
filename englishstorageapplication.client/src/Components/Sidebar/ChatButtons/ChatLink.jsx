import { Link } from "react-router-dom";
import { Trash, Pen } from "react-bootstrap-icons";
import axios from "axios";

function ChatLink({name, id, onDelete}){
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the chat?");
        if (!confirmDelete) return;

        try {
            await axios.delete(` http://localhost:5199/chat/${id}`);
            onDelete(id);
            console.log("Chat deleted successfully");
        } catch (error) {
            console.error('Mistake on deleting chat:', error);
        }
    };

    const getChatMessages = async () => {
        try {
            await axios.get(` http://localhost:5199/chat/${id}/messages`);
        } catch (error) {
            console.error('Mistake on deleting chat:', error);
        }
    };
    
    return(
        <li>
            <Link
                to={`/chat/${id}`}
                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                onClick={getChatMessages}
            >
                {name}
            </Link>
            <button className="btn" style={{  border: "1px solid black", padding: "4px 8px" }} onClick={handleDelete}>
                <Trash/>
            </button>
            <button className="btn" style={{  border: "1px solid black", padding: "4px 8px" }} onClick={handleDelete}>
                <Pen/>
            </button>
            <p></p>
        </li>
    )
}

export default ChatLink;