import React from 'react';
import "../styles.css";
export function Image({data}){
    var check = false;
    function popup(){
        check = !check;
      }
    function show(){
        
    }
    return(
        <React.Fragment>
            <img src={data.image} alt={data.name} width='100%' height="100%" onClick={()=> popup()}/><span>{data.desc}</span>
            {show()}
        </React.Fragment>
        
    )
}