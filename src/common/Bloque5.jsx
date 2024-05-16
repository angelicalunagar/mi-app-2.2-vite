import "../styles/Bloque5.css";
import "../styles/Bloque1_1.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VariacionFunciones from "./VariacionFunciones";
import { BoardsContextProvider } from "../contexts/BoardsContext";
import { GraficaFContextProvider } from "../contexts/GraficaFContext";
import { FunCuadratContextProvider } from "../contexts/FunCuadratContext";
import { FunCubicaContextProvider } from "../contexts/FunCubicaContext";
import BoardXX from "./Utilerias/BoardXX";
import GraficaF from "./GraficosDeFunciones/GraficaF";
import GraficaFSinBoton from "./FuncionesPolinomiales.jsx/GraficaFSinBoton";
import PuntoMovibleF from "./GraficosDeFunciones/PuntoMovibleF";
import VariacionIntervaloF from "./FuncionesCuadraticas/VariacionIntervaloF";
import FunCubicaParam from "./FuncionesPolinomiales.jsx/FunCubicaParam";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>

      <BoardsContextProvider>
        <GraficaFContextProvider>
          <Row>
            <Col md={6}>
              <BoardXX boardId="board7.4" boundingBox={[-8, 40, 8, -25]}/>

              <GraficaFSinBoton
                boardId="board7.4"
                funcionGrafica={(x) =>  x * x * x + 5 * x * x + x - 2}
              />

              <PuntoMovibleF boardId="board7.4" initialCoordinates={[1, 6]} />

              <VariacionIntervaloF
                boardId="board7.4"
                initialCoordinates={[1, 5, 2, 28]}
              />
            </Col>
          </Row>
        </GraficaFContextProvider>
      </BoardsContextProvider>

      <BoardsContextProvider>
        <FunCubicaContextProvider>
          <Col
            md={7}
            className="border borde-redon"
            style={{ backgroundColor: "#011627" }}
          >
            <Row className="sticky">
              <Col md={7}>
                <div className="sticky-act16">
                  <div className="tittle-table">
                    <h6 style={{ color: "white" }}>Ventana gráfica 9</h6>
                  </div>
                  <BoardXX
                    boardId="board7.3"
                    boundingBox={[-12, 30, 12, -30]}
                  />
                </div>
              </Col>
              <Col>
                <FunCubicaParam boardId="board7.3" />
              </Col>
            </Row>
          </Col>
        </FunCubicaContextProvider>
      </BoardsContextProvider>
    </div>
  );
}
export default Bloque5;
