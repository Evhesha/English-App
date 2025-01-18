import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ArticleListElement from "../../Components/TeacherPageComp/ArticleListElement";
import TestListElement from "../../Components/TeacherPageComp/TestListElement";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

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

  const Section = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;

    h3 {
      color: #34495e;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  `;

  const LanguageButton = styled.button`
    padding: 10px 25px;
    border: 2px solid #3498db;
    border-radius: 8px;
    background: ${(props) => (props.active ? "#3498db" : "transparent")};
    color: ${(props) => (props.active ? "#fff" : "#3498db")};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
    }

    &:active {
      transform: translateY(0);
    }
  `;

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
          <LanguageButton
            active={activeTab === "articles"}
            onClick={() => setActiveTab("articles")}
          >
            Articles
          </LanguageButton>
          <LanguageButton
            active={activeTab === "tests"}
            onClick={() => setActiveTab("tests")}
          >
            Tests
          </LanguageButton>
        </ButtonGroup>
        <p></p>

        {activeTab === "articles" && (
          <ul>
            {articles.map(article => (
              <ArticleListElement
                key={article.id}
                id={article.id}
                name={article.title}
                onDelete={handleDeleteArticle}
              />
            ))}
          </ul>
        )}
        {activeTab === "tests" && (
          <ul>
            {tests.map(test => (
              <TestListElement
                key={test.id}
                id={test.id}
                name={test.name}
                onDelete={handleDeleteTest}
              />
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}

export default TeacherPage;
