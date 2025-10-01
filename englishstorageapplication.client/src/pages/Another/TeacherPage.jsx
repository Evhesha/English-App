import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import Section from "./TeacherPageComponents/Section";

import ArticleListElement from "../../Components/TeacherPageComp/ArticleListElement";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

import CreateLesson from "@/pages/Another/TeacherPageComponents/CreateLesson.jsx";
import AddLesson from "./TeacherPageComponents/AddLesson.png";

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
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.UserId;

        try {
          const response = await axios.get(`${API_BASE_URL}/api/Article/${userId}`);

          if (Array.isArray(response.data)) {
            setArticles(response.data);
          } else {
            console.error("Ошибка: данные из API не являются массивом", response.data);
          }

        } catch (error) {
          
        }
      }
    };

    fetchData();
  }, []);

    const receiveNotify = () => {
      toast.success("Data received!", {
        position: "bottom-right"
      });
    }
  
    const deleteNotify = () => {
      toast.success("Data delete successfuly!", {
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

          {articles.map(article => (
              <ArticleListElement
                  key={article.id}
                  id={article.id}
                  name={article.title}
                  onDelete={handleDeleteArticle}
              />
          ))}
          <CreateLesson title={"Add lesson"} image={
              <img
                  src={AddLesson}
                  className="card-img-top"
                  alt="..."
                  style={{ paddingLeft: "50px", width: "70%", height: "70%" }}
              />
          }></CreateLesson>
      </Section>
    </>
  );
}

export default TeacherPage;