import React from "react";
import imgSuzuki from "../imgs/Suzuki.png"
import lgLlamar from "../logos/llamar.png"
import lgWapp from "../logos/wapp.png"
import lgInstagram from "../logos/instagram.png"
import { Link } from 'gatsby';

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

export default(props) => (
    <header className="border-solid	border-b-2 border-neutral-900">
        <div className="header">
            <Link to={"/" + "?u=" + props.contacto.registro}>
                <img className="img-suzuki" src={imgSuzuki}></img>
            </Link>
            <div className={props.contacto.nombre ? `cont-info-contacto-header` : `ocultar`}>
                <h3 className={props.contacto.tipo == "a" ? `lbl-asesor` : `ocultar`}><strong>Contactar asesor</strong> {props.contacto.nombre}</h3>
                <h3 className={props.contacto.tipo == "v" ? `lbl-vitrina` : `ocultar`}>
                    <strong>Contactar</strong> {props.contacto.nombre} 
                    <span className={props.contacto.direccion ? `lbl-direccion` : `ocultar`}> {props.contacto.direccion}</span>
                </h3>
                <div className="contacto-redes">
                    <div>
                        <span className={!props.contacto.telefono ? `ocultar` : `lbl-telefono`}><strong>Tel.</strong> {props.contacto.telefono}</span>
                    </div>
                    <div className="info-asesor">
                        <a className={!props.contacto.telefono || !isMobile() ? `ocultar` : `btn-llamar`} href={"tel:+57" + props.contacto.telefono} target="_blank">
                            <img className="logo lg-llamar" src={lgLlamar} alt="logo-telefono"></img>
                        </a>
                        <a className={!props.contacto.wapp ? `ocultar` : `btn-wapp`} href={"https://wa.me/57" + props.contacto.wapp + "?text=Estoy+interesado+en+una+moto+Suzuki..."} target="_blank">
                            <img className="logo lg-wapp" src={lgWapp} alt="logo-wapp"></img>
                        </a>
                        <a className={!props.contacto.instagram ? `ocultar` : `btn-wapp`} href={"https://www.instagram.com/" + props.contacto.instagram} target="_blank">
                            <img className="logo lg-instagram" src={lgInstagram} alt="logo-instagram"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    </header>
)