import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import jwtDecode from 'jwt-decode';
import useTokenAuth from '../hooks/useTokenAuth';

export default function Login() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth(); 
    const { handleTokenChange } = useTokenAuth(); 

    const userValidation = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${SERVER_URL}/auth/login`, {
            "email": mail,
            "password": password
        });
        if (!response.data.error) {
            handleTokenChange(response.data['token'], 'login');
            handleUserLogin();
            navigate(-1);

        } else {
            console.log(response.data.error);  
        }
    };

    return (
        <>
            <div className="form-entrar">
                <h2 className="titulo">
                    ¡Bienvenido de vuelta!
                </h2>
                <form className="login" onSubmit={userValidation}>
                    <p>
                        <input
                            type="text"
                            className="formulario"
                            placeholder="Correo electrónico"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)} required />
                    </p>
                    <p>
                        <input type="password"
                            className="formulario"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </p>
                    <input id="submit-login" type="submit" value="Iniciar Sesión" className='Button'/>
                </form>
            </div>
        </>
    );

}