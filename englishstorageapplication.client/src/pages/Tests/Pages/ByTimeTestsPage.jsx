import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";

const timeTestConfig = [
    {
        id: "8a2d7f4c-1b3e-4f9a-8c5d-6e7f8a9b0c1d",
        name: "Present Simple Test",
        path: "/test/time/present-simple-test",
        fileName: "present_simple",
        icon: "⏱️",
        description: "Test your knowledge of Present Simple tense",
        category: "Present Tenses"
    },
    {
        id: "9b3e8f5d-2c4f-5a0b-9d6e-7f8a9b0c1d2e",
        name: "Present Continuous Test",
        path: "/test/time/present-continuous-test",
        fileName: "present_continuous",
        icon: "🔄",
        description: "Practice Present Continuous tense",
        category: "Present Tenses"
    },
    {
        id: "a0b1c2d3-e4f5-6789-0123-456789abcdef",
        name: "Present Perfect Test",
        path: "/test/time/present-perfect-test",
        fileName: "present_perfect",
        icon: "✅",
        description: "Master the Present Perfect tense",
        category: "Present Tenses"
    },
    {
        id: "b1c2d3e4-f5a6-7890-1234-56789abcde0f",
        name: "Present Perfect Continuous Test",
        path: "/test/time/present-perfect-continuous-test",
        fileName: "present_perfect_continuous",
        icon: "⏳",
        description: "Test Present Perfect Continuous usage",
        category: "Present Tenses"
    },
    {
        id: "c2d3e4f5-a6b7-8901-2345-6789abcdef01",
        name: "Past Simple Test",
        path: "/test/time/past-simple-test",
        fileName: "past_simple",
        icon: "📅",
        description: "Practice Past Simple tense",
        category: "Past Tenses"
    },
    {
        id: "d3e4f5a6-b7c8-9012-3456-789abcdef012",
        name: "Past Continuous Test",
        path: "/test/time/past-continuous-test",
        fileName: "past_continuous",
        icon: "↩️",
        description: "Test Past Continuous tense knowledge",
        category: "Past Tenses"
    },
    {
        id: "e4f5a6b7-c8d9-0123-4567-89abcdef0123",
        name: "Past Perfect Test",
        path: "/test/time/past-perfect-test",
        fileName: "past_perfect",
        icon: "⏪",
        description: "Master the Past Perfect tense",
        category: "Past Tenses"
    },
    {
        id: "f5a6b7c8-d9e0-1234-5678-9abcdef01234",
        name: "Past Perfect Continuous Test",
        path: "/test/time/past-perfect-continuous-test",
        fileName: "past_perfect_continuous",
        icon: "🕐",
        description: "Practice Past Perfect Continuous",
        category: "Past Tenses"
    },
    {
        id: "0a1b2c3d-4e5f-6789-0abc-def123456789",
        name: "Future Simple Test",
        path: "/test/time/future-simple-test",
        fileName: "future_simple",
        icon: "🚀",
        description: "Test Future Simple (will) tense",
        category: "Future Tenses"
    },
    {
        id: "1b2c3d4e-5f6a-7890-bcde-f1234567890a",
        name: "Future Continuous Test",
        path: "/test/time/future-continuous-test",
        fileName: "future_continuous",
        icon: "🔮",
        description: "Practice Future Continuous tense",
        category: "Future Tenses"
    },
    {
        id: "2c3d4e5f-6a7b-8901-cdef-234567890ab1",
        name: "Future Perfect Test",
        path: "/test/time/future-perfect-test",
        fileName: "future_perfect",
        icon: "🎯",
        description: "Master Future Perfect tense",
        category: "Future Tenses"
    },
    {
        id: "3d4e5f6a-7b8c-9012-def3-4567890abc12",
        name: "Future Perfect Continuous Test",
        path: "/test/time/future-perfect-continuous-test",
        fileName: "future_perfect_continuous",
        icon: "⏭️",
        description: "Test Future Perfect Continuous",
        category: "Future Tenses"
    }
];

function ByTimeTestsPage() {
    const testsByCategory = timeTestConfig.reduce((acc, test) => {
        if (!acc[test.category]) {
            acc[test.category] = [];
        }
        acc[test.category].push(test);
        return acc;
    }, {});

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">English Tenses Tests</h1>
            <p className="text-center text-muted mb-5">
                Practice all 12 English tenses with our comprehensive tests
            </p>

            {Object.entries(testsByCategory).map(([category, tests]) => (
                <div key={category} className="mb-5">
                    <h2 className="category-title mb-3">{category}</h2>
                    <div className="lessons-grid">
                        {tests.map((test) => (
                            <TestCardLink key={test.id} test={test} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ByTimeTestsPage;