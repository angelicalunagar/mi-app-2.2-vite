//GrafDeFunciones.jsx
import { React, useRef, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { InlineMath } from "react-katex";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";

const GrafDeFunciones = () => {
const [dibujarSegmentoAG, setDibujarSegmentoAG] = useState(false);

  const handleDibujarSegmentoAG = () => {
    setDibujarSegmentoAG(true);
  };
 
  return (
    <div>
      <Row>
        <Col>
          <Button id="segmentoAG" onClick={handleDibujarSegmentoAG}>
            Segmento <InlineMath>{"AG"}</InlineMath>
          </Button>
        </Col>
      </Row>
      <Col>
        <GraficoArrastrePuntos dibujarSegmentoAG={dibujarSegmentoAG} />
      </Col>
      <Row></Row>
    </div>
  );
};

export default GrafDeFunciones;
