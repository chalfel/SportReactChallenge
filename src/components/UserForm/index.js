import React, { useState } from 'react';
import Checkbox from '../utils/Checkbox';

import './style.scss';

const UserForm = ({userArray, setUserArray}) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [rideInGroup, setRideInGroup] = useState('');
    const [daysWeek, setDaysWeek] = useState([]);

    const daysArray = ['Monday', 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    function generateKey() {
        return Math.floor(Math.random() * 100000);
    }
    function saveUser(e) {
        e.preventDefault();
        setUserArray([...userArray, {
            username,
            name,
            email,
            address: {
                city   
            },
            rideInGroup,
            daysWeek: daysWeek.join(', '),
            id: generateKey()
        }])
        console.log(rideInGroup);

    }
    
    function discartUserInput(e) {
        e.preventDefault();
        setUsername('');
        setName('');
        setEmail('');
        setCity('');
        setRideInGroup('');
        setDaysWeek([]);
    }
    return(
        <aside className="form-block">
            <form className="user-form">
                <div className="row">
                    <div className="column">
                        <div className="input-block">
                            <label className="title" htmlFor="username">Username</label>
                                <input 
                                    name="username" 
                                    type="input"
                                    id="username" 
                                    value={username}
                                    onChange={ e => setUsername(e.target.value)}
                                />
                        </div>
                        <div className="input-block">
                            <label className="title" htmlFor="Name">Name</label>
                            <input 
                                name="Name" 
                                type="input"
                                id="Name" 
                                value={name}
                                onChange={ e => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label className="title" htmlFor="email">E-mail</label>
                            <input 
                                name="email" 
                                type="input"
                                id="email" 
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="column">
                    <div className="input-block">
                        <label className="title" htmlFor="city">City</label>
                        <input 
                            name="city" 
                            type="input"
                            id="city" 
                            value={city}
                            onChange={ e => setCity(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label className="title" htmlFor="ridegroup">Ride in Group</label>
                        <div className="row radio-block">
                            <input 
                                type="radio"
                                name="Always" 
                                id="Always" 
                                value="Always"
                                onChange={ e => setRideInGroup(e.target.value)}
                            /><label htmlFor="Always">Always</label>
                            <input 
                                type="radio"
                                name="Sometimes" 
                                id="Sometimes"
                                value="Sometimes" 
                                onChange={ e => setRideInGroup(e.target.value)}
                            /><label htmlFor="Sometimes">Sometimes</label>
                            <input 
                                type="radio"
                                name="Never" 
                                id="Never" 
                                value="Never"
                                onChange={ e => setRideInGroup(e.target.value)}
                            /><label htmlFor="Never">Never</label>
                        </div>
                    </div>
                    <div className="input-block">
                        <label className="title"  htmlFor="dayWeek">Days of the week</label>
                        <div className="row check-block">
                            {daysArray.map( d => <Checkbox key={d} daysWeek={daysWeek} setDaysWeek={setDaysWeek} day={d} />)}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="button-block">
                    <button
                        id="save-button"
                        type="submit"
                        onClick={saveUser}
                    >
                        Save
                    </button>
                    <button 
                        id="reset-button"
                        type="reset"
                        onClick={discartUserInput}
                    >
                        Discart
                    </button>
                </div>
            </form>
        </aside>
    );
};

export default UserForm;