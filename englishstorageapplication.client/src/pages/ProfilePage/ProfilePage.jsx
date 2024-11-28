import profilePicture from "../ProfilePage/blank-profile-picture.png";
import "./ProfilePage.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import EditUserPopUp from "../../Components/PopUps/EditUserPopUp";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isAuthorized, setAuthorized] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      console.log("Token:", token);
      if (token) {
        // Use jwt-decode to decode the token
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken); // Logging decoded token to check its content
        const id = decodedToken.UserId; // Extract id from token
        try {
          // Request user data from the server
          const response = await axios.get(
            `https://localhost:5001/api/Users/${id}`
          );
          console.log("User data:", response.data); // Logging response data to check its structure
          setUser(response.data);
          setAuthorized(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setAuthorized(false);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{t("profile")}</h1>
      <div className="profile-container">
        <div className="profile-main">
          <button className="profile-avatar-btn">
            <img
              src={profilePicture}
              className="profile-avatar"
              alt="User Avatar"
            />
          </button>
          {user ? (
            <div className="profile-info">
              <h2>
                <b>Name: </b>
                {user[0].name}
              </h2>
              <h4>
                <b>Email: </b>
                {user[0].email}
              </h4>
              <EditUserPopUp
                id={user.id}
                name={user.name}
                email={user.email}
                //onPut={onUpdate}
              />
            </div>
          ) : (
            <div class="alert alert-danger" role="alert">
              You are not authorized or not login
            </div>
          )}
        </div>
        <div className="profile-activity">
          <h2>Activity</h2>
          {/* Здесь будет размещаться календарь посещаемости */}
          <div className="activity-calendar">
            {/* Временная демонстрация */}
            <p>Calendar will be here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
