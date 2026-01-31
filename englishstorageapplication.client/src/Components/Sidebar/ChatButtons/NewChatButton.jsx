import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

function NewChatButton({onPost}) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    
    const handleCreate = async () => {
        try {
            const token = Cookies.get("token");
            const decodedToken = jwtDecode(token);

            const response = await axios.post(
                "http://localhost:5199/chat",
                {
                    userId: decodedToken.userId,
                    title: "New Chat",
                }
            )
            const newChat = {
                id: response.data, 
                title: "New Chat" 
            };
            
            onPost(newChat);
            navigate(`/chat/${response.data}`);
        } catch (error) {
            console.error("Error creating chat:", error);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCreate}
            className="btn  "
        >
            {t("sidebar.new-chat")} <i className="bi bi-plus-circle"></i>
        </button>
    );
}

export default NewChatButton;