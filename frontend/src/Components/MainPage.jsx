import { ForumView } from './ForumView';
import { SideMenu } from './SideMenu';
import PostOverlay from './PostOverlay';
import React from 'react';

export const MainPage = ({ posts, setPosts}) => {
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const submitPost = (postText) => {
    setPosts([...posts, postText])
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "145px",
          left: "0",
          width: "200px",
          zIndex: "100",
        }}
      >
        <SideMenu openOverlay={openOverlay} />
      </div>
      {isOverlayOpen && (
        <PostOverlay onClose={closeOverlay} onSubmit={submitPost} posts={posts} />
      )}
      <ForumView posts={posts} setPosts={setPosts} />
    </>
  );
};
