import BlueButton from "./BlueButton";
import Grid from "./Grid";
import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Game() {
  const grid = ["", "", "", "", "", "", "", "", ""];
  const playerId = 0;
  const matchId = 0;

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
      
      alert(
        `${JSON.stringify({
          "mi turno?": response.data.current === playerId ? "Si" : "No",
          "❎": response.data[0],
          "🅾️": response.data[1],
          "Gato🐱": grid,
        })}`
      );
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
      <BlueButton title={"Cargar Tablero"} onClick={getGrid} />
      <BlueButton title={"Nueva jugada"} onClick={newPlay} />
    </>
  );
}

export default Game;
