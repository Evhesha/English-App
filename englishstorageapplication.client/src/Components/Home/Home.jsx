import "../Home/Home.css";

function Home() {
    return (
        <>
            <header>
                <h1>Английский — ключ к новым возможностям!</h1>
                <p>Изучайте английский язык с нами и откройте двери в новый мир!</p>
                <button className="start-button">Начать обучение</button>
            </header>
            <section className="why-learn">
                <h2>Почему изучать английский?</h2>
                <p>
                    Английский язык — это язык международного общения. Он открывает возможности для путешествий, 
                    карьеры и новых знакомств. Присоединяйтесь к огромному сообществу людей, 
                    говорящих на английском!
                </p>
                <img src="https://st3.depositphotos.com/1350793/12590/i/450/depositphotos_125909396-stock-photo-english-concept-with-woman.jpg" alt="Изучение английского" />
            </section>
            <section className="methods">
                <h2>Наши методы обучения</h2>
                <p>
                    Мы используем современные методики обучения, включая интерактивные занятия, 
                    видеоуроки и практические упражнения. Наша цель — сделать обучение 
                    увлекательным и эффективным!
                </p>
                <button className="learn-more">Узнать больше</button>
            </section>
            <footer>
                <p>&copy; 2024 Английский для всех. Все права защищены.</p>
            </footer>
        </>
    );
}

export default Home;