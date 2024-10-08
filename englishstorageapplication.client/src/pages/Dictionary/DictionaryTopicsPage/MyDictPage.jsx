import Card from "../Card";
import { useState } from "react";
import AddDict from "../dict-images/AddPicture.png";

function MyDictPage() {
  const [authorized, setAuthorized] = useState(true);

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
        // + выводим карточки, которые уже привязаны к пользователю
        <Card
          image={
            <img src={AddDict} className="card-img-top" alt="..." style={{ paddingLeft: '50px', width: '70%', height: '70%' }}></img>
          }
          text={"Add your own dict"}
        //   link={"/traveling-topic"} здесь реализовать открытие формы, для создание словаря
        />
      ) : (
        plsAuthorizeBlock
      )}
    </>
  );
}

export default MyDictPage;
