import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = (props) => {
    const [message, updateMessage] = useState('');

    useEffect(() => {
        const url = "https://reqres.in/api/users?page=2";
        axios.get(url)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const showText = () => {
        updateMessage("This is a Profile Page - Func comp")
    }

    return (
        <div>
            <h2>Profile Page</h2>
            <h2>{message}</h2>
            <button onClick={() => { showText() }}>Click</button>
        </div>
    );
};

export default Profile;