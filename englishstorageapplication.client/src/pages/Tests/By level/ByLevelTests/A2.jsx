import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'What is the past participle of the verb "to write"?',
        options: ['wrote', 'written', 'writing', 'write'],
        correctAnswer: 'written'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "He has ____ (finish) his project."',
        correctAnswer: 'finished'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which sentence uses the correct form of "there, their, they\'re"?',
        options: [, 'There going to the store.', 'They\'re going to the store.', 'Their going to the store.'],
        correctAnswer: 'They\'re going to the store.'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "She ____ (have) already eaten."',
        correctAnswer: 'has'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct preposition: "The keys are ____ the table."',
        options: ['on', 'in', 'under', 'beside'],
        correctAnswer: 'on'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the comparative form of "good"?',
        correctAnswer: 'better'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is a noun?',
        options: ['Quickly', 'Running', 'Happiness', 'Beautiful'],
        correctAnswer: 'Happiness'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "They ____ (travel) to France next summer."',
        correctAnswer: 'will travel'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['He don\'t like ice cream.', 'He doesn\'t like ice cream.', 'He not like ice cream.', 'He doesn\'t liking ice cream.'],
        correctAnswer: 'He doesn\'t like ice cream.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the past tense of "to teach"?',
        correctAnswer: 'taught'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct article: "____ best way to learn is practice."',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 'The'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He ____ (live) in New York for ten years."',
        correctAnswer: 'has lived'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is an adverb?',
        options: ['Quick', 'Quickly', 'Quicker', 'Quickest'],
        correctAnswer: 'Quickly'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She is ____ (run) every day."',
        correctAnswer: 'running'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Choose the correct relative pronoun: "The book ____ you lent me is fascinating."',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'which'
    },
    
    {
        id: 16,
        type: 'input',
        question: 'Fill in the blank: "She ____ (visit) her grandparents this weekend."',
        correctAnswer: 'will visit'
    },
    {
        id: 17,
        type: 'choice',
        question: 'Which sentence is in the present perfect tense?',
        options: ['I have seen that movie.', 'I saw that movie.', 'I will see that movie.', 'I am seeing that movie.'],
        correctAnswer: 'I have seen that movie.'
    },
    {
        id: 18,
        type: 'input',
        question: 'Fill in the blank: "They ____ (build) a new house."',
        correctAnswer: 'are building'
    },
];

function A2Test() {
    return <TestTemplate testName="A2 level Test" questions={questions} />
}

export default A2Test;
