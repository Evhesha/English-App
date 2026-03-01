import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function TestQuestion({testId, onCreate}) {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [dropDownTitle, setDropDownTitle] = useState("Select type");
    const [error, setError] = useState(false);

    const AddTestQuestion = async (event) => {
        event.preventDefault();
        try {
            const token = Cookies.get("token");
            const response = await axios.post(
                `${API_BASE_URL}/api/TestQuestion`,
                {
                    testId: testId,
                    type: dropDownTitle,
                    question: question,
                    options: options.split(","),
                    correctAnswer: correctAnswer,
                },{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            setQuestion("");
            setOptions("");
            setCorrectAnswer("");
            setDropDownTitle("Select type");
            console.log(response);
        } catch (error) {
            console.log(error);  
            setError(true);
            setTimeout(() => setError(false),2000);
        }
    };

    return <div className="list-group-item d-flex justify-content-between align-items-center lesson-list-element">
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
        <button className="btn btn-primary" onClick={AddTestQuestion}>
            Add
        </button>
        <div>
            {error ? <p style={{color: "red"}}>error</p> : null}
        </div>
    </div>
}

export default TestQuestion;