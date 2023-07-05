import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    const comments = props.comments.map((comment) => {
        return <Comment key={comment.commentId} comment={comment} />
    })

    return(
        <div className="comment-list">
            {comments}
        </div>
    )
}

export default CommentList;