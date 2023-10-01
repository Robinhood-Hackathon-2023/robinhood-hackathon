import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Badge,
  Button,
  Chip,
  TextField,
} from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useLocation } from "react-router-dom";
import "./scss/ExpandedPost.scss";

const getChipColor = (label) => {
  switch (label) {
    case "Question":
      return "#3CB804";
    case "Poll":
      return "#2E7D0A";
    case "Rant":
      return "#255B0D";
    case "General":
      return "#4CCA13";
    default:
      return "#4caf50";
  }
};

const CommentSection = ({ comments }) => {
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <Typography>
              {comment.user}: {comment.text}
            </Typography>
          </div>
        ))}
    </div>
  );
};

const ExpandedPost = ({ posts, setPosts, username }) => {
  const location = useLocation();

  const [votes, setVotes] = React.useState(
    location.state && location.state.post ? location.state.post.votes : 0
  );
  const [likeFilled, setLikeFilled] = React.useState(false);
  const [dislikeFilled, setDislikeFilled] = React.useState(false);
  const [showCommentInput, setShowCommentInput] = React.useState(false);
  const [newComment, setNewComment] = React.useState("");
  const [post, setPost] = React.useState(
    location.state && location.state.post ? location.state.post : null
  );

  const handleVote = (type) => {
    setVotes((prevVotes) => {
      let updatedVotes;

      if (type === "upvote") {
        const reward = dislikeFilled ? 2 : 1;
        updatedVotes = likeFilled ? prevVotes - 1 : prevVotes + reward;
        setLikeFilled(!likeFilled);
        setDislikeFilled(false);
      } else if (type === "downvote") {
        const reward = likeFilled ? 2 : 1;
        updatedVotes = dislikeFilled ? prevVotes + 1 : prevVotes - reward;
        setDislikeFilled(!dislikeFilled);
        setLikeFilled(false);
      }

      const updatedPosts = posts.map((p) =>
        p.id === post.id ? { ...p, votes: updatedVotes } : p
      );
      setPosts(updatedPosts);

      setPost((prevPost) => ({
        ...prevPost,
        votes: updatedVotes,
      }));

      return updatedVotes;
    });
  };

  const handleToggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (!post.comments) {
      post.comments = [];
    }

    const newCommentObj = {
      id: post.comments.length + 1, // You may adjust the comment ID logic
      user: username, // username prop
      text: newComment,
    };

    const updatedPost = {
      ...post,
      comments: [...post.comments, newCommentObj],
    };

    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
    setPosts(updatedPosts);

    setPost(updatedPost);
    setNewComment("");
    setShowCommentInput(false);
  };

  return (
    <Card className="cardContainer expandedPostContainer">
      <CardContent className="cardContent expandedPostContent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Chip
            label={post.label}
            style={{
              backgroundColor: getChipColor(post.label),
              marginRight: "8px",
              color: "white",
            }}
            variant="outlined"
          />
          <Typography variant="h6" className="title">
            {post.title}
          </Typography>
        </div>

        <Typography className="content">{post.content}</Typography>

        <div className="votingSection">
          <IconButton color="primary" onClick={() => handleVote("upvote")}>
            <ThumbUpIcon
              style={{
                fill: likeFilled ? "black" : "none",
                stroke: "black",
                strokeWidth: 2,
              }}
            />
          </IconButton>
          <IconButton color="primary" onClick={() => handleVote("downvote")}>
            <ThumbDownIcon
              style={{
                fill: dislikeFilled ? "black" : "none",
                stroke: "black",
                strokeWidth: 2,
              }}
            />
          </IconButton>
          <Badge badgeContent={votes} color="primary">
            <span style={{ margin: "0 10px" }}>Votes</span>
          </Badge>
        </div>

        <div className="commentsSection">
          <IconButton color="primary" onClick={handleToggleCommentInput}>
            <Comment style={{ color: "#9b9898" }} />
          </IconButton>
          {post.comments && (
            <span style={{ marginLeft: "5px" }}>
              {post.comments.length} comments
            </span>
          )}
        </div>

        {post.comments && <CommentSection comments={post.comments} />}

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
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddComment}
              className="addCommentButton"
            >
              Add Comment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpandedPost;