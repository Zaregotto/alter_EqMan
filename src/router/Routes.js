import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "../components/home";
import {Instruction, Inventory, Price, QrCode, SignUp} from "../components/pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                exact
                element={<Home/>}

            />
            <Route
            path="/inventory"
            element={<Inventory/>}
            />
            <Route
            path="/price"
            element={<Price/>}
            />
            <Route
                path="/qrCode"
                element={<QrCode/>}
            />
            <Route
                path="/instruction"
                element={<Instruction/>}
            />
            <Route
                path="/sign-up"
                element={<SignUp/>}
            />
            <Route
            path="*"
            element={<Home/>}
            />
        </Routes>
    );
};

export {AppRoutes};
