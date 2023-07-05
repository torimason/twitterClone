import React from 'react';
import UserCard from './UserCard';
import './UserList.css'

const UserList = (props) => {
    
    const users = 
    props.users.map((user) => {
        return <UserCard user={user} key={user.userId}/>
    })
    
    return(
        <div className="user-list">
            <div className="user-list-header">
                {props.header}
            </div>
            {users}
        </div>
    )
}

export default UserList