import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import Section from "./TeacherPageComponents/Section";
import TypeButton from "./TeacherPageComponents/TypeButton";

import ArticleListElement from "../../Components/TeacherPageComp/ArticleListElement";
import TestListElement from "../../Components/TeacherPageComp/TestListElement";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
          const response = await axios.get(`https://localhost:5001/api/Article/${userId}`);

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
        <h3>Content</h3>
        <ButtonGroup>
          <TypeButton
            active={activeTab === "articles"}
            onClick={() => setActiveTab("articles")}
          >
            Articles
          </TypeButton>
          <TypeButton
            active={activeTab === "tests"}
            onClick={() => setActiveTab("tests")}
          >
            Tests
          </TypeButton>
        </ButtonGroup>
        <p></p>

        {activeTab === "articles" && (
          
          <>
          <button ></button>
          <ul>
            //Add article pop up component

            {articles.map(article => (
              <ArticleListElement
                key={article.id}
                id={article.id}
                name={article.title}
                onDelete={handleDeleteArticle}
              />
            ))}
          </ul></>
        )}
        {activeTab === "tests" && (
          <>
          //Add test pop up component

          <ul>
            {tests.map(test => (
              <TestListElement
                key={test.id}
                id={test.id}
                name={test.name}
                onDelete={handleDeleteTest}
              />
            ))}
          </ul></>
        )}
      </Section>
    </>
  );
}

export default TeacherPage;