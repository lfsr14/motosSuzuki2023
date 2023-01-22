import React from "react";

export default(props) => (
    <footer>
        <div className="footer">
            <span>SUZUKI MOTOR DE COLOMBIA S.A.</span>
            <span className={!props.contacto.direccion ? `ocultar` : `lbl-direccion`}>{props.contacto.direccion}</span>
            <span className={!props.contacto.vitrina ? `ocultar` : `lbl-vitrina`}>{props.contacto.vitrina}</span>
        </div>    
        <div className="demo">
            <p className="textDemo">*** DEMO ***</p>
            <p>AGENCIA NN® - agenciann@gmail.com</p>
        </div>
    </footer>
)