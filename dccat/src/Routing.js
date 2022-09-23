import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './components/Game';
import HowTo from './components/HowTo';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Game/>}/>
                <Route path={"/como-jugar"} element={<HowTo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;