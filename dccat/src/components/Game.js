import BlueButton from "./BlueButton";
import Grid from "./Grid";
import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Game() {
  const grid = ["", "", "", "", "", "", "", "", ""];
  const playerId = 1;
  const matchId = 0;

  const getGrid = async () => {
    const url = `${SERVER_URL}/matches/${matchId}/players/${playerId}`;
    await axios.get(url).then((response) => {
      response.data["0"].map((mov) => {
        const index = mov[0] * 3 + mov[1];
        grid[index] = "X";
        return 0;
      });
      response.data["1"].map((mov) => {
        const index = mov[0] * 3 + mov[1];
        grid[index] = "O";
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
    const url = `${SERVER_URL}/plays`;
    const body = {
      x: 1,
      y: 2,
      player: playerId,
      match_id: matchId,
    };
    await axios
      .post(url, body)
      .then((response) => {
        alert(` JUGADA CONCRETADA EN (${body.x}, ${body.y})`);
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
