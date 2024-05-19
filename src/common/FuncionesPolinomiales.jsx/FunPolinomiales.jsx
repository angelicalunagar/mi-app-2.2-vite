import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { GraficaFContextProvider } from "../../contexts/GraficaFContext";
import BoardXX from "../Utilerias/BoardXX";
import GraficaFSinBoton from "./GraficaFSinBoton";
import PuntoMovibleF from "../GraficosDeFunciones/PuntoMovibleF";
import VariacionIntervaloF from "../FuncionesCuadraticas/VariacionIntervaloF";
import Quiz22 from "./Quiz22";
import "../../styles/Bloque1_1.css";

const FunPolinomiales = () => {
  return (
    <Container>
      <Row className="row-nuevotema">
        <Col md={12}>
          <h4>Funciones polinomiales</h4>
          <br />
          <p>
            A las funciones lineales y cuadráticas se les conoce como funciones
            polinomiales porque la función <InlineMath>f(x)</InlineMath> está
            definida por un polinomio. En el caso de las funciones lineales, se
            definen por un polinomio de primer grado:{" "}
            <BlockMath>f(x)=mx+b</BlockMath>
            Por su parte, las funciones cuadráticas están definidas por
            polinomios de segundo grado:
            <BlockMath>f(x)=ax^2+bx+c</BlockMath> Esto significa que las
            funciones definidas con un polinomio de 3er grado también son
            funciones polinomiales puesto que están definidas por un polinomio.
            A estas funciones se les llama funciones cúbicas. Un ejemplo de
            función cúbica es:
            <BlockMath>f(x)=x^3+5x^2+x-2</BlockMath>.
          </p>
        </Col>
      </Row>
     {/*  <BoardsContextProvider>
        <GraficaFContextProvider>
         
            <Col md={6}>
            <Row>
              <BoardXX boardId="board7.4" boundingBox={[-8, 40, 8, -25]} />

              <GraficaFSinBoton
                boardId="board7.4"
                funcionGrafica={(x) => x * x * x + 5 * x * x + x - 2}
              />
              <div className="botones-grafica">
                <PuntoMovibleF boardId="board7.4" initialCoordinates={[1, 6]} />
                
                <VariacionIntervaloF
                  boardId="board7.4"
                  initialCoordinates={[1, 5, 2, 28]}
                />
              </div>
              </Row>
            </Col>
         
        </GraficaFContextProvider>
      </BoardsContextProvider> */}
      <BoardsContextProvider>
        <GraficaFContextProvider>
          <Row className="grafica-quiz">
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 15</h6>
                </div>
                <BoardXX boardId="board13" boundingBox={[-8, 40, 8, -25]} />

                <GraficaFSinBoton
                  boardId="board13"
                  funcionGrafica={(x) => x * x * x + 5 * x * x + x - 2}
                />
                
                <span className="botones-grafica">
                  <PuntoMovibleF
                    boardId="board13"
                    initialCoordinates={[1, 6]}
                  />
                  <VariacionIntervaloF
                    boardId="board13"
                    initialCoordinates={[1, 5, 2, 28]}
                  />
                </span>
        
              </Row>
            </Col>
            <Col md={5}>
              <Quiz22 />
            </Col>
          </Row>
        </GraficaFContextProvider>
      </BoardsContextProvider>
    </Container>
  );
};

export default FunPolinomiales;
