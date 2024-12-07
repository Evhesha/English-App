import { useEffect } from "react";
import "../Home/Home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('counter')) {
                        const end = parseInt(entry.target.dataset.value);
                        animateValue(entry.target, 0, end, 2000);
                    }
                    entry.target.classList.add('visible');
                }
            });
        };

        const animateValue = (element, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const current = Math.floor(progress * (end - start) + start);
                element.textContent = current.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll, .counter').forEach(el => observer.observe(el));
    }, []);

    return (
        <div className="minimal-home animate-on-scroll">
            <section className="hero">
                <Container>
                    <div className="hero-content" >
                        <h1>{t("home.hero_title")}</h1>
                        <p className="subtitle">{t("home.hero_subtitle")}</p>
                        <div className="cta-container">
                            <Button className="btn-primary">{t("home.start_button")}</Button>
                            <Button variant="outline-dark">{t("home.learn_more")}</Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="stats">
                <Container>
                    <Row className="stats-row">
                        <Col md={4} className="stat-column animate-on-scroll">
                            <div className="stat-card">
                                <div className="counter" data-value="10000">0</div>
                                <p>{t("home.active_students")}</p>
                            </div>
                        </Col>
                        <Col md={4} className="stat-column animate-on-scroll">
                            <div className="stat-card">
                                <div className="counter" data-value="100">0</div>
                                <p>{t("home.lessons")}</p>
                            </div>
                        </Col>
                        <Col md={4} className="stat-column animate-on-scroll">
                            <div className="stat-card">
                                <div className="counter" data-value="98">0</div>
                                <p>{t("home.success_rate")}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="features">
                <Container>
                    <h2 className="section-title animate-on-scroll">{t("home.features_title")}</h2>
                    <Row>
                        {[
                            {
                                icon: "🎯",
                                title: t("home.feature1_title"),
                                description: t("home.feature1_desc")
                            },
                            {
                                icon: "💡",
                                title: t("home.feature2_title"),
                                description: t("home.feature2_desc")
                            },
                            {
                                icon: "🗣️",
                                title: t("home.feature3_title"),
                                description: t("home.feature3_desc")
                            },
                            {
                                icon: "📱",
                                title: t("home.feature4_title"),
                                description: t("home.feature4_desc")
                            }
                        ].map((feature, index) => (
                            <Col md={6} lg={3} key={index} className="animate-on-scroll">
                                <div className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="process">
                <Container>
                    <h2 className="section-title animate-on-scroll">{t("home.process_title")}</h2>
                    <div className="process-steps">
                        {[
                            t("home.process_step1"),
                            t("home.process_step2"),
                            t("home.process_step3"),
                            t("home.process_step4"),
                            t("home.process_step5")
                        ].map((step, index) => (
                            <div key={index} className="process-step animate-on-scroll">
                                <div className="step-number">{index + 1}</div>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="cta-section">
                <Container>
                    <div className="cta-content animate-on-scroll">
                        <h2>{t("home.cta_title")}</h2>
                        <p>{t("home.cta_subtitle")}</p>
                        <Button className="btn-primary">{t("home.cta_button")}</Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Home;