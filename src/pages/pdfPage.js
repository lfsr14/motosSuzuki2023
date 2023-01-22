import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"

import Usuarios from "../data/usuarios"

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
    
  return (
    <div>
      <Header contacto={contacto}/>

      <iframe className='visor-pdf' src={"../static/data/" + archivo + ".pdf"}></iframe>

      <Footer contacto={contacto}/>
    </div>
  );
};

export default Page;