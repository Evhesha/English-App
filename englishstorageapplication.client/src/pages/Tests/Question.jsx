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
                        <div style={{color : "rgba(23, 32, 42, 0.9)"}}
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

export default Question;
