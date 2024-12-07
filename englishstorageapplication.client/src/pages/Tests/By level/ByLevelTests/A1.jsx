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
        question: 'What is the past tense of the verb "to go"?',
        options: ['goes', 'went', 'gone', 'going'],
        correctAnswer: 'went'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "She ____ (run) every morning."',
        correctAnswer: 'runs'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which is the correct preposition: "The cat is ____ the bed."',
        options: ['on', 'in', 'under', 'over'],
        correctAnswer: 'under'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "They ____ (eat) dinner at 7 PM."',
        correctAnswer: 'eat'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct article: "____ sun is shining."',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 'The'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the plural form of "mouse"?',
        correctAnswer: 'mice'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is an animal?',
        options: ['Table', 'Lion', 'Car', 'Bottle'],
        correctAnswer: 'Lion'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "She ____ (sleep) at 10 PM every night."',
        correctAnswer: 'sleeps'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['I has a pen.', 'I have a pen.', 'I having a pen.', 'I is a pen.'],
        correctAnswer: 'I have a pen.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the opposite of "old"?',
        correctAnswer: 'young'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct verb: "They ____ to the market every Sunday."',
        options: ['go', 'goes', 'going', 'gone'],
        correctAnswer: 'go'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He ____ (cook) dinner tonight."',
        correctAnswer: 'is cooking'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is a mode of transport?',
        options: ['Train', 'Table', 'Tree', 'Book'],
        correctAnswer: 'Train'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She ____ (write) a letter now."',
        correctAnswer: 'is writing'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Which is a season?',
        options: ['Monday', 'Winter', 'Day', 'Week'],
        correctAnswer: 'Winter'
    },
    {
        id: 16,
        type: 'match',
        question: 'Match the words with their translations:',
        pairs: [
            { term: 'happy', match: 'счастливый' },
            { term: 'angry', match: 'злой' },
            { term: 'sad', match: 'грустный' },
            { term: 'excited', match: 'взволнованный' }
        ],
        correctAnswer: {
            'happy': 'счастливый',
            'angry': 'злой',
            'sad': 'грустный',
            'excited': 'взволнованный'
        }
    },
    {
        id: 17,
        type: 'input',
        question: 'Fill in the blank: "The sky is ____ (blue)."',
        correctAnswer: 'blue'
    },
    {
        id: 18,
        type: 'choice',
        question: 'Which sentence is in the future tense?',
        options: ['I eat breakfast.', 'I am eating breakfast.', 'I will eat breakfast.', 'I ate breakfast.'],
        correctAnswer: 'I will eat breakfast.'
    },
    {
        id: 19,
        type: 'input',
        question: 'Fill in the blank: "She ____ (read) every day."',
        correctAnswer: 'reads'
    },
    {
        id: 20,
        type: 'match',
        question: 'Match the animals with their names:',
        pairs: [
            { term: 'dog', match: 'собака' },
            { term: 'cat', match: 'кошка' },
            { term: 'bird', match: 'птица' },
            { term: 'fish', match: 'рыба' }
        ],
        correctAnswer: {
            'dog': 'собака',
            'cat': 'кошка',
            'bird': 'птица',
            'fish': 'рыба'
        }
    }
];

function A1Test() {
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
        } else if (question.type === 'match') {
            userAnswer = userAnswers[currentQuestion];
            isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer);
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

    const handleMatchSelect = (term, match) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: {
                ...userAnswers[currentQuestion],
                [term]: match
            }
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
            <h1>A1 English Test</h1>
            
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
                        onMatchSelect={handleMatchSelect}
                    />
                </>
            )}
        </div>
    );
}

export default A1Test;
