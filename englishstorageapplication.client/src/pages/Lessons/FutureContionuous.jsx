import ChooseExercise from "../../Components/Exercise/ChooseExercise";
import InputExercise from "../../Components/Exercise/InputExercise";
import "../Lessons/Lessons.css";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function FutureContinuous(){

    return (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ToLinkButton link="/list-lessons-page" placeholder={"Lessons"} />
            <h1 style={{ marginLeft: "20px" }}>Future Continuous</h1>
          </div>
          </>
    );
}

export default FutureContinuous;