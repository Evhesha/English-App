import React, { useState, useEffect } from "react";
import Card from "../Card";
import CreateCard from "./CreateCard";
import AddDict from "../dict-images/AddPicture.png";
import YourOwnDict from "../dict-images/YourOwnDict.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function MyDictPage() {
  const [authorized, setAuthorized] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.UserId;

        try {
          const response = await axios.get(`${API_BASE_URL}/api/UsersCards/${userId}`);

          if (Array.isArray(response.data)) {
            setCards(response.data);
          } else {
            console.error("Ошибка: данные из API не являются массивом", response.data);
          }

          setAuthorized(true);
        } catch (error) {
          console.error("Ошибка при получении карточек:", error);
          setAuthorized(false);
        }
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const plsAuthorizeBlock = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
      }}
    >
      <div className="alert alert-danger" role="alert">
        <h1>You are not logged in or signed-up in the system</h1>
        <h3>Please login or sign-up</h3>
      </div>
    </div>
  );

  return (
    <>
      {authorized ? (
       <div className="card-container">
         <>
          {cards.map((card, index) => (
            <Card
              key={index}
              id={card.id}
              image={
                <img
                  src={YourOwnDict}
                  className="card-img-top"
                  alt="..."
                  style={{ paddingLeft: "50px", width: "70%", height: "70%" }}
                />
              }
              title={card.nameOfUserCard}
              text={card.userCardData}
              onDelete={() => handleDelete(card.id)}
            />
          ))}
          <CreateCard
            image={
              <img
                src={AddDict}
                className="card-img-top"
                alt="..."
                style={{ paddingLeft: "50px", width: "70%", height: "70%" }}
              />
            }
            text={"Add your own dict"}
          />
        </>
       </div>
      ) : (
        plsAuthorizeBlock
      )}
    </>
  );
}

export default MyDictPage;
