import ChooseExercise from "../../../Components/Exercise/ChooseExercise";
import InputExercise from "../../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../../Components/Buttons/ToLinkButton/ToLinkButton";

function PastPerfectContinuous(){

    return (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
            <h1 style={{ marginLeft: "20px" }}>Past Perfect Continuous</h1>
          </div>
          </>
    );
}

export default PastPerfectContinuous;