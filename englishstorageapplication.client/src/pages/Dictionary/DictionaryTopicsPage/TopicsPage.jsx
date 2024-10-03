import Card from "../Card";
//import travelingImage from "./pages/Dictionary/";

function TopicsPage(){

    return <>
      <Card
       title={"Traveling"}
       image={<img src={"https://th.bing.com/th/id/OIP.VsvOr2Q2d_Ixr1aUDFGmIQHaHC?rs=1&pid=ImgDetMain"} className="card-img-top" alt="..."></img>}
       text={"Traveling topic"}
       link={"/traveling-topic"}
       />
    </>
}



export default TopicsPage;