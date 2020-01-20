import React, { useState, useEffect } from  'react';
import Dropdown from 'react-bootstrap/Dropdown'


import './style.scss';

const UserDropdown = () => {

    const [ name, setName] = useState('');
    const [ avatar, setAvatar] = useState('');

    useEffect(() => {
        const response = getUserInfo();
        const avatarResponse = response.name.split(' ').map( n => n[0]).join('').toUpperCase();

        setName(response.name);
        setAvatar(avatarResponse);
        
    }, [])
    function getUserInfo() {
        return {
            username: 'chalfel',
            name: 'Caio Felix',
            email: 'caiohalcsik@gmail.com',
            city: 'Campinas',
            rideInGroup:'Always',
            dayWeeks: 'Every day',
            posts: 10,
            albums: 10,
            photos: 10
        }
    }
    return (
        <>  
            <div className="user-menu">
                <label title="name" className="user-profile"> {name} </label>
                <label title="avatar" className="user-avatar"> {avatar} </label>
            </div>
        </>
    )
}

export default UserDropdown;