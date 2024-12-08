import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'What is the past participle of the verb "to grow"?',
        options: ['grew', 'grown', 'growed', 'growing'],
        correctAnswer: 'grown'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "She has ____ (complete) her assignment."',
        correctAnswer: 'completed'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which sentence uses the correct form of "its, it\'s"?',
        options: ['Its raining outside.', 'It\'s raining outside.', 'Its\' raining outside.', 'It is raining outside.'],
        correctAnswer: 'It\'s raining outside.'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "They ____ (go) to the park every Sunday."',
        correctAnswer: 'go'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct preposition: "She is good ____ playing the piano."',
        options: ['at', 'in', 'on', 'with'],
        correctAnswer: 'at'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the superlative form of "happy"?',
        correctAnswer: 'happiest'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is an adjective?',
        options: ['Running', 'Quickly', 'Beautiful', 'Happily'],
        correctAnswer: 'Beautiful'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "They ____ (prepare) for the exam all week."',
        correctAnswer: 'have been preparing'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['She don\'t like tea.', 'She doesn\'t like tea.', 'She not like tea.', 'She doesn\'t liking tea.'],
        correctAnswer: 'She doesn\'t like tea.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the past tense of "to swim"?',
        correctAnswer: 'swam'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct article: "This is ____ best decision we made."',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'the'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He ____ (work) at this company since 2010."',
        correctAnswer: 'has worked'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is an adverb?',
        options: ['Happy', 'Happily', 'Happiness', 'Happier'],
        correctAnswer: 'Happily'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She ____ (eat) lunch when I called her."',
        correctAnswer: 'was eating'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Choose the correct relative pronoun: "The girl ____ won the prize is my sister."',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'who'
    },
    {
        id: 16,
        type: 'input',
        question: 'Fill in the blank: "She ____ (visit) her grandparents every summer."',
        correctAnswer: 'visits'
    },
    {
        id: 17,
        type: 'choice',
        question: 'Which sentence is in the past perfect tense?',
        options: ['I have finished my homework.', 'I had finished my homework.', 'I will finish my homework.', 'I am finishing my homework.'],
        correctAnswer: 'I had finished my homework.'
    },
    {
        id: 18,
        type: 'input',
        question: 'Fill in the blank: "They ____ (build) a new house by the end of next year."',
        correctAnswer: 'will have built'
    }
];

function B1Test() {
    return <TestTemplate testName="B1 level Test" questions={questions} />
}

export default B1Test;
