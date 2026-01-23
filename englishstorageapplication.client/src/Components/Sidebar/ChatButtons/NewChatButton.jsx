import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function NewChatButton({onPost}) {
    const navigate = useNavigate();

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
            console.log(response)
            onPost(response.data);
            navigate(`/chat/${response.data.id}`);
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
            New chat <i className="bi bi-plus-circle"></i>
        </button>
    );
}

export default NewChatButton;