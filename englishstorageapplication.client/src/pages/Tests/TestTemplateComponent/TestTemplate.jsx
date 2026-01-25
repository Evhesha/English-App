import React, { useState } from 'react';
import styles from './StyleConstant';
import ProgressBar from './ProgressBar';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './Results';
import handleAnswer from './handleAnswer';
import handleSkip from './handleSkip';
import handleOptionSelect from './handleOptionSelect';
import handleRetry from './handleRetry';

function TestTemplate({testId, testName, questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [inputAnswer, setInputAnswer] = useState('');
    const [mistakes, setMistakes] = useState([]);

    return (
        <div className="test-container">
            <style>{styles}</style>
            <h1>{testName}</h1>
            {showResults ? (
                <Results 
                    testId={testId}
                    score={score}
                    questionsLength={questions.length}
                    mistakes={mistakes}
                    onRetry={() => handleRetry(setCurrentQuestion, setScore, setUserAnswers, setShowResults, setInputAnswer, setMistakes)}
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
                        onOptionSelect={(option) => handleOptionSelect(option, currentQuestion, userAnswers, setUserAnswers)}
                        onInputChange={setInputAnswer}
                        onAnswer={() => handleAnswer(currentQuestion, questions, userAnswers, inputAnswer, score, setScore, setUserAnswers, setCurrentQuestion, setInputAnswer, setShowResults, mistakes, setMistakes)}
                        onSkip={() => handleSkip(currentQuestion, setCurrentQuestion, setInputAnswer, setShowResults, questions)}
                    />
                </>
            )}
        </div>
    );
}

export default TestTemplate;