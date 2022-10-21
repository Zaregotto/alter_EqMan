import React from 'react';

import './Header.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
        <h1 className="headerLogo">NameCompany</h1>
            <h4 className="headerInfoLogo">програма з обліку матеріальних цінностей</h4>
            <h3 className="headerInfoLogoT">Простий та зручний облік ваших товарно-матеріальних цінностей, інструменту, обладнання, розхідників у будь-який час та з будь-якого пристрою</h3>
            <NavLink to="/sign-up" className="btnBlock">
            <button className="btnHeader">Почати зараз безкоштовно</button>
            </NavLink>
        </div>
    );
};

export {Header};
