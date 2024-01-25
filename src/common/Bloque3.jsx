import React from "react";
import '../styles/Bloque3.css'
import Bloque1_1 from "./Bloque1_1";
import { Link } from "react-router-dom";


function Bloque3(){
  return(
    <div className="bloque3-contenedor">
      <h1>Bloque 3</h1>
      <h2>Funciones</h2>
      <Bloque1_1 />
      <Link to="/otra-pagina">
        <button className="boton-cuestionario">Cuestionario</button>
      </Link>
    </div>
  );
}
export default Bloque3;