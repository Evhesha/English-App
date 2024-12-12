import Authors from "../../assets/Authors.jpg"
import About from "../../assets/about.png"
import './AboutApp.css'
import { useTranslation } from "react-i18next";

function AboutApp() {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <div className="header-section">
        <h1>{t("aboutapp.about-program")}</h1>
        <img src={About} className="about-image" alt="Program interface" />
      </div>

      <div className="features-section">
        <h2>{t("aboutapp.key-features")}</h2>
        <div className="features-grid">
          <div className="feature-group">
            <h3>{t("aboutapp.navigation")}</h3>
            <ul>
              <li><span className="number">1)</span> {t("aboutapp.home")}</li>
              <li><span className="number">2)</span> {t("aboutapp.about")}</li>
              <li><span className="number">3)</span> {t("aboutapp.theme-toggle")}</li>
              <li><span className="number">4)</span> {t("aboutapp.profile-page")}</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>{t("aboutapp.authentication")}</h3>
            <ul>
              <li><span className="number">5)</span> {t("aboutapp.login")}</li>
              <li><span className="number">6)</span> {t("aboutapp.sign-up")}</li>
              
              <li><span className="number">7)</span> {t("aboutapp.open-close-sidebar")}</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>{t("aboutapp.learning-tools")}</h3>
            <ul>
              <li><span className="number">8)</span> {t("aboutapp.lessons")}</li>
              <li><span className="number">9)</span> {t("aboutapp.dictionary")}</li>
              <li><span className="number">10-13)</span> {t("aboutapp.subject-dictionaries")}</li>
              <li><span className="number">14)</span> {t("aboutapp.tests")}</li>
              <li><span className="number">15-17)</span> {t("aboutapp.subject-tests")}</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>{t("aboutapp.user-settings")}</h3>
            <ul>
              <li><span className="number">18)</span> {t("aboutapp.account-management")}</li>
              <li><span className="number">19)</span> {t("aboutapp.profile")}</li>
              <li><span className="number">20)</span> {t("aboutapp.settings")}</li>
              <li><span className="number">21)</span> {t("aboutapp.sign-out")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="authors-section">
        <h2>{t("aboutapp.authors")}</h2>
        <p>{t("aboutapp.created-by")}</p>
        <p>{t("aboutapp.group")}</p>
        <img src={Authors} className="authors-image" alt="Project authors" />
      </div>
    </div>
  );
}

export default AboutApp;