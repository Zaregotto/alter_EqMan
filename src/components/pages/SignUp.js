import React, {useState} from 'react';
import {Login} from "../login";
import {Registration} from "../registration";

import './pages.css'

const SignUp = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <>
            <div className="formLogin">
                {
                    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm} />
                }
            </div>
        </>
    );
};

export {SignUp};
