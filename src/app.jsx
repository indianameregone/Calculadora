import React from "react";
import { Presentacion } from "./Components/Presentacion";
import './Style.css'




export const App = ()=>{
    return(
        <div className="body">
            <h1>Calculadora Los Magios</h1>
            <Presentacion/>                 
        </div>    
    )
}