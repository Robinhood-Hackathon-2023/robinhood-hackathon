import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Badge, TextField, Button } from '@material-ui/core';
import { ThumbUp, ThumbDown, Comment } from '@material-ui/icons';
import './css/ForumPost.css';

const CommentSection = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Typography>{comment.user}: {comment.text}</Typography>
        </div>
      ))}
    </div>
  );
};

const ForumPost = ({ post }) => {
  const [votes, setVotes] = useState(post.votes);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleVote = (type) => {
    // Simulate updating votes (you would typically send this to a server)
    if (type === 'upvote') {
      setVotes(votes + 1);
    } else if (type === 'downvote') {
      setVotes(votes - 1);
    }
  };

  const handleToggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    // Simulate adding a new comment (you would typically send this to a server)
    console.log('New Comment:', newComment);

    // Clear the comment input and hide it
    setNewComment('');
    setShowCommentInput(false);
  };

  return (
    <Card className="cardContainer">
    <CardContent className="cardContent">
      <Typography variant="h6" className="title">{post.title}</Typography>
      <Typography className="content">{post.content}</Typography>

      <div className="votingSection">
          <IconButton color="primary" onClick={() => handleVote('upvote')}>
            <ThumbUp />
          </IconButton>
          <Badge badgeContent={votes} color="primary">
            <span style={{ margin: '0 10px' }}>Votes</span>
          </Badge>
          <IconButton color="primary" onClick={() => handleVote('downvote')}>
            <ThumbDown />
          </IconButton>
      </div>

      <div className="commentsSection">
          <IconButton color="primary" onClick={handleToggleCommentInput}>
            <Comment />
          </IconButton>
          <span style={{ marginLeft: '5px' }}>{post.comments.length} comments</span>
      </div>

      <CommentSection comments={post.comments} />

      {showCommentInput && (
        <div className="commentInputSection">
          <TextField
            label="Your Comment"
            variant="outlined"
            multiline
            rows={2}
            fullWidth
            className="commentInput"
            value={newComment}
            onChange={handleCommentChange}
          />
          <Button variant="contained" color="primary" onClick={handleAddComment} className="addCommentButton">
            Add Comment
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
  );
};

export default ForumPost;

