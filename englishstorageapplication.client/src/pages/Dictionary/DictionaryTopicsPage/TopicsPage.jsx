import TopicCard from "../TopicCard";
import "../DictionaryTopicsPage/TopicsPage.css"

import travelingImage from "../dict-images/traveling.png";
import cookingImage from "../dict-images/cooking.png";
import shoppingImage from "../dict-images/shopping.png";
import natureImage from "../dict-images/nature.png";
import sportImage from "../dict-images/sport.png";
import workImage from "../dict-images/work.png";
import programmingPage from "../dict-images/programming.png";
import top100 from "../dict-images/top100.png";
import differentTopics from "../dict-images/differentTopics.png";

import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const CardContainer = styled.div`
    padding-left: 6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    animation: ${fadeIn} 0.6s ease-out;
`;

function TopicsPage() {
    return (
        <CardContainer>
            <TopicCard
                title={"Traveling"}
                image={
                    <img src={travelingImage} className="card-img-top" alt="..."></img>
                }
                text={"Traveling topic"}
                link={"/traveling-topic"}
            />
            <TopicCard
                title={"Cooking"}
                image={<img src={cookingImage} className="card-img-top" alt="..."></img>}
                text={"Cooking topic"}
                link={"/cooking-topic"}
            />
            <TopicCard
                title={"Shopping"}
                image={<img src={shoppingImage} className="card-img-top" alt="..."></img>}
                text={"Shopping topic"}
                link={"/shopping-topic"}
            />
            <TopicCard
                title={"Sport"}
                image={<img src={sportImage} className="card-img-top" alt="..."></img>}
                text={"Sport topic"}
                link={"/sport-topic"}
            />
            <TopicCard
                title={"Nature"}
                image={<img src={natureImage} className="card-img-top" alt="..."></img>}
                text={"Nature topic"}
                link={"/nature-topic"}
            />
            <TopicCard
                title={"Work"}
                image={<img src={workImage} className="card-img-top" alt="..."></img>}
                text={"Work topic"}
                link={"/work-topic"}
            />
            <TopicCard
                title={"Programming"}
                image={
                    <img src={programmingPage} className="card-img-top" alt="..."></img>
                }
                text={"Programming topic"}
                link={"/programming-topic"}
            />
            <TopicCard
                title={"Top 100"}
                image={
                    <img src={top100} className="card-img-top" alt="..."></img>
                }
                text={"Top 100"}
                link={"/popular"}
            />
            <TopicCard
                title={"Grammar topics"}
                image={
                    <img src={differentTopics} className="card-img-top" alt="..."></img>
                }
                text={"Grammar topic"}
                link={"/grammar"}
            />
        </CardContainer>
    );
}

export default TopicsPage;
