import ChooseExercise from "../../../Components/Exercise/ChooseExercise";
import InputExercise from "../../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../../Components/Buttons/ToLinkButton/ToLinkButton";

function PresentPerfect() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Present Perfect - настоящее совершенное время</h1>
      </div>
      <p>
        Present Perfect обозначает действие, которое завершилось к настоящему моменту или 
        завершено в период настоящего времени. Хотя глаголы в Present Perfect обычно 
        переводятся на русский язык в прошедшем времени, следует помнить, что в английском 
        языке эти действия воспринимаются в настоящем времени, так как привязаны к настоящему 
        результатом этого действия.
      </p>

      <h2>Present Perfect утверждение</h2>
      <div className="formula-container">
        <p>Формула образования:</p>
        <p><b>have/has + Participle II (V3)</b></p>
        <p><b>I/We/You/They</b> + have + V3</p>
        <p><b>He/She/It</b> + has + V3</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I have already done my homework — Я уже сделал домашнее задание</p>
        <p>She has fallen ill — Она заболела</p>
      </div>

      <div className="important-box">
        <p><b>Важно!</b> Причастие II (Participle II) образуется:</p>
        <p>• Для правильных глаголов: добавлением окончания -ed</p>
        <p>• Для неправильных глаголов: используется третья форма из таблицы неправильных глаголов</p>
      </div>

      <h2>Present Perfect отрицание</h2>
      <div className="formula-container">
        <p>I/We/You/They + have not (haven't) + V3</p>
        <p>He/She/It + has not (hasn't) + V3</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I haven't seen him since then — С тех пор я его не видел</p>
        <p>She hasn't finished her work — Она не закончила свою работу</p>
      </div>

      <h2>Present Perfect вопрос</h2>
      <div className="formula-container">
        <p>Have + I/we/you/they + V3 ?</p>
        <p>Has + he/she/it + V3 ?</p>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>Have you seen this film? — Ты видел этот фильм?</p>
        <p>Has she come yet? — Она уже пришла?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title="Present Perfect"
          text="He ___ finished his work"
          answer1="have"
          answer2="has"
          answer3="had"
          answer4="is"
          correctAnswer="has"
        />

        <ChooseExercise
          title="Present Perfect"
          text="They ___ already left"
          answer1="has"
          answer2="have"
          answer3="had"
          answer4="are"
          correctAnswer="have"
        />

        <ChooseExercise
          title="Present Perfect"
          text="She ___ not arrived yet"
          answer1="have"
          answer2="has"
          answer3="had"
          answer4="is"
          correctAnswer="has"
        />
      </div>

      <h2>Маркеры времени Present Perfect</h2>
      <div className="time-markers">
        <div className="marker-group">
          <h3>Основные маркеры:</h3>
          <ul>
            <li>already - уже</li>
            <li>just - только что</li>
            <li>yet - уже (в вопросах) / еще (в отрицаниях)</li>
            <li>ever - когда-либо</li>
            <li>never - никогда</li>
            <li>recently - недавно</li>
            <li>lately - в последнее время</li>
            <li>since - с (какого-то момента)</li>
            <li>for - в течение</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p><b>Примеры:</b></p>
        <p>I have just finished my work — Я только что закончил свою работу</p>
        <p>Have you ever been to Paris? — Ты когда-нибудь был в Париже?</p>
        <p>She hasn't called me yet — Она еще не звонила мне</p>
        <p>We have lived here for 5 years — Мы живем здесь 5 лет</p>
        <p>He has worked here since 2010 — Он работает здесь с 2010 года</p>
      </div>
    </>
  );
}

export default PresentPerfect;