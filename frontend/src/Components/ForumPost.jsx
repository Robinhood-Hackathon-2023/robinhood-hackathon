import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Badge,
  Chip,
} from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "./scss/ForumPost.scss";

const getChipColor = (label) => {
  switch (label) {
    case 'Question': return '#3CB804';
    case 'Poll': return '#2E7D0A';
    case 'Rant': return '#255B0D';
    case 'General': return '#4CCA13';
    default: return '#4caf50';
  }
};

const ForumPost = ({ post, posts, setPosts }) => {
  const navigate = useNavigate();

  const handleNavigateToPost = () => {
    navigate(`/post/${post.id}`, { state: { post } });
  };

  return (
    <Card className="cardContainer" onClick={handleNavigateToPost}>
      <CardContent className="cardContent">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Chip
            label={post.label}
            style={{
              backgroundColor: getChipColor(post.label),
              marginRight: '8px',
              color: 'white',
            }}
            variant="outlined"
          />
          <Typography variant="h6" className="title">
            {post.title}
          </Typography>
        </div>

        <Typography className="content">{post.content}</Typography>

        <div className="votingSection">
          <Badge badgeContent={post.votes} color="primary">
            <span style={{ margin: "0 10px" }}>Votes</span>
          </Badge>
        </div>

        <div className="commentsSection">
          <IconButton color="primary" >
            <Comment style={{ color: "#9b9898" }} />
          </IconButton>
          {post.comments && (
            <span style={{ marginLeft: "5px" }}>
              {post.comments.length} comments
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumPost;