import React, { useState } from "react";
import UserImage from "./UserImage";
import CommentList from "./CommentList";
import "./CommentSection.css";

const CommentSection = (props) => {
  const [commentInput, setInput] = useState("");
  const [commentReady, setReady] = useState(false);
  const [commentsToMap, setArray] = useState(props.comments);

  const onCommentClick = (event) => {
    if (event.target.innerText === "Hoot Back") {
      event.target.innerText = "";
      if(commentReady){
        setReady(false);
      }
    }
  };

  const postComment = (event) => {
    event.preventDefault();
    if (commentInput !== "") {
      let newComment = {
        commentAvatar: props.activeUser.profileImg,
        commentContent: commentInput,
        commentName: props.activeUser.name,
        commentTimeStamp: "Just Now",
        commentUsername: props.activeUser.username,
      };
      let commentsToPush = commentsToMap;
      commentsToPush.push(newComment);
      setArray(commentsToPush);
      setReady(true);
      document.querySelector(".comment-text").innerText = "Hoot Back";
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input">
        <div className="comment-image-container">
          <UserImage imgUrl={props.activeUser.profileImg} />
        </div>
        <form className="comment-form">
          <div
            suppressContentEditableWarning={true}
            contentEditable
            className="comment-text"
            value={commentInput}
            onClick={(event) => onCommentClick(event)}
            onInput={(event) => setInput(event.target.innerText.trim())}
          >
            Hoot Back
          </div>
          <button
            className="comment-btn"
            onClick={(event) => postComment(event)}
          >
            Reply
          </button>
        </form>
      </div>
      <CommentList comments={commentsToMap} />
    </div>
  );
};

export default CommentSection;
