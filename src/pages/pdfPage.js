import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import imgSuzuki from "../imgs/Suzuki.png"
import Usuarios from "../data/usuarios"
import { Link } from 'gatsby';

const MOTOCICLETAS_REGISTRADAS = [
  'GIXXER-150-FI-ABS',
  'GIXXER-250-SF', 
  'GIXXER-250', 
  'GN-125',
  'GSX-R-150-2022-ABS',
  'GSX-S-2022-ABS',
  'GSX-S1000',
  'HAYABUSA',
];

const Page = ({location}) => {
  
  let qparams = new URLSearchParams(location.search);
  let contacto = {};
  let registro = qparams.get("u");
  let archivo = qparams.get("f")

  if (!registro)
    registro = "";  

  Usuarios.map((usuario) => {
    if(usuario.registro == registro){
      contacto = usuario;
    }
  });

  if (!MOTOCICLETAS_REGISTRADAS.includes(archivo))
    return (<span>Lo sentimos, no encontramos la motocicleta asociada al código indicado</span>);
    
  let url = '/static/data/' + archivo + '.pdf';

  return (
    <div>
      <Header contacto={contacto}/>

      <div className="contenedor-btn-pdf">
        <p>( Información relevante )</p>
        <p>( Información relevante )</p>
        <p>( Información relevante )</p>
        <a className="btn-pdf" href={"../static/data/" + archivo + ".pdf"} target="_blank">
          VER PDF
        </a>
        <Link className="btn-catalogo" to={"/" + "?u=" + contacto.registro}>
          VER CATÁLOGO
        </Link>
        
        <img className="img-suzuki logo-pg" src={imgSuzuki}></img>
      </div>
      

      <Footer contacto={contacto}/>
    </div>
  );
};
//<iframe src={url} className='visor-pdf' ></iframe>
export default Page;