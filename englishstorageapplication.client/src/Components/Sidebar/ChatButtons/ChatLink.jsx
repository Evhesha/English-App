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

    const getChatMessages = async () => {

        try {
            var data = await axios.get(` http://localhost:5199/chat/${id}/messages`);
            console.log(data);
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
            <button className="btn" style={{ border: "always" }} onClick={handleDelete}>
                <Trash/>
            </button>
        </li>
    )
}

export default ChatLink;