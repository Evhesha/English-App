import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function NewChatButton() {
    const navigate = useNavigate();

    const handleCreate = async () => {
        try {
            const token = Cookies.get("token");
            const userId  = jwtDecode(token);

            const response = await axios.post(
                "http://localhost:5199/chat",
                {
                    userId,
                    title: "New Chat",
                }
            );

            navigate(`/chat/${response.data.id}`);

        } catch (error) {
            console.error("Error creating chat:", error);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCreate}
            className="btn btn-link text-decoration-none d-inline-flex align-items-center gap-1"
        >
            New chat <i className="bi bi-plus-circle"></i>
        </button>
    );
}

export default NewChatButton;