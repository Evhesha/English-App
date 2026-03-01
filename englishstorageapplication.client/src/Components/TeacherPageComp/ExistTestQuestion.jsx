import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
function ExistTestQuestion({id, type, question, options, correctAnswer, onDelete}) {
    const [testQuestion, setTestQuestion] = useState(question);
    const [testOptions, setTestOptions] = useState(options);
    const [testCorrectAnswer, setTestCorrectAnswer] = useState(correctAnswer);
    const [dropDownType, setDropDownType] = useState(type);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the question?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE_URL}/api/TestQuestion/${id}`);
            onDelete(id);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleUpdate = async () => {
        
    }
    
    return <li className="list-group-item d-flex justify-content-between align-items-center lesson-list-element">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Question type
            </label>
            <DropdownButton
                variant="outline-secondary"
                title={dropDownType}
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item onClick={() => setDropDownType("choice")}>choice</Dropdown.Item>
                <Dropdown.Item onClick={() => setDropDownType("input")}>input</Dropdown.Item>
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
                value={testQuestion}
                onChange={(e) => setTestQuestion(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Options
            </label>
            <input
                type="text"
                className="form-control"
                readOnly={dropDownType === "input"}
                id="name"
                value={testOptions}
                onChange={(e) => setTestOptions(e.target.value)}
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
                value={testCorrectAnswer}
                onChange={(e) => setTestCorrectAnswer(e.target.value)}
            />
        </div>
        <button className="btn btn-primary">
            Save
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
        </button>
    </li>
}

export default ExistTestQuestion;