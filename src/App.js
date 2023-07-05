import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import data from './data/data.json'
import Router from './Components/Router';
import "./style.css"

class App extends React.Component {
    state = {
        activeUser: data.userActive,
        users: data.otherUsers,
        recommendedUsers: data.recommendedUsers
    }

    render(){
    return (
    <div className="app">
    <BrowserRouter>
    <NavBar />
    <Router className="main-content"></Router>
    <Search recommendedUsers={this.state.recommendedUsers} users={this.state.users}/>
    </BrowserRouter>
    </div>
    )}
};

export default App;