import React from 'react';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const contentStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '8px',
  width: '60%',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Box shadow for a professional look
};

const inputStyle = {
  width: '100%',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '16px',
};

const textareaStyle = {
  width: '100%',
  height: '150px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '16px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const cancelButtonStyle = {
  background: '#d9534f',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 15px',
  cursor: 'pointer',
  marginRight: '10px',
  fontSize: '16px',
};

const submitButtonStyle = {
  background: '#5cb85c',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 15px',
  cursor: 'pointer',
  fontSize: '16px',
};

const PostOverlay = ({ onClose, onSubmit, posts }) => {
  const [postTitle, setPostTitle] = React.useState("");
  const [postTag, setPostTag] = React.useState("");
  const [postText, setPostText] = React.useState("");

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setPostTag(e.target.value);
  };

  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleSubmit = () => {
    const postData = {
      id: posts.length + 1,
      title: postTitle,
      label: postTag,
      content: postText,
      votes: 0,
    };

    onSubmit(postData);
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <input
          style={inputStyle}
          placeholder="Enter post title..."
          value={postTitle}
          onChange={handleTitleChange}
        />
        <input
          style={inputStyle}
          placeholder="Enter post tag..."
          value={postTag}
          onChange={handleTagChange}
        />
        <textarea
          style={textareaStyle}
          placeholder="Type your post here..."
          value={postText}
          onChange={handleInputChange}
        />
        <div style={buttonContainerStyle}>
          <button style={cancelButtonStyle} onClick={onClose}>
            Cancel
          </button>
          <button style={submitButtonStyle} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostOverlay;