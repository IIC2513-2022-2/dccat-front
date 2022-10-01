import Tile from "./Tile";

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
