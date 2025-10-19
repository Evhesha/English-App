import ChooseExercise from "../../../Components/Exercise/ChooseExercise";
import InputExercise from "../../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../../Components/Buttons/ToLinkButton/ToLinkButton";

function PastSimple() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Past Simple - простое прошедшее время</h1>
      </div>
      <p>
        Время Past Simple используется для обозначения действия, которое произошло в определенное 
        время в прошлом и время совершения которого уже истекло.
      </p>

      <h2>Маркеры времени Past Simple</h2>
      <div className="time-markers">
        <ul>
          <li>five days ago - пять дней назад</li>
          <li>last year - в прошлом году</li>
          <li>yesterday - вчера</li>
          <li>in 1980 - в 1980 году</li>
        </ul>
      </div>

      <h2>Past Simple утверждение</h2>
      <div className="formula-container">
        <p>Формула образования:</p>
        <p>Subject + V(ed)/V2</p>
      </div>

      <p>
        Для того, чтобы поставить глагол во время Past Simple, нужно использовать его «вторую форму». 
        Для большинства глаголов она образуется прибавлением окончания -ed:
      </p>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>examine - examined</p>
        <p>enjoy - enjoyed</p>
        <p>close - closed</p>
      </div>

      <p>
        Существует также группа неправильных глаголов, которые образуют форму прошедшего времени 
        не по общим правилам. Их форму нужно запомнить.
      </p>

      <div className="examples-box">
        <p>We saw your dog two blocks from here.</p>
        <p>Мы видели вашу собаку в двух кварталах отсюда.</p>
      </div>

      <h2>Past Simple отрицание</h2>
      <div className="formula-container">
        <p>Subject + did not (didn't) + V</p>
      </div>

      <div className="examples-box">
        <p>We did not find our car.</p>
        <p>Мы не нашли свою машину.</p>
        <p>I did not understand this question.</p>
        <p>Я не понял этот вопрос.</p>
      </div>

      <h2>Past Simple вопрос</h2>
      <div className="formula-container">
        <p>Did + subject + V ?</p>
      </div>

      <div className="examples-box">
        <p>Did you wash your hands?</p>
        <p>Ты помыл руки?</p>
        <p>Did they sign the contract?</p>
        <p>Они подписали контракт?</p>
      </div>

      <h2>Случаи употребления Past Simple</h2>
      <div className="examples-box">
        <p><b>1. Указание на простое действие в прошлом:</b></p>
        <p>I saw Jeremy in the bank.</p>
        <p>Я видел Джереми в банке.</p>

        <p><b>2. Регулярные, повторяющиеся действия в прошлом:</b></p>
        <p>The old man often visited me.</p>
        <p>Старик часто меня навещал.</p>

        <p><b>3. Перечисление последовательности действий в прошлом:</b></p>
        <p>I heard a strange sound, looked back, and saw a huge cat sitting on the table.</p>
        <p>Я услышал странный звук, обернулся и увидел здоровенного кота, сидящего на столе.</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Simple"}
          text={"She _____ to school yesterday"}
          answer1={"go"}
          answer2={"goes"}
          answer3={"went"}
          answer4={"going"}
          correctAnswer={"went"}
        />

        <ChooseExercise
          title={"Past Simple"}
          text={"_____ they visit Paris last summer?"}
          answer1={"Do"}
          answer2={"Did"}
          answer3={"Does"}
          answer4={"Are"}
          correctAnswer={"Did"}
        />

        <ChooseExercise
          title={"Past Simple"}
          text={"We _____ not play football yesterday"}
          answer1={"do"}
          answer2={"did"}
          answer3={"does"}
          answer4={"are"}
          correctAnswer={"did"}
        />
      </div>

      <div className="cards-container">
        <InputExercise
          exampleName="Past Simple"
          trueValue="played"
          tasktext="I ___ tennis last weekend (play)"
        />

        <InputExercise
          exampleName="Past Simple"
          trueValue="wrote"
          tasktext="She ___ a letter yesterday (write)"
        />
      </div>
    </>
  );
}

export default PastSimple;