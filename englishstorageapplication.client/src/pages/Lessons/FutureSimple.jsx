import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";

function FutureSimple() {
  return (
    <>
      <h1>Future Simple - простое будущее время</h1>
      <p>
        Future Simple (простое будущее время) используется для высказывания предположений о будущем 
        или о событиях, которые точно произойдут и на которые мы не можем повлиять. 
        Также это время применяется для обещаний, угроз, предупреждений и предостережений.
      </p>

      <h2>Случаи употребления Future Simple</h2>
      <div className="usage-box">
        <ol>
          <li>Предсказания и предположения о будущем:
            <p><i>I think it will rain tomorrow — Я думаю, завтра будет дождь</i></p>
          </li>
          <li>Спонтанные решения:
            <p><i>I will help you with your bags — Я помогу тебе с сумками</i></p>
          </li>
          <li>Обещания:
            <p><i>I will always love you — Я всегда буду любить тебя</i></p>
          </li>
          <li>Угрозы или предупреждения:
            <p><i>You will regret this — Ты пожалеешь об этом</i></p>
          </li>
        </ol>
      </div>

      <h2>Future Simple утверждение</h2>
      <div className="formula-container">
        <p>Формула образования</p>
        <p>
          <b>Подлежащее</b> + will + глагол
        </p>
      </div>

      <div className="important-box">
        <p><b>Важно!</b> Will используется для всех лиц и чисел:</p>
        <p>I will</p>
        <p>You will</p>
        <p>He/She/It will</p>
        <p>We will</p>
        <p>They will</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры: </b></p>
        <p>I will work tomorrow — Я буду работать завтра</p>
        <p>She will help you — Она поможет тебе</p>
        <p>They will arrive next week — Они приедут на следующей неделе</p>
        <p>The sun will rise at 6 AM — Солнце взойдет в 6 утра</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Simple"}
          text={"I _____ help you tomorrow"}
          answer1={"will"}
          answer2={"shall"}
          answer3={"am"}
          answer4={"do"}
          correctAnswer={"will"}
        />
        <ChooseExercise
          title={"Future Simple"}
          text={"The movie _____ start at 8 PM"}
          answer1={"will"}
          answer2={"is"}
          answer3={"does"}
          answer4={"has"}
          correctAnswer={"will"}
        />
        <InputExercise
          exampleName="Future Simple"
          trueValue="will play"
          tasktext="We _____ football next Sunday (играть)"
        />
      </div>

      <h2>Future Simple отрицание</h2>
      <div className="formula-container">
        <p>Подлежащее + will not (won't) + глагол</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I won't work tomorrow — Я не буду работать завтра</p>
        <p>She will not help you — Она не поможет тебе</p>
        <p>They won't come to the party — Они не придут на вечеринку</p>
        <p>It won't rain tonight — Сегодня вечером не будет дождя</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Simple Negative"}
          text={"He _____ come to the party"}
          answer1={"won't"}
          answer2={"will not"}
          answer3={"not will"}
          answer4={"doesn't"}
          correctAnswer={"won't"}
        />
        <ChooseExercise
          title={"Future Simple Negative"}
          text={"We _____ be late"}
          answer1={"won't"}
          answer2={"don't"}
          answer3={"not"}
          answer4={"aren't"}
          correctAnswer={"won't"}
        />
        <InputExercise
          exampleName="Future Simple Negative"
          trueValue="won't buy"
          tasktext="I _____ this car (не купить)"
        />
      </div>

      <h2>Future Simple вопросительное</h2>
      <div className="formula-container">
        <p>Will + подлежащее + глагол?</p>
      </div>

      <h3>Общие вопросы</h3>
      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>Will you help me? — Ты поможешь мне?</p>
        <p>Will she come tomorrow? — Она придёт завтра?</p>
        <p>Will they win the match? — Они выиграют матч?</p>
      </div>

      <h3>Специальные вопросы</h3>
      <div className="formula-container">
        <p>Вопросительное слово + will + подлежащее + глагол?</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>When will you come? — Когда ты придёшь?</p>
        <p>Where will they go? — Куда они пойдут?</p>
        <p>What will she cook? — Что она приготовит?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Simple Questions"}
          text={"_____ you help me tomorrow?"}
          answer1={"Will"}
          answer2={"Do"}
          answer3={"Are"}
          answer4={"Have"}
          correctAnswer={"Will"}
        />
        <ChooseExercise
          title={"Future Simple Questions"}
          text={"_____ will they arrive?"}
          answer1={"When"}
          answer2={"Do"}
          answer3={"Will"}
          answer4={"Are"}
          correctAnswer={"When"}
        />
        <InputExercise
          exampleName="Future Simple Questions"
          trueValue="will go"
          tasktext="Where _____ they _____? (идти)"
        />
      </div>

      <h2>Маркеры времени Future Simple</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Основные маркеры:</h3>
          <ul>
            <li>tomorrow — завтра</li>
            <li>next week/month/year — на следующей неделе/в следующем месяце/году</li>
            <li>in the future — в будущем</li>
            <li>tonight — сегодня вечером</li>
            <li>soon — скоро</li>
            <li>in a week/month/year — через неделю/месяц/год</li>
            <li>the day after tomorrow — послезавтра</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p><b>Примеры с маркерами времени:</b></p>
        <p>I will call you <b>tomorrow</b> — Я позвоню тебе завтра</p>
        <p>They will move to London <b>next year</b> — Они переедут в Лондон в следующем году</p>
        <p>She will graduate <b>in two months</b> — Она закончит учебу через два месяца</p>
        <p>We will meet <b>soon</b> — Мы скоро встретимся</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Future Simple - Time Markers"}
          text={"I will see you _____"}
          answer1={"tomorrow"}
          answer2={"yesterday"}
          answer3={"last week"}
          answer4={"now"}
          correctAnswer={"tomorrow"}
        />
        <ChooseExercise
          title={"Future Simple - Time Markers"}
          text={"They will move _____ month"}
          answer1={"next"}
          answer2={"last"}
          answer3={"this"}
          answer4={"previous"}
          correctAnswer={"next"}
        />
        <InputExercise
          exampleName="Future Simple - Time Markers"
          trueValue="soon"
          tasktext="He will arrive _____ (скоро)"
        />
      </div>

      <h2>Практические упражнения</h2>
      <div className="cards-container">
        <ChooseExercise
          title={"Future Simple Practice"}
          text={"The weather _____ be nice tomorrow"}
          answer1={"will"}
          answer2={"is"}
          answer3={"was"}
          answer4={"were"}
          correctAnswer={"will"}
        />
        <ChooseExercise
          title={"Future Simple Practice"}
          text={"_____ they _____ to the party?"}
          answer1={"Will, come"}
          answer2={"Do, come"}
          answer3={"Are, coming"}
          answer4={"Have, come"}
          correctAnswer={"Will, come"}
        />
        <InputExercise
          exampleName="Future Simple Practice"
          trueValue="won't rain"
          tasktext="It _____ tomorrow (не будет дождя)"
        />
      </div>
    </>
  );
}

export default FutureSimple;