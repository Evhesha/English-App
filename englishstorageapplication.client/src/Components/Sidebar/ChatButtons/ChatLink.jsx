import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import axios from "axios";
import ChangeChatTitlePopUp from "@/Components/PopUps/Chat/ChangeChatTitlePopUp.jsx";

function ChatLink({name, id, onDelete, onUpdate}){
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
            <Link style={{"width": "90px", "height": "35px"}} to={`/chat/${id}`}
                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                onClick={getChatMessages}
            >
                {name}
            </Link>
            <button className="btn icon-btn" onClick={handleDelete}>
                <Trash/>
            </button>
            <ChangeChatTitlePopUp OnPatch={onUpdate} title={name} id={id}></ChangeChatTitlePopUp>
            <p></p>
        </li>
    )
}

export default ChatLink;
