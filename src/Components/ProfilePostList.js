import React from 'react';
import Post from './Post';

const ProfilePostList = (props) => {

    const posts = props.activeUser.posts.map((post) => {
        return <Post 
                imgUrl={props.activeUser.profileImg}
                name={props.activeUser.name}
                userTag={props.activeUser.username}
                timeStamp={post.timeStamp}
                content={post.content}
                likesNum={post.likes}
                rehootNum={post.rehoots}
                commentNum={post.comments.length}
                comments={post.comments}
                activeUser={props.activeUser}
                />
    });
    return(
        <div>{posts}</div>
    )
}

export default ProfilePostList;