import React, { useState } from "react";
import ForumPost from "./ForumPost";
import { dataPost } from "./mockData";
import "./scss/leftNav.scss";

const ForumView = () => {
  const [posts, setPosts] = useState(dataPost);
  const [sortByVotesAsc, setSortByVotesAsc] = useState(null);

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
        flexDirection: "column",
        padding: "0 20px 20px 20px",
        backgroundColor: "#ffffff",
        color: "#333",
      }}
    >
      {/* Main Content */}
      <div style={{ flex: "1", marginLeft: "2%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ color: "#000", marginTop: "100" }}>All Posts</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "-50px" }}>
            <h4 style={{ color: "#000" }}>Hot Posts</h4>
            <div
              style={{
                marginLeft: "8px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={handleSort}
            >
              {sortByVotesAsc === null && (
                <>
                  <div
                    style={{
                      border: "solid #333",
                      borderWidth: "0 2px 2px 0",
                      display: "inline-block",
                      padding: "4px",
                      transform: "rotate(45deg)",
                    }}
                  />
                </>
              )}
              {sortByVotesAsc !== null && (
                <>
                  <div
                    style={{
                      border: "solid #333",
                      borderWidth: "0 2px 2px 0",
                      display: "inline-block",
                      padding: "4px",
                      transform: sortByVotesAsc ? "rotate(-135deg)" : "rotate(45deg)",
                    }}
                  />
                </>
              )}
            </div>
          </div>
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