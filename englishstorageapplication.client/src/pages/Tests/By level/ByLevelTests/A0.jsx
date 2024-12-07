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
        question: 'What is the correct form of the verb: "He ____ a book every day."?',
        options: ['read', 'reads', 'reading', 'is read'],
        correctAnswer: 'reads'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "I am ____ (happy) today."',
        correctAnswer: 'happy'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which is the correct pronoun: "This is ____ car."',
        options: ['mine', 'me', 'my', 'I'],
        correctAnswer: 'my'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "She ____ (be) a teacher."',
        correctAnswer: 'is'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct article: "I have ____ apple."',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'an'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the plural form of "child"?',
        correctAnswer: 'children'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is a fruit?',
        options: ['Carrot', 'Apple', 'Potato', 'Tomato'],
        correctAnswer: 'Apple'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "We ____ (go) to the park."',
        correctAnswer: 'go'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['I are a student.', 'I is a student.', 'I am a student.', 'I be a student.'],
        correctAnswer: 'I am a student.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the opposite of "big"?',
        correctAnswer: 'small'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct verb: "They ____ to school every day."',
        options: ['go', 'goes', 'going', 'gone'],
        correctAnswer: 'go'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He ____ (like) ice cream."',
        correctAnswer: 'likes'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is a color?',
        options: ['Blue', 'Cat', 'Book', 'House'],
        correctAnswer: 'Blue'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She ____ (have) a dog."',
        correctAnswer: 'has'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Which is a day of the week?',
        options: ['January', 'Monday', 'Autumn', 'Yesterday'],
        correctAnswer: 'Monday'
    }
];

function A0Test() {
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
            <h1>A0 English Test</h1>
            
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

export default A0Test;
