
import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function FuturePerfect() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Future Perfect - будущее совершенное время</h1>
      </div>
      <p>
        Future Perfect (будущее совершенное время) используется для описания действия, которое завершится к определенному моменту в будущем. Это время часто используется для указания на действия, которые будут завершены до какой-то определенной точки в будущем.
      </p>

      <h2>Случаи употребления Future Perfect</h2>
      <div className="usage-box">
        <ol>
          <li>
            Действие, которое завершится к определенному моменту в будущем:
            <p>
              <i>By next month, I will have finished this project — К следующему месяцу я закончу этот проект</i>
            </p>
          </li>
          <li>
            Действие, которое будет завершено перед каким-то другим действием в будущем:
            <p>
              <i>She will have cooked dinner by the time you arrive — Она приготовит ужин к тому времени, как ты придешь</i>
            </p>
          </li>
        </ol>
      </div>

      <h2>Future Perfect утверждение</h2>
      <div className="formula-container">
        <p>Формула образования</p>
        <p>
          <b>Подлежащее</b> + will have + глагол в третьей форме (Past Participle)
        </p>
      </div>

      <div className="important-box">
        <p>
          <b>Важно!</b> Will have используется для всех лиц и чисел:
        </p>
        <p>I will have</p>
        <p>You will have</p>
        <p>He/She/It will have</p>
        <p>We will have</p>
        <p>They will have</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I will have finished my work by 5 PM — Я закончу свою работу к 5 вечера</p>
        <p>She will have left by the time you arrive — Она уйдет к тому времени, как ты приедешь</p>
        <p>They will have completed the project before the deadline — Они завершат проект до крайнего срока</p>
        <p>The train will have departed by the time we get to the station — Поезд отправится к тому времени, как мы доберемся до станции</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Perfect"}
          text={"I _____ finished my work by 5 PM"}
          answer1={"will"}
          answer2={"will have"}
          answer3={"am"}
          answer4={"shall"}
          correctAnswer={"will have"}
        />
        <ChooseExercise
          title={"Future Perfect"}
          text={"They _____ completed the project before the deadline"}
          answer1={"will"}
          answer2={"will have"}
          answer3={"are"}
          answer4={"was"}
          correctAnswer={"will have"}
        />
        <InputExercise
          exampleName="Future Perfect"
          trueValue="will have finished"
          tasktext="I _____ my homework by then (закончить)"
        />
      </div>

      <h2>Future Perfect отрицание</h2>
      <div className="formula-container">
        <p>Подлежащее + will not have (won't have) + глагол в третьей форме (Past Participle)</p>
      </div>
<div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I won't have finished my work by 5 PM — Я не закончу свою работу к 5 вечера</p>
        <p>She won't have left by the time you arrive — Она не уйдет к тому времени, как ты приедешь</p>
        <p>They won't have completed the project before the deadline — Они не завершат проект до крайнего срока</p>
        <p>The train won't have departed by the time we get to the station — Поезд не отправится к тому времени, как мы доберемся до станции</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Perfect Negative"}
          text={"He _____ finished his work by the deadline"}
          answer1={"won't have"}
          answer2={"will not have"}
          answer3={"not will have"}
          answer4={"doesn't have"}
          correctAnswer={"won't have"}
        />
        <ChooseExercise
          title={"Future Perfect Negative"}
          text={"We _____ completed the task by next week"}
          answer1={"won't have"}
          answer2={"don't have"}
          answer3={"not have"}
          answer4={"aren't have"}
          correctAnswer={"won't have"}
        />
        <InputExercise
          exampleName="Future Perfect Negative"
          trueValue="won't have finished"
          tasktext="I _____ my work by then (не закончить)"
        />
      </div>

      <h2>Future Perfect вопросительное</h2>
      <div className="formula-container">
        <p>Will + подлежащее + have + глагол в третьей форме (Past Participle)?</p>
      </div>

      <h3>Общие вопросы</h3>
      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>Will you have finished your work by 5 PM? — Ты закончишь свою работу к 5 вечера?</p>
        <p>Will she have left by the time you arrive? — Она уйдет к тому времени, как ты приедешь?</p>
        <p>Will they have completed the project before the deadline? — Они завершат проект до крайнего срока?</p>
      </div>

      <h3>Специальные вопросы</h3>
      <div className="formula-container">
        <p>Вопросительное слово + will + подлежащее + have + глагол в третьей форме (Past Participle)?</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>When will you have finished your work? — Когда ты закончишь свою работу?</p>
        <p>Where will they have gone by the time we arrive? — Куда они уйдут к тому времени, как мы прибудем?</p>
        <p>What will she have done before we arrive? — Что она сделает перед тем, как мы прибудем?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Perfect Questions"}
          text={"_____ you have finished your work by 5 PM?"}
          answer1={"Will"}
          answer2={"Have"}
          answer3={"Did"}
          answer4={"Was"}
          correctAnswer={"Will"}
        />
        <ChooseExercise
          title={"Future Perfect Questions"}
          text={"_____ will they have completed the project?"}
          answer1={"When"}
          answer2={"Do"}
          answer3={"Have"}
          answer4={"Are"}
          correctAnswer={"When"}
        />
        <InputExercise
          exampleName="Future Perfect Questions"
          trueValue="will have done"
          tasktext="What _____ she _____ by then? (сделать)"
        />
      </div>

      <h2>Маркеры времени Future Perfect</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Основные маркеры:</h3>
          <ul>
            <li>by the time — к тому времени</li>
            <li>by then — к тому моменту</li>
            <li>before — до</li>
            <li>in two days/weeks/months — через два дня/недели/месяца</li>
            <li>by the end of the week/month/year — к концу недели/месяца/года</li>
          </ul>
        </div>
      </div>
<div className="examples-box">
        <p>
          <b>Примеры с маркерами времени:</b>
        </p>
        <p>
          I will have completed the project <b>by the time</b> he arrives — Я завершу проект к тому времени, как он приедет
        </p>
        <p>
          They will have left <b>by then</b> — Они уйдут к тому моменту
        </p>
        <p>
                    She will have finished her homework <b>before</b> dinner — Она закончит домашнее задание до ужина
        </p>
        <p>
          We will have bought a new house <b>in two months</b> — Мы купим новый дом через два месяца
        </p>
        <p>
          By the end of the week, we will have completed all the tasks — К концу недели мы закончим все задачи
        </p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Perfect - Time Markers"}
          text={"I will have finished my project _____"}
          answer1={"by the time"}
          answer2={"after"}
          answer3={"before"}
          answer4={"just"}
          correctAnswer={"by the time"}
        />
        <ChooseExercise
          title={"Future Perfect - Time Markers"}
          text={"They will have left _____ we arrive"}
          answer1={"by the time"}
          answer2={"when"}
          answer3={"as soon as"}
          answer4={"until"}
          correctAnswer={"by the time"}
        />
        <InputExercise
          exampleName="Future Perfect - Time Markers"
          trueValue="by the end of the month"
          tasktext="We will have completed the project _____ (к концу месяца)"
        />
      </div>

      <h2>Практические упражнения</h2>
      <div className="cards-container">
        <ChooseExercise
          title={"Future Perfect Practice"}
          text={"The weather _____ be clear by the time we arrive"}
          answer1={"will"}
          answer2={"will have"}
          answer3={"is"}
          answer4={"was"}
          correctAnswer={"will have"}
        />
        <ChooseExercise
          title={"Future Perfect Practice"}
          text={"_____ they _____ the project before the deadline?"}
          answer1={"Will, have completed"}
          answer2={"Do, complete"}
          answer3={"Are, completing"}
          answer4={"Have, completed"}
          correctAnswer={"Will, have completed"}
        />
        <InputExercise
          exampleName="Future Perfect Practice"
          trueValue="will have finished"
          tasktext="I _____ my report by then (закончить)"
        />
      </div>
    </>
  );
}

export default FuturePerfect;