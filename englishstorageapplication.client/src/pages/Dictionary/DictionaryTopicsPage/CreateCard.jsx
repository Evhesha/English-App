import CreateDictCardPop from "../../../Components/PopUps/CreateDictCardPopUp"
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function CreateCard({image, title, text, onCreate}) {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
      }
    };

    fetchData();
  }, []);
  
    return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
          </p>
          <CreateDictCardPop onPost={onCreate} userId={userId}></CreateDictCardPop>
        </div>
      </div>
    </>
  );
}

export default CreateCard;