import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

function NewChatButton(){
    const navigate = useNavigate();

    const handleCreate = async (event) => {
        event.preventDefault();
        event.stopPropagation(); 

        try {
            const token = Cookies.get("token");
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            const response = await axios.post(
                `http://localhost:5199/chat`,
                {
                    userId: userId,
                    title: "New Chat",
                }
            );

            navigate("/chat", { state: { chatId: response.data.id } });

        } catch (error) {
            console.error("Error creating chat:", error.response?.data || error.message);
        }
    };

    return(
        <Link
            to="#"
            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            onClick={handleCreate}
        >
            New chat <i className="bi bi-plus-circle"></i>
        </Link>
    )
}

export default NewChatButton;