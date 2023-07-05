import React from 'react';
import UserImage from './UserImage';
import './UserCard.css'

const UserCard = (props) => {
    return(
        <div className="user-card">
            <div className="card-img">
                <UserImage imgUrl={props.user.profileImg}/>
            </div>
            <div className="card-info">
                <div className="card-name">
                    <div className="card-user-name">
                        {props.user.name}
                    </div>
                    <div className="card-username">
                    @{props.user.username}
                </div>
                </div>
            <div className="card-location">
                {props.user.location}
            </div>
            </div>
        </div>
    )
}

export default UserCard;