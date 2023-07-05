import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
  <nav className="nav-bar">
      <i className="fab fa-earlybirds" id="logo"></i>
      <Link to="/"className="nav-item">
        <button className="nav-btn">
          <i className="fas fa-home nav-icon"></i>
          <span>Home</span>
        </button>
      </Link>
      <Link to="/notFound" className="nav-item">
        <button className="nav-btn">
          <i className="fas fa-bell nav-icon"></i>
          <span>Notications</span>
        </button>
      </Link>
      <Link to="/notFound"className="nav-item">
        <button className="nav-btn">
          <i className="fas fa-envelope nav-icon"></i>
          <span>Messages</span>
        </button>
      </Link>
      <Link to="/notFound" className="nav-item">
        <button className="nav-btn">
          <i className="fas fa-bookmark nav-icon"></i>
          <span>Bookmarks</span>
        </button>
      </Link>
      <Link to="/profile" className="nav-item">
        <button className="nav-btn">
          <i className="fas fa-user nav-icon"></i>
          <span>Profile</span>
        </button>
      </Link>
    </nav>
    
  );
};

export default NavBar;
