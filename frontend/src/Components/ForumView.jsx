import React from "react";
import ForumPost from "./ForumPost"; // Assuming the component is in a file called RedditPost.js
import { posts } from './mockData'

const ForumView = () => {
  return (
    <div>
      <h1 className="App-header">Posts</h1>
      {posts.map((post) => (
        <ForumPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ForumView;