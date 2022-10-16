import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './components/Game';
import HowTo from './components/HowTo';
import Signup from './components/Signup';
import React, { useState, useEffect } from 'react';
import CookieAuthProvider from './contexts/cookieAuth';

function Routing(){
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <Routes>
                    <Route path={"/"} element={<Game/>}/>
                    <Route path={"/como-jugar"} element={<HowTo/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>
                </Routes>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;