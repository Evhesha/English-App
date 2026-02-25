import profilePicture from "../ProfilePage/blank-profile-picture.png";
import "./ProfilePage.css";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";
import React, {useState, useEffect} from "react";
import EditUserPopUp from "../../Components/PopUps/User/EditUserPopUp.jsx";
import {useTranslation} from "react-i18next";
import {Check} from "react-bootstrap-icons";

import { Form, InputGroup, Button } from 'react-bootstrap';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [userPercent, setUserPercent] = useState(0);
    const [testsCount, setTestsCount] = useState(0);
    const [isAuthorized, setAuthorized] = useState(false);
    const {t} = useTranslation();
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);

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
                    setUserPercent(response.data.percent.toFixed(2));
                    setTestsCount(response.data.count);
                } catch (error) {
                }
            }
        };

        fetchUserData();
        fetchTestData();
    }, []);

    const sendToTelegram = async () => {
        const text = `
            <b>Новая заявка с сайта English app!</b>
            <b>Имя:</b> ${user.name}
            <b>Email:</b> ${user.email}
            <b>Роль:</b> ${user.role}
            <b>Сообщение:</b> ${message}
            <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
                `.trim()
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: parseInt(CHAT_ID),
                text: text,
                parse_mode: 'HTML'
            })
        })

        return response.ok
    }

    const handleSubmit = async () => {
        try {
            const success = await sendToTelegram()

            if (success) {
                setStatus(true)
                setTimeout(() => setStatus(false), 3000);
                setMessage(""); 
            }
        } catch (error) {
            console.error(error)
        }
    }

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
                        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '20px'}}>
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

                            <div className="supporting">
                                <h2>Supporting</h2>
                                <p>Let me know if you have any questions, issues, or want to have teacher role!</p>
                                <InputGroup className="mb-3">
                                    <Form.Control 
                                        aria-label="Text input with dropdown button"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}/>
                                    <Button variant="outline-primary" onClick={handleSubmit}>Send</Button>
                                </InputGroup>
                                {status ? <p>Your message was sent successfully! <Check/></p> : null}
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