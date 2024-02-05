import React, { Fragment,useState} from "react";
import { Button } from "./Button";
import Pantalla from "./Pantalla";
import { ClearBTN } from "./ClearBtn";
import {evaluate} from 'mathjs'
import './estilo.css'

export function Presentacion(){
    const [input,setInput] = useState('')
    const addInput = val =>{
        setInput(input + val)
    }
    const calcularResult = ()=>{
        setInput(evaluate(input))
    }
    return(
        <Fragment>
            <section>      
                <Pantalla input={input}/>          
            
                <div className="btn-group">
                    <div className="row-btn">
                        <Button manejaClic={addInput}>1</Button>
                        <Button manejaClic={addInput}>2</Button>
                        <Button manejaClic={addInput}>3</Button>
                        <Button manejaClic={addInput}>+</Button>                        
                    </div>
                    <div className="row-btn">
                        <Button manejaClic={addInput}>4</Button>
                        <Button manejaClic={addInput}>5</Button>
                        <Button manejaClic={addInput}>6</Button>
                        <Button manejaClic={addInput}>-</Button>
                    </div>
                    <div className="row-btn">
                        <Button manejaClic={addInput}>7</Button>
                        <Button manejaClic={addInput}>8</Button>
                        <Button manejaClic={addInput}>9</Button>
                        <Button manejaClic={addInput}>/</Button>
                    </div>
                    <div className="row-btn">                       
                        <Button manejaClic={calcularResult}>=</Button>
                        <Button manejaClic={addInput}>0</Button>
                        <Button manejaClic={addInput}>.</Button>
                        <Button manejaClic={addInput}>*</Button>
                    </div>
                    <ClearBTN manejaClear={()=>{
                        setInput('')
                    }}/>
                </div>           
            </section>
        </Fragment>
    )
}

