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
        question: 'What is the past participle of the verb "to grow"?',
        options: ['grew', 'grown', 'growed', 'growing'],
        correctAnswer: 'grown'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "She has ____ (complete) her assignment."',
        correctAnswer: 'completed'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which sentence uses the correct form of "its, it\'s"?',
        options: ['Its raining outside.', 'It\'s raining outside.', 'Its\' raining outside.', 'It is raining outside.'],
        correctAnswer: 'It\'s raining outside.'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "They ____ (go) to the park every Sunday."',
        correctAnswer: 'go'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct preposition: "She is good ____ playing the piano."',
        options: ['at', 'in', 'on', 'with'],
        correctAnswer: 'at'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the superlative form of "happy"?',
        correctAnswer: 'happiest'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is an adjective?',
        options: ['Running', 'Quickly', 'Beautiful', 'Happily'],
        correctAnswer: 'Beautiful'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "They ____ (prepare) for the exam all week."',
        correctAnswer: 'have been preparing'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['She don\'t like tea.', 'She doesn\'t like tea.', 'She not like tea.', 'She doesn\'t liking tea.'],
        correctAnswer: 'She doesn\'t like tea.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the past tense of "to swim"?',
        correctAnswer: 'swam'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct article: "This is ____ best decision we made."',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'the'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He ____ (work) at this company since 2010."',
        correctAnswer: 'has worked'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is an adverb?',
        options: ['Happy', 'Happily', 'Happiness', 'Happier'],
        correctAnswer: 'Happily'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She ____ (eat) lunch when I called her."',
        correctAnswer: 'was eating'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Choose the correct relative pronoun: "The girl ____ won the prize is my sister."',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'who'
    },
    {
        id: 16,
        type: 'input',
        question: 'Fill in the blank: "She ____ (visit) her grandparents every summer."',
        correctAnswer: 'visits'
    },
    {
        id: 17,
        type: 'choice',
        question: 'Which sentence is in the past perfect tense?',
        options: ['I have finished my homework.', 'I had finished my homework.', 'I will finish my homework.', 'I am finishing my homework.'],
        correctAnswer: 'I had finished my homework.'
    },
    {
        id: 18,
        type: 'input',
        question: 'Fill in the blank: "They ____ (build) a new house by the end of next year."',
        correctAnswer: 'will have built'
    }
];

function B1Test() {
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
            <h1>B1 English Test</h1>
            
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

export default B1Test;
