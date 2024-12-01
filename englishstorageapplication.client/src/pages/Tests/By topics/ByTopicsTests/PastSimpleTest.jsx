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
            <h1>Past Simple Test</h1>
            
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

export default PastSimpleTest;
