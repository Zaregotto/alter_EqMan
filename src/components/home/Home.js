import React from 'react';

import "./home.css"

import {NavBar} from "../navBar";
import firstImg from '../../resources/IMG-0435-1.jpg'



const Home = () => {
    return (
        <>
            <NavBar/>
            <img className="firstImg" src={firstImg} alt="first"/>
        </>
    );
};

export {Home};
