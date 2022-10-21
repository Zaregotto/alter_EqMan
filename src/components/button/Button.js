import React from 'react';
import {Link} from "react-router-dom";
import user from "../../resources/man.png";

import "./Button.css"

const Button = () => {
    return (
        <Link className="border" to="/sign-up">
            <button className="btn">
                Увійти
                <img src={user} alt="user"/>
            </button>
        </Link>
    );
};

export {Button};
