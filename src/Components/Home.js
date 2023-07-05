import React from "react";
import PostList from "./PostList";
import UserImage from "./UserImage";
import Header from "./Header";
import "./Home.css";
import data from "../data/data.json";

class Home extends React.Component {
  state = {
    postText: "",
    posted: false,
    activeUser: data.userActive,
    users: data.otherUsers,
    recommendedUsers: data.recommendedUsers,
  };

  componentDidUpdate() {
    if (this.state.postText === "") {
      document.querySelector(".input-text").innerText = "What's the Hoot?";
    }
  }

  onInputClick(event) {
    if (event.target.innerText === "What's the Hoot?") {
      event.target.innerText = "";
    }
  }

  render() {
    return (
      <div className="page-container">
        <Header pageTitle="Home" />
        <div className="home">
          <section className="user-input">
            <div className="image-container">
              <UserImage imgUrl={this.state.activeUser.profileImg} />
            </div>
            <form className="input-form">
              <div className="input-container">
                <div
                  suppressContentEditableWarning={true}
                  contentEditable
                  className="input-text"
                  value={this.state.postText}
                  onClick={this.onInputClick}
                  onInput={(event) =>
                    this.setState({ postText: event.target.innerText.trim() })
                  }
                >
                  What's the Hoot?
                </div>
              </div>
              <div className="input-options">
                <div className="icon-container">
                  <div>
                    <i className="far fa-image input-icon"></i>
                  </div>
                  <div>
                    <i className="fas fa-poll-h input-icon"></i>
                  </div>
                  <div>
                    <i className="far fa-smile input-icon"></i>
                  </div>
                  <div>
                    <i className="far fa-calendar input-icon"></i>
                  </div>
                </div>

                <button className="hoot-btn" onClick={this.submitPost}>
                  Hoot
                </button>
              </div>
            </form>
          </section>
          <div className="divider"></div>
          <PostList
            users={this.state.users}
            activeUser={this.state.activeUser}
          />
        </div>
      </div>
    );
  }
}

export default Home;
