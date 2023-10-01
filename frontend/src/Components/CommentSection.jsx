import React from "react";
import { Typography, Divider } from "@material-ui/core";

const CommentSection = ({ comments }) => {
  return (
    <div>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: "20px" }}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", marginRight: "-8px" }}
            >
              {comment.user}
            </Typography>
            <Typography variant="body1" style={{ marginRight: "-8px" }}>
              {comment.text}
            </Typography>
          </div>
        ))}
    </div>
  );
};

export default CommentSection;