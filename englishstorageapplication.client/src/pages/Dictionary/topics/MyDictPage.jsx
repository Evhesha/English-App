import React, { useState, useEffect } from "react";
import Card from "../Card";
import CreateCard from "./CreateCard";
import AddDict from "../assets/AddPicture.png";
import YourOwnDict from "../assets/YourOwnDict.png";
import axios from "axios";
import PlsAuthorizeBlock from "@/Components/Auth/PlsAuthorizeBlock.jsx";
import { getAuthTokenClaims } from "@/utils/authToken.js";
const API_BASE_URL = import.meta.env.VITE_API_URL;

function MyDictPage() {
  const [authorized, setAuthorized] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tokenClaims = getAuthTokenClaims();
      if (tokenClaims?.userId) {
        const userId = tokenClaims.userId;

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

  return (
      <>
        {authorized ? (
            <div className="card-container" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
              padding: "1.5rem",
              maxWidth: "1400px",
              margin: "0 auto"
            }}>
              {cards.map((card, index) => (
                  <Card 
                      key={index}
                      id={card.id}
                      image={
                        <img
                            src={YourOwnDict}
                            alt="Dictionary card"
                            style={{
                              width: "100%",
                              height: "140px",
                              objectFit: "contain",
                              padding: "0.5rem"
                            }}
                        />
                      }
                      title={card.nameOfUsersCard}
                      text={card.userCardData}
                      onDelete={() => handleDelete(card.id)}
                  />
              ))}
                <CreateCard
                    image={
                      <img
                          src={AddDict}
                          alt="Add new dictionary"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                            padding: "0.5rem"
                          }}
                      />
                    }
                    text={"Add your own dict"}
                />
            </div>
        ) : (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "70vh",
              padding: "2rem"
            }}>
              <PlsAuthorizeBlock/>
            </div>
        )}
      </>
  );
}

export default MyDictPage;
