import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";

const testConfig = [
    {
        id: "00000000-0000-0000-0000-000000000000",
        level: "A0",
        name: "A0 Beginner Level Test",
        path: "/A0-test",
        icon: "🔹",
        description: "Basic vocabulary and simple sentences for absolute beginners",
    },
    {
        id: "11111111-1111-1111-1111-111111111111",
        level: "A1",
        name: "A1 Elementary Level Test",
        path: "/A1-test",
        icon: "🔸",
        description: "Everyday expressions and basic phrases",
    },
    {
        id: "22222222-2222-2222-2222-222222222222",
        level: "A2",
        name: "A2 Pre-Intermediate Test",
        path: "/A2-test",
        icon: "🔻",
        description: "Simple direct communication on familiar topics",
    },
    {
        id: "33333333-3333-3333-3333-333333333333",
        level: "B1",
        name: "B1 Intermediate Test",
        path: "/B1-test",
        icon: "🔺",
        description: "Dealing with most situations while traveling",
    },
    {
        id: "44444444-4444-4444-4444-444444444444",
        level: "B2",
        name: "B2 Upper-Intermediate Test",
        path: "/B2-test",
        icon: "🔲",
        description: "Main ideas of complex text on both concrete and abstract topics",
    },
    {
        id: "55555555-5555-5555-5555-555555555555",
        level: "C1",
        name: "C1 Advanced Test",
        path: "/C1-test",
        icon: "🔳",
        description: "Express ideas fluently and spontaneously",
    },
    {
        id: "66666666-6666-6666-6666-666666666666",
        level: "C2",
        name: "C2 Proficiency Test",
        path: "/C2-test",
        icon: "🔴",
        description: "Understand virtually everything read or heard",
    }
];

function ByLevelTestPage() {
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

export default ByLevelTestPage;