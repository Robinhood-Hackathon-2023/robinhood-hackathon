import React, { useState } from "react";
import ForumPost from "./ForumPost";
import { dataPost } from "./mockData";

const ForumView = () => {
  const [posts, setPosts] = useState(dataPost);
  const [sortByVotesAsc, setSortByVotesAsc] = useState(true);

  const handleSort = () => {
    const sortedPosts = [...posts];

    if (sortByVotesAsc) {
      sortedPosts.sort((a, b) => b.votes - a.votes); // Sort in descending order
    } else {
      sortedPosts.sort((a, b) => a.votes - b.votes); // Sort in ascending order
    }

    setPosts(sortedPosts);
    setSortByVotesAsc(!sortByVotesAsc); // Toggle the sorting order
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        padding: "20px",
        backgroundColor: "#fffffff",
        color: "#333",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#ddd",
          marginRight: "20px",
          padding: "10px",
        }}
      >
        {/* Your sidebar content goes here */}
        Sidebar Content
      </div>

      {/* Main Content */}
      <div style={{ flex: "1" }}>
        <h1 style={{ color: "#000", marginBottom: "px" }}>All Posts</h1>
        <hr style={{ border: "1px solid #ccc", marginBottom: "10px" }} /> 
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          {/* Move the button to the right */}
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
