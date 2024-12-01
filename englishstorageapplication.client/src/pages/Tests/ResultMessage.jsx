const getResultMessage = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage === 100) {
        return {
            emoji: '🏆',
            title: 'Perfect Score!',
            message: 'Congratulations! You are a Present Simple master!'
        };
    } else if (percentage >= 80) {
        return {
            emoji: '🌟',
            title: 'Excellent!',
            message: 'Great job! You have a strong understanding of Present Simple!'
        };
    } else if (percentage >= 60) {
        return {
            emoji: '👍',
            title: 'Good Job!',
            message: 'You\'re doing well, but there\'s still room for improvement.'
        };
    } else if (percentage >= 40) {
        return {
            emoji: '📚',
            title: 'Keep Learning!',
            message: 'You\'re on the right track. Keep practicing!'
        };
    } else {
        return {
            emoji: '💪',
            title: 'Don\'t Give Up!',
            message: 'Present Simple needs more practice. You can do it!'
        };
    }
};

export default getResultMessage