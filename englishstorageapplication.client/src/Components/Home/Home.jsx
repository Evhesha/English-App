import "../Home/Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useNavigate } from "react-router-dom";

function Home() {
    const { t } = useTranslation();
    const { darkMode } = useTheme();
    const navigate = useNavigate();
    
    const moveToLessons = () => {
        navigate(`/online-list-lessons-page`);    
    }

    const moveToNotes = () => {
        navigate(`/my-dict-page`);
    }
    
    return (
        <div className={`minimal-home ${darkMode ? "dark-theme" : ""}`}>
            <section className="hero">
                <Container>
                    <div className="hero-content">
                        <div className="hero-emoji">🚀</div>
                        <h1>{t("home.hero-title")}</h1>
                        <p className="subtitle">{t("home.hero-subtitle")}</p>
                        <div className="cta-container">
                            <Button onClick={moveToLessons} className="btn-primary">{t("home.start-button")}</Button>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="features">
                <Container>
                    <h2 className="section-title">{t("home.notes-title")}</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="feature-card">
                                <Row className="align-items-center">
                                    <Col md={6}>
                                        <div className="feature-visual">
                                            <div className="visual-emoji">📝</div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="feature-content">
                                            <h3>{t("home.notes-heading")}</h3>
                                            <p>{t("home.notes-description")}</p>
                                            <div className="feature-list">
                                                <div className="feature-list-item">
                                                    <span className="list-icon">✅</span>
                                                    <span>{t("home.notes-feature1")}</span>
                                                </div>
                                                <div className="feature-list-item">
                                                    <span className="list-icon">✅</span>
                                                    <span>{t("home.notes-feature2")}</span>
                                                </div>
                                                <Button onClick={moveToNotes}
                                                        className="btn-primary">{t("home.try-notes")}</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="benefits">
                <Container>
                    <h2 className="section-title">{t("home.lessons-title")}</h2>
                    <Row>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="benefit-icon">📚</div>
                                <h3>{t("home.lesson1-title")}</h3>
                                <p>{t("home.lesson1-desc")}</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="benefit-icon">🧩</div>
                                <h3>{t("home.lesson2-title")}</h3>
                                <p>{t("home.lesson2-desc")}</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="benefit-icon">⚡</div>
                                <h3>{t("home.lesson3-title")}</h3>
                                <p>{t("home.lesson3-desc")}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="ai-showcase">
                <Container>
                    <div className="ai-container">
                        <div className="ai-header">
                            <div className="ai-emoji">🤖</div>
                            <h2>{t("home.ai-title")}</h2>
                            <p className="ai-subtitle">{t("home.ai-subtitle")}</p>
                        </div>

                        <Row>
                            <Col md={6}>
                                <div className="ai-feature-card">
                                    <div className="ai-feature-icon">🎯</div>
                                    <div className="ai-feature-content">
                                        <h4>{t("home.ai-feature1-title")}</h4>
                                        <p>{t("home.ai-feature1-desc")}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="ai-feature-card">
                                    <div className="ai-feature-icon">📖</div>
                                    <div className="ai-feature-content">
                                        <h4>{t("home.ai-feature2-title")}</h4>
                                        <p>{t("home.ai-feature2-desc")}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="ai-feature-card">
                                    <div className="ai-feature-icon">💬</div>
                                    <div className="ai-feature-content">
                                        <h4>{t("home.ai-feature3-title")}</h4>
                                        <p>{t("home.ai-feature3-desc")}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="ai-feature-card">
                                    <div className="ai-feature-icon">🔍</div>
                                    <div className="ai-feature-content">
                                        <h4>{t("home.ai-feature4-title")}</h4>
                                        <p>{t("home.ai-feature4-desc")}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="ai-cta">
                            <Button className="btn-primary">
                                {t("home.ai-button")}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Home;