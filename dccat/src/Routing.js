import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './components/Game';
import HowTo from './components/HowTo';
import Login from './components/Login';
import React, { useState, useEffect } from 'react';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';
import DeleteMatches from './components/DeleteMatches';

function Routing(){
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <Routes>
                        <Route path={"/"} element={<Game/>}/>
                        <Route path={"/como-jugar"} element={<HowTo/>}/>
                        <Route path={"/iniciar-sesion"} element={<Login/>}/>
                        <Route path={"/borrar-partidas"} element={<DeleteMatches/>}/>
                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;