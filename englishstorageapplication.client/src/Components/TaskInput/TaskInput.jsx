import "./TaskInput.css"

const TaskInput = ({ value, onChange, bgcolor }) => {
    return (
      <div>
        <input className={`inp form-control ${bgcolor}`} placeholder="Ответ" type="text" value={value} onChange={onChange} />
      </div>
    );
  };
  
  export default TaskInput;