import React from "react";
import imgSuzuki from "../imgs/Suzuki.png"

export default(props) => (
    
    <header className="border-solid	border-b-2 border-neutral-900">
        <div className="header">
            <img className="img-suzuki" src={imgSuzuki}></img>
        </div>
        
        <h1>{props.contacto.nombre}</h1>
            <h1>{props.contacto.documento}</h1>
            <h1>{props.contacto.telefono}</h1>
            <h1>{props.contacto.wapp}</h1>
            <h1>{props.contacto.instagram}</h1>
            <h1>{props.contacto.direccion}</h1>
            <h1>{props.contacto.vitrina}</h1>
    </header>
)