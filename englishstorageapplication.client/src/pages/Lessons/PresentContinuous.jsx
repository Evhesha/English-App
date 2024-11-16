import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function PresentContinuous() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Present Continuous - настоящее длительное время</h1>
      </div>
      <p>
        Present Continuous указывает на процесс, действие, длящееся в определенный момент в настоящем. 
        Обычно это действие происходит непосредственно в момент речи.
      </p>

      <h2>Present Continuous утверждение</h2>
      <div className="formula-container">
        <p>Формула образования:</p>
        <p>
          <b>am/is/are</b> + verb + ing
        </p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I am playing - Я играю</p>
        <p>He/She/It is playing - Он/Она/Оно играет</p>
        <p>We/You/They are playing - Мы/Вы/Они играют</p>
      </div>

      <hr />
      <p>
        Для образования формы на -ing:
      </p>
      <ul>
        <li>Обычно просто добавляем -ing: play → playing</li>
        <li>Если глагол заканчивается на -e, убираем e и добавляем -ing: live → living</li>
        <li>Если односложный глагол заканчивается на согласную с предшествующей краткой гласной, удваиваем согласную: run → running</li>
      </ul>

      <div className="cards-container">
        <ChooseExercise
          title={"Present Continuous"}
          text={"She _____ a book now"}
          answer1={"read"}
          answer2={"reads"}
          answer3={"is reading"}
          answer4={"reading"}
          correctAnswer={"is reading"}
        />
        <ChooseExercise
          title={"Present Continuous"}
          text={"They _____ football at the moment"}
          answer1={"plays"}
          answer2={"are playing"}
          answer3={"play"}
          answer4={"playing"}
          correctAnswer={"are playing"}
        />
      </div>

      <h2>Present Continuous отрицание</h2>
      <div className="formula-container">
        <p>am/is/are + not + verb + ing</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I am not playing - Я не играю</p>
        <p>He is not (isn't) playing - Он не играет</p>
        <p>They are not (aren't) playing - Они не играют</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Present Continuous Negative"}
          text={"He _____ sleeping"}
          answer1={"is not"}
          answer2={"not"}
          answer3={"does not"}
          answer4={"are not"}
          correctAnswer={"is not"}
        />
      </div>

      <h2>Present Continuous вопросительное</h2>
      <div className="formula-container">
        <p>am/is/are + subject + verb + ing?</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>Am I playing? - Я играю?</p>
        <p>Is he playing? - Он играет?</p>
        <p>Are they playing? - Они играют?</p>
      </div>

      <h2>Маркеры времени Present Continuous</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Основные маркеры:</h3>
          <ul>
            <li>now - сейчас</li>
            <li>at the moment - в данный момент</li>
            <li>at present - в настоящее время</li>
            <li>currently - в настоящее время</li>
            <li>Look! - Смотри!</li>
            <li>Listen! - Слушай!</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I am working <b>now</b> - Я работаю сейчас</p>
        <p>She is sleeping <b>at the moment</b> - Она спит в данный момент</p>
        <p><b>Look!</b> It is raining - Смотри! Идет дождь</p>
      </div>

      <div className="cards-container">
        <InputExercise
          exampleName="Present Continuous"
          trueValue="is studying"
          tasktext="He ___ for his exam right now (study)"
        />
        <InputExercise
          exampleName="Present Continuous"
          trueValue="are watching"
          tasktext="They ___ TV at the moment (watch)"
        />
      </div>
    </>
  );
}

export default PresentContinuous;