import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";

function PresentSimple() {
  return (
    <>
      <h1>Present Simple - простое настоящее время</h1>
      <p>
        Время Present Simple обозначает действие в настоящем в широком смысле
        слова. Оно употребляется для обозначения обычных, регулярно
        повторяющихся или постоянных действий, например, когда мы говорим о
        чьих-либо привычках, режиме дня, расписании и т. д., т. е. Present
        Simple обозначает действия, которые происходят в настоящее время, но не
        привязаны именно к моменту речи.
      </p>
      <h2>Present Simple утверждение</h2>
      <div className="formula-container">
        <p>Формула образования</p>
        <p>
          <b>I, We, You, They</b> + verb
        </p>
        <p>
          <b>He, She, It</b> + verb + s
        </p>
      </div>

    <p></p>
    <p><b>Примеры: </b></p>
    <p>I work everyday</p>
    <p>He work<b>s</b> everyday</p>
    <hr/>
    <p>
        Если глагол заканчивается на -ss (pass), -zz (buzz), -x (fix), -sh (wash), -ch (teach), -о (go), прибавляем к нему окончание -es: passes, buzzes, fixes, washes, teaches, goes.  
    </p>
    <p>
        Если глагол заканчивается на -y, перед которой стоит гласная(play) — просто прибавляем окончание -s: plays 
    </p>
    <p>
        Если глагол заканчивается на -y, перед которой стоит согласная (cry) —окончание -y меняем на -i и прибавляем -es: cries  
    </p>
    <hr/>
    <p><b>Примеры: </b></p>
    <p>
        Bob (he) wash<b>es</b> dishes. — Боб моет посуду. 
    </p>
    <p>
    Mary (she) play<b>s</b> <b>the</b> piano. — Мэри играет на пианино.  
    </p>
    <div className="cards-container">
    <ChooseExercise
        title={"Present Simple"}
        text={"Kirill _________ water"}
        answer1={"drink"}
        answer2={"drinks"}
        answer3={"drinking"}
        answer4={"dranks"}
        correctAnswer={"drinks"}
      />
      <ChooseExercise
        title={"Present Simple"}
        text={"They _______ football on weekends"}
        answer1={"plays"}
        answer2={"playing"}
        answer3={"play"}
        answer4={"played"}
        correctAnswer={"play"}
      />
      <ChooseExercise
        title={"Present Simple"}
        text={"She _____ books every evening."}
        answer1={"reads"}
        answer2={"read"}
        answer3={"reading"}
        answer4={"readed"}
        correctAnswer={"reads"}
      />
    </div>
    <h2>Глагол to be в Present Simple</h2>
    <div className="formula-container">
        <p>Единственное число I <b>am</b> / You <b>are</b> / He, She, It <b>is</b></p>
        <p>Множественное число We, You, They <b>are</b></p>
    </div>
    <p></p>
    <p>Используется, если во времени Present Simple отсутствует глагол</p>
    <p>Обычно используется в вырожениях связанные с: </p>
    <p>Существования или уточнения состояния: She is happy. (Она счастлива.)</p>
    <p>Местонахождения: They are at home. (Они дома.)</p>
    <p>Временного состояния: He is tired. (Он устал.)</p>
    <p></p>
      <InputExercise
        exampleName={"Present Simple"}
        trueValue={"am"}
        tasktext={
          "I __ student"
        }
      />

      <ChooseExercise
        title={"Present Simple"}
        text={"Does he _______ enough?"}
        answer1={"make"}
        answer2={"makes"}
        answer3={"making"}
        answer4={"made"}
        correctAnswer={"make"}
      />

      <h2>Употребление глаголов do/does и have/has</h2>
    </>
  );
}

export default PresentSimple;
