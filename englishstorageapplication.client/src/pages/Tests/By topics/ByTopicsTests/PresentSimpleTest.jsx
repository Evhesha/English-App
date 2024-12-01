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
            <h1>Present Simple Test 1</h1>
            
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

export default PresentSimpleTest;
