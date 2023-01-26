import React from "react"
import Motos from "../data/listadoMotos"
import Moto from "./Moto"

export default() => (
    <div className="catalogo">
        {
            Motos.map((moto) => {
                return <Moto item={moto} key={moto.id}/>
            })
        }
    </div>
)