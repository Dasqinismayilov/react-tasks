import React from "react";
import Email from "./Email";
import Name from "./Name";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";
import "./profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <Name />
      <Email />
      <Address />
      <PersonalInfo />
    </div>
  );
}

export default Profile;
