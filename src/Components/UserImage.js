import React from 'react';

const UserImage = (props) => {
    return(<div className="user-image" style={{backgroundImage : props.imgUrl}}></div>)
}

export default UserImage;