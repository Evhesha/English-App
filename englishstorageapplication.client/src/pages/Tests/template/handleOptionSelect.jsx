const handleOptionSelect = (option, currentQuestion, userAnswers, setUserAnswers) => {
    setUserAnswers({
        ...userAnswers,
        [currentQuestion]: option
    });
};

export default handleOptionSelect;
