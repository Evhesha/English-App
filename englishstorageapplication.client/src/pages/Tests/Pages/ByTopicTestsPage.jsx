import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";

const testConfig = [
    {
        id: "34567890-1678-9012-def0-123456789abc",
        topic: "articles",
        name: "Articles Test",
        path: "/test/topic/articles-test",
        icon: "📚",
        description: "Test knowledge of articles: a, an, the and zero article",
    },
    {
        id: "45678901-2789-0123-ef01-23456789abcd",
        topic: "prepositions",
        name: "Prepositions Test",
        path: "/test/topic/prepositions-test",
        icon: "📍",
        description: "Test prepositions of time, place and movement",
    },
    {
        id: "56789012-3890-1234-f012-3456789abcde",
        topic: "pronouns",
        name: "Pronouns Test",
        path: "/test/topic/pronouns-test",
        icon: "👤",
        description: "Test personal, possessive and reflexive pronouns",
    },
    {
        id: "67890123-4901-2345-0123-456789abcdef",
        topic: "nouns",
        name: "Nouns Test",
        path: "/test/topic/nouns-test",
        icon: "📖",
        description: "Test countable/uncountable nouns",
    },
    {
        id: "78901234-5012-3456-1234-56789abcdef0",
        topic: "adjectives",
        name: "Adjectives Test",
        path: "/test/topic/adjectives-test",
        icon: "🎨",
        description: "Test degrees of comparison of adjectives",
    },
    {
        id: "89012345-6123-4567-2345-6789abcdef01",
        topic: "adverbs",
        name: "Adverbs Test",
        path: "/test/topic/adverbs-test",
        icon: "⏱️",
        description: "Test adverbs of manner, time and place",
    },
    {
        id: "90123456-7234-5678-3456-789abcdef012",
        topic: "modal-verbs",
        name: "Modal Verbs Test",
        path: "/test/topic/modal-verbs-test",
        icon: "🔧",
        description: "Test can, could, may, might, must, should, would",
    },
    {
        id: "01234567-8345-6789-4567-89abcdef0123",
        topic: "conditionals",
        name: "Conditionals Test",
        path: "/test/topic/conditionals-test",
        icon: "🔄",
        description: "Test Conditionals: 0, 1, 2, 3 types",
    },
    {
        id: "12345678-9456-7890-5678-9abcdef01234",
        topic: "passive-voice",
        name: "Passive Voice Test",
        path: "/test/topic/passive-voice-test",
        icon: "🎭",
        description: "Test Passive Voice in different tenses",
    },
    {
        id: "23456789-0567-8901-6789-0abcdef01234",
        topic: "reported-speech",
        name: "Reported Speech Test",
        path: "/test/topic/reported-speech-test",
        icon: "🗣️",
        description: "Test Reported Speech with tense changes",
    },
    {
        id: "34567890-1678-9012-7890-abcdef012345",
        topic: "relative-pronouns",
        name: "Relative Pronouns Test",
        path: "/test/topic/relative-pronouns-test",
        icon: "🔗",
        description: "Test who, which, that, whose, whom",
    },
    {
        id: "45678901-2789-0123-8901-bcdef0123456",
        topic: "gerund-infinitive",
        name: "Gerund and Infinitive Test",
        path: "/test/topic/gerund-infinitive-test",
        icon: "∞",
        description: "Test Gerund vs Infinitive after verbs",
    },
    {
        id: "56789012-3890-1234-9012-cdef01234567",
        topic: "phrasal-verbs",
        name: "Phrasal Verbs Test",
        path: "/test/topic/phrasal-verbs-test",
        icon: "💬",
        description: "Test common phrasal verbs",
    },
    {
        id: "67890123-4901-2345-0123-def012345678",
        topic: "conjunctions",
        name: "Conjunctions Test",
        path: "/test/topic/conjunctions-test",
        icon: "➕",
        description: "Test conjunctions and, but, or, so, because, although",
    }
];

function ByTopicTestsPage() {
    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Grammar Topics Tests</h1>
            <p className="text-center text-muted mb-4">
                Select a grammar topic to test your knowledge
            </p>
            <div className="lessons-grid">
                {testConfig.map((test) => (
                    <TestCardLink key={test.id} test={test} />
                ))}
            </div>
        </div>
    );
}

export default ByTopicTestsPage;