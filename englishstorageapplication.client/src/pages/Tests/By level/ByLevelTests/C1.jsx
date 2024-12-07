import React, { useState } from 'react';
import styles from '../../StyleConstant';
import ProgressBar from '../../ProgressBar';
import Question from '../../Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from '../../Results';

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
    },
    {
        id: 19,
        type: 'choice',
        question: 'Which sentence is a correct usage of a conditional? "If it ____ tomorrow, we will cancel the picnic."',
        options: ['rains', 'rained', 'rain', 'will rain'],
        correctAnswer: 'rains'
    },
    {
        id: 20,
        type: 'input',
        question: 'Fill in the blank: "Despite ____ (be) a challenging project, she completed it on time."',
        correctAnswer: 'being'
    }
];

function C1Test() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [inputAnswer, setInputAnswer] = useState('');
    const [mistakes, setMistakes] = useState([]);

    const handleAnswer = () => {
        const question = questions[currentQuestion];
        let isCorrect = false;
        let userAnswer = '';

        if (question.type === 'choice') {
            userAnswer = userAnswers[currentQuestion];
            isCorrect = userAnswer === question.correctAnswer;
        } else if (question.type === 'input') {
            userAnswer = inputAnswer.toLowerCase().trim();
            isCorrect = userAnswer === question.correctAnswer.toLowerCase();
        }

        if (isCorrect) {
            setScore(score + 1);
        } else {
            setMistakes([...mistakes, {
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.correctAnswer
            }]);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setInputAnswer('');
        } else {
            setShowResults(true);
        }
    };

    const handleSkip = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setInputAnswer('');
        } else {
            setShowResults(true);
        }
    };

    const handleOptionSelect = (option) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: option
        });
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setScore(0);
        setUserAnswers({});
        setShowResults(false);
        setInputAnswer('');
        setMistakes([]);
    };

    return (
        <div className="test-container">
            <style>{styles}</style>
            <h1>C1 English Test</h1>
            
            {showResults ? (
                <Results 
                    score={score}
                    questionsLength={questions.length}
                    mistakes={mistakes}
                    onRetry={handleRetry}
                />
            ) : (
                <>
                    <ProgressBar 
                        currentQuestion={currentQuestion}
                        totalQuestions={questions.length}
                    />
                    <Question 
                        question={questions[currentQuestion]}
                        userAnswers={userAnswers}
                        inputAnswer={inputAnswer}
                        onOptionSelect={handleOptionSelect}
                        onInputChange={setInputAnswer}
                        onAnswer={handleAnswer}
                        onSkip={handleSkip}
                    />
                </>
            )}
        </div>
    );
}

export default C1Test;
