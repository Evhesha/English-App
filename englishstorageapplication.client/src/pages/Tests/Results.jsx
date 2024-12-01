import getResultMessage from "./ResultMessage";

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

export default Results;
