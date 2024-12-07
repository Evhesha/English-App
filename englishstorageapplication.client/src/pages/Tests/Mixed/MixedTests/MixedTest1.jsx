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
        question: 'I ___ breakfast every morning at 8 AM.',
        options: ['have', 'am having', 'had', 'will have'],
        correctAnswer: 'have'
    },
    {
        id: 2,
        type: 'input',
        question: 'She ___ (study) for her exam when I called her yesterday.',
        correctAnswer: 'was studying'
    },
    {
        id: 3,
        type: 'choice',
        question: 'By next month, they ___ in this house for 10 years.',
        options: ['will have lived', 'will live', 'have lived', 'lived'],
        correctAnswer: 'will have lived'
    },
    {
        id: 4,
        type: 'input',
        question: 'He ___ (already/finish) his homework when you arrive.',
        correctAnswer: 'will have already finished'
    },
    {
        id: 5,
        type: 'choice',
        question: 'How long ___ you ___ English?',
        options: ['have been learning', 'are learning', 'learn', 'will learn'],
        correctAnswer: 'have been learning'
    },
    {
        id: 6,
        type: 'input',
        question: 'They ___ (live) in Paris since 2010.',
        correctAnswer: 'have lived'
    },
    {
        id: 7,
        type: 'choice',
        question: 'The train ___ by the time we reach the station.',
        options: ['will have left', 'leaves', 'has left', 'left'],
        correctAnswer: 'will have left'
    },
    {
        id: 8,
        type: 'input',
        question: 'When I arrived home, she ___ (cook) dinner.',
        correctAnswer: 'was cooking'
    },
    {
        id: 9,
        type: 'choice',
        question: 'I ___ to the gym three times this week.',
        options: ['have been', 'went', 'am going', 'will go'],
        correctAnswer: 'have been'
    },
    {
        id: 10,
        type: 'input',
        question: 'By 2025, I ___ (complete) my PhD.',
        correctAnswer: 'will have completed'
    },
    {
        id: 11,
        type: 'choice',
        question: 'She ___ tennis every Saturday morning.',
        options: ['plays', 'is playing', 'has played', 'will play'],
        correctAnswer: 'plays'
    },
    {
        id: 12,
        type: 'input',
        question: 'They ___ (wait) for more than two hours when the bus finally came.',
        correctAnswer: 'had been waiting'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Look at those clouds! It ___ soon.',
        options: ['is going to rain', 'rains', 'has rained', 'rained'],
        correctAnswer: 'is going to rain'
    },
    {
        id: 14,
        type: 'input',
        question: 'The scientists ___ (research) this phenomenon for the past decade.',
        correctAnswer: 'have been researching'
    },
    {
        id: 15,
        type: 'choice',
        question: 'By the time you read this message, I ___ home.',
        options: ['will have arrived', 'arrive', 'am arriving', 'arrived'],
        correctAnswer: 'will have arrived'
    }
];

function MixedTensesTest() {
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
            <h1>Mixed English Tenses Test</h1>
            
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

export default MixedTensesTest;