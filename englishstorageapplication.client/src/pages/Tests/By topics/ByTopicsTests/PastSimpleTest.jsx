import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'He ___ to the store yesterday.',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 'went'
    },
    {
        id: 2,
        type: 'input',
        question: 'She ___ (visit) her grandmother last weekend.',
        correctAnswer: 'visited'
    },
    {
        id: 3,
        type: 'choice',
        question: 'They ___ a movie last night.',
        options: ['watch', 'watches', 'watching', 'watched'],
        correctAnswer: 'watched'
    },
    {
        id: 4,
        type: 'input',
        question: 'The sun ___ (set) at 6 PM yesterday.',
        correctAnswer: 'set'
    },
    {
        id: 5,
        type: 'choice',
        question: 'We ___ dinner at 7 PM.',
        options: ['have', 'has', 'having', 'had'],
        correctAnswer: 'had'
    },
    {
        id: 6,
        type: 'input',
        question: 'John ___ (work) late last night.',
        correctAnswer: 'worked'
    },
    {
        id: 7,
        type: 'choice',
        question: 'The shop ___ at 8 PM.',
        options: ['close', 'closes', 'closing', 'closed'],
        correctAnswer: 'closed'
    },
    {
        id: 8,
        type: 'input',
        question: 'My mother ___ (cook) dinner yesterday evening.',
        correctAnswer: 'cooked'
    },
    {
        id: 9,
        type: 'choice',
        question: 'The children ___ to school by bus last week.',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 'went'
    },
    {
        id: 10,
        type: 'input',
        question: 'He ___ (play) tennis on Saturday.',
        correctAnswer: 'played'
    },
    {
        id: 11,
        type: 'choice',
        question: 'She ___ coffee in the morning.',
        options: ['drink', 'drinks', 'drinking', 'drank'],
        correctAnswer: 'drank'
    },
    {
        id: 12,
        type: 'input',
        question: 'The train ___ (arrive) at 3 PM yesterday.',
        correctAnswer: 'arrived'
    },
    {
        id: 13,
        type: 'choice',
        question: 'My brother ___ in a big company last year.',
        options: ['work', 'works', 'working', 'worked'],
        correctAnswer: 'worked'
    },
    {
        id: 14,
        type: 'input',
        question: 'The cat ___ (sleep) all day yesterday.',
        correctAnswer: 'slept'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Water ___ at 100 degrees Celsius last time we checked.',
        options: ['boil', 'boils', 'boiling', 'boiled'],
        correctAnswer: 'boiled'
    }
];

function PastSimpleTest() {
    return <TestTemplate testName="Past Simple Test" questions={questions} />
}

export default PastSimpleTest;
