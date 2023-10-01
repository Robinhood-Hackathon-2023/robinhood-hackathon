import React, { useState } from "react";
import ForumPost from "./ForumPost";
import { dataPost } from "./mockData";
import CreateIcon from "@mui/icons-material/Create";
import "./scss/leftNav.scss";

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

const ForumView = () => {
  const [posts, setPosts] = useState(dataPost);
  const [sortByVotesAsc, setSortByVotesAsc] = useState(true);

  const handleSort = () => {
    const sortedPosts = [...posts];
    sortedPosts.sort((a, b) =>
      sortByVotesAsc ? b.votes - a.votes : a.votes - b.votes
    );
    setPosts(sortedPosts);
    setSortByVotesAsc(!sortByVotesAsc);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        padding: "0 20px 20px 20px",
        backgroundColor: "#ffffff",
        color: "#333",
      }}
    >
      {/* Sidebar */}
      <div style={{ width: "200px", marginRight: "40px" }}>
        <Sidebar>
          <button className="writeAPostButton">WRITE A POST</button>
          <div className="breakLineWriteAPostButton"></div>
          <div className="leftNavBarTopicsSection">
            <h1 className="leftNavBarTopicHeader">Topics</h1>
            <div className="breakLineListOfTopics"></div>
            <ul className="listOfTopicsSection">
              {Array.from({ length: 30 }, (_, i) => (
                <li key={i}>topic</li>
              ))}
            </ul>
            <button className="showMoreTopicsButton">Show more</button>
            <div className="breakLineWriteAPostButton"></div>
            <div className="leftNavBarMyProfile">
              <p>
                <CreateIcon style={{ marginRight: "7%" }} />
                My Profile
              </p>
            </div>
            <div className="breakLineWriteAPostButton"></div>
          </div>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div style={{ flex: "1", marginLeft: "2%" }}>
        <div style={{ display: "-webkit-inline-box", marginTop: "2%" }}>
          <h1 style={{ color: "#000", marginBottom: "0" }}>All Posts</h1>
          {/* TODO: Fix all post top margin from top nav and hot posts filter button below this comment */}
          <h2 style={{ color: "#000", marginBottom: "0", marginTop: "auto", marginLeft: "286%", fontSize: "1em" }}>
            Hot Posts
          </h2>
        </div>
        <hr
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "auto" }}>
            <button
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleSort}
            >
              Sorted by Votes:{" "}
              {sortByVotesAsc ? "Lowest Votes" : "Highest Votes"}
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                width: "48%",
                boxSizing: "border-box",
                padding: "10px",
                margin: "10px",
              }}
            >
              <ForumPost post={post} posts={posts} setPosts={setPosts} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumView;
