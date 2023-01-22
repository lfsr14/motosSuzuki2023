import React from "react"
import Motos from "../data/listadoMotos"
import Moto from "./Moto"

export default(props) => (
    <div className="catalogo">
        {
            Motos.map((moto) => {
                return <Moto item={moto} key={moto.id} registro={props.contacto.registro}/>
            })
        }
    </div>
)