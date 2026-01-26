import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";

const testConfig = [
    {
        id: "6a7b8c9d-0a1b-2c3d-4e5f-6a7b8c9d0a1b",
        topic: "articles",
        name: "Articles Test",
        path: "/test/topic/articles-test",
        icon: "📚",
        description: "Test knowledge of articles: a, an, the and zero article",
    },
    {
        id: "3d4e5f6a-7b8c-9d0a-1b2c-3d4e5f6a7b8c",
        topic: "prepositions",
        name: "Prepositions Test",
        path: "/test/topic/prepositions-test",
        icon: "📍",
        description: "Test prepositions of time, place and movement",
    },
    {
        id: "4e5f6a7b-8c9d-0a1b-2c3d-4e5f6a7b8c9d",
        topic: "pronouns",
        name: "Pronouns Test",
        path: "/test/topic/pronouns-test",
        icon: "👤",
        description: "Test personal, possessive and reflexive pronouns",
    },
    {
        id: "7b8c9d0a-1b2c-3d4e-5f6a-7b8c9d0a1b2c",
        topic: "nouns",
        name: "Nouns Test",
        path: "/test/topic/nouns-test",
        icon: "📖",
        description: "Test countable/uncountable nouns",
    },
    {
        id: "4e5f6a7b-8c9d-0a1b-2c3d-4e5f6a7b8c9d",
        topic: "adjectives",
        name: "Adjectives Test",
        path: "/test/topic/adjectives-test",
        icon: "🎨",
        description: "Test degrees of comparison of adjectives",
    },
    {
        id: "5f6a7b8c-9d0a-1b2c-3d4e-5f6a7b8c9d0a",
        topic: "adverbs",
        name: "Adverbs Test",
        path: "/test/topic/adverbs-test",
        icon: "⏱️",
        description: "Test adverbs of manner, time and place",
    },
    {
        id: "0a1b2c3d-4e5f-6a7b-8c9d-0a1b2c3d4e5f",
        topic: "modal-verbs",
        name: "Modal Verbs Test",
        path: "/test/topic/modal-verbs-test",
        icon: "🔧",
        description: "Test can, could, may, might, must, should, would",
    },
    {
        id: "7b8c9d0a-1b2c-3d4e-5f6a-7b8c9d0a1b2c",
        topic: "conditionals",
        name: "Conditionals Test",
        path: "/test/topic/conditionals-test",
        icon: "🔄",
        description: "Test Conditionals: 0, 1, 2, 3 types",
    },
    {
        id: "1b2c3d4e-5f6a-7b8c-9d0a-1b2c3d4e5f6a",
        topic: "passive-voice",
        name: "Passive Voice Test",
        path: "/test/topic/passive-voice-test",
        icon: "🎭",
        description: "Test Passive Voice in different tenses",
    },
    {
        id: "6a7b8c9d-0a1b-2c3d-4e5f-6a7b8c9d0a1b",
        topic: "reported-speech",
        name: "Reported Speech Test",
        path: "/test/topic/reported-speech-test",
        icon: "🗣️",
        description: "Test Reported Speech with tense changes",
    },
    {
        id: "5f6a7b8c-9d0a-1b2c-3d4e-5f6a7b8c9d0a",
        topic: "relative-pronouns",
        name: "Relative Pronouns Test",
        path: "/test/topic/relative-pronouns-test",
        icon: "🔗",
        description: "Test who, which, that, whose, whom",
    },
    {
        id: "9d0a1b2c-3d4e-5f6a-7b8c-9d0a1b2c3d4e",
        topic: "gerund-infinitive",
        name: "Gerund and Infinitive Test",
        path: "/test/topic/gerund-infinitive-test",
        icon: "∞",
        description: "Test Gerund vs Infinitive after verbs",
    },
    {
        id: "2c3d4e5f-6a7b-8c9d-0a1b-2c3d4e5f6a7b",
        topic: "phrasal-verbs",
        name: "Phrasal Verbs Test",
        path: "/test/topic/phrasal-verbs-test",
        icon: "💬",
        description: "Test common phrasal verbs",
    },
    {
        id: "7b8c9d0a-1b2c-3d4e-5f6a-7b8c9d0a1b2c",
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