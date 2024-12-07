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
        question: 'What is the past participle of the verb "to write"?',
        options: ['wrote', 'written', 'writing', 'write'],
        correctAnswer: 'written'
    },
    {
        id: 2,
        type: 'input',
        question: 'Fill in the blank: "He has ____ (finish) his project."',
        correctAnswer: 'finished'
    },
    {
        id: 3,
        type: 'choice',
        question: 'Which sentence uses the correct form of "there, their, they\'re"?',
        options: [, 'There going to the store.', 'They\'re going to the store.', 'Their going to the store.'],
        correctAnswer: 'They\'re going to the store.'
    },
    {
        id: 4,
        type: 'input',
        question: 'Fill in the blank: "She ____ (have) already eaten."',
        correctAnswer: 'has'
    },
    {
        id: 5,
        type: 'choice',
        question: 'Choose the correct preposition: "The keys are ____ the table."',
        options: ['on', 'in', 'under', 'beside'],
        correctAnswer: 'on'
    },
    {
        id: 6,
        type: 'input',
        question: 'What is the comparative form of "good"?',
        correctAnswer: 'better'
    },
    {
        id: 7,
        type: 'choice',
        question: 'Which of these is a noun?',
        options: ['Quickly', 'Running', 'Happiness', 'Beautiful'],
        correctAnswer: 'Happiness'
    },
    {
        id: 8,
        type: 'input',
        question: 'Fill in the blank: "They ____ (travel) to France next summer."',
        correctAnswer: 'will travel'
    },
    {
        id: 9,
        type: 'choice',
        question: 'Which sentence is correct?',
        options: ['He don\'t like ice cream.', 'He doesn\'t like ice cream.', 'He not like ice cream.', 'He doesn\'t liking ice cream.'],
        correctAnswer: 'He doesn\'t like ice cream.'
    },
    {
        id: 10,
        type: 'input',
        question: 'What is the past tense of "to teach"?',
        correctAnswer: 'taught'
    },
    {
        id: 11,
        type: 'choice',
        question: 'Choose the correct article: "____ best way to learn is practice."',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 'The'
    },
    {
        id: 12,
        type: 'input',
        question: 'Fill in the blank: "He ____ (live) in New York for ten years."',
        correctAnswer: 'has lived'
    },
    {
        id: 13,
        type: 'choice',
        question: 'Which word is an adverb?',
        options: ['Quick', 'Quickly', 'Quicker', 'Quickest'],
        correctAnswer: 'Quickly'
    },
    {
        id: 14,
        type: 'input',
        question: 'Fill in the blank: "She is ____ (run) every day."',
        correctAnswer: 'running'
    },
    {
        id: 15,
        type: 'choice',
        question: 'Choose the correct relative pronoun: "The book ____ you lent me is fascinating."',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 'which'
    },
    
    {
        id: 16,
        type: 'input',
        question: 'Fill in the blank: "She ____ (visit) her grandparents this weekend."',
        correctAnswer: 'will visit'
    },
    {
        id: 17,
        type: 'choice',
        question: 'Which sentence is in the present perfect tense?',
        options: ['I have seen that movie.', 'I saw that movie.', 'I will see that movie.', 'I am seeing that movie.'],
        correctAnswer: 'I have seen that movie.'
    },
    {
        id: 18,
        type: 'input',
        question: 'Fill in the blank: "They ____ (build) a new house."',
        correctAnswer: 'are building'
    },
];

function A2Test() {
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
            <h1>A2 English Test</h1>
            
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

export default A2Test;
