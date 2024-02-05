import React from "react";

export const Button =(props)=>{
    return(
        <div onClick={()=>props.manejaClic(props.children)} className="btn">
            {props.children}
        </div>
    )
}