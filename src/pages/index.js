import * as React from "react"
import Header from "../components/header"
import Catalogo from "../components/catalogo"
import Footer from "../components/footer"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {

  let usuario = "";
  let file = null;
  console.log(window.location);

  let params = window.location.search;
  params = params.replace("?", "");
  params = params.split("&");
  params.forEach(element => {
    let p = element.split("=");
    if(p[0] == "u") 
      usuario = p[1];
    else if(p[0] == "f")
      file = p[1]; 

  });

  console.log(usuario);

  const dt = useStaticQuery(graphql`
  query MyQuery {
    usuariosJson(registro: {eq: "AS1"}) {
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
  `);
  console.log(dt);

  return (
    <div>
      <Header/>
      <Catalogo/>
      <Footer/>
    </div>
  )
}
