import React from 'react'
import './Cards.css'
function Card(props) {
    return (       
        <div className="card border"> 
        <div className="overflow">
        <a href={props.url} target="_blanck"><img src={props.imageSource} alt="" className="card-img-top"/>
        </a></div>
         <div className="card-body">
         <a href={props.url} target="_blanck"><h6 className="card-title"><span>{props.title}</span></h6>
             </a><a href={props.url} target="_blanck"><p className="card-text">{props.text}
             </p></a>
            
             </div>   
        </div>
    )
}

export default Card;