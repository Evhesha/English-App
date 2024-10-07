import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";

function Exercise({exampleName, trueValue, tasktext}) {
    const [bgcolor, setbgColor] = useState('bg-light');
    const [value, setValue] = useState('');

    function CheckCondition(){
      if (value === trueValue) {
        setbgColor('bg-success');
      } else {
        setbgColor('bg-danger'); // Можно добавить для неверного ответа
      }
    }

  return (
    <>
      <div className={`card`}>
        <div className="card-header">Практика</div>
        <div className="card-body">
          <h5 className="card-title">{exampleName}</h5>
          <p className="card-text">
            {tasktext}
            <TaskInput value={value} onChange={event => setValue(event.target.value)} bgcolor={`${bgcolor}`}/> 
          </p>
          <button onClick={CheckCondition} type="button" className="btn btn-primary">Ответить</button>
        </div>
      </div>
    </>
  );
}

export default Exercise;
