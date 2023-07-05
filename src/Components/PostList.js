import React from "react";
import Post from "./Post";

const PostList = (props) => {
  let postsToRender = [];
  props.users.forEach((user) => {
    user.posts.forEach((post) => {
      postsToRender.push({
        username: user.username,
        name: user.name,
        profileImg: user.profileImg,
        post,
      });
    });
  });

  const posts = postsToRender.map((post) => {
    return(
      <Post
        key={postsToRender.indexOf(post)}
        imgUrl={post.profileImg}
        name={post.name}
        userTag={post.username}
        timeStamp={post.post.timeStamp}
        content={post.post.content}
        likesNum={post.post.likes}
        rehootNum={post.post.rehoots}
        commentNum={post.post.comments.length}
        comments={post.post.comments}
        activeUser={props.activeUser}
      />
    )
  });
  return <div>{posts}</div>;
};

export default PostList;
