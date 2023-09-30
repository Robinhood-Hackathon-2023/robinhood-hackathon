import React from "react";
import ForumPost from "./Components/ForumPost"; // Assuming the component is in a file called RedditPost.js

const posts = [
  {
    id: 1,
    title: "Mental Health Issue",
    content: "I have been suffering from Depression .......",
    votes: 10,
    /*comments: [
      { id: 1, user: 'user1', text: 'Great post!' },
      { id: 2, user: 'user2', text: 'I learned a lot from this.' },
    ],*/
  },
  {
    id: 1,
    title: "Stress",
    content: "I am having so much stress at work ...........",
    votes: 10,
    /*comments: [
      { id: 1, user: 'user1', text: 'Great post!' },
      { id: 2, user: 'user2', text: 'I learned a lot from this.' },
    ],*/
  },
  // Add more posts as needed
];

const App = () => {
  return (
    <div>
      <h1 className="App-header">Posts</h1>
      {posts.map((post) => (
        <ForumPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
