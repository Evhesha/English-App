import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";
import CreateUserPopUp from "../../Components/PopUps/CreateUserPopUp";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [delayCompleted, setDelayCompleted] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/users");
        setUsers(response.data);
        setIsLoading(false);
        setHasError(false); // сбрасываем ошибку при успешной загрузке
        console.log("Данные успешно загружены:", response.data);
      } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setDelayCompleted(true);
        setHasError(true); // Устанавливаем ошибку, если загрузка занимает слишком много времени
        console.log("Загрузка данных занимает слишком много времени.");
      }
    }, 5000); // Таймер на 5 секунд

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/home" placeholder={"Home"} />
        <h1 style={{ marginLeft: "20px" }}>Admin Panel</h1>
      </div>
      <p>
        Num of all users <b>{users.length}</b>
      </p>
      <CreateUserPopUp onPost={(newUser) => setUsers([...users, newUser])} />
      <p></p>
      {isLoading ? (
        <div>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {delayCompleted && hasError && (
            <div className="alert alert-danger" role="alert">
              Данные не были загружены. Пожалуйста, проверьте соединение и попробуйте снова.
            </div>
          )}
        </div>
      ) : (
        <div className="list-group">
          {users.map((user, index) => (
            <ListGroupElement
              key={index}
              id={user.id}
              name={user.name}
              email={user.email}
              onDelete={() => handleDelete(user.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AdminPanel;
