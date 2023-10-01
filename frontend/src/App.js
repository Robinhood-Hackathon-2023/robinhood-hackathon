// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import ExpandedPost from "./Components/ExpandedPost";
import { MainPage } from "./Components/MainPage";
import ProfilePage from "./Components/ProfilePage";
import { dataPost } from "./Components/mockData";

function App() {
  const [posts, setPosts] = React.useState(dataPost);
  const [username, setUsername] = React.useState("");
  const [isVerified, setIsVerified] = React.useState(false);
  
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
          <Route
            path="/"
            exact
            element={<MainPage posts={posts} setPosts={setPosts} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/post/:postId"
            element={
              <ExpandedPost
                posts={posts}
                setPosts={setPosts}
                username={username}
                isVerified={isVerified}
              />
            }
          />
          <Route
            path="/profile"
            element={<ProfilePage setUsername={setUsername} setIsVerified={setIsVerified} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
