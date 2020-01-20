import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import UserItem from '../UserItem';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './style.scss';

const UserTable = ({array}) => {
    const [ usersArray, setUsersArray ] = useState([]);
    useEffect(() => {
        const retriveUsers = async () => {
            const usersResponse = await api.get('/users');

            setUsersArray([...array, ...usersResponse.data]);
        };
        retriveUsers();

    }, [array]);
    function handleOnClick(userId) {

        setUsersArray(usersArray.filter(users => users.id !== userId));
    }
    return (
      <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active> / User List </Breadcrumb.Item>
            </Breadcrumb>
            <div className="header-block">
                <header> <strong> Users </strong> </header>
                <hr></hr>
            </div>
        <main>
            <table>
                <tbody>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>City</th>
                    <th>Ride in group</th>
                    <th>Day of the week</th>
                    <th>Posts</th>
                    <th>Albums</th>
                    <th>Photos</th>
                </tr>
                {usersArray.map( u => (<UserItem key={u.id} onClick={handleOnClick} user={u}/>))}
                </tbody>
            </table>
        </main>
      </>
    );
}

export default UserTable;