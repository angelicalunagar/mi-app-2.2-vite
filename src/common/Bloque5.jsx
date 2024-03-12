import { useState } from "react";
import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RectanguloArea from "./RectanguloArea";
import { Form } from "react-bootstrap";


function Bloque5() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      
          <Row>
            <Col md={5}>
            <RectanguloArea />
            </Col>
            <Col>
            <p>
              HOLA MUNDO
            </p>
            </Col>
          </Row>
        
    </div>
    
  );
}
export default Bloque5;
