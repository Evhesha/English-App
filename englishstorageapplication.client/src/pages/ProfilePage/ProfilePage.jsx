import React from 'react';
import profilePicture from "../ProfilePage/blank-profile-picture.png";
import './ProfilePage.css';

function ProfilePage() {
    return (
        <>
            <h1>Profile page</h1>
            <div className="profile-container">
                <div className="profile-main">
                    <button className="profile-avatar-btn">
                        <img src={profilePicture} className="profile-avatar" alt="User Avatar" />
                    </button>
                    <div className="profile-info">
                        <h2>Name</h2>
                        <h4>Email</h4>
                        <button className='btn btn-primary'>Edit <i className="bi bi-pencil"></i></button>
                    </div>
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
