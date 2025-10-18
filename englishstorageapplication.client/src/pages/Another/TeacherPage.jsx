import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
  const [activeTab, setActiveTab] = useState("articles");

  const [articles, setArticles] = useState([]);
  const [tests, setTests] = useState([]);

  const handleDeleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  const handleDeleteTest = (id) => {
    setTests(tests.filter(test => test.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      //if (token) {
        //const decodedToken = jwtDecode(token);
        const userId = "1023a128-1835-4dda-9348-41915c86d7d1"
            //decodedToken.UserId; hard code

        try {
          const response = await axios.get(`${API_BASE_URL}/api/Lessons/lessons/${userId}`);
            setArticles(response.data);
console.log(response.data)
        } catch (error) {
          console.log(error);    
        }
     // }
    };

    fetchData();
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

  const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
  `;

  return (
    <>
      <h1>Teacher panel</h1>
      <Section>
        <h3>Your lessons</h3>
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
                  watches={article.watchCount}
                  isPublic={article.isPublic}
                  onDelete={handleDeleteArticle}
              />
          ))}
      </Section>
    </>
  );
}

export default TeacherPage;