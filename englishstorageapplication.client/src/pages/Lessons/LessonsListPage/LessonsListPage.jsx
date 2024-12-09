import { Link } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LessonsListPage.css';

function LessonsListPage() {
  const lessons = [
    { 
      path: "/present-simple", 
      title: "Present Simple",
      description: "Basic present tense for habits and facts",
      icon: "⏰"
    },
    { 
      path: "/future-simple", 
      title: "Future Simple",
      description: "Expressing future actions and predictions", 
      icon: "🔮"
    },
    { 
      path: "/past-simple", 
      title: "Past Simple",
      description: "Talking about completed past actions",
      icon: "📅"
    },
    { 
      path: "/present-continuous", 
      title: "Present Continuous",
      description: "Ongoing actions in the present",
      icon: "▶️"
    },
    { 
      path: "/past-continuous", 
      title: "Past Continuous",
      description: "Ongoing actions in the past",
      icon: "⏮️"
    },
    { 
      path: "/future-continuous", 
      title: "Future Continuous",
      description: "Ongoing actions in the past",
      icon: "⏭️"
    },
    { 
      path: "/present-perfect", 
      title: "Present Perfect",
      description: "Connecting past to present",
      icon: "🔄"
    },
    { 
      path: "/past-perfect", 
      title: "Past Perfect",
      description: "Ongoing actions in the past",
      icon: "⏪"
    },
    { 
      path: "/future-perfect", 
      title: "Future Perfect",
      description: "Ongoing actions in the past",
      icon: "⏩"
    },
    { 
      path: "/present-perfect-continuous", 
      title: "Present Perfect Continuous",
      description: "Ongoing actions until now",
      icon: "📈"
    },
    { 
      path: "/past-perfect-continuous", 
      title: "Past Perfect Continuous",
      description: "Ongoing actions until now",
      icon: "⏳"
    },
    { 
      path: "/future-perfect-continuous", 
      title: "Future Perfect Continuous",
      description: "Ongoing actions until now",
      icon: "🎯"
    }
    
  ];

  return (
    <div className="lessons-container">
      <h1 className="text-center main-title mb-5">Grammar Topics</h1>
      <div className="lessons-grid">
        {lessons.map((lesson, index) => (
          <Link 
            key={index}
            to={lesson.path} 
            className="lesson-card"
          >
            <div className="lesson-icon">{lesson.icon}</div>
            <h3 className="lesson-title">{lesson.title}</h3>
            <p className="lesson-description">{lesson.description}</p>
            <div className="hover-effect"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LessonsListPage;