import React, {useState, useEffect, useRef} from "react";
import Section from "./TeacherPageComponents/Section";
import LessonListElementForTeachers from "../../Components/TeacherPageComp/LessonListElementForTeachers.jsx";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CreateLesson from "@/pages/Another/TeacherPageComponents/CreateLesson.jsx";
import CreateTest from "@/pages/Another/TeacherPageComponents/CreateTest.jsx";
import {useTranslation} from "react-i18next";
import TestListElementForTeachers from "@/Components/TeacherPageComp/TestListElementForTeachers.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function TeacherPage() {
    const [articles, setArticles] = useState([]);
    const [tests, setTests] = useState([]); 
    const effectRan = useRef(false);
    const {t} = useTranslation();
    const [section, setSection] = useState(true);

    const handleDeleteArticle = (id) => {
        setArticles(articles.filter(article => article.id !== id));
        deleteNotify();
    };

    const handleDeleteTest = (id) => {
        setTests(tests.filter(test => test.id !== id));
        deleteNotify();
    };

    useEffect(() => {
        if (effectRan.current === true) {
            return;
        }
        const fetchData = async () => {
            const token = Cookies.get("token");
            if (!token) return;
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;
                const responseLessons = await axios.get(`${API_BASE_URL}/api/Lessons/lessons/${userId}`);
                const responseTests = await axios.get(`${API_BASE_URL}/api/Tests/${userId}`)
                setArticles(responseLessons.data);
                setTests(responseTests.data);
                console.log(responseTests.data);
                receiveNotify();
            } catch (error) {
                console.log("Error fetching data:", error);
                mistakeNotify();
            }
        };

        fetchData();
        return () => {
            effectRan.current = true;
        };
    }, []);

    const receiveNotify = () => {
        toast.success("Data was received!", {
            position: "bottom-right"
        });
    }

    const deleteNotify = () => {
        toast.success("Data was deleted successfully!", {
            position: "bottom-right"
        });
    }

    const mistakeNotify = () => {
        toast.error("Error loading data!", {
            position: "bottom-right"
        });
    }

    return (
        <>
            <h1>{t("teacher-page.label")}</h1>
            <button className={section ? "btn-primary" : "btn-outline-secondary"}
                    onClick={() => setSection(true)}>Lessons</button>
            <button className={section ? "btn-outline-secondary" : "btn-primary"}
                    onClick={() => setSection(false)}>Tests</button>

            {section ? <Section>
                    <h2>Your lessons</h2>
                    <CreateLesson title={"Add lesson"}></CreateLesson>
                    {articles.map(article => (
                        <LessonListElementForTeachers
                            key={article.id}
                            id={article.id}
                            name={article.title}
                            text={article.text}
                            date={article.createdDate}
                            watches={article.watchCount}
                            isPublic={article.isPublic}
                            onDelete={handleDeleteArticle}
                        />
                    ))}
                </Section> :
                <Section>
                    <h2>Your tests</h2>
                    <CreateTest title={"Add test"}></CreateTest>
                    {tests.map(test => (
                        <TestListElementForTeachers
                            key={test.id}
                            id={test.id}
                            name={test.name}
                            description={test.description}
                            date={test.lastUpdateAt}
                            passCount={test.passCount}
                            isPublic={test.isPublic}
                            onDelete={handleDeleteTest}
                        />
                    ))}
                </Section>
            }
            <ToastContainer/>
        </>
    );
}

export default TeacherPage;