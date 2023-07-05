import React from 'react';
import UserImage from './UserImage';
import './Comment.css'

const Comment = (props) => {
    return(
        <div className="comment">
            <div className="comment-content">
                <div className="commenter-img">
                    <UserImage imgUrl={props.comment.commentAvatar} />
                </div>
                <div className="comment-details">
                    <div className="commenter-info">
                        <div className="commenter-name">
                            {props.comment.commentName}
                        </div>
                        <div className="commenter-username">
                            @{props.comment.commentUsername} - {props.comment.commentTimeStamp}
                        </div>
                    </div>
                    <div className="comment-text">
                        {props.comment.commentContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;