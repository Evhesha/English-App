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

export default ProgressBar;
