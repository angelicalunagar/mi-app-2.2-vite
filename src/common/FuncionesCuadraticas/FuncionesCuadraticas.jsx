import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { GraficaFContextProvider } from "../../contexts/GraficaFContext";
import BoardXX from "../BoardXX";
import GraficaF from "../GraficosDeFunciones/GraficaF";
import PuntoMovibleF from "../GraficosDeFunciones/PuntoMovibleF";
import Quiz17 from "./Quiz17";
import "../../styles/Bloque1_1.css";

const FuncionesCuadraticas = () => {
  return (
    <Container>
      <Row className="row-nuevotema">
        <Col md={12}>
          <h4>Funciones cuadráticas</h4>
          <br />
          <p>
            ¿Recuerdas el caso del granjero el cuál quería construir un corral?
            La función que describía el área A(x) del corral en función de uno
            de sus lados x era:
            <BlockMath>{"A(x)=150x-x^2"}</BlockMath>
            Con dominio <InlineMath>{"0 \\leq x \\leq 150"}</InlineMath> y rango{" "}
            <InlineMath>{"0 \\leq x \\leq 5625"}</InlineMath>, de acuerdo al
            contexto. Observa que el término <InlineMath>{"-x^2"}</InlineMath>{" "}
            es el término cuadrático en esta función y al cual le debe su nombre
            de función cuadrática. De hecho, las funciones cuadráticas se llaman
            así porque el mayor exponente de la variable independiente x es 2.
            <br />
            <br />
            En contraste, en las funciones lineales, como{" "}
            <InlineMath>{"f(x)=mx+b"}</InlineMath>, el mayor exponente de x es
            1, lo que resulta en una relación lineal entre la variable
            dependiente y la variable independiente. Entonces, ¿crees que la
            gráfica de esta función tiene forma de recta?
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={7}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 9</h6>
                </div>
                <BoardXX boardId="board7" boundingBox={[-2, 11, 51, -1]} />
                <GraficaF
                  boardId="board7"
                  funcionGrafica={(x) => 150*x-x*x}
                />

                <PuntoMovibleF
                  boardId="board7"
                  initialCoordinates={[7, Math.sqrt(7)]}
                />
              </Row>
            </Col>
            <Col>
            <Quiz17 />
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
    </Container>
  );
};

export default FuncionesCuadraticas;
