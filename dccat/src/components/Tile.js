import React, { useState } from 'react';

function Tile(props) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!selected) {
      setSelected(true);
    }else{
      setSelected(false);
    }
  }

  return (
    <section className="Tile" onClick={handleClick}>
      <p>{props.symbol}</p>
      {selected===true && <p>Selected</p>}
    </section>
  );
}

export default Tile;
