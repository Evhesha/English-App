import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";

const timeTestConfig = [
    {
        id: "time-001",
        name: "Present Simple Test",
        path: "/test/time/present-simple-test",
        fileName: "present_simple",
        icon: "⏱️",
        description: "Test your knowledge of Present Simple tense",
        category: "Present Tenses"
    },
    {
        id: "time-002",
        name: "Present Continuous Test",
        path: "/test/time/present-continuous-test",
        fileName: "present_continuous",
        icon: "🔄",
        description: "Practice Present Continuous tense",
        category: "Present Tenses"
    },
    {
        id: "time-003",
        name: "Present Perfect Test",
        path: "/test/time/present-perfect-test",
        fileName: "present_perfect",
        icon: "✅",
        description: "Master the Present Perfect tense",
        category: "Present Tenses"
    },
    {
        id: "time-004",
        name: "Present Perfect Continuous Test",
        path: "/test/time/present-perfect-continuous-test",
        fileName: "present_perfect_continuous",
        icon: "⏳",
        description: "Test Present Perfect Continuous usage",
        category: "Present Tenses"
    },
    {
        id: "time-005",
        name: "Past Simple Test",
        path: "/test/time/past-simple-test",
        fileName: "past_simple",
        icon: "📅",
        description: "Practice Past Simple tense",
        category: "Past Tenses"
    },
    {
        id: "time-006",
        name: "Past Continuous Test",
        path: "/test/time/past-continuous-test",
        fileName: "past_continuous",
        icon: "↩️",
        description: "Test Past Continuous tense knowledge",
        category: "Past Tenses"
    },
    {
        id: "time-007",
        name: "Past Perfect Test",
        path: "/test/time/past-perfect-test",
        fileName: "past_perfect",
        icon: "⏪",
        description: "Master the Past Perfect tense",
        category: "Past Tenses"
    },
    {
        id: "time-008",
        name: "Past Perfect Continuous Test",
        path: "/test/time/past-perfect-continuous-test",
        fileName: "past_perfect_continuous",
        icon: "🕐",
        description: "Practice Past Perfect Continuous",
        category: "Past Tenses"
    },
    {
        id: "time-009",
        name: "Future Simple Test",
        path: "/test/time/future-simple-test",
        fileName: "future_simple",
        icon: "🚀",
        description: "Test Future Simple (will) tense",
        category: "Future Tenses"
    },
    {
        id: "time-010",
        name: "Future Continuous Test",
        path: "/test/time/future-continuous-test",
        fileName: "future_continuous",
        icon: "🔮",
        description: "Practice Future Continuous tense",
        category: "Future Tenses"
    },
    {
        id: "time-011",
        name: "Future Perfect Test",
        path: "/test/time/future-perfect-test",
        fileName: "future_perfect",
        icon: "🎯",
        description: "Master Future Perfect tense",
        category: "Future Tenses"
    },
    {
        id: "time-012",
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