// Home.js
import React from "react";
import "./scss/leftNav.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

const ProfileText = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.5em;`

const SideMenu = () => {
  const mentalHealthTopics = [
    "Managing Stress",
    "Building Resilience",
    "Mindfulness Meditation",
    "Coping with Anxiety",
    "Emotional Well-being",
    "Positive Affirmations",
    "Self-Care Practices",
    "Healthy Relationships",
    "Sleep Hygiene",
    "Seeking Support",
  ];

  return (
    <Sidebar>
      <button className="writeAPostButton">WRITE A POST</button>
      <div className="breakLineWriteAPostButton"></div>
      <div className="leftNavBarTopicsSection">
        <h1 className="leftNavBarTopicHeader">Topics</h1>
        <div className="breakLineListOfTopics"></div>
        <ul className="listOfTopicsSection">
          {mentalHealthTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <div className="breakLineWriteAPostButton"></div>
        <div
          className="leftNavBarMyProfile"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AccountCircleIcon style={{ marginRight: "8px", fontSize: "50px" }} />
          {/* <p className="profileText">My Profile</p> */}
          <ProfileText className="profileText" to="/profile">My Profile</ProfileText>
        </div>

        <div className="breakLineWriteAPostButton"></div>
      </div>
    </Sidebar>
  );
};

export default SideMenu;
