import BlueButton from "./BlueButton";
import Grid from "./Grid";

function Game(){
    return (
        <>
            <Grid list_symbols={["O", "X", "O", "X", "", "", "O", "", ""]}/>
            <BlueButton title={"¿Cómo jugar?"} link={"/como-jugar"}/>
        </>
    )
}

export default Game;