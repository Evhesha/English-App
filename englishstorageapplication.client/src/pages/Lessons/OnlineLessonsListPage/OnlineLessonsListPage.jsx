import { Link } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineLessonsListPage.css';

function OnlineLessonsListPage() {

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Grammar Topics</h1>
            <div className="lessons-grid">
                Online Lessons
                {/*{lessons.map((lesson, index) => (*/}
                {/*    <Link*/}
                {/*        key={index}*/}
                {/*        to={lesson.path}*/}
                {/*        className="lesson-card"*/}
                {/*    >*/}
                {/*        <div className="lesson-icon">{lesson.icon}</div>*/}
                {/*        <h3 className="lesson-title">{lesson.title}</h3>*/}
                {/*        <p className="lesson-description">{lesson.description}</p>*/}
                {/*        <div className="hover-effect"></div>*/}
                {/*    </Link>*/}
                {/*))}*/}
            </div>
        </div>
    );
}

export default OnlineLessonsListPage;