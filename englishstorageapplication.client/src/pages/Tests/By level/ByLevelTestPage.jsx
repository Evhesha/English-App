import { Link } from "react-router-dom";
import "../styles.css";

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

function ByLevelPage() {
  const levels = [
    {
      link: "/A0-test",
      title: "Level A0",
      icon: "🔹",
    },
    {
      link: "/A1-test",
      title: "Level A1",
      icon: "🔸",
    },
    {
      link: "/A2-test",
      title: "Level A2",
      icon: "🔻",
    },
    {
      link: "/B1-test",
      title: "Level B1",
      icon: "🔺",
    },
    {
      link: "/B2-test",
      title: "Level B2",
      icon: "🔲",
    },
    {
      link: "/C1-test",
      title: "Level C1",
      icon: "🔳",
    },
    {
      link: "/C2-test",
      title: "Level C2",
      icon: "🔴",
    },
  ];

  return (
    <div className="lessons-container">
      <h1 className="text-center main-title mb-5">By Level Tests Page</h1>
      <div className="lessons-grid">
        {levels.map((level, index) => (
          <TestCardLink
            key={index}
            link={level.link}
            text={level.title}
            title={level.title}
            icon={level.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ByLevelPage;