import React from "react"

export default(props) => (
    <div className="cont-moto">
        <a className="link-moto" href={props.item.pdf} target="_blank">
            <img className="moto" src={props.item.imagen} alt={props.item.nombre}></img>
        </a>        
    </div>    
)

// CODIGO QUE SE USABA PARA IR A LA 2da PAGINA 

//<Link className={props.registro ? "link-moto" : "ocultar"} to={`/pdfPage` + "?u=" + props.registro + "&f=" + props.item.nombrePdf}>
//  <img className="moto" src={props.item.imagen}></img>
//</Link>