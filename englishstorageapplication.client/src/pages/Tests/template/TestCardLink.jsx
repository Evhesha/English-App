import {Link} from "react-router-dom";
import "../styles.css";

function TestCardLink({test, testResult}) {
    return (
        <Link to={test.path} className="lesson-card">
            <div className="lesson-icon">{test.icon}</div>
            <h3 className="lesson-title">{test.name}</h3>
            <p className="lesson-description">{test.description}</p>
            <p></p>
            <div>
                {testResult !== null && testResult !== undefined ?
                    <p><b>Pass rate </b>{testResult}%</p> :
                    <p><b>Not passed</b></p>
                }
            </div>
            <div className="hover-effect"></div>
        </Link>
    );
}

export default TestCardLink;