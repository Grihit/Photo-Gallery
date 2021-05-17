import React from 'react';
import Popup from 'reactjs-popup';
import "../styles.css";
export function Image({data}){
    return(
        <React.Fragment>
        <Popup
            trigger = {
                <img src={data.image} alt={data.name} width='100%' height="100%" />
            }
            on="click"
            modal
            closeOnDocumentClick
        >
            <div className="popup">
                <img src={data.image} alt={data.name}/>
                <span className="name">{data.name}</span>
            </div>
        </Popup>
        <span className="desc">{data.desc}</span>
        </React.Fragment>
        
    )
}