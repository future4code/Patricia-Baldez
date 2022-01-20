import React from "react";
import {BrowserRouter,Routes, Route,} from "react-router-dom"; 
import DiaDeSorteScreen from "../screens/DiaDeSorteScreen/DiaDeSorteScreen";
import LotoFacilScreen from "../screens/LotoFacilScreen/LotoFacilScreen";
import LotoManiaScreen from "../screens/LotoManiaScreen/LotoFacilManiaScreen";
import MegaSenaScreen from "../screens/MegaSenaScreen/MegaSenaScreen";
import QuinaScreen from "../screens/QuinaScreen/QuinaScreen";
import TimeManiaScreen from "../screens/TimeManiaScreen/TimeManiaScreen";


const Router = () => {
    return (
       
              <BrowserRouter>
              <Routes>
                <Route exact path={"/"} component={DiaDeSorteScreen} />
                        <Route exact path={"/LotoFacil/:name"} component={LotoFacilScreen} />
                        <Route exact path={"/LotoMania"} component={LotoManiaScreen} />
                        <Route exact path={"/MegaSena"} component={MegaSenaScreen} />
                        <Route exact path={"/Quina"} component={QuinaScreen} />
                        <Route exact path={"/TimeMania"} component={TimeManiaScreen} />
                        <Route>
                            <div>Erro: Página não encontrada!</div>
                        </Route>
                        </Routes>
              </BrowserRouter>
    )
}

export default Router

