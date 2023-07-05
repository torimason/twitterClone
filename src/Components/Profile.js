import React from "react";
import "./Profile.css";
import data from "../data/data.json";
import Header from "./Header";
import ProfilePostList from "./ProfilePostList";

class Profile extends React.Component {
  state = {
    activeUser: data.userActive,
    users: data.otherUsers,
    recommendedUsers: data.recommendedUsers,
  };

  render() {
    return (
      <main className="profile-container">
        <Header pageTitle={this.state.activeUser.name} />
        <div className="scroll-container">
          {" "}
          <section className="profile-hero">
            <div className="cover-photo"></div>
            <div className="profile-details">
              <div
                className="hero-img"
                style={{ backgroundImage: this.state.activeUser.profileImg }}
              ></div>
              <h1 className="name">{this.state.activeUser.name}</h1>
              <p className="username">@{this.state.activeUser.username}</p>
              <p className="details">
                {this.state.activeUser.birthdate} -{" "}
                {this.state.activeUser.location}
              </p>
            </div>
          </section>
          <ProfilePostList activeUser={this.state.activeUser}></ProfilePostList>
        </div>
      </main>
    );
  }
}

export default Profile;
