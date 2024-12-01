import { Link } from "react-router-dom";
import "./styles.css"; // Не забудьте добавить импорт стилей

function TestCardLink({ link, text, title, icon }) {
  return (
    <Link to={link} className="lesson-card">
      <div className="lesson-icon">{icon}</div>
      <h3 className="lesson-title">{title}</h3>
      <p className="lesson-description">{text}</p>
      <div className="hover-effect"></div>
    </Link>
  );
}

export default TestCardLink;
