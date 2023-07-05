import React from "react";
import "./Search.css";
import UserList from "./UserList";
class Search extends React.Component {
  state = {term: "" , searched: false, userFound: false, foundUser: [], ranSearch: false}

  search = (event) => {
    event.preventDefault();
    this.setState({searched: true , term: document.querySelector(".search-input").value, ranSearch: false})
  };

  filterSearch = () => {
    let searchedUser = [];

    this.props.recommendedUsers.forEach((user) => {
      let searchTerm = this.state.term.toLowerCase();
      let username = user.username.toLowerCase();
      let name = user.name.toLowerCase();
      
      if((username.includes(searchTerm)) || (name.includes(searchTerm))) {
        searchedUser.push(user)
      }
    })

    this.setState({foundUser: searchedUser , ranSearch: true});
    this.resetInput();
  }

  resetInput = () => {
    document.querySelector(".search-input").value = ""
  }

  componentDidUpdate = () => {
    //if the button was clicked (toggled searched to true) AND there is something in the search input
    if(this.state.searched && (this.state.term !== "") && !this.state.ranSearch){
      // We hide the "recommended" 
      document.querySelector(".recommended").style.display="none"
      this.filterSearch();
    }
    else if(this.state.ranSearch && (this.state.foundUser.length > 0)){
      document.querySelector(".results").style.display="block"
      document.querySelector(".no-results").style.display="none"
    }
    else{
      document.querySelector(".results").style.display="none"
      document.querySelector(".no-results").style.display="block"
    }
  }

  render(){return (
    <div className="search">
      <form className="search-form">
          <button onClick={this.search}className="search-btn">
          <i className="fas fa-search"></i>
        </button>
        <input className="search-input" placeholder="Who's Hoo?"/>
      </form>
      <div className="recommended">
        <UserList users={this.props.recommendedUsers} header="HOO you may know"/>
      </div>
      <div className="results" style={{display: 'none'}}>
        <UserList users={this.state.foundUser} header={`Results for "${this.state.term}"`}/>
      </div>
      <div className="no-results" style={{display : 'none'}}>
        <h3>No Results Found for "{this.state.term}"</h3>
      </div>
    </div>
  );
}
};

export default Search;
