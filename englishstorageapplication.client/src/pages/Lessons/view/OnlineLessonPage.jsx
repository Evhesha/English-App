import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import DOMPurify from "dompurify";
import PlsAuthorizeBlock from "@/Components/Auth/PlsAuthorizeBlock.jsx";
import "./OnlineLessonPage.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function OnlineLessonPage() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAuthorized = Boolean(Cookies.get("token"));

  useEffect(() => {
    if (!id || !isAuthorized) {
      setIsLoading(false);
      return;
    }

    const fetchLesson = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_BASE_URL}/api/Lessons/lesson/${id}`);
        setLesson(response.data);
      } catch (fetchError) {
        console.error("Failed to load lesson:", fetchError);
        setError("Failed to load lesson. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [id, isAuthorized]);

  if (!isAuthorized) {
    return <PlsAuthorizeBlock />;
  }

  if (isLoading) {
    return (
      <div className="online-lesson-page online-lesson-page--status">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="online-lesson-page online-lesson-page--status">
        <div className="alert alert-danger">{error ?? "Lesson was not found."}</div>
        <Link to="/online-list-lessons-page" className="btn btn-outline-secondary">
          Back to lessons
        </Link>
      </div>
    );
  }

  const renderedLessonText =
    lesson.text && lesson.text.trim().startsWith("<")
      ? DOMPurify.sanitize(lesson.text)
      : DOMPurify.sanitize(`<p>${lesson.text ?? ""}</p>`);

  return (
    <section className="online-lesson-page">
      <div className="online-lesson-page__header">
        <Link to="/online-list-lessons-page" className="btn btn-outline-secondary">
          Back to lessons
        </Link>
        <span className="online-lesson-page__views">
          Views: {lesson.watchCount ?? 0}
        </span>
      </div>

      <article className="online-lesson-page__article">
        <h1 className="online-lesson-page__title">{lesson.title}</h1>
        {lesson.createdDate && (
          <p className="online-lesson-page__date">
            Updated: {new Date(lesson.createdDate).toLocaleDateString("en-CA")}
          </p>
        )}
        <div
          className="online-lesson-page__content"
          dangerouslySetInnerHTML={{ __html: renderedLessonText }}
        />
      </article>
    </section>
  );
}

export default OnlineLessonPage;
