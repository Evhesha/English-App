import profilePicture from "../ProfilePage/blank-profile-picture.png";
import "./ProfilePage.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import EditUserPopUp from "../../Components/PopUps/User/EditUserPopUp.jsx";
import { useTranslation } from "react-i18next";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [userPercent, setUserPercent] = useState(0);
  const [testsCount, setTestsCount] = useState(0);
  const [isAuthorized, setAuthorized] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get("token");
      console.log("Token:", token);
      if (token) {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.userId;
        try {
          const response = await axios.get(
              `${API_BASE_URL}/api/Users/${id}`
          );
          setUser(response.data);
          setAuthorized(true);
        } catch (error) {
          setAuthorized(false);
        }
      }
    };

    const fetchTestData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.userId;
        try {
          const response = await axios.get(
              `${API_BASE_URL}/api/UsersStudyResults/percent/${id}`
          );
          console.log("User data:", response.data);
          setUserPercent(response.data.percent);
          setTestsCount(response.data.count);
        } catch (error) {
        }
      }
    };

    fetchUserData();
    fetchTestData();
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
                <div className="profile-content">
                  <div className="profile-info">
                    <h2>
                      <b>Name: </b>
                      {user.name}
                    </h2>
                    <h4>
                      <b>Email: </b>
                      {user.email}
                    </h4>
                    <h4>
                      <b>Role: </b>
                      {user.role}
                    </h4>
                    <EditUserPopUp
                        id={user.id}
                        name={user.name}
                        email={user.email}
                    />
                  </div>

                  <div className="profile-activity">
                    <h2>Your activity</h2>
                    <h3>Your tests percentage: <b>{userPercent}%</b></h3>
                    <h3>Tests completed: <b>{testsCount}</b></h3>
                  </div>
                </div>
            ) : (
                <div className="alert alert-danger" role="alert">
                  You are not authorized or not login
                </div>
            )}
          </div>
        </div>
      </>
  );
}

export default ProfilePage;