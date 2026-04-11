import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { getAuthTokenClaims } from "@/utils/authToken.js";

function NewChatButton({onPost, Primary}) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    
    const handleCreate = async () => {
        try {
            const tokenClaims = getAuthTokenClaims();
            if (!tokenClaims?.userId) {
                return;
            }

            const response = await axios.post(
                "http://localhost:5199/chat",
                {
                    userId: tokenClaims.userId,
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
            className={Primary}
        >
            {t("sidebar.new-chat")} <i className="bi bi-plus-circle"></i>
        </button>
    );
}

export default NewChatButton;
