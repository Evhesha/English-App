import Card from "../Card";
import travelingImage from "../dict-images/traveling.png";

function TopicsPage(){

    return <>
      <Card
       title={"Traveling"}
       image={<img src={travelingImage} className="card-img-top" alt="..."></img>}
       text={"Traveling topic"}
       link={"/traveling-topic"}
       />
    </>
}



export default TopicsPage;