import React from 'react';
import './Header.css'

const Header = (props) => {
    return(
        <div className="page-header">
            <h1 className="page-title">{props.pageTitle}</h1>
        </div>
    )
}

export default Header;