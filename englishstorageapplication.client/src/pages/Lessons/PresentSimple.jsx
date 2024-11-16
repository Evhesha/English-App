import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function PresentSimple() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
        <h1 style={{ marginLeft: "20px" }}>Present Simple - простое настоящее время</h1>
      </div>
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
      <p>
        <b>Примеры: </b>
      </p>
      <p>I work everyday</p>
      <p>
        He work<b>s</b> everyday
      </p>
      <hr />
      <p>
        Если глагол заканчивается на -ss (pass), -zz (buzz), -x (fix), -sh
        (wash), -ch (teach), -о (go), прибавляем к нему окончание -es: passes,
        buzzes, fixes, washes, teaches, goes. 
      </p>
      <p>
        Если глагол заканчивается на -y, перед которой стоит гласная(play) —
        просто прибавляем окончание -s: plays
      </p>
      <p>
        Если глагол заканчивается на -y, перед которой стоит согласная (cry)
        —окончание -y меняем на -i и прибавляем -es: cries 
      </p>
      <hr />
      <p>
        <b>Примеры: </b>
      </p>
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
      <h2>Present Simple отрицание</h2>
      <p>
        Чтобы составить отрицательное предложение — нужно поставить
        вспомогательный глагол между подлежащим и глаголом.
      </p>
      <div className="formula-container">
        <p>I / We / You / They + do not (don't) + V</p>
        <p>She / He / It + does not (doesn't) + V</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>I don't work on Sundays. — Я не работаю по воскресеньям.</p>
        <p>She doesn't like coffee. — Она не любит кофе.</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Present Simple Negative"}
          text="Tom _____ like spicy food."
          answer1="don't"
          answer2="doesn't"
          answer3="not"
          answer4="isn't"
          correctAnswer="doesn't"
        />

        <ChooseExercise
          title={"Present Simple Negative"}
          text="We _____ live in Paris."
          answer1="doesn't"
          answer2="don't"
          answer3="not"
          answer4="aren't"
          correctAnswer="don't"
        />

        <ChooseExercise
          title={"Present Simple Negative"}
          text="The shop _____ open on Sundays."
          answer1="don't"
          answer2="doesn't"
          answer3="isn't"
          answer4="not"
          correctAnswer="doesn't"
        />
      </div>

      <h2>Present Simple вопросительное</h2>
      <p>
        При составлении вопросительных предложений вспомогательный глагол
        ставится перед подлежащим и последующим глаголом. Обычно — в начало
        предложения.
      </p>

      <div className="formula-container">
        <p>Do + I / we / you / they + V ?</p>
        <p>Does + she / he / it + V ?</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>Do you like pizza? — Тебе нравится пицца?</p>
        <p>Does she learn Russian? — Она изучает русский язык?</p>
      </div>

      <div className="important-box">
        <p>
          <b>Важно!</b> Когда в предложении появляется вспомогательный глагол —
          у основного глагола пропадает окончание -s.
        </p>
      </div>

      <h3>Специальные вопросы</h3>
      <p>
        При использовании вопросительных слов (why, where, how, when и т.д.),
        они ставятся в начало предложения:
      </p>

      <div className="formula-container">
        <p>Question Word + do/does + subject + V ?</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>Where does he live? — Где он живёт?</p>
        <p>Why do you drink coffee? — Почему ты пьёшь кофе?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title={"Present Simple question"}
          text="_____ you speak English?"
          answer1="Do"
          answer2="Does"
          answer3="Are"
          answer4="Is"
          correctAnswer="Do"
        />

        <ChooseExercise
          title={"Present Simple question"}
          text="_____ she play tennis?"
          answer1="Do"
          answer2="Does"
          answer3="Is"
          answer4="Are"
          correctAnswer="Does"
        />

        <ChooseExercise
          title={"Present Simple question"}
          text="_____ they live in London?"
          answer1="Do"
          answer2="Does"
          answer3="Are"
          answer4="Is"
          correctAnswer="Do"
        />
      </div>

      <h2>Глагол to be в Present Simple</h2>
      <p>
        Глагол to be (быть) всегда является особенным и его употребление во
        времени Present Simple зависит от подлежащего. Он имеет 3 разных формы:
      </p>

      <div className="formula-container">
        <p>
          <b>am</b> (для 1-го лица единственного числа: I)
        </p>
        <p>
          <b>is</b> (для 3-го лица единственного числа: she / he / it)
        </p>
        <p>
          <b>are</b> (для 1-го, 2-го и 3-го лица множественного числа: we / you
          / they)
        </p>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>
          I <b>am</b> ready — Я готов
        </p>
        <p>
          She <b>is</b> ready — Она готова
        </p>
        <p>
          We <b>are</b> ready — Мы готовы
        </p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title="Present Simple - to be"
          text="I ___ a student"
          answer1="am"
          answer2="is"
          answer3="are"
          answer4="be"
          correctAnswer="am"
        />

        <ChooseExercise
          title="Present Simple - to be"
          text="They ___ at home"
          answer1="am"
          answer2="is"
          answer3="are"
          answer4="be"
          correctAnswer="are"
        />

        <ChooseExercise
          title="Present Simple - to be"
          text="The weather ___ nice today"
          answer1="am"
          answer2="is"
          answer3="are"
          answer4="be"
          correctAnswer="is"
        />
      </div>

      <div className="examples-box">
        <p>
          <b>Отрицательная форма:</b>
        </p>
        <p>I am not (I'm not)</p>
        <p>He/She/It is not (isn't)</p>
        <p>We/You/They are not (aren't)</p>
      </div>

      <div className="examples-box">
        <p>
          <b>Вопросительная форма:</b>
        </p>
        <p>Am I...?</p>
        <p>Is he/she/it...?</p>
        <p>Are we/you/they...?</p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          text="She ___ happy"
          answer1="am not"
          answer2="isn't"
          answer3="aren't"
          answer4="not"
          correctAnswer="isn't"
        />

        <ChooseExercise
          text="___ you a teacher?"
          answer1="Am"
          answer2="Is"
          answer3="Are"
          answer4="Be"
          correctAnswer="Are"
        />
      </div>

      <h2>Маркеры времени Present Simple</h2>

      <p>
        Для того, чтобы лучше сориентироваться где и когда употребляются глаголы
        Present Simple — обратите внимание на особые маркеры в тексте.
      </p>
      <p>
        Такими «маячками» для Present Simple являются наречия (often, always,
        usually, etc.) и указатели времени (every day, in the morning, on
        Fridays, etc.).
      </p>

      <div className="time-markers">
        <div className="marker-group">
          <h3>Наречия частоты:</h3>
          <ul>
            <li>always - всегда</li>
            <li>usually - обычно</li>
            <li>often - часто</li>
            <li>sometimes - иногда</li>
            <li>rarely - редко</li>
            <li>never - никогда</li>
          </ul>
        </div>

        <div className="marker-group">
          <h3>Указатели времени:</h3>
          <ul>
            <li>every day/week/month/year - каждый день/неделю/месяц/год</li>
            <li>in the morning/afternoon/evening - утром/днем/вечером</li>
            <li>
              on Mondays/Tuesdays etc. - по понедельникам/вторникам и т.д.
            </li>
            <li>twice a day/week - дважды в день/неделю</li>
          </ul>
        </div>
      </div>

      <div className="examples-box">
        <p>
          <b>Примеры:</b>
        </p>
        <p>
          She <b>always</b> drinks coffee in the morning — Она всегда пьет кофе
          по утрам
        </p>
        <p>
          I <b>usually</b> wake up at 6 am — Обычно я просыпаюсь в 6 утра
        </p>
        <p>
          They <b>often</b> talk about sport — Они часто говорят о спорте
        </p>
        <p>
          I check my smartphone <b>every 15 minutes</b> — Я проверяю свой
          телефон каждые 15 минут
        </p>
        <p>
          He takes a shower <b>twice a day</b> — Он принимает душ два раза в
          день
        </p>
        <p>
          <b>On Mondays</b> we go to the central park — По понедельникам мы
          ходим в центральный парк
        </p>
        <p>
          He comes here <b>sometimes</b> — Иногда он приходит сюда
        </p>
      </div>

      <div className="cards-container">
        <ChooseExercise
          title="Present Simple - Time Markers"
          text="He ___ goes to gym"
          answer1="always"
          answer2="yesterday"
          answer3="last week"
          answer4="now"
          correctAnswer="always"
        />

        <ChooseExercise
          title="Present Simple - Time Markers"
          text="We play football ___ "
          answer1="every Sunday"
          answer2="yesterday"
          answer3="last week"
          answer4="now"
          correctAnswer="every Sunday"
        />

        <InputExercise
          exampleName="Present Simple - Time Markers"
          trueValue="usually"
          tasktext="I ___ drink tea in the morning (обычно)"
        />

        <InputExercise
          exampleName="Present Simple - Time Markers"
          trueValue="sometimes"
          tasktext="They ___ visit their grandparents (иногда)"
        />
      </div>
    </>
  );
}

export default PresentSimple;
