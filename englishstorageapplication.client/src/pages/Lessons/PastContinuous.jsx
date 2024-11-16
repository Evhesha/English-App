import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function PastContinuous() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Past Continuous - прошедшее длительное время</h1>
      </div>
      <p>
        Время Past Continuous указывает на процесс, длившийся в определенный момент или 
        период в прошлом. В отличие от времени Past Simple, этот момент в прошлом должен 
        быть назван прямо (например, yesterday at 5 o'clock, when you called, when rain started) 
        или быть очевидным из контекста.
      </p>

      <h2>Past Continuous утверждение</h2>
      <div className="formula-container">
        <p>Формула образования:</p>
        <p>was/were + V-ing</p>
        <p><b>was</b> - для I, he, she, it</p>
        <p><b>were</b> - для we, you, they</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I was playing - Я играл</p>
        <p>He was reading - Он читал</p>
        <p>They were working - Они работали</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Continuous"}
          text={"She _____ watching TV at 8 PM"}
          answer1={"was"}
          answer2={"were"}
          answer3={"is"}
          answer4={"are"}
          correctAnswer={"was"}
        />
        <ChooseExercise
          title={"Past Continuous"}
          text={"They _____ sleeping when the phone rang"}
          answer1={"was"}
          answer2={"were"}
          answer3={"is"}
          answer4={"are"}
          correctAnswer={"were"}
        />
      </div>

      <h2>Past Continuous отрицание</h2>
      <div className="formula-container">
        <p>was/were + not + V-ing</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I was not (wasn't) playing - Я не играл</p>
        <p>They were not (weren't) working - Они не работали</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Continuous Negative"}
          text={"He _____ studying at that time"}
          answer1={"wasn't"}
          answer2={"weren't"}
          answer3={"didn't"}
          answer4={"doesn't"}
          correctAnswer={"wasn't"}
        />
      </div>

      <h2>Past Continuous вопрос</h2>
      <div className="formula-container">
        <p>Was/Were + subject + V-ing?</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>Was I playing? - Я играл?</p>
        <p>Were they working? - Они работали?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Past Continuous Question"}
          text={"_____ you sleeping when I called?"}
          answer1={"Was"}
          answer2={"Were"}
          answer3={"Did"}
          answer4={"Do"}
          correctAnswer={"Were"}
        />
      </div>

      <h2>Случаи употребления Past Continuous</h2>
      <div className="examples-box">
        <p><b>1. Действие, происходившее в определенный момент в прошлом:</b></p>
        <p>I was sleeping when someone knocked at the door - Я спал, когда кто-то постучал в дверь</p>
        
        <p><b>2. Два параллельных действия в прошлом:</b></p>
        <p>While I was cooking, my wife was watching TV - Пока я готовил, моя жена смотрела телевизор</p>
      </div>

      <div className="cards-container">
        <InputExercise
          exampleName="Past Continuous"
          trueValue="was reading"
          tasktext="I _____ a book when she came (читал)"
        />
        <InputExercise
          exampleName="Past Continuous"
          trueValue="were playing"
          tasktext="The children _____ in the garden all day (играли)"
        />
      </div>
    </>
  );
}

export default PastContinuous;