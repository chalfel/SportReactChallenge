import React from 'react';
import { Link } from 'react-router-dom';


import './style.scss';

const Navbar = () => {

    return (
        <>
            <nav className="navbar-container">  
                <Link to='/users/new'> <label> User New </label>  </Link>
                <Link to='/users'> User List</Link>
            </nav>
        </>
    );
}

export default Navbar;