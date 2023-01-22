import React from "react"
import { Link } from 'gatsby';

export default(props) => (
    <div className="cont-moto">
        <Link className={props.registro ? "link-moto" : "ocultar"} to={`/pdfPage` + "?u=" + props.registro + "&f=" + props.item.nombrePdf}>
            <img className="moto" src={props.item.imagen}></img>
        </Link>
        <a className={props.registro ? "ocultar" : "link-moto"} href={props.item.pdf} target="_blank">
            <img className="moto" src={props.item.imagen}></img>
        </a>        
    </div>    
)
// CODIGO PARA NO IR A LA PÁGINA pdfPage SINO DIRECTO A DESCARGAR EL PDF:
//
//<a className="link-moto" href={props.item.pdf} target="_blank">
//    <img className="moto" src={props.item.imagen}></img>
//</a>