import CreateLessonPopUp from "@/Components/PopUps/Lesson/CreateLessonPopUp.jsx";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Cookies from "js-cookie";

function CreateLesson({onCreate}) {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = Cookies.get("token");
            if (token) {
                const decodedToken = jwtDecode(token);
                setUserId(decodedToken.userId);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="create-lesson-card">
            <div className="create-lesson-right-content">
                <div className="create-lesson-actions">
                    <CreateLessonPopUp onPost={onCreate} userId={userId} />
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default CreateLesson;