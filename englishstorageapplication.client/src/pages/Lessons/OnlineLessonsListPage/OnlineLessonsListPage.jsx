import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineLessonsListPage.css';
import { useTranslation } from "react-i18next";
import axios from "axios";
import LessonListElementForUsers from "@/Components/TeacherPageComp/LessonListElementForUsers.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function OnlineLessonsListPage() {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [delayCompleted, setDelayCompleted] = useState(false);
    const {t} = useTranslation();

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const url = `${API_BASE_URL}/api/Lessons/lessons/params`;
                console.log("Загружаем уроки по URL:", url);
                
                const response = await axios.get(url, {
                    params: {
                        lessonFilter: {},
                        sortParams: {},
                        pageParams: {}
                    }
                });

                console.log("Ответ получен:", response);
                console.log("Данные уроков:", response.data);

                setLessons(response.data);
                setIsLoading(false);
                setHasError(false);
            } catch (error) {
                console.error("Полная ошибка при получении уроков:", {
                    message: error.message,
                    status: error.response?.status,
                    data: error.response?.data,
                    url: error.config?.url
                });
                setIsLoading(false);
                setHasError(true);
            }
        };

        fetchLessons();
    }, []);
    
    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Online lessons</h1>
                {lessons.map((lesson, index) => (
                    <LessonListElementForUsers
                        key={index}
                        to={lesson.path}
                        id={lesson.id}
                        author={lesson.userId}
                        name={lesson.title}
                        watchCount={lesson.watchCount}
                    >
                    </LessonListElementForUsers>
                ))}
        </div>
    );
}

export default OnlineLessonsListPage;