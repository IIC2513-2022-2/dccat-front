import Tile from "./Tile";

function Grid(props) {
  return (
    <div className="Grid">
      {props.list_symbols.map((symbol, index) => (
        <Tile key={index} symbol={symbol} />
      ))}
    </div>
  );
}

export default Grid;
