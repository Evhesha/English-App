import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineLessonsListPage.css';
import { useTranslation } from "react-i18next";
import axios from "axios";
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
                const response = await axios.get(`${API_BASE_URL}/api/Lessons`);
                setLessons(response.data);
                setIsLoading(false);
                setHasError(false);
                console.log("Данные успешно загружены:", response.data);
                //receiveNotify();
            } catch (error) {
                console.error("Ошибка при получении уроков:", error);
                setIsLoading(false);
                setHasError(true);
                //mistakeNotify();
            }
        };

        fetchLessons();
    }, []);
    
    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Online lessons</h1>
            <div className="lessons-grid">
                {lessons.map((lesson, index) => (
                    <Link
                        key={index}
                        to={lesson.path}
                        className="lesson-card"
                    >
                        <div className="lesson-icon">{lesson.icon}</div>
                        <h3 className="lesson-title">{lesson.title}</h3>
                        <p className="lesson-description">{lesson.text}</p>
                        <div className="hover-effect"></div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default OnlineLessonsListPage;