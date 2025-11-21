import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@/Components/ThemeProvider/ThemeProvider.jsx";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1; 
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 30px;
  
  h3 {
    color: #34495e;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const LanguageButton = styled.button`
  padding: 10px 25px;
  border: 2px solid #3498db;
  border-radius: 8px;
  background: ${props => props.active ? '#3498db' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#3498db'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(52,152,219,0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

function SettingPage() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const navigate = useNavigate();
    const { darkMode, toggleTheme } = useTheme();

    const notify = () => {
      toast.success("Language changed!", {
        position: "bottom-right"
      });
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setCurrentLang(language);
        notify();
    };

    const handleLogout = () => { 
      const confirmLogout = window.confirm("Are you sure that you want to logout?");
      if (!confirmLogout) return;
      
      Cookies.remove("token");
      navigate("/login"); 
      window.location.reload();
    };

    return (
        <Container>
          <ToastContainer />
            <Title>{t("account-page.settings")}</Title>
            <Section>
                <h3>{t("account-page.language")}</h3>
                <ButtonGroup>
                    <LanguageButton 
                        active={currentLang === "en"} 
                        onClick={() => changeLanguage("en")}
                    >
                        English
                    </LanguageButton>
                    <LanguageButton 
                        active={currentLang === "ru"} 
                        onClick={() => changeLanguage("ru")}
                    >
                        Русский
                    </LanguageButton>
                </ButtonGroup>
            </Section>
            <Section>
                <h3>{t("account-page.theme")}</h3>
                <button
                    className="theme-toggle-btn"
                    onClick={() => {
                        toggleTheme();
                        notify();
                    }}
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    <i className={`bi ${darkMode ? "bi-sun" : "bi-moon"}`}></i>
                </button>
            </Section>
            <Section>
                <h3>{t("sidebar.sign-out")}</h3>
                
                <Link
                    to="#"
                    onClick={handleLogout}
                    className=""
                  >
                    <i className="bi bi-door-closed"></i> {t("sidebar.sign-out")}
                  </Link>
                    <span></span>
            </Section>
        </Container>
    );
}

export default SettingPage;