import "../styles/Bloque5.css";
import "../styles/Bloque1_1.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VariacionFunciones from "./VariacionFunciones";
import { BoardsContextProvider } from "../contexts/BoardsContext";
import { GraficaFContextProvider } from "../contexts/GraficaFContext";
import { FunCuadratContextProvider } from "../contexts/FunCuadratContext";
import BoardXX from "./Utilerias/BoardXX";
import FuncionCuadrat from "./FuncionesCuadraticas/FuncionCuadrat";
import CaracParab2 from "./FuncionesCuadraticas/CaracParab2";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      {/* <BoardsContextProvider>
        <GraficaFContextProvider>
          <Col md={7}>
            <Row className="sticky">
              <div className="tittle-table">
                <h6>Ventana gráfica 9</h6>
              </div>

              <BoardXX boardId="board7.1" boundingBox={[-15, 11, 15, -4]} />
              <CaracParab2 boardId="board7.1" />
            </Row>
          </Col>
        </GraficaFContextProvider>
      </BoardsContextProvider> */}
      <BoardsContextProvider>
        <FunCuadratContextProvider>
          <Col
            md={7}
            className="border borde-redon"
            style={{ backgroundColor: "#011627" }}
          >
            <Row className="sticky">
              <Col md={8}>
              <div className="sticky-act16">
                <div className="tittle-table">
                  <h6 style={{ color: "white" }}>Ventana gráfica 9</h6>
                </div>
                <BoardXX
                  boardId="board7.2"
                  boundingBox={[-10, 6800, 180, -300]}
                />
              </div>
              </Col>
              <Col>
              <FuncionCuadrat boardId="board7.2" />
              </Col>
            </Row>
          </Col>
        </FunCuadratContextProvider>
      </BoardsContextProvider>
    </div>
  );
}
export default Bloque5;
