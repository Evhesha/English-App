import TestTemplate from "../../TestTemplate";

const questions = [
    {
        id: 1,
        type: 'choice',
        question: 'Which sentence uses the correct form of "affect" and "effect"?',
        options: ['The weather will effect my plans.', 'The weather will affect my plans.', 'The weather will affects my plans.', 'The weather will effected my plans.'],
        correctAnswer: 'The weather will affect my plans.'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "If I ____ (know) the answer, I would tell you."',
        correctAnswer: 'knew'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which sentence uses the correct form of "their, there, they\'re"?',
        options: ['There going to the park.', 'They\'re going to the park.', 'Their going to the park.', 'Their\'re going to the park.'],
        correctAnswer: 'They\'re going to the park.'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "She ____ (be) working here for five years next month."',
        correctAnswer: 'will have been'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct form of the verb: "By the time she arrives, we ____ (finish) our homework."',
        options: ['will have finished', 'will finish', 'finish', 'are finishing'],
        correctAnswer: 'will have finished'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the passive voice form of: "They will deliver the package tomorrow."?',
        correctAnswer: 'The package will be delivered tomorrow.'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is a compound noun?',
        options: ['toothbrush', 'quickly', 'beautiful', 'run'],
        correctAnswer: 'toothbrush'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "He ____ (finish) the project by the end of this week."',
        correctAnswer: 'will have finished'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['She have completed her work.', 'She has completed her work.', 'She has complete her work.', 'She have complete her work.'],
        correctAnswer: 'She has completed her work.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the past participle of "to see"?',
        correctAnswer: 'seen'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct conjunction: "She is intelligent ____ hardworking."',
        options: ['but', 'or', 'and', 'nor'],
        correctAnswer: 'and'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "If he ____ (study) harder, he would have passed the exam."',
        correctAnswer: 'had studied'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is a synonym for "begin"?',
        options: ['end', 'start', 'stop', 'finish'],
        correctAnswer: 'start'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She was ____ (choose) to represent the company at the conference."',
        correctAnswer: 'chosen'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Choose the correct relative pronoun: "The book ____ I borrowed from you is excellent."',
        options: ['who', 'whom', 'which', 'whose'],
        correctAnswer: 'which'
    },
    {
        id: 16,
        type: 'input',
        question: 'Fill in the blank: "She ____ (complete) the report by the end of the day."',
        correctAnswer: 'will have completed'
    },
    {
        id: 17,
        type: 'choice',
        question: 'Which sentence is in the present perfect continuous tense?',
        options: ['I have been working here for five years.', 'I had been working here for five years.', 'I will have been working here for five years.', 'I am working here for five years.'],
        correctAnswer: 'I have been working here for five years.'
    },
    {
        id: 18,
        type: 'input',
        question: 'Fill in the blank: "They ____ (build) a new house by the end of the year."',
        correctAnswer: 'will have built'
    }
];

function B2Test() {
    return <TestTemplate testName="B2 level Test" questions={questions} />
}

export default B2Test;
