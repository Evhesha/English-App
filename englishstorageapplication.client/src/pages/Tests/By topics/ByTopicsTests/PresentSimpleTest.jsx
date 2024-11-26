import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const getResultMessage = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage === 100) {
        return {
            emoji: '🏆',
            title: 'Perfect Score!',
            message: 'Congratulations! You are a Present Simple master!'
        };
    } else if (percentage >= 80) {
        return {
            emoji: '🌟',
            title: 'Excellent!',
            message: 'Great job! You have a strong understanding of Present Simple!'
        };
    } else if (percentage >= 60) {
        return {
            emoji: '👍',
            title: 'Good Job!',
            message: 'You\'re doing well, but there\'s still room for improvement.'
        };
    } else if (percentage >= 40) {
        return {
            emoji: '📚',
            title: 'Keep Learning!',
            message: 'You\'re on the right track. Keep practicing!'
        };
    } else {
        return {
            emoji: '💪',
            title: 'Don\'t Give Up!',
            message: 'Present Simple needs more practice. You can do it!'
        };
    }
};

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

const styles = `
    .test-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    .progress-bar {
        background-color: #e0e0e0;
        border-radius: 2px;
        margin: 20px 0;
    }
    .progress {
        background-color: #007bff;
        height: 10px;
        border-radius: 2px;
        transition: width 0.3s;
    }
    .question-container {
        margin: 20px 0;
    }
    .question {
        font-size: 1.5em;
    }
    .options, .buttons {
        margin-top: 10px;
    }
    .option {
        background: #f8f9fa;
        border: 1px solid #ced4da;
        padding: 10px;
        margin: 5px 0;
        cursor: pointer;
        border-radius: 5px;
    }
    .option.selected {
        background: #007bff;
        color: white;
    }
    .input-answer {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        font-size: 1em;
        border: 1px solid #ced4da;
        border-radius: 5px;
    }
    .answer-btn, .skip-btn, .retry-btn {
        padding: 10px 20px;
        margin: 5px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .answer-btn {
        background-color: #28a745;
        color: white;
    }
    .skip-btn {
        background-color: #ffc107;
        color: white;
    }
    .retry-btn {
        background-color: #007bff;
        color: white;
    }
    .results {
        text-align: center;
    }
    .result-emoji {
        font-size: 3em;
    }
    .result-title {
        font-size: 2em;
        margin: 10px 0;
    }
    .result-message {
        font-size: 1.2em;
        margin: 10px 0;
    }
    .score-container {
        margin: 20px 0;
    }
    .percentage {
        font-size: 3em;
    }
    .score-details {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 20px 0;
    }
    .score-item {
        text-align: center;
    }
    .score-label {
        font-size: 1em;
    }
    .score-value {
        font-size: 1.5em;
        font-weight: bold;
    }
    .mistakes-analysis {
        text-align: left;
        margin: 20px 0;
    }
    .mistake-item {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        animation: fadeIn 0.5s ease-in-out;
    }
    .mistake-item p {
        margin: 0;
    }
    .mistake-question {
        font-weight: bold;
    }
    .mistake-details span {
        color: #dc3545;
        font-weight: bold;
    }
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;

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

function ProgressBar({ currentQuestion, totalQuestions }) {
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            ></div>
        </div>
    );
}

function Question({ 
    question, 
    userAnswers, 
    inputAnswer, 
    onOptionSelect, 
    onInputChange,
    onAnswer,
    onSkip 
}) {
    return (
        <div className="question-container">
            <div className="question">{question.question}</div>

            {question.type === 'choice' ? (
                <div className="options">
                    {question.options.map((option, index) => (
                        <div
                            key={index}
                            className={`option ${userAnswers[question.id - 1] === option ? 'selected' : ''}`}
                            onClick={() => onOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            ) : (
                <input
                    type="text"
                    className="input-answer"
                    value={inputAnswer}
                    onChange={(e) => onInputChange(e.target.value)}
                    placeholder="Type your answer here"
                />
            )}

            <div className="buttons">
                <button className="answer-btn" onClick={onAnswer}>
                    Answer
                </button>
                <button className="skip-btn" onClick={onSkip}>
                    Skip
                </button>
            </div>
        </div>
    );
}

function Results({ score, questionsLength, mistakes, onRetry }) {
    const getMistakeAnalysis = () => {
        if (mistakes.length === 0) {
            return (
                <div className="no-mistakes">
                    <p>Congratulations! You made no mistakes! 🎉</p>
                </div>
            );
        }

        return (
            <div className="mistakes-analysis">
                <h3>Mistakes Analysis</h3>
                <div className="mistakes-list">
                    {mistakes.map((mistake, index) => (
                        <div key={index} className="mistake-item">
                            <p className="mistake-question">{mistake.question}</p>
                            <div className="mistake-details">
                                <p className="wrong-answer">
                                    Your answer: <span>{mistake.userAnswer || '(skipped)'}</span>
                                </p>
                                <p className="correct-answer">
                                    Correct answer: <span>{mistake.correctAnswer}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const resultMessage = getResultMessage(score, questionsLength);

    return (
        <div className="results">
            <div className="result-emoji">{resultMessage.emoji}</div>
            <h2 className="result-title">{resultMessage.title}</h2>
            <p className="result-message">{resultMessage.message}</p>

            <div className="score-container">
                <div className="percentage">
                    {((score / questionsLength) * 100).toFixed(1)}%
                </div>
            </div>

            <div className="score-details">
                <div className="score-item">
                    <div className="score-label">Correct</div>
                    <div className="score-value">{score}</div>
                </div>
                <div className="score-item">
                    <div className="score-label">Questions</div>
                    <div className="score-value">{questionsLength}</div>
                </div>
                <div className="score-item">
                    <div className="score-label">Incorrect</div>
                    <div className="score-value">{questionsLength - score}</div>
                </div>
            </div>

            {getMistakeAnalysis()}

            <button className="retry-btn" onClick={onRetry}>
                Try Again 🔄
            </button>
        </div>
    );
}

export default PresentSimpleTest;
