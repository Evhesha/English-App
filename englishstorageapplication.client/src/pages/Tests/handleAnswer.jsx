const handleAnswer = (
    currentQuestion,
    questions,
    userAnswers,
    inputAnswer,
    score,
    setScore,
    setUserAnswers,
    setCurrentQuestion,
    setInputAnswer,
    setShowResults,
    mistakes,
    setMistakes
) => {
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

export default handleAnswer;
