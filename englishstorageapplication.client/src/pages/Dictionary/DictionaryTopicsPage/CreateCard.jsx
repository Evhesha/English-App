import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { CreateDictCardPopUp } from "@/Components/Modals";

function CreateCard({image, title, text}) {
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
          <CreateDictCardPopUp userId={userId}></CreateDictCardPopUp>
        </div>
      </div>
    </>
  );
}

export default CreateCard;
