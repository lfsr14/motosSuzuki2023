import React from 'react';
import Header from "../components/header"
import Catalogo from "../components/catalogo"
import Footer from "../components/footer"
import { useQuery, gql } from '@apollo/client';

const WEATHER_QUERY = gql`
  query MyQuery($reg: String!){
    usuariosJson(registro: {eq: $reg}) {
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
`;

const Index = () => {
  let reg = "";
  let file = null;

  let params = window.location.search;
  params = params.replace("?", "");
  params = params.split("&");
  params.forEach(element => {
    let p = element.split("=");
    if(p[0] == "u") 
      reg = p[1];
    else if(p[0] == "f")
      file = p[1]; 
  });

  let contacto = {nombre: ''};
  let { loading, error, data } = useQuery(WEATHER_QUERY, {
    variables: { reg },
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  if (data.usuariosJson)
    contacto = data.usuariosJson;
  
  return (
    <div>
      <Header contacto={contacto}/>
      <Catalogo/>
      <Footer/>
    </div>
  );
};

export default Index;