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
        } else {
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
            <h1>Future Simple Test</h1>
            
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

export default FutureSimpleTest;
