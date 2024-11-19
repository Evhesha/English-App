import Card from "../Card";
import "../DictionaryTopicsPage/TopicsPage.css"

import travelingImage from "../dict-images/traveling.png";
import cookingImage from "../dict-images/cooking.png";
import shoppingImage from "../dict-images/shopping.png";
import natureImage from "../dict-images/nature.png";
import sportImage from "../dict-images/sport.png";
import workImage from "../dict-images/work.png";
import programmingPage from "../dict-images/programming.png";

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
          title={"Shopping"}
          image={
            <img src={shoppingImage} className="card-img-top" alt="..."></img>
          }
          text={"Shopping topic"}
          link={"/shopping-topic"}
        />
        <Card
          title={"Sport"}
          image={
            <img src={sportImage} className="card-img-top" alt="..."></img>
          }
          text={"Sport topic"}
          link={"/sport-topic"}
        />
        <Card
          title={"Nature"}
          image={
            <img src={natureImage} className="card-img-top" alt="..."></img>
          }
          text={"Nature topic"}
          link={"/nature-topic"}
        />
        <Card
          title={"Work"}
          image={
            <img src={workImage} className="card-img-top" alt="..."></img>
          }
          text={"Work topic"}
          link={"/work-topic"}
        />
        <Card
          title={"Programming"}
          image={
            <img src={programmingPage} className="card-img-top" alt="..."></img>
          }
          text={"Programming topic"}
          link={"/programming-topic"}
        />
      </div>
    </>
  );
}

export default TopicsPage;
