import React from "react";
import UserImage from "./UserImage";
import "./Post.css";
import CommentSection from "./CommentSection";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      liked: false,
      likes: this.props.likesNum,
      rehooted: false,
      rehoots: this.props.rehootNum,
      comments: this.props.comments,
      toggleComments: false
    }
  }

  toggleLiked = () => {
    if(this.state.liked) {
      this.setState({ liked: false , likes: this.state.likes - 1})
    }
    else{
      this.setState({liked: true, likes: this.state.likes + 1});
    }
  }

  toggleRehoot = () => {
    if(this.state.rehooted){
      this.setState({rehooted : false , rehoots: this.state.rehoots -1})
    }
    else{
      this.setState({rehooted : true , rehoots: this.state.rehoots +1})
    }
  }

  toggleCommentSection = () => {
    if(this.state.toggleComments) {
      this.setState({toggleComments : false});
    }
    else{
      this.setState({toggleComments : true});
    }
  }

  render(){
    return (
      <section className="post">
        <div className="post-content">
          <div className="poster-img">
            <UserImage imgUrl={this.props.imgUrl} />
          </div>
          <div className="post-details">
            <div className="poster-info">
              <div id="poster-name">{this.props.name}</div>
              <div className="poster-username">@{this.props.userTag}</div>
              <div className="posted-time"> - {this.props.timeStamp}</div>
            </div>
            <div className="post-text">{this.props.content}</div>
            <div className="post-options">
              <div className="post-icon">
                <i className="far fa-comment other-icon" onClick={this.toggleCommentSection} style={{color: this.state.toggleComments ? "#7c70d7" : "#8b8989"}}>
                </i>
              </div>
              <div className="post-icon">
                <i className="fas fa-retweet" onClick={this.toggleRehoot} style={{color: this.state.rehooted ? "#45CB85" : "#8b8989"}}>
                  <span className="retweet-num post-icon-num">{this.state.rehoots === 0 ? "" : this.state.rehoots}</span>
                </i>
              </div>
              <div className="post-icon">
                <i className={`${this.state.liked ? 'fas' : 'far'} fa-heart`} onClick={this.toggleLiked} style={{color: this.state.liked ? "#b91372" : "#8b8989"}}>
                  <span className="likes-num post-icon-num">{this.state.likes === 0 ? "" : this.state.likes}</span>
                </i>
              </div>
              <div className="post-icon">
                <i className="far fa-share-square other-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <section className="comment-container" style={{display: this.state.toggleComments ? 'block' : 'none'}}>
          <CommentSection comments={this.state.comments} activeUser={this.props.activeUser}/>
        </section>
      </section>
    );
  }
};

export default Post;
