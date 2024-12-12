import Authors from "../../assets/Authors.jpg"
import About from "../../assets/about.png"
import './AboutApp.css'

function AboutApp() {
  return (
    <div className="about-container">
      <div className="header-section">
        <h1>About Program</h1>
        <img src={About} className="about-image" alt="Program interface" />
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-group">
            <h3>Navigation</h3>
            <ul>
              <li><span className="number">1)</span> Home - домашняя страница приложения</li>
              <li><span className="number">2)</span> About - страница "О приложении"</li>
              <li><span className="number">3)</span> Black/White Theme - переключение темы</li>
              <li><span className="number">4)</span> Profile page - переход в профиль</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>Authentication</h3>
            <ul>
              <li><span className="number">5)</span> Login - вход в аккаунт</li>
              <li><span className="number">6)</span> Sign-Up - регистрация нового пользователя</li>
              
              <li><span className="number">7)</span> Open/Close Sidebar - управление меню</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>Learning Tools</h3>
            <ul>
              <li><span className="number">8)</span> Lessons - вкладка "Уроки"</li>
              <li><span className="number">9)</span> Dictionary - вкладка "Словарь"</li>
              <li><span className="number">10-13)</span> Словари по разным темам</li>
              <li><span className="number">14)</span> Tests - вкладка "Тесты"</li>
              <li><span className="number">15-17)</span> Тесты по разным темам</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>User Settings</h3>
            <ul>
              <li><span className="number">18)</span> Account - управление аккаунтом</li>
              <li><span className="number">19)</span> Profile - персональный профиль</li>
              <li><span className="number">20)</span> Settings - настройки приложения</li>
              <li><span className="number">21)</span> Sign out - выход из аккаунта</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="authors-section">
        <h2>Authors</h2>
        <p>This project was created by Medvedskii Evgenii & Zuhta Kirill</p>
        <p>FITR BNTU, Group 10701222</p>
        <img src={Authors} className="authors-image" alt="Project authors" />
      </div>
    </div>
  );
}

export default AboutApp;