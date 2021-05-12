import React from 'react';
import "../styles.css";
export function Image({data}){
    return(
        <React.Fragment>
            <img src={data.image} alt={data.name} width='100%' height="100%"/><span>{data.desc}</span>
        </React.Fragment>
        
    )
}