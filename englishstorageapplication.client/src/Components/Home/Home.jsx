import "../Home/Home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider/ThemeProvider";

function Home() {
    const { t } = useTranslation();
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div className={`minimal-home ${darkMode ? 'dark-theme' : ''}`}>
            {/* Hero Section */}
            <section className="hero">
                <Container>
                    <div className="hero-content">
                        <div className="hero-emoji">🚀</div>
                        <h1>{t("home.hero-title")}</h1>
                        <p className="subtitle">{t("home.hero-subtitle")}</p>
                        <div className="cta-container">
                            <Button className="btn-primary">{t("home.start-button")}</Button>
                            <Button variant="outline-secondary">{t("home.learn-more")}</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="benefits">
                <Container>
                    <h2 className="section-title animate-on-scroll">✨ {t("home.benefits-title")}</h2>
                    <Row>
                        {[
                            {
                                icon: "🎯",
                                title: t("home.benefit1-title"),
                                description: t("home.benefit1-desc")
                            },
                            {
                                icon: "💬",
                                title: t("home.benefit2-title"),
                                description: t("home.benefit2-desc")
                            },
                            {
                                icon: "📚",
                                title: t("home.benefit3-title"),
                                description: t("home.benefit3-desc")
                            }
                        ].map((benefit, index) => (
                            <Col md={4} key={index} className="animate-on-scroll">
                                <div className="benefit-card">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="features">
                <Container>
                    <h2 className="section-title animate-on-scroll">🌟 {t("home.features-title")}</h2>
                    <div className="features-grid">
                        {[
                            {
                                icon: "🗣️",
                                title: t("home.feature1-title"),
                                description: t("home.feature1-desc")
                            },
                            {
                                icon: "📖",
                                title: t("home.feature2-title"),
                                description: t("home.feature2-desc")
                            },
                            {
                                icon: "🎧",
                                title: t("home.feature3-title"),
                                description: t("home.feature3-desc")
                            },
                            {
                                icon: "📊",
                                title: t("home.feature4-title"),
                                description: t("home.feature4-desc")
                            },
                            {
                                icon: "👥",
                                title: t("home.feature5-title"),
                                description: t("home.feature5-desc")
                            },
                            {
                                icon: "⚡",
                                title: t("home.feature6-title"),
                                description: t("home.feature6-desc")
                            }
                        ].map((feature, index) => (
                            <div key={index} className="feature-item animate-on-scroll">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Home;