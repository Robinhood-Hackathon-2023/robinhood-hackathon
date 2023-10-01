// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import { MainPage } from "./Components/MainPage";
import ProfilePage from "./Components/ProfilePage";

function App() {
  return (
    <Router>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Header />
      </div>
      {/* Sidebar */}
      <div
        style={{
          marginLeft: "200px",
          paddingTop: "150px",
          paddingLeft: "50px",
          width: "calc(100% - 200px)",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
