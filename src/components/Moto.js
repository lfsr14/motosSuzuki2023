import React from "react"

export default(props) => (
    <div className="cont-moto" id={props.key}>
        <a className="link-moto" href={props.item.pdf} target="_blank">
            <img className="moto" src={props.item.imagen}></img>
        </a>
    </div>    
)