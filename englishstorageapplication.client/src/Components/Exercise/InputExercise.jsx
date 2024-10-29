import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin: 20px 0;
  overflow: hidden;
  border: none;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  background-color: #3498db;
  color: white;
  padding: 15px 20px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
`;

const CardBody = styled.div`
  padding: 25px;
  background-color: white;
`;

const CardTitle = styled.h5`
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusText = styled.span`
  color: ${props => props.status === 'correct' ? '#28a745' : '#dc3545'};
  font-weight: 600;
  transition: color 0.3s ease;
`;

function Exercise({ exampleName, trueValue, tasktext }) {
  const [bgcolor, setbgColor] = useState('bg-light');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null);

  function CheckCondition() {
    if (value === trueValue) {
      setbgColor('bg-success');
      setStatus('correct');
    } else {
      setbgColor('bg-danger');
      setStatus('incorrect');
    }
  }

  return (
    <StyledCard className={`card ${bgcolor}`}>
      <CardHeader>Практика (введите ответ)</CardHeader>
      <CardBody>
        <CardTitle>{exampleName}</CardTitle>
        <CardText>
          {tasktext}
          <TaskInput 
            value={value} 
            onChange={event => setValue(event.target.value)} 
            bgcolor={bgcolor}
            style={{color: 'white'}}
          />
        </CardText>
        <ButtonContainer>
          <SubmitButton 
            onClick={CheckCondition} 
            className="btn btn-primary"
          >
            Ответить
          </SubmitButton>
          {status && (
            <StatusText status={status}>
              {status === 'correct' ? 'Correct (правильно) ✔️' : 'Incorrect (неправильно) ❌'}
            </StatusText>
          )}
        </ButtonContainer>
      </CardBody>
    </StyledCard>
  );
}

export default Exercise;