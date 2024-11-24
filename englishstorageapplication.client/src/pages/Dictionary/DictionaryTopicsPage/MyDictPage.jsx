import React, { useState, useEffect } from "react";
import Card from "../Card";
import AddDict from "../dict-images/AddPicture.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

function MyDictPage() {
  const [authorized, setAuthorized] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      console.log(token)
      if (token) {
        // Use jwt-decode to decode the token
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken); // Logging decoded token to check its content
        const userId = decodedToken.UserId; // Extract UserId from token

        // Request user cards
        axios.get(`https://localhost:5001/api/UsersCards/${userId}`)
          .then(response => {
            setCards(response.data);
            setAuthorized(true);
          })
          .catch(error => {
            console.error("Error fetching cards:", error);
            setAuthorized(false);
          });
      }
    };

    fetchData();
  }, []);

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
      <h1>You are not logged in or signed-up in the system</h1>
      <h3>Please login or sign-up</h3>
    </div>
  );

  return (
    <>
      {authorized ? (
        <>
          {/* {cards.map(card => (
            <Card
              key={card.id}
              image={<img src={AddDict} className="card-img-top" alt="..." style={{ paddingLeft: '50px', width: '70%', height: '70%' }} />}
              text={card.title}
              // link={`/dictionary/${card.id}`} реализовать ссылку для перехода
            />
          ))} */}
          <Card
            image={<img src={AddDict} className="card-img-top" alt="..." style={{ paddingLeft: '50px', width: '70%', height: '70%' }} />}
            text={"Add your own dict"}
            // link={"/traveling-topic"} здесь реализовать открытие формы, для создание словаря
          />
        </>
      ) : (
        plsAuthorizeBlock
      )}
    </>
  );
}

export default MyDictPage;
