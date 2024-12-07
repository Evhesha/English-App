import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'Which form of the verb is correct: "She ____ to the store yesterday."?',
        options: ['go', 'went', 'gone', 'going'],
        correctAnswer: 'went'
    },
    {
        id: 2,
        type: 'input',
        question: 'What is the past participle of the verb "to eat"?',
        correctAnswer: 'eaten'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Choose the correct article: "I saw ____ cat in the garden."',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'a'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "She has been ___ (study) for hours."',
        correctAnswer: 'studying'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['He don\'t like apples.', 'He doesn\'t like apples.', 'He not like apples.', 'He doesn\'t likes apples.'],
        correctAnswer: 'He doesn\'t like apples.'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the comparative form of "happy"?',
        correctAnswer: 'happier'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which word is an adverb?',
        options: ['quick', 'quickly', 'quicker', 'quickest'],
        correctAnswer: 'quickly'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank with the correct preposition: "She is interested ___ science."',
        correctAnswer: 'in'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence uses the correct form of "there, their, they\'re"?',
        options: ['There going to the park.', 'Their going to the park.', 'They\'re going to the park.', 'Their going to the park.'],
        correctAnswer: 'They\'re going to the park.'
    },
    {
        id: 10,
        type: 'input',
        question: 'Fill in the blank: "I have never ___ (be) to Paris."',
        correctAnswer: 'been'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct relative pronoun: "The book ____ you gave me was fascinating."',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'which'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He is taller ___ me."',
        correctAnswer: 'than'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which form is correct: "I have seen that movie ____ times."',
        options: ['many', 'much', 'a lot', 'some'],
        correctAnswer: 'many'
    },
    {
        id: 14,
        type: 'input',
        question: 'What is the superlative form of "good"?',
        correctAnswer: 'best'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Choose the correct verb tense: "By next year, I ____ my degree."',
        options: ['will complete', 'will have completed', 'complete', 'am completing'],
        correctAnswer: 'will have completed'
    }
];

function MixedGrammarTest() {
    return <TestTemplate testName="Mixed Test3" questions={questions} />
}

export default MixedGrammarTest;
