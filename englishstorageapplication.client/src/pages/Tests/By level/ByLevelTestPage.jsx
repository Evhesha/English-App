import { Link } from "react-router-dom";
import "../styles.css";

export const testConfig = [
    {
        id: "a0b1c2d3-e4f5-6789-abcd-ef0123456789",
        level: "A0",
        name: "A0 Beginner Level Test",
        path: "/A0", // ИЗМЕНИТЬ на /A0-test
        icon: "🔹",
        description: "Basic vocabulary and simple sentences for absolute beginners",
    },
    {
        id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
        level: "A1",
        name: "A1 Elementary Level Test",
        path: "/A1-test", // ИЗМЕНИТЬ на /A1-test
        icon: "🔸",
        description: "Everyday expressions and basic phrases",
    },
    {
        id: "a3b4c5d6-e7f8-9012-abcd-ef0123456789",
        level: "A2",
        name: "A2 Pre-Intermediate Test",
        path: "/A2-test", // ИЗМЕНИТЬ на /A2-test
        icon: "🔻",
        description: "Simple direct communication on familiar topics",
    },
    {
        id: "b1c2d3e4-f5g6-7890-abcd-ef0123456789",
        level: "B1",
        name: "B1 Intermediate Test",
        path: "/B1-test", // ИЗМЕНИТЬ на /B1-test
        icon: "🔺",
        description: "Dealing with most situations while traveling",
    },
    {
        id: "b2c3d4e5-f6g7-8901-abcd-ef0123456789",
        level: "B2",
        name: "B2 Upper-Intermediate Test",
        path: "/B2-test", // ИЗМЕНИТЬ на /B2-test
        icon: "🔲",
        description: "Main ideas of complex text on both concrete and abstract topics",
    },
    {
        id: "c1d2e3f4-g5h6-7890-abcd-ef0123456789",
        level: "C1",
        name: "C1 Advanced Test",
        path: "/C1-test", // ИЗМЕНИТЬ на /C1-test
        icon: "🔳",
        description: "Express ideas fluently and spontaneously",
    },
    {
        id: "c2d3e4f5-g6h7-9012-abcd-ef0123456789",
        level: "C2",
        name: "C2 Proficiency Test",
        path: "/C2-test", // ИЗМЕНИТЬ на /C2-test
        icon: "🔴",
        description: "Understand virtually everything read or heard",
    }
];

function TestCardLink({ test }) {
    return (
        <Link to={test.path} className="lesson-card">
            <div className="lesson-icon">{test.icon}</div>
            <h3 className="lesson-title">{test.level} Level</h3>
            <p className="lesson-description">{test.description}</p>
            <div className="hover-effect"></div>
        </Link>
    );
}

function ByLevelPage() {
    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Language Level Tests</h1>
            <p className="text-center text-muted mb-4">
                Select your proficiency level to take a test
            </p>
            <div className="lessons-grid">
                {testConfig.map((test) => (
                    <TestCardLink key={test.id} test={test} />
                ))}
            </div>
        </div>
    );
}

export default ByLevelPage;