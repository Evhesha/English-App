import React, { useState } from 'react';

function PresentSimpleTest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [inputAnswer, setInputAnswer] = useState('');

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

    const handleAnswer = () => {
        const question = questions[currentQuestion];
        let isCorrect = false;

        if (question.type === 'choice') {
            isCorrect = userAnswers[currentQuestion] === question.correctAnswer;
        } else {
            isCorrect = inputAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase();
        }

        if (isCorrect) {
            setScore(score + 1);
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

    const getResultMessage = () => {
        const percentage = (score / questions.length) * 100;
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

    return (
        <div className="test-container">
            <style>
                {`
                .test-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                h1 {
                    color: #2c3e50;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .progress-bar {
                    width: 100%;
                    height: 20px;
                    background-color: #ecf0f1;
                    border-radius: 10px;
                    margin: 20px 0;
                    overflow: hidden;
                }

                .progress {
                    height: 100%;
                    background-color: #3498db;
                    transition: width 0.3s ease;
                }

                .question-container {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px;
                }

                .question {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                }

                .options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .option {
                    padding: 10px 15px;
                    border: 2px solid #bdc3c7;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .option:hover {
                    background-color: #f7f9fc;
                }

                .option.selected {
                    border-color: #3498db;
                    background-color: #ebf5fb;
                }

                .input-answer {
                    width: 100%;
                    padding: 10px;
                    border: 2px solid #bdc3c7;
                    border-radius: 5px;
                    margin-bottom: 20px;
                }

                .buttons {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }

                button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .answer-btn {
                    background-color: #3498db;
                    color: white;
                }

                .answer-btn:hover {
                    background-color: #2980b9;
                }

                .skip-btn {
                    background-color: #95a5a6;
                    color: white;
                }

                .skip-btn:hover {
                    background-color: #7f8c8d;
                }

                .results {
                    text-align: center;
                    font-size: 1.2rem;
                }

                @media (max-width: 768px) {
                    .test-container {
                        padding: 10px;
                    }

                    .question {
                        font-size: 1rem;
                    }
               
            </style>
                .results {
                    text-align: center;
                    font-size: 1.2rem;
                    padding: 30px;
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                .result-emoji {
                    font-size: 5rem;
                    margin-bottom: 20px;
                    animation: bounce 1s infinite;
                }

                .result-title {
                    font-size: 2rem;
                    color: #2c3e50;
                    margin-bottom: 15px;
                }

                .result-message {
                    color: #7f8c8d;
                    margin-bottom: 25px;
                }

                .score-container {
                    background: #f8f9fa;
                    padding: 15px 25px;
                    border-radius: 10px;
                    display: inline-block;
                    margin: 20px 0;
                }

                .score-text {
                    font-size: 1.5rem;
                    color: #2c3e50;
                    margin: 10px 0;
                }

                .percentage {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #3498db;
                    margin: 10px 0;
                }

                .retry-btn {
                    background-color: #3498db;
                    color: white;
                    padding: 12px 30px;
                    border-radius: 25px;
                    border: none;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 20px;
                }

                .retry-btn:hover {
                    background-color: #2980b9;
                    transform: scale(1.05);
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .score-details {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin: 20px 0;
                }

                .score-item {
                    background: #fff;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    min-width: 120px;
                }

                .score-label {
                    font-size: 0.9rem;
                    color: #7f8c8d;
                }

                .score-value {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #2c3e50;
                    margin-top: 5px;
                }
                `}
            </style>

            <h1>Present Simple Test 1</h1>
            {showResults ? (
                <div className="results">
                    <div className="result-emoji">{getResultMessage().emoji}</div>
                    <h2 className="result-title">{getResultMessage().title}</h2>
                    <p className="result-message">{getResultMessage().message}</p>

                    <div className="score-container">
                        <div className="percentage">
                            {((score / questions.length) * 100).toFixed(1)}%
                        </div>
                    </div>

                    <div className="score-details">
                        <div className="score-item">
                            <div className="score-label">Correct</div>
                            <div className="score-value">{score}</div>
                        </div>
                        <div className="score-item">
                            <div className="score-label">Questions</div>
                            <div className="score-value">{questions.length}</div>
                        </div>
                        <div className="score-item">
                            <div className="score-label">Incorrect</div>
                            <div className="score-value">{questions.length - score}</div>
                        </div>
                    </div>

                    <button
                        className="retry-btn"
                        onClick={() => {
                            setCurrentQuestion(0);
                            setScore(0);
                            setUserAnswers({});
                            setShowResults(false);
                            setInputAnswer('');
                        }}
                    >
                        Try Again 🔄
                    </button>
                </div>
            ) : (
                // Остальной код теста остается прежним
                <>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <div className="question-container">
                        <div className="question">
                            {questions[currentQuestion].question}
                        </div>

                        {questions[currentQuestion].type === 'choice' ? (
                            <div className="options">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
                                        onClick={() => handleOptionSelect(option)}
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
                                onChange={(e) => setInputAnswer(e.target.value)}
                                placeholder="Type your answer here"
                            />
                        )}

                        <div className="buttons">
                            <button className="answer-btn" onClick={handleAnswer}>
                                Answer
                            </button>
                            <button className="skip-btn" onClick={handleSkip}>
                                Skip
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default PresentSimpleTest;