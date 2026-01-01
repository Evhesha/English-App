import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";

const testConfig = [
    {
        id: "articles_test_001",
        topic: "articles",
        name: "Тест по артиклям",
        path: "/test/topic/articles-test",
        icon: "📚",
        description: "Тест на знание артиклей: a, an, the и нулевой артикль",
        jsonFile: "/tests/by-topic/articles.json"
    },
    {
        id: "prepositions_test_001",
        topic: "prepositions",
        name: "Тест по предлогам",
        path: "/test/topic/prepositions-test",
        icon: "📍",
        description: "Тест на предлоги времени, места и движения",
        jsonFile: "/tests/by-topic/prepositions.json"
    },
    {
        id: "pronouns_test_001",
        topic: "pronouns",
        name: "Тест по местоимениям",
        path: "/test/topic/pronouns-test",
        icon: "👤",
        description: "Тест на личные, притяжательные и возвратные местоимения",
        jsonFile: "/tests/by-topic/pronouns.json"
    },
    {
        id: "nouns_test_001",
        topic: "nouns",
        name: "Тест по существительным",
        path: "/test/topic/nouns-test",
        icon: "📖",
        description: "Тест на исчисляемые/неисчисляемые существительные",
        jsonFile: "/tests/by-topic/nouns.json"
    },
    {
        id: "adjectives_test_001",
        topic: "adjectives",
        name: "Тест по прилагательным",
        path: "/test/topic/adjectives-test",
        icon: "🎨",
        description: "Тест на степени сравнения прилагательных",
        jsonFile: "/tests/by-topic/adjectives.json"
    },
    {
        id: "adverbs_test_001",
        topic: "adverbs",
        name: "Тест по наречиям",
        path: "/test/topic/adverbs-test",
        icon: "⏱️",
        description: "Тест на наречия образа действия, времени и места",
        jsonFile: "/tests/by-topic/adverbs.json"
    },
    {
        id: "modal_verbs_test_001",
        topic: "modal-verbs",
        name: "Тест по модальным глаголам",
        path: "/test/topic/modal-verbs-test",
        icon: "🔧",
        description: "Тест на can, could, may, might, must, should, would",
        jsonFile: "/tests/by-topic/modal_verbs.json"
    },
    {
        id: "conditionals_test_001",
        topic: "conditionals",
        name: "Тест по условным предложениям",
        path: "/test/topic/conditionals-test",
        icon: "🔄",
        description: "Тест на Conditionals: 0, 1, 2, 3 тип",
        jsonFile: "/tests/by-topic/conditionals.json"
    },
    {
        id: "passive_voice_test_001",
        topic: "passive-voice",
        name: "Тест по пассивному залогу",
        path: "/test/topic/passive-voice-test",
        icon: "🎭",
        description: "Тест на Passive Voice в разных временах",
        jsonFile: "/tests/by-topic/passive_voice.json"
    },
    {
        id: "reported_speech_test_001",
        topic: "reported-speech",
        name: "Тест по косвенной речи",
        path: "/test/topic/reported-speech-test",
        icon: "🗣️",
        description: "Тест на Reported Speech с изменениями времен",
        jsonFile: "/tests/by-topic/reported_speech.json"
    },
    {
        id: "relative_pronouns_test_001",
        topic: "relative-pronouns",
        name: "Тест по относительным местоимениям",
        path: "/test/topic/relative-pronouns-test",
        icon: "🔗",
        description: "Тест на who, which, that, whose, whom",
        jsonFile: "/tests/by-topic/relative_pronouns.json"
    },
    {
        id: "gerund_infinitive_test_001",
        topic: "gerund-infinitive",
        name: "Тест по герундию и инфинитиву",
        path: "/test/topic/gerund-infinitive-test",
        icon: "∞",
        description: "Тест на Gerund vs Infinitive после глаголов",
        jsonFile: "/tests/by-topic/gerund_infinitive.json"
    },
    {
        id: "phrasal_verbs_test_001",
        topic: "phrasal-verbs",
        name: "Тест по фразовым глаголам",
        path: "/test/topic/phrasal-verbs-test",
        icon: "💬",
        description: "Тест на распространенные фразовые глаголы",
        jsonFile: "/tests/by-topic/phrasal_verbs.json"
    },
    {
        id: "conjunctions_test_001",
        topic: "conjunctions",
        name: "Тест по союзам",
        path: "/test/topic/conjunctions-test",
        icon: "➕",
        description: "Тест на союзы and, but, or, so, because, although",
        jsonFile: "/tests/by-topic/conjunctions.json"
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