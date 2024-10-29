import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 18rem;
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

const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AnswerItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => {
    switch(props.bgColor) {
      case 'bg-success':
        return '#28a745';
      case 'bg-danger':
        return '#dc3545';
      default:
        return 'white';
    }
  }};
  color: ${props => props.bgColor === 'bg-light' ? '#34495e' : 'white'};
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => props.bgColor === 'bg-light' ? '#f8f9fa' : ''};
    transform: translateX(5px);
  }

  &:last-child {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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

function ChooseExercise({
  title,
  text,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
}) {
  const answerRefs = useRef([]);
  const [bgColors, setBgColors] = useState(['bg-light', 'bg-light', 'bg-light', 'bg-light']);
  const [statusMessages, setStatusMessages] = useState(Array(4).fill(''));

  function CheckAnswer(index) {
    const selectedAnswer = answerRefs.current[index].textContent;
    const newBgColors = [...bgColors];
    const newStatusMessages = [...statusMessages];

    if (selectedAnswer === correctAnswer) {
      newBgColors[index] = 'bg-success';
      newStatusMessages[index] = '✔️';
    } else {
      newBgColors[index] = 'bg-danger';
      newStatusMessages[index] = '❌';
    }

    setBgColors(newBgColors);
    setStatusMessages(newStatusMessages);
  }

  return (
    <StyledCard>
      <CardHeader>Практика (выберите ответ)</CardHeader>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
      <AnswerList>
        {[answer1, answer2, answer3, answer4].map((answer, index) => (
          <AnswerItem
            key={index}
            bgColor={bgColors[index]}
            ref={el => answerRefs.current[index] = el}
            onClick={() => CheckAnswer(index)}
          >
            {answer}
            {statusMessages[index] && (
              <span style={{ 
                float: 'right',
                color: 'white'
              }}>
                {statusMessages[index]}
              </span>
            )}
          </AnswerItem>
        ))}
      </AnswerList>
    </StyledCard>
  );
}

export default ChooseExercise;