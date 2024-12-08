import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function PastPerfect() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Past Perfect - прошедшее завершенное время</h1>
      </div>
      <p>
        Past Perfect (прошедшее завершенное время) используется для описания действия, которое завершилось к определенному моменту в прошлом. Это время часто используется для указания на действие, предшествующее другому действию в прошлом.
      </p>

      <h2>Случаи употребления Past Perfect</h2>
      <div className="usage-box">
        <ol>
          <li>
            Действие, завершившееся к определенному моменту в прошлом:
            <p>
              <i>By the time we arrived, the movie had started — К тому моменту, как мы приехали, фильм уже начался</i>
            </p>
          </li>
          <li>
            Действие, предшествующее другому действию в прошлом:
            <p>
              <i>She had finished her homework before she went out — Она закончила домашнее задание перед тем, как вышла</i>
            </p>
          </li>
        </ol>
      </div>

      <h2>Past Perfect утверждение</h2>
      <div className="formula-container">
        <p>Формула образования</p>
        <p>
          <b>Подлежащее</b> + had + глагол в третьей форме (Past Participle)
        </p>
      </div>

      <div className="important-box">
        <p>
          <b>Важно!</b> Had используется для всех лиц и чисел:
        </p>
        <p>I had</p>
        <p>You had</p>
        <p>He/She/It had</p>
        <p>We had</p>
        <p>They had</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I had eaten breakfast before he came — Я позавтракал перед тем, как он пришел</p>
        <p>She had left when we arrived — Она ушла, когда мы прибыли</p>
        <p>They had finished the project by 5 PM — Они закончили проект к 5 вечера</p>
        <p>The rain had stopped by the time we went out — Дождь закончился к тому моменту, как мы вышли</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Perfect"}
          text={"I _____ eaten breakfast before he came"}
          answer1={"had"}
          answer2={"have"}
          answer3={"has"}
          answer4={"was"}
          correctAnswer={"had"}
        />
        <ChooseExercise
          title={"Past Perfect"}
          text={"They _____ finished the project by 5 PM"}
          answer1={"had"}
          answer2={"have"}
          answer3={"has"}
          answer4={"were"}
          correctAnswer={"had"}
        />
        <InputExercise
          exampleName="Past Perfect"
          trueValue="had left"
          tasktext="She _____ when we arrived (уехать)"
        />
      </div>

      <h2>Past Perfect отрицание</h2>
      <div className="formula-container">
        <p>Подлежащее + had not (hadn't) + глагол в третьей форме (Past Participle)</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I hadn't eaten breakfast before he came — Я не позавтракал перед тем, как он пришел</p>
        <p>She hadn't left when we arrived — Она не ушла, когда мы прибыли</p>
        <p>They hadn't finished the project by 5 PM — Они не закончили проект к 5 вечера</p>
        <p>The rain hadn't stopped by the time we went out — Дождь не закончился к тому моменту, как мы вышли</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Perfect Negative"}
          text={"He _____ finished his work by the deadline"}
          answer1={"hadn't"}
          answer2={"had not"}
          answer3={"not had"}
          answer4={"doesn't"}
          correctAnswer={"hadn't"}
        />
        <ChooseExercise
          title={"Past Perfect Negative"}
          text={"We _____ eaten lunch before the meeting"}
          answer1={"hadn't"}
          answer2={"didn't"}
          answer3={"not"}
          answer4={"don't"}
          correctAnswer={"hadn't"}
        />
        <InputExercise
          exampleName="Past Perfect Negative"
          trueValue="hadn't finished"
          tasktext="I _____ this book by then (не закончить)"
        />
      </div>

      <h2>Past Perfect вопросительное</h2>
      <div className="formula-container">
        <p>Had + подлежащее + глагол в третьей форме (Past Participle)?</p>
      </div>

      <h3>Общие вопросы</h3>
      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>Had you eaten breakfast before he came? — Ты позавтракал перед тем, как он пришел?</p>
        <p>Had she left when we arrived? — Она ушла, когда мы прибыли?</p>
        <p>Had they finished the project by 5 PM? — Они закончили проект к 5 вечера?</p>
      </div>

      <h3>Специальные вопросы</h3>
      <div className="formula-container">
        <p>Вопросительное слово + had + подлежащее + глагол в третьей форме (Past Participle)?</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>When had you eaten breakfast? — Когда ты позавтракал?</p>
        <p>Where had they gone before the party? — Куда они ушли перед вечеринкой?</p>
        <p>What had she done before we arrived? — Что она сделала перед тем, как мы прибыли?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Perfect Questions"}
          text={"_____ you eaten breakfast before he came?"}
          answer1={"Had"}
          answer2={"Have"}
          answer3={"Did"}
          answer4={"Was"}
          correctAnswer={"Had"}
        />
        <ChooseExercise
          title={"Past Perfect Questions"}
          text={"_____ had they finished the project?"}
          answer1={"When"}
          answer2={"Do"}
          answer3={"Had"}
          answer4={"Are"}
          correctAnswer={"When"}
        />
        <InputExercise
          exampleName="Past Perfect Questions"
          trueValue="had done"
          tasktext="What _____ she _____ before we arrived? (сделать)"
        />
      </div>

      <h2>Маркеры времени Past Perfect</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Основные маркеры:</h3>
          <ul>
            <li>by the time — к тому времени</li>
            <li>before — до</li>
            <li>when — когда</li>
            <li>already — уже</li>
            <li>just — только что</li>
            <li>never — никогда</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры с маркерами времени:</b>
        </p>
        <p>
          I had finished my homework <b>by the time</b> he arrived — Я закончил домашнее задание к тому времени, как он пришел
        </p>
        <p>
          They had left <b>before</b> we arrived — Они ушли до того, как мы прибыли
        </p>
        <p>
          She had never seen that movie <b>before</b> — Она никогда не видела этот фильм до этого
        </p>
        <p>
          He had just left <b>when</b> we arrived — Он только что ушел, когда мы прибыли
        </p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Perfect - Time Markers"}
          text={"I had seen the movie _____ he arrived"}
          answer1={"before"}
          answer2={"after"}
          answer3={"when"}
          answer4={"just"}
          correctAnswer={"before"}
        />
        <ChooseExercise
          title={"Past Perfect - Time Markers"}
          text={"They had left _____ we arrived"}
          answer1={"before"}
          answer2={"after"}
          answer3={"just"}
          answer4={"when"}
          correctAnswer={"before"}
        />
        <InputExercise
          exampleName="Past Perfect - Time Markers"
          trueValue="by the time"
          tasktext="I had finished my work _____ he arrived (к тому времени)"
        />
      </div>

      <h2>Практические упражнения</h2>
      <div className="cards-container">
        <ChooseExercise
          title={"Past Perfect Practice"}
          text={"She _____ the book before the exam"}
          answer1={"had read"}
          answer2={"have read"}
          answer3={"was reading"}
          answer4={"reads"}
          correctAnswer={"had read"}
        />
        <ChooseExercise
          title={"Past Perfect Practice"}
          text={"_____ they _____ the project by the deadline?"}
          answer1={"Had, completed"}
          answer2={"Have, complete"}
          answer3={"Did, complete"}
          answer4={"Were, completing"}
          correctAnswer={"Had, completed"}
        />
        <InputExercise
          exampleName="Past Perfect Practice"
          trueValue="hadn't gone"
          tasktext="They _____ to the store before it closed (не пойти)"
        />
      </div>
    </>
  );
}

export default PastPerfect;

