import React from "react";
import "../styles/Bloque4.css";
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import { useState } from "react";


function Bloque4() {
  const [showSidebar, setShowSidebar] = useState(false);


  const handleShow = () => {
    setShowSidebar(true);
  };
  const handleClose = () => {
    setShowSidebar(false);
  };

  console.log(showSidebar);
  console.log(setShowSidebar);

  

  return (
    <div className="bloque4-contenedor">
      <div className="h-center">
        <h1>Bloque 4</h1>
        <h2>Funciones</h2>
      </div>
    
      <Sidebar show={showSidebar} close={handleClose}/>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
     
    </div>
  );
}
export default Bloque4;
