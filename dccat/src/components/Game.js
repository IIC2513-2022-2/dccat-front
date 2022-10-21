import BlueButton from "./BlueButton";
import Grid from "./Grid";
import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import useTokenAuth from "../hooks/useTokenAuth";

function Game() {
  const grid = ["", "", "", "", "", "", "", "", ""];
  const playerId = 0;
  const matchId = 0;
  const navigate = useNavigate();
  const { currentUser, handleUserLogout } = useCookieAuth(); 
  const { handleTokenChange } = useTokenAuth();
  
  const logout = async () => {
    const response = await axios.post(`${SERVER_URL}/auth/logout`)
            .then(() => console.log('cerramos sesión'))
            .catch(err => console.log(err));
    handleUserLogout();
    handleTokenChange('', 'logout');
  }

  const getGrid = async () => {
    const tiles = document.getElementsByClassName("Tile")
    const url = `${SERVER_URL}/matches/${matchId}/players/${playerId}`;
    await axios.get(url).then((response) => {
      response.data["0"].map((mov) => {
        const index = mov[0] * 3 + mov[1];
        grid[index] = "X";
        tiles[index].firstElementChild.innerText = "X"
        return 0;
      });
      response.data["1"].map((mov) => {
        const index = mov[0] * 3 + mov[1];
        grid[index] = "O";
        tiles[index].firstElementChild.innerText = "O"
        return 0;
      });
    });
  };

  const newPlay = async () => {
    const tiles = document.getElementsByClassName("Tile")
    const url = `${SERVER_URL}/plays`;
    const body = {
      x: 0,
      y: 2,
      player: playerId,
      match_id: matchId,
    };
    await axios
      .post(url, body)
      .then((response) => {
        alert(` JUGADA CONCRETADA EN (${body.x}, ${body.y})`);
        tiles[body.x * 3 + body.y].firstElementChild.innerText = "X"
      })
      .catch((error) =>
        alert(`[${error.response.status}] ${error.response.data}`)
      );
  };

  return (
    <>
      <Grid listSymbols={grid} />
      <BlueButton title={"¿Cómo jugar?"} link={"/como-jugar"} />
      
      {
        (currentUser) ? (
          <>
            <BlueButton title={"Cargar Tablero"} onClick={getGrid} />
            <BlueButton title={"Nueva jugada"} onClick={newPlay} />
            <BlueButton title={"Cerrar sesión"} onClick={logout} />
            <BlueButton title={"Borrar partidas"} link={'/borrar-partidas/'} />
          </>
        ) : (
          <BlueButton title={"Iniciar sesión"} link={"/iniciar-sesion"} />
        )
      }
      
      
      
    </>
  );
}

export default Game;
