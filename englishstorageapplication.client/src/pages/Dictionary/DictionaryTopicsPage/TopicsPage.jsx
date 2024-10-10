import Card from "../Card";
import "../DictionaryTopicsPage/TopicsPage.css"

import travelingImage from "../dict-images/traveling.png";
import cookingImage from "../dict-images/cooking.png";
import shoppingImage from "../dict-images/shopping.png";

function TopicsPage() {
  return (
    <>
      <div className="card-container">
        <Card
          title={"Traveling"}
          image={
            <img src={travelingImage} className="card-img-top" alt="..."></img>
          }
          text={"Traveling topic"}
          link={"/traveling-topic"}
        />
        <Card
          title={"Cooking"}
          image={
            <img src={cookingImage} className="card-img-top" alt="..."></img>
          }
          text={"Cooking topic"}
          link={"/cooking-topic"}
        />
        <Card
          title={"Traveling"}
          image={
            <img src={shoppingImage} className="card-img-top" alt="..."></img>
          }
          text={"Shopping topic topic"}
          link={"/shopping-topic"}
        />
      </div>
    </>
  );
}

export default TopicsPage;
