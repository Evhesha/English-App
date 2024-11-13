import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://localhost:5001/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ToLinkButton link="/home" placeholder={"Home"} />
        <h1 style={{ marginLeft: '20px' }}>Admin Panel</h1>
      </div>
      <button className="btn btn-primary">Add user <i className="bi bi-plus-circle"></i></button>
      <p></p>
      <div className="list-group">
        {users.map((user, index) => (
          <ListGroupElement
            key={index}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
}

export default AdminPanel;
