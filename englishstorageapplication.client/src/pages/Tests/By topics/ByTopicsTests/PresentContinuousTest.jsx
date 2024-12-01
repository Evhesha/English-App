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
        question: 'He ___ to the store now.',
        options: ['is going', 'are going', 'am going', 'goes'],
        correctAnswer: 'is going'
    },
    {
        id: 2,
        type: 'input',
        question: 'She ___ (read) a book at the moment.',
        correctAnswer: 'is reading'
    },
    {
        id: 3,
        type: 'choice',
        question: 'They ___ a movie now.',
        options: ['is watching', 'are watching', 'am watching', 'watched'],
        correctAnswer: 'are watching'
    },
    {
        id: 4,
        type: 'input',
        question: 'The sun ___ (shine) brightly.',
        correctAnswer: 'is shining'
    },
    {
        id: 5,
        type: 'choice',
        question: 'We ___ dinner at the moment.',
        options: ['is having', 'are having', 'am having', 'had'],
        correctAnswer: 'are having'
    },
    {
        id: 6,
        type: 'input',
        question: 'John ___ (work) on a project right now.',
        correctAnswer: 'is working'
    },
    {
        id: 7,
        type: 'choice',
        question: 'The shop ___ at the moment.',
        options: ['is closing', 'are closing', 'am closing', 'closed'],
        correctAnswer: 'is closing'
    },
    {
        id: 8,
        type: 'input',
        question: 'My mother ___ (cook) dinner now.',
        correctAnswer: 'is cooking'
    },
    {
        id: 9,
        type: 'choice',
        question: 'The children ___ to school right now.',
        options: ['is going', 'are going', 'am going', 'go'],
        correctAnswer: 'are going'
    },
    {
        id: 10,
        type: 'input',
        question: 'He ___ (play) tennis at the moment.',
        correctAnswer: 'is playing'
    },
    {
        id: 11,
        type: 'choice',
        question: 'She ___ coffee right now.',
        options: ['is drinking', 'are drinking', 'am drinking', 'drank'],
        correctAnswer: 'is drinking'
    },
    {
        id: 12,
        type: 'input',
        question: 'The train ___ (arrive) now.',
        correctAnswer: 'is arriving'
    },
    {
        id: 13,
        type: 'choice',
        question: 'My brother ___ in a meeting at the moment.',
        options: ['is working', 'are working', 'am working', 'worked'],
        correctAnswer: 'is working'
    },
    {
        id: 14,
        type: 'input',
        question: 'The cat ___ (sleep) on the couch.',
        correctAnswer: 'is sleeping'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Water ___ at 100 degrees Celsius now.',
        options: ['is boiling', 'are boiling', 'am boiling', 'boiled'],
        correctAnswer: 'is boiling'
    }
];

function PresentContinuousTest() {
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
            <h1>Present Continuous Test</h1>
            
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

export default PresentContinuousTest;
