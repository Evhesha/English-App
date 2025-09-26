import profilePicture from "../ProfilePage/blank-profile-picture.png";
import "./ProfilePage.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import EditUserPopUp from "../../Components/PopUps/EditUserPopUp";
import { useTranslation } from "react-i18next";

const API_BASE_URL = import.meta.env.VITE_API_URL;


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
        const id = decodedToken.UserId; // Extract id from token
        try {
          const response = await axios.get(
            `${API_BASE_URL}/api/Users/${id}`
          );
          console.log("User data:", response.data);
          setUser(response.data);
          setAuthorized(true);
        } catch (error) {
          setAuthorized(false);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{t("account-page.profile")}</h1>
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
                        {user.name}
                    </h2>
                    <h4>
                        <b>Email: </b>
                        {user.email}
                    </h4>
                    <EditUserPopUp
                        id={user.id}
                        name={user.name}
                        email={user.email}
                    />
                </div>
            ) : (
                <div className="alert alert-danger" role="alert">
              You are not authorized or not login
            </div>
          )}
        </div>
        <div className="profile-activity">
          <h2>User data</h2>
          
        </div>
      </div>
    </>
  );
}

export default ProfilePage;