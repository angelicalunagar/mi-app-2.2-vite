import { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import RectanguloArea from "./RectanguloArea"; */
import GrafDeFunciones from "./GrafDeFunciones";

function Bloque5() {
 
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>

      <Row>
        <Col md={6}>
          <GrafDeFunciones />
        </Col>
      </Row>
    </div>
  );
}
export default Bloque5;
