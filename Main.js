import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './profile/ProfilPhoto.js'
import FullName from './profile/FullName.js'
import Address from './profile/Address.js'

function Main() {
    return (
        <div className="Main">
            <header className="App-header">

                <h1>Hello World
        </h1>
                <ProfilPhoto />
                <FullName />
                <Address />
            </header>
        </div>
    );
}

export default Main;