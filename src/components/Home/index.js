import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserTable from '../UserTable';
import NewUser from '../NewUser';
import NavBar from '../Navbar';
import UserDropdown from '../UserDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from '@fortawesome/free-solid-svg-icons'



import './style.scss';

const Home = ()  => {
    const [userArray, setUserArray] = useState([]);
    return (
        <div className="container">
            <div className="header-container">
                <label className="square"><FontAwesomeIcon className="question-icon" icon={faQuestion} /></label>
                <label className="header-title"> Venturus Sport</label>
                <UserDropdown />
            </div>
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route path='/users/new' component={() => <NewUser userArray={userArray} setUserArray={setUserArray}/>} />
                    <Route path='/users' component={() => <UserTable array={userArray} />}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Home;