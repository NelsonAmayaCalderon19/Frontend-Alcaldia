import React from 'react'
import './CardTemas.css'
function Card(props) {
    return (       
        <div className="card border"> 
        <div className="overflow">
        <a href={props.url} target="_blanck"><img src={props.imageSource} alt="" className="card-img-top"/>
        </a></div>
         <div className="card-body">
         <a href={props.url} target="_blanck"><h6 className="card-tit"><span className="titulito">{props.title}</span></h6>
             </a><a href={props.url} target="_blanck"><p className="card-tex">{props.text}
             </p></a>
            
             </div>   
        </div>
    )
}

export default Card;
