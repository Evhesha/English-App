import { Link } from "react-router-dom";
import "../styles.css"; // Не забудьте добавить импорт стилей

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

function ByTopicsPage() {
  const topics = [
    {
      link: "/present-simple-test",
      title: "Present simple",
      icon: "⏰",
    },
    {
      link: "/past-simple-test",
      title: "Past simple",
      icon: "📅",
    },
    {
      link: "/future-simple-test",
      title: "Future simple",
      icon: "🔮",
    },
    {
      link: "/present-continuous-test",
      title: "Present continuous",
      icon: "▶️",
    },
  ];

  return (
    <div className="lessons-container">
      <h1 className="text-center main-title mb-5">By Topics Tests Page</h1>
      <div className="lessons-grid">
        {topics.map((topic, index) => (
          <TestCardLink
            key={index}
            link={topic.link}
            text={topic.text}
            title={topic.title}
            icon={topic.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ByTopicsPage;
