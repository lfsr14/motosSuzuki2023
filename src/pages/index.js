import React from 'react';
import Header from "../components/header"
import Catalogo from "../components/catalogo"
import Footer from "../components/footer"
//import { useQuery, gql } from '@apollo/client';

import Usuarios from "../data/usuarios"

/* const USUARIOS_QUERY = gql`
  query QueryUsuarios($registro: String!){
    usuariosJson(registro: {eq: $registro}) {
      id
      registro
      documento
      nombre
      telefono
      wapp
      instagram
      direccion
      vitrina
    }
  }
`; */

const Index = ({location}) => {
  
  let qparams = new URLSearchParams(location.search);
  let contacto = {};
  let registro = qparams.get("u");
  let archivo = qparams.get("f")

  if (!registro)
    registro = "";  
  
  /* 
  >>>IMPORTANTE: PARA USAR ESTE BLOQUE DE CODIGO, SE DEBE USAR UNA URL PUBLICA PARA ACCEDER A GRAPHQL
  Y CONFIGURARLA EN EL ARCHIVO /src/apollo/client


  let { loading, error, data } = useQuery(USUARIOS_QUERY, {
    variables: { registro },
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar la página, consulte con el administrador.</div>;

  if (data.usuariosJson)
    contacto = data.usuariosJson; */

  Usuarios.map((usuario) => {
    if(usuario.registro == registro){
      contacto = usuario;
    }
  });

  return (
    <div>
      <Header contacto={contacto}/>
      <Catalogo/>
      <Footer contacto={contacto}/>
    </div>
  );
};

export default Index;