const styles = `
    .test-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    .progress-bar {
        background-color: #e0e0e0;
        border-radius: 2px;
        margin: 20px 0;
    }
    .progress {
        background-color: #007bff;
        height: 10px;
        border-radius: 2px;
        transition: width 0.3s;
    }
    .question-container {
        margin: 20px 0;
    }
    .question {
        font-size: 1.5em;
    }
    .options, .buttons {
        margin-top: 10px;
    }
    .option {
        background: #f8f9fa;
        border: 1px solid #ced4da;
        padding: 10px;
        margin: 5px 0;
        cursor: pointer;
        border-radius: 5px;
    }
    .option.selected {
        background: #007bff;
        color: white;
    }
    .input-answer {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        font-size: 1em;
        border: 1px solid #ced4da;
        border-radius: 5px;
    }
    .answer-btn, .skip-btn, .retry-btn {
        padding: 10px 20px;
        margin: 5px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .answer-btn {
        background-color: #28a745;
        color: white;
    }
    .skip-btn {
        background-color: #ffc107;
        color: white;
    }
    .retry-btn {
        background-color: #007bff;
        color: white;
    }
    .results {
        text-align: center;
    }
    .result-emoji {
        font-size: 3em;
    }
    .result-title {
        font-size: 2em;
        margin: 10px 0;
    }
    .result-message {
        font-size: 1.2em;
        margin: 10px 0;
    }
    .score-container {
        margin: 20px 0;
    }
    .percentage {
        font-size: 3em;
    }
    .score-details {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 20px 0;
    }
    .score-item {
        text-align: center;
    }
    .score-label {
        font-size: 1em;
    }
    .score-value {
        font-size: 1.5em;
        font-weight: bold;
    }
    .mistakes-analysis {
        text-align: left;
        margin: 20px 0;
    }
    .mistake-item {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        animation: fadeIn 0.5s ease-in-out;
    }
    .mistake-item p {
        margin: 0;
    }
    .mistake-question {
        font-weight: bold;
    }
    .mistake-details span {
        color: #dc3545;
        font-weight: bold;
    }
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;

export default styles;