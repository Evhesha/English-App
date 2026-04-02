import { useEffect, useState } from "react";
import { CreateDictCardPopUp } from "@/Components/Modals";
import { getAuthTokenClaims } from "@/utils/authToken.js";

function CreateCard({image, title, text}) {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const tokenClaims = getAuthTokenClaims();
      if (tokenClaims?.userId) {
        setUserId(tokenClaims.userId);
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
          <CreateDictCardPopUp userId={userId}></CreateDictCardPopUp>
        </div>
      </div>
    </>
  );
}

export default CreateCard;
