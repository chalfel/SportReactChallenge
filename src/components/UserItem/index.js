import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './style.scss';

const DevItem = ({user, onClick})  => {
    const [ userPost, setUserPost ] = useState([]);
    const [ userAlbums, setUserAlbums] = useState([]);
    const [ userPhotos, setUserPhotos] = useState([]);
    const [ hiddenState, setHiddenState] = useState(true);
    const [ userDay, setUserDay] = useState('');
    const [ userAnswer, setUserAnswer] = useState('');
    
    useEffect(() => {
        const retrieveUserPosts = async () => {
            const userPostResponse = await api.get(`/posts`);

            setUserPost(userPostResponse.data.filter(res => res.userId === user.id));
        }
        const retrieveUsersAlbums = async () => {
            const userAlbumResponse = await api.get(`/albums`)
    
            setUserAlbums(userAlbumResponse.data.filter(res => res.userId === user.id));
        };
        const retrieveUsersPhotos = async () => {
            const userPhotosResponse =  await api.get(`/photos`);
            
            setUserPhotos(userPhotosResponse.data);
        }
        function getRandomDay() {
            const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday' ];
            setUserDay(dayArray[Math.floor(Math.random() * dayArray.length)]); 
        }
        function getRandomRun() {
            const answerArray = ['Sometimes', 'Always', 'Never'];
            setUserAnswer(answerArray[Math.floor(Math.random() * answerArray.length)]); 
        }
        getRandomRun();
        getRandomDay();
        retrieveUsersPhotos();
        retrieveUsersAlbums();
        retrieveUserPosts();
    }, [user.id]);


    function getAlbumPhotos() {
        const uniqueUserAlbums = [...new Set(userAlbums.map(a => a.id))];
        let albumPhotos = [];
        uniqueUserAlbums.forEach( id => {
            albumPhotos = [...albumPhotos, ...userPhotos.filter( p => p.albumId === id)];
        })
        return albumPhotos;
    };

    function deleteUser() {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            onClick(user.id);
        };
    } 

    
    return (
        <>
            <tr>
                <td><b>{user.username}</b></td>
                <td><b>{user.name}</b></td>
                <td id="email-data"><a href={user.email}><b>{user.email}</b></a></td>
                <td id="city-data"><b>{user.address.city}</b></td>
                <td><b>{user.rideInGroup || userAnswer}</b></td>
                <td><b>{user.daysWeek || userDay}</b></td>
                <td><b>{userPost.length}</b></td>
                <td><b>{userAlbums.length}</b></td>
                <td><b>{getAlbumPhotos().length}</b></td>
                <td className="button-block">
                    <button 
                    className="delete-button"
                    type="button" 
                    onClick={deleteUser} 
                    ><FontAwesomeIcon className="button-icon" icon={faTrash} />
                    </button>
                </td>
            </tr>
        </>
    );
}

export default DevItem;