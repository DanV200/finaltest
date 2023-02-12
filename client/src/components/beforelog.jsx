import React from 'react';
import Login from './login';
import { Route, Routes } from "react-router-dom";
import Main from './main';
const BeforeLog = () => {
return (
    <div>
        <Login/>
        <Routes>
    <Route path="/" element={<Main />} />
    </Routes>
        </div>
    );
}

export default BeforeLog;