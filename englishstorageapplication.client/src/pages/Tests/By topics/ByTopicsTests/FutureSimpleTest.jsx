import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'He ___ to the store tomorrow.',
        options: ['will go', 'will goes', 'will going', 'went'],
        correctAnswer: 'will go'
    },
    {
        id: 2,
        type: 'input',
        question: 'She ___ (visit) her grandmother next weekend.',
        correctAnswer: 'will visit'
    },
    {
        id: 3,
        type: 'choice',
        question: 'They ___ a movie tonight.',
        options: ['will watch', 'will watches', 'will watching', 'watched'],
        correctAnswer: 'will watch'
    },
    {
        id: 4,
        type: 'input',
        question: 'The sun ___ (set) at 6 PM tomorrow.',
        correctAnswer: 'will set'
    },
    {
        id: 5,
        type: 'choice',
        question: 'We ___ dinner at 7 PM.',
        options: ['will have', 'will has', 'will having', 'had'],
        correctAnswer: 'will have'
    },
    {
        id: 6,
        type: 'input',
        question: 'John ___ (work) late tonight.',
        correctAnswer: 'will work'
    },
    {
        id: 7,
        type: 'choice',
        question: 'The shop ___ at 8 PM tomorrow.',
        options: ['will close', 'will closes', 'will closing', 'closed'],
        correctAnswer: 'will close'
    },
    {
        id: 8,
        type: 'input',
        question: 'My mother ___ (cook) dinner tomorrow evening.',
        correctAnswer: 'will cook'
    },
    {
        id: 9,
        type: 'choice',
        question: 'The children ___ to school by bus next week.',
        options: ['will go', 'will goes', 'will going', 'went'],
        correctAnswer: 'will go'
    },
    {
        id: 10,
        type: 'input',
        question: 'He ___ (play) tennis on Saturday.',
        correctAnswer: 'will play'
    },
    {
        id: 11,
        type: 'choice',
        question: 'She ___ coffee in the morning.',
        options: ['will drink', 'will drinks', 'will drinking', 'drank'],
        correctAnswer: 'will drink'
    },
    {
        id: 12,
        type: 'input',
        question: 'The train ___ (arrive) at 3 PM tomorrow.',
        correctAnswer: 'will arrive'
    },
    {
        id: 13,
        type: 'choice',
        question: 'My brother ___ in a big company next year.',
        options: ['will work', 'will works', 'will working', 'worked'],
        correctAnswer: 'will work'
    },
    {
        id: 14,
        type: 'input',
        question: 'The cat ___ (sleep) all day tomorrow.',
        correctAnswer: 'will sleep'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Water ___ at 100 degrees Celsius next time we check.',
        options: ['will boil', 'will boils', 'will boiling', 'boiled'],
        correctAnswer: 'will boil'
    }
];

function FutureSimpleTest() {
    return <TestTemplate testName="Future Simple Test" questions={questions} />
}

export default FutureSimpleTest;
