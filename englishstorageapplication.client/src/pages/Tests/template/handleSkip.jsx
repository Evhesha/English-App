const handleSkip = (currentQuestion, setCurrentQuestion, setInputAnswer, setShowResults, questions) => {
    if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setInputAnswer('');
    } else {
        setShowResults(true);
    }
};

export default handleSkip;
