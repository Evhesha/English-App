import ChooseExercise from "../../../Components/Exercise/ChooseExercise";
import InputExercise from "../../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../../Components/Buttons/ToLinkButton/ToLinkButton";

function FutureContinuous() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Future Continuous - будущее продолженное время</h1>
      </div>
      <p>
        Future Continuous (будущее продолженное время) используется для описания действия, которое будет происходить в определенный момент в будущем. Это время часто используется для указания на действия, которые будут происходить в определенное время или в течение какого-то периода в будущем.
      </p>

      <h2>Случаи употребления Future Continuous</h2>
      <div className="usage-box">
        <ol>
          <li>
            Действие, которое будет происходить в определенный момент в будущем:
            <p>
              <i>At 8 o'clock tomorrow, I will be studying — Завтра в 8 часов я буду учиться</i>
            </p>
          </li>
          <li>
            Действие, которое будет происходить в течение определенного периода в будущем:
            <p>
              <i>Next week, they will be traveling around Europe — На следующей неделе они будут путешествовать по Европе</i>
            </p>
          </li>
          <li>
            Вежливые вопросы о планах:
            <p>
              <i>Will you be using the car tomorrow? — Ты будешь пользоваться машиной завтра?</i>
            </p>
          </li>
        </ol>
      </div>

      <h2>Future Continuous утверждение</h2>
      <div className="formula-container">
        <p>Формула образования</p>
        <p>
          <b>Подлежащее</b> + will be + глагол с окончанием -ing
        </p>
      </div>

      <div className="important-box">
        <p>
          <b>Важно!</b> Will используется для всех лиц и чисел:
        </p>
        <p>I will be</p>
        <p>You will be</p>
        <p>He/She/It will be</p>
        <p>We will be</p>
        <p>They will be</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I will be working at 6 PM — Я буду работать в 6 вечера</p>
        <p>She will be watching TV when you arrive — Она будет смотреть телевизор, когда ты придешь</p>
        <p>They will be playing football tomorrow afternoon — Они будут играть в футбол завтра днем</p>
        <p>The sun will be setting at 7 PM — Солнце будет садиться в 7 вечера</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Continuous"}
          text={"I _____ be working at 6 PM"}
          answer1={"will"}
          answer2={"will be"}
          answer3={"am"}
          answer4={"shall"}
          correctAnswer={"will be"}
        />
        <ChooseExercise
          title={"Future Continuous"}
          text={"They _____ be playing football tomorrow"}
          answer1={"will"}
          answer2={"will be"}
          answer3={"are"}
          answer4={"was"}
          correctAnswer={"will be"}
        />
        <InputExercise
          exampleName="Future Continuous"
          trueValue="will be watching"
          tasktext="She _____ TV when you arrive (смотреть)"
        />
      </div>

      <h2>Future Continuous отрицание</h2>
      <div className="formula-container">
        <p>Подлежащее + will not be (won't be) + глагол с окончанием -ing</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I won't be working at 6 PM — Я не буду работать в 6 вечера</p>
        <p>She won't be watching TV when you arrive — Она не будет смотреть телевизор, когда ты придешь</p>
        <p>They won't be playing football tomorrow afternoon — Они не будут играть в футбол завтра днем</p>
        <p>It won't be raining tonight — Сегодня вечером не будет дождя</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Continuous Negative"}
          text={"He _____ be coming to the party"}
          answer1={"won't be"}
          answer2={"will not be"}
          answer3={"not will be"}
          answer4={"doesn't be"}
          correctAnswer={"won't be"}
        />
        <ChooseExercise
          title={"Future Continuous Negative"}
          text={"We _____ be watching the movie"}
          answer1={"won't be"}
          answer2={"don't be"}
          answer3={"not be"}
          answer4={"aren't be"}
          correctAnswer={"won't be"}
        />
        <InputExercise
          exampleName="Future Continuous Negative"
          trueValue="won't be driving"
          tasktext="I _____ this car tomorrow (не водить)"
        />
      </div>

      <h2>Future Continuous вопросительное</h2>
      <div className="formula-container">
        <p>Will + подлежащее + be + глагол с окончанием -ing?</p>
      </div>

      <h3>Общие вопросы</h3>
      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>Will you be helping me? — Ты будешь помогать мне?</p>
        <p>Will she be coming tomorrow? — Она придет завтра?</p>
        <p>Will they be playing the match? — Они будут играть в матч?</p>
      </div>

      <h3>Специальные вопросы</h3>
      <div className="formula-container">
        <p>Вопросительное слово + will + подлежащее + be + глагол с окончанием -ing?</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>When will you be coming? — Когда ты придешь?</p>
        <p>Where will they be going? — Куда они будут идти?</p>
        <p>What will she be cooking? — Что она будет готовить?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Continuous Questions"}
          text={"_____ you be helping me tomorrow?"}
          answer1={"Will"}
          answer2={"Do"}
          answer3={"Are"}
          answer4={"Have"}
          correctAnswer={"Will"}
        />
        <ChooseExercise
          title={"Future Continuous Questions"}
          text={"_____ will they be going?"}
          answer1={"When"}
          answer2={"Do"}
          answer3={"Will"}
          answer4={"Are"}
          correctAnswer={"When"}
        />
        <InputExercise
          exampleName="Future Continuous Questions"
          trueValue="will be working"
          tasktext="What _____ you _____? (делать)"
        />
      </div>

      <h2>Маркеры времени Future Continuous</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Основные маркеры:</h3>
          <ul>
            <li>at 5 o'clock — в 5 часов</li>
            <li>this time tomorrow — в это время завтра</li>
            <li>next week/month/year — на следующей неделе/в следующем месяце/году</li>
            <li>for two hours — в течение двух часов</li>
            <li>at noon — в полдень</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры с маркерами времени:</b>
        </p>
        <p>
          I will be studying <b>at 5 o'clock</b> — Я буду учиться в 5 часов
        </p>
        <p>
          They will be traveling around Europe <b>next week</b> — Они будут путешествовать по Европе на следующей неделе
        </p>
        <p>
          She will be cooking dinner <b>this time tomorrow</b> — Она будет готовить ужин в это время завтра
        </p>
        <p>
          We will be working on the project <b>for two hours</b> — Мы будем работать над проектом в течение двух часов
        </p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Continuous - Time Markers"}
          text={"I will be reading a book _____"}
          answer1={"tomorrow"}
          answer2={"yesterday"}
          answer3={"last week"}
          answer4={"now"}
          correctAnswer={"tomorrow"}
        />
        <ChooseExercise
          title={"Future Continuous - Time Markers"}
          text={"They will be moving _____ month"}
          answer1={"next"}
          answer2={"last"}
          answer3={"this"}
          answer4={"previous"}
          correctAnswer={"next"}
        />
        <InputExercise
          exampleName="Future Continuous - Time Markers"
          trueValue="next week"
          tasktext="We will be traveling around Europe _____ (на следующей неделе)"
        />
      </div>

      <h2>Практические упражнения</h2>
      <div className="cards-container">
        <ChooseExercise
          title={"Future Continuous Practice"}
          text={"The weather _____ be getting colder tomorrow"}
          answer1={"will"}
          answer2={"will be"}
          answer3={"is"}
          answer4={"was"}
          correctAnswer={"will be"}
        />
        <ChooseExercise
          title={"Future Continuous Practice"}
          text={"_____ they _____ dinner at 8 PM?"}
          answer1={"Will, be having"}
          answer2={"Do, have"}
          answer3={"Are, having"}
          answer4={"Have, had"}
          correctAnswer={"Will, be having"}
        />
        <InputExercise
          exampleName="Future Continuous Practice"
          trueValue="won't be snowing"
          tasktext="It _____ tomorrow (не будет снега)"
        />
      </div>
    </>
  );
}

export default FutureContinuous;
