import Tile from "./Tile";
import React from 'react';

function Grid(props) {
  return (
    <div className="Grid">
      {props.listSymbols.map((symbol, index) => (
        <Tile id={`tile-${index}`} key={index} symbol={symbol} />
      ))}
    </div>
  );
}

export default Grid;
