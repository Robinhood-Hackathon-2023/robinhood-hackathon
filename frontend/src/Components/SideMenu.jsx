// Home.js
import React from "react";
import "./scss/leftNav.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

export const SideMenu = ({ openOverlay }) => {
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
      <button className="writeAPostButton" onClick={openOverlay} >WRITE A POST</button>
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
          <p className="profileText">My Profile</p>
        </div>

        <div className="breakLineWriteAPostButton"></div>
      </div>
    </Sidebar>
  );
};

export default SideMenu;
