//Bloque 1
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../styles/Bloque1.css'
import SlideCuestionario from "./SlideCuestionario";
import { BoardContextProvider } from "../contexts/BoardContext";
import Board from "./Board";


function Bloque1(){
  return(
    <div className="bloque1-contenedor">
      <SlideCuestionario />
      <BoardContextProvider>
        <Row>
          <Col md={9}>
         
            {/* <Board />  */}
          </Col>
        </Row>
      </BoardContextProvider>
    </div>
  );
}
export default Bloque1;
