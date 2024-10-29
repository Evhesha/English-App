import { useEffect } from "react";
import "../Home/Home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
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
                        <h1>Изучайте английский бесплатно с удовольствием</h1>
                        <p className="subtitle">Эффективная методика для быстрого освоения языка</p>
                        <div className="cta-container">
                            <Button className="btn-primary">Начать обучение</Button>
                            <Button variant="outline-dark">Узнать больше</Button>
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
                                <p>Активных студентов</p>
                            </div>
                        </Col>
                        <Col md={4} className="stat-column animate-on-scroll">
                            <div className="stat-card">
                                <div className="counter" data-value="100">0</div>
                                <p>Уроков</p>
                            </div>
                        </Col>
                        <Col md={4} className="stat-column animate-on-scroll">
                            <div className="stat-card">
                                <div className="counter" data-value="98">0</div>
                                <p>% Успешных студентов</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="features">
                <Container>
                    <h2 className="section-title animate-on-scroll">Преимущества обучения</h2>
                    <Row>
                        {[
                            {
                                icon: "🎯",
                                title: "Персонализация",
                                description: "Индивидуальный подход к каждому студенту"
                            },
                            {
                                icon: "💡",
                                title: "Современные методики",
                                description: "Эффективные подходы к обучению"
                            },
                            {
                                icon: "🗣️",
                                title: "Разговорная практика",
                                description: "Регулярное общение с носителями языка"
                            },
                            {
                                icon: "📱",
                                title: "Доступность",
                                description: "Обучение в любое время и в любом месте"
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
                    <h2 className="section-title animate-on-scroll">Как проходит обучение</h2>
                    <div className="process-steps">
                        {[
                            "Определение уровня языка",
                            "Составление учебного плана",
                            "Регулярные занятия",
                            "Практика и закрепление",
                            "Достижение результатов"
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
                        <h2>Готовы начать?</h2>
                        <p>Присоединяйтесь к нам сегодня и достигните своих языковых целей</p>
                        <Button className="btn-primary">Начать бесплатно</Button>
                    </div>
                </Container>
            </section>

            
        </div>
    );
}

export default Home;