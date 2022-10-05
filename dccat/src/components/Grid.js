import { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from "./Tile";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Grid(props) {
  const [symbols, setSymbols] = useState(["", "", "", "", "", "", "", "", ""]);

  // Temporales
  const playerId = 0;
  const matchId = 0;

  // Llamada asincrona a la API
  const getData = async () => {
    const { data } = await axios.get(`${SERVER_URL}/matches/${matchId}/players/${playerId}`);
    return data;
  };


  useEffect(()=>{
    getData().then((data) => {
      console.log(data);
  
      const newList = [...symbols];
  
      data["0"].map((mov) => {
        const index = mov[0] * 3 + mov[1];
        newList[index] = "O";
        return 0;
      });
  
      data["1"].map((mov) => {
        const index = mov[0] * 3 + mov[1];
        newList[index] = "X";
        return 0;
      }); 
  
      setSymbols(newList);
      
    });
  }, [])

  return (
    <div className="Grid">
      {symbols.map((symbol, index) => (
        <Tile id={`tile-${index}`} key={index} symbol={symbol} />
      ))}
    </div>
  );
}

export default Grid;
