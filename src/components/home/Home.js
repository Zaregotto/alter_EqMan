import React from 'react';

import "./home.css"

import {NavBar} from "../navBar";
import firstImg from '../../resources/IMG-0435-1.jpg'
import {Header} from "./Header";
import {Footer} from "../footer";



const Home = () => {
    return (
        <>
            <NavBar/>
            <Header/>
            <img className="firstImg" src={firstImg} alt="first"/>
            <Footer/>
        </>
    );
};

export {Home};
