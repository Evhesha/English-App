import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'If I ___ enough money, I would buy a new car.',
        options: ['had', 'have', 'will have', 'would have'],
        correctAnswer: 'had'
    },
    {
        id: 2,
        type: 'input',
        question: 'She asked me where I ___ (live).',
        correctAnswer: 'lived'
    },
    {
        id: 3,
        type: 'choice',
        question: 'The book ___ by millions of people since its publication.',
        options: ['has been read', 'was read', 'is read', 'reads'],
        correctAnswer: 'has been read'
    },
    {
        id: 4,
        type: 'input',
        question: 'I wish I ___ (can) speak Chinese.',
        correctAnswer: 'could'
    },
    {
        id: 5,
        type: 'choice',
        question: '___ you mind opening the window?',
        options: ['Would', 'Will', 'Do', 'Are'],
        correctAnswer: 'Would'
    },
    {
        id: 6,
        type: 'input',
        question: 'The house ___ (build) last year by a local company.',
        correctAnswer: 'was built'
    },
    {
        id: 7,
        type: 'choice',
        question: 'He suggested that we ___ to the party.',
        options: ['go', 'went', 'going', 'goes'],
        correctAnswer: 'go'
    },
    {
        id: 8,
        type: 'input',
        question: 'Unless it ___ (rain), we will go to the beach.',
        correctAnswer: 'rains'
    },
    {
        id: 9,
        type: 'choice',
        question: 'The more you practice, ___ you will become.',
        options: ['the better', 'better', 'the best', 'good'],
        correctAnswer: 'the better'
    },
    {
        id: 10,
        type: 'input',
        question: 'Not only ___ (be) she beautiful, but also intelligent.',
        correctAnswer: 'is'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Despite ___ ill, she went to work.',
        options: ['being', 'was', 'is', 'be'],
        correctAnswer: 'being'
    },
    {
        id: 12,
        type: 'input',
        question: "It's time we ___ (leave) for the airport.",
        correctAnswer: 'left'
    },
    {
        id: 13,
        type: 'choice',
        question: 'No sooner ___ home than the phone rang.',
        options: ['had I got', 'I got', 'have I got', 'I had got'],
        correctAnswer: 'had I got'
    },
    {
        id: 14,
        type: 'input',
        question: "I'd rather you ___ (not/smoke) here.",
        correctAnswer: 'didn\'t smoke'
    },
    {
        id: 15,
        type: 'choice',
        question: 'He acted as if he ___ the owner.',
        options: ['were', 'was', 'is', 'will be'],
        correctAnswer: 'were'
    }
];

function MixedGrammarTest() {
    return <TestTemplate testName="Mixed Test2" questions={questions} />
}

export default MixedGrammarTest;