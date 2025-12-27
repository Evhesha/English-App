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
            <h3>{t("aboutapp.side-bar")}</h3>
            <ul>
              <li><span className="number">1)</span> {t("aboutapp.lessons")}</li>
              <li><span className="number">2)</span> {t("aboutapp.dictionary")}</li>
              <li><span className="number">3)</span> {t("aboutapp.tests")}</li>
              <li><span className="number">4)</span> {t("aboutapp.account-management")}</li>
              <li><span className="number">5)</span> {t("aboutapp.assistant")}</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>{t("aboutapp.navbar")}</h3>
            <ul>
              <li><span className="number">6)</span> {t("aboutapp.home")}</li>
              <li><span className="number">7)</span> {t("aboutapp.about")}</li>
              <li><span className="number">8)</span> {t("aboutapp.theme-toggle")}</li>
              <li><span className="number">9)</span> {t("aboutapp.profile-page")}</li>
              <li><span className="number">11)</span> {t("aboutapp.login")}</li>
              <li><span className="number">12)</span> {t("aboutapp.sign-up")}</li>
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