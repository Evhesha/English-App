import TestCardLink from "../TestCardLink";
import { Link } from "react-router-dom";

function ByLevelTestPage(){

    return <>
        <h1>By level test page</h1>
        <TestCardLink link={"/A0-test"}  text={"Level A0"} title={"A0"}></TestCardLink>
    
    </>
}

export default ByLevelTestPage;