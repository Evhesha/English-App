import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";
import CreateUserPopUp from "../../Components/PopUps/User/CreateUserPopUp.jsx";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Dropdown} from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [delayCompleted, setDelayCompleted] = useState(false);
  const {t} = useTranslation();
  const [role, setRole] = useState("");

  const receiveNotify = () => {
    toast.success("Data received!", {
      position: "bottom-right"
    });
  }

  const deleteNotify = () => {
    toast.success("Data delete successfully!", {
      position: "bottom-right"
    });
  }

  const mistakeNotify = () => {
    toast.error("Error loading data!", {
      position: "bottom-right"
    });
  }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                setHasError(false);

                const url = `${API_BASE_URL}/api/users/role`;

                const params = {};
                if (role) {
                    params.Role = role;
                }

                const response = await axios.get(url, { params });

                setUsers(response.data);
                setIsLoading(false);
                console.log("Данные успешно загружены:", response.data);
                receiveNotify();
            } catch (error) {
                console.error("Ошибка при получении пользователей:", error);
                setIsLoading(false);
                setHasError(true);
                mistakeNotify();
            }
        };

        fetchUsers();

    }, [role]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setDelayCompleted(true);
        setHasError(true); 
        console.log("Загрузка данных занимает слишком много времени.");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    deleteNotify();
  };

    const handleRole = (role) => {
        setRole(role);
    };

  return (
    <>
      <ToastContainer />
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToLinkButton link="/home" placeholder={"Home"} />
        <h1 style={{ marginLeft: "20px" }}>{t("account-page.admin-panel")}</h1>
      </div>
      <p>
        {t("account-page.num-of-users")} <b>{users.length}</b> 
      </p>
        <Dropdown onSelect={handleRole}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {role || "Filter by role"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey={""}>No filter</Dropdown.Item>
                <Dropdown.Item eventKey={"User"}>User</Dropdown.Item>
                <Dropdown.Item eventKey={"Admin"}>Admin</Dropdown.Item>
                <Dropdown.Item eventKey={"Teacher"}>Teacher</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      <p></p>
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
              role={user.role}
              onDelete={() => handleDelete(user.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AdminPanel;