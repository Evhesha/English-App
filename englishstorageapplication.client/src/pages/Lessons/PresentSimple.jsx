import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise"

function PresentSimple(){
    return <>
        <h1>Present Simple - простое настоящее время</h1>
        <p>
        Время Present Simple обозначает действие в настоящем в широком смысле слова. Оно употребляется для обозначения обычных, регулярно повторяющихся или постоянных действий, например, когда мы говорим о чьих-либо привычках, режиме дня, расписании и т. д., т. е. Present Simple обозначает действия, которые происходят в настоящее время, но не привязаны именно к моменту речи.
        </p>
        <InputExercise exampleName={'Present Simple'} trueValue={'present'} 
        tasktext={"With supporting text below as __________ lead-in to additional content."}
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
    </>
}

export default PresentSimple;