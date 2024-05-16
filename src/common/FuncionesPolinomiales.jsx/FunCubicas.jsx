import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { FunCubicaContextProvider } from "../../contexts/FunCubicaContext";
import "../../styles/Bloque1_1.css";

const FunCubicas = () => {
  return (
    <Container>
      <Row className="row-nuevotema">
        <Col md={12}>
          <h4>Funciones polinomiales</h4>
          <br />
          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default FunCubicas;
