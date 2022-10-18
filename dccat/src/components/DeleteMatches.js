import React from 'react';
import BlueButton from './BlueButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../App';
import jwtDecode from 'jwt-decode';
import useTokenAuth from '../hooks/useTokenAuth';

function DeleteMatches() {
  const navigate = useNavigate()
  const { handleTokenChange } = useTokenAuth();

  const deleteMatches = (e) => {
    e.preventDefault();
    let matches = jwtDecode(localStorage.getItem('matches'))['matches'];
    console.log(matches);
    matches.map((item) => {
      const response = axios.delete(`${SERVER_URL}/delete/${item.id}`,
                  { headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('matches'))}`} });
      }
      
    )
    navigate('/')
  };
  
  return ( 
    <>
        <h2>Borrar partidas</h2>
        <p>Como este es un procedimiento importante (y sin vuelta atrás), 
          debes volver a iniciar sesión antes de borrar las partidas</p>
        <BlueButton title={'Iniciar sesión'} link={'/iniciar-sesion'}></BlueButton>
        <BlueButton title={'Eliminar'} onClick={deleteMatches}></BlueButton>
    </>
  );
}

export default DeleteMatches;
