import React from "react";
import Header from "./Header";
import Home from "./Home";
import "./MainContent.css";

class MainContent extends React.Component {
  state = { page: "home" };

  renderContent(){
    switch (this.state.page){
      case "home":
        return(
          <div className="page-container">
            <Header pageTitle="Home" />
            <Home activeUser={this.props.activeUser} users={this.props.users}/>
          </div>
        )
      default: 
          return(
            <div className="no-page-found">
              NO PAGE FOUND
            </div>
          )
    }
  }
  render() {
    return(
    <div className="main-content">
      {this.renderContent()}
    </div>
    )
  }
}

export default MainContent;
