import React from 'react';
import UserForm from '../UserForm';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import './style.scss';

const NewUser = ({ userArray, setUserArray }) => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/users">/ User List</Breadcrumb.Item>
                <Breadcrumb.Item active>/ New User</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header-block">
                <header> <strong> Registration </strong> </header>
                <hr></hr>
            </div>
            <div className="form">
                <UserForm userArray={userArray} setUserArray={setUserArray}/>
            </div>
        </>
    );
}

export default NewUser;