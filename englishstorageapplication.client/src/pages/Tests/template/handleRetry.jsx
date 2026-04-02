const handleRetry = (setCurrentQuestion, setScore, setUserAnswers, setShowResults, setInputAnswer, setMistakes) => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers({});
    setShowResults(false);
    setInputAnswer('');
    setMistakes([]);
};

export default handleRetry;
