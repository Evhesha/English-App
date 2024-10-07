import React, { useRef, useState } from 'react';

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

  function CheckAnswer(index) {
    const selectedAnswer = answerRefs.current[index].textContent;
    const newBgColors = [...bgColors];

    if (selectedAnswer === correctAnswer) {
      newBgColors[index] = 'bg-success';
    } else {
      newBgColors[index] = 'bg-danger';
    }

    setBgColors(newBgColors);
    console.log(selectedAnswer);
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <ul className="list-group list-group-flush">
          {[answer1, answer2, answer3, answer4].map((answer, index) => (
            <li
              key={index}
              className={`list-group-item btn ${bgColors[index]}`}
              ref={el => answerRefs.current[index] = el}
              onClick={() => CheckAnswer(index)}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ChooseExercise;
