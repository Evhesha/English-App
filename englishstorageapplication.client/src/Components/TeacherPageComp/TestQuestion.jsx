import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';

function TestQuestion() {
    const [type, setType] = useState("choice");
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [dropDownTitle, setDropDownTitle] = useState("Select type");
    
    return <li className="list-group-item d-flex justify-content-between align-items-center lesson-list-element">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Question type
            </label>
            <DropdownButton
                variant="outline-secondary"
                title={dropDownTitle}
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item onClick={() => setDropDownTitle("choice")}>choice</Dropdown.Item>
                <Dropdown.Item onClick={() => setDropDownTitle("input")}>input</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Question
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Options
            </label>
            <input
                type="text"
                className="form-control"
                readOnly={dropDownTitle === "input"}
                id="name"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Correct answer
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
            />
        </div>
        <button className="btn btn-primary">
            Add
        </button>
    </li>
}

export default TestQuestion;