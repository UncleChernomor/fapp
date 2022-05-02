import React from 'react';
const arrPow = require('../TEST/array/arrPow');

function Home(props) {

    return (
        <main sx="color: black">
            <h1>Home Page</h1>
            <p>
                массив: {arrPow([1, 2])}
            </p>
        </main>
    );
}

export default Home;