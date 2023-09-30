// Home.js
import React from 'react';
import "./scss/leftNav.scss";

const Sidebar = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

const  Home = () => {
  return (
    <Sidebar>
      <button className="writeAPostButton">WRITE A POST</button>
      <div className="breakLineWriteAPostButton"></div>
      <div className="leftNavBarTopicsSection">
        <h1 className="leftNavBarTopicHeader">Topics</h1>
        <div className="breakLineListOfTopics"></div>
        <ul className="listOfTopicsSection">
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
          <li>topic</li>
        </ul>
        <button className="showMoreTopicsButton">Show more</button>
        <div className="breakLineWriteAPostButton"></div>
        <div className="leftNavBarMyProfile">
          <p>
            <i> icon here </i>
            My Profile
          </p>
        </div>
        <div className="breakLineWriteAPostButton"></div>
      </div>
    </Sidebar>
  );
}

export default Home;


