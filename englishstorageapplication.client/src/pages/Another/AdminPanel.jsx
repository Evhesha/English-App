import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";
import CreateUserPopUp from '../../Components/PopUps/CreateUserPopUp';

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

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ToLinkButton link="/home" placeholder={"Home"} />
        <h1 style={{ marginLeft: '20px' }}>Admin Panel</h1>
      </div>
      <p>Num of all users <b>{users.length}</b></p>
      <CreateUserPopUp onPost={newUser => setUsers([...users, newUser])} />
      <p></p>
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
    </>
  );
}

export default AdminPanel;
