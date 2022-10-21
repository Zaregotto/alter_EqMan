import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "../button";

import logo from '../../resources/images.png'
import home from '../../resources/home.png'
import inventory from '../../resources/boxes.png'
import price from '../../resources/label.png'
import instruction from '../../resources/instruction.png'
import qrCode from '../../resources/qr-code.png'

import './NavBar.css'

const NavBar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => {
        setClick(false)
    }

    return (
        <>
            <div className='navbarPosition'>
            <nav className="navbar">
                <Link to='/' className="navbarLogo">
                   ім'я
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="navLinks" onClick={closeMobileMenu}>
                            Домівка
                            <img src={home} alt="home"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/inventory' className="navLinks" onClick={closeMobileMenu}>
                            Інвентаризація
                            <img src={inventory} alt="inventory"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/price' className="navLinks" onClick={closeMobileMenu}>
                            Вартість
                            <img src={price} alt="price"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/qrCode' className="navLinks" onClick={closeMobileMenu}>
                            Магазин маркувань
                            <img src={qrCode} alt="qrCode"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/instruction' className="navLinks" onClick={closeMobileMenu}>
                            Інструкція
                            <img src={instruction} alt="instruction"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className="navLinksMobile" onClick={closeMobileMenu}>
                            Увійти
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
            </div>
        </>
    );
};

export {NavBar};
