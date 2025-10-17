import ChooseExercise from "../../../Components/Exercise/ChooseExercise";
import InputExercise from "../../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../../Components/Buttons/ToLinkButton/ToLinkButton";

function PresentPerfectContinuous() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Present Perfect Continuous - настоящее совершенное длительное время</h1>
      </div>
      <p>
        Present Perfect Continuous указывает на действие, которое началось в прошлом, 
        продолжалось в течение некоторого времени и либо закончилось непосредственно 
        перед разговором или все еще продолжается в момент разговора.
      </p>

      <h2>Present Perfect Continuous утверждение</h2>
      <div className="formula-container">
        <p>Формула образования</p>
        <p>
          <b>have/has been + V-ing</b>
        </p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I have been waiting here for 2 hours! — Я прождал здесь два часа!</p>
        <p>We have been preparing for our exam since morning. — Мы готовились к экзамену с самого утра.</p>
      </div>

      <h2>Present Perfect Continuous отрицание</h2>
      <div className="formula-container">
        <p>have/has + not + been + V-ing</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>It has not been snowing here since 1993. — Здесь не было снега с 1993 года.</p>
        <p>I have not been sleeping well lately. — В последнее время я плохо сплю.</p>
      </div>

      <h2>Present Perfect Continuous вопросительное</h2>
      <div className="formula-container">
        <p>Have/Has + subject + been + V-ing?</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>Have you been smoking? — Ты что, курил?</p>
        <p>Has she been using my car again? — Она опять пользовалась моей машиной?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Present Perfect Continuous"}
          text={"They _________ working on this project for months"}
          answer1={"has been"}
          answer2={"have been"}
          answer3={"had been"}
          answer4={"are"}
          correctAnswer={"have been"}
        />
        
        <ChooseExercise
          title={"Present Perfect Continuous"}
          text={"She _________ learning English since January"}
          answer1={"have been"}
          answer2={"has been"}
          answer3={"had been"}
          answer4={"is"}
          correctAnswer={"has been"}
        />

        <ChooseExercise
          title={"Present Perfect Continuous"}
          text={"How long _________ you waiting here?"}
          answer1={"has been"}
          answer2={"have been"}
          answer3={"had been"}
          answer4={"are"}
          correctAnswer={"have been"}
        />
      </div>

      <h2>Случаи употребления Present Perfect Continuous</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Употребляется для описания:</h3>
          <ul>
            <li>Действия, которое началось в прошлом и продолжается до момента речи</li>
            <li>Действия, которое только что закончилось, и виден его результат</li>
          </ul>
        </div>

        <div className="marker-group">
          <h3>Маркеры времени:</h3>
          <ul>
            <li>for - в течение</li>
            <li>since - с (какого-то момента)</li>
            <li>lately - в последнее время</li>
            <li>recently - недавно</li>
            <li>all day - весь день</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>The workers have been trying to move our wardrobe for half an hour. — Рабочие вот уже полчаса пытаются сдвинуть наш шкаф.</p>
        <p>Do you like this cake? I have been baking it since morning. — Тебе нравится этот пирог? Я пекла его с самого утра.</p>
      </div>

      <div className="cards-container">
        <InputExercise
          exampleName="Present Perfect Continuous"
          trueValue="have been reading"
          tasktext="I ___ this book for three hours (читать)"
        />

        <InputExercise
          exampleName="Present Perfect Continuous"
          trueValue="has been raining"
          tasktext="It ___ all day (идти дождь)"
        />
      </div>
    </>
  );
}

export default PresentPerfectContinuous;