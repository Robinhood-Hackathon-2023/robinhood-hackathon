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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f0f0f0', color: '#333', textAlign: 'center' }}>
      <h1 style={{ color: '#4caf50', marginBottom: '20px' }}>Mental Health Forum</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', marginLeft: '1150px' }}>
        <button
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleSort}
        >
          Sorted by Votes: {sortByVotesAsc ? 'Lowest Votes' : 'Highest Votes'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} posts={posts} setPosts={setPosts} />
        ))}
      </div>
    </div>
  );
};

export default ForumView;