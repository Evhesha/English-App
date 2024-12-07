import TestTemplate from '../../TestTemplate';

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'He ___ to work every day.',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 'goes'
    },
    {
        id: 2,
        type: 'input',
        question: 'She ___ (study) English twice a week.',
        correctAnswer: 'studies'
    },
    {
        id: 3,
        type: 'choice',
        question: 'They ___ in London.',
        options: ['lives', 'live', 'living', 'lived'],
        correctAnswer: 'live'
    },
    {
        id: 4,
        type: 'input',
        question: 'The sun ___ (rise) in the east.',
        correctAnswer: 'rises'
    },
    {
        id: 5,
        type: 'choice',
        question: 'We ___ breakfast at 8 AM.',
        options: ['have', 'has', 'having', 'had'],
        correctAnswer: 'have'
    },
    {
        id: 6,
        type: 'input',
        question: 'John ___ (work) at a bank.',
        correctAnswer: 'works'
    },
    {
        id: 7,
        type: 'choice',
        question: 'The shop ___ at 9 AM.',
        options: ['open', 'opens', 'opening', 'opened'],
        correctAnswer: 'opens'
    },
    {
        id: 8,
        type: 'input',
        question: 'My mother ___ (cook) dinner every evening.',
        correctAnswer: 'cooks'
    },
    {
        id: 9,
        type: 'choice',
        question: 'The children ___ to school by bus.',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 'go'
    },
    {
        id: 10,
        type: 'input',
        question: 'He ___ (play) tennis on Sundays.',
        correctAnswer: 'plays'
    },
    {
        id: 11,
        type: 'choice',
        question: 'She ___ coffee in the morning.',
        options: ['drink', 'drinks', 'drinking', 'drank'],
        correctAnswer: 'drinks'
    },
    {
        id: 12,
        type: 'input',
        question: 'The train ___ (leave) at 3 PM.',
        correctAnswer: 'leaves'
    },
    {
        id: 13,
        type: 'choice',
        question: 'My brother ___ in a big company.',
        options: ['work', 'works', 'working', 'worked'],
        correctAnswer: 'works'
    },
    {
        id: 14,
        type: 'input',
        question: 'The cat ___ (sleep) all day.',
        correctAnswer: 'sleeps'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Water ___ at 100 degrees Celsius.',
        options: ['boil', 'boils', 'boiling', 'boiled'],
        correctAnswer: 'boils'
    }
];

function PresentSimpleTest() {
    return <TestTemplate testName="Present Simple Test" questions={questions} />;
}

export default PresentSimpleTest;
