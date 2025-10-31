import React, { useState, useEffect, useRef } from "react";
import Section from "./TeacherPageComponents/Section";
import LessonListElementForTeachers from "../../Components/TeacherPageComp/LessonListElementForTeachers.jsx";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CreateLesson from "@/pages/Another/TeacherPageComponents/CreateLesson.jsx";
import AddLesson from "./TeacherPageComponents/AddLesson.png";

const API_BASE_URL = import.meta.env.VITE_API_URL;
function TeacherPage() {
  const [articles, setArticles] = useState([]);
    const effectRan = useRef(false);

  const handleDeleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
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

                const response = await axios.get(`${API_BASE_URL}/api/Lessons/lessons/${userId}`);
                setArticles(response.data);
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
      <h1>Teacher panel (your lessons)</h1>
      <Section>
          <CreateLesson title={"Add lesson"} image={
              <img
                  src={AddLesson}
                  className="card-img-top"
                  alt="..."
                  style={{ paddingLeft: "50px", width: "70%", height: "70%" }}
              />
          }></CreateLesson>
          {articles.map(article => (
              <LessonListElementForTeachers
                  key={article.id}
                  id={article.id}
                  name={article.title}
                  text={article.text}
                  watches={article.watchCount}
                  isPublic={article.isPublic}
                  onDelete={handleDeleteArticle}
              />
          ))}
      </Section>
        <ToastContainer/>
    </>
  );
}

export default TeacherPage;