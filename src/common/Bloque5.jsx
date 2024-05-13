import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VariacionFunciones from "./VariacionFunciones";
import { BoardsContextProvider } from "../contexts/BoardsContext";
import { GraficaFContextProvider } from "../contexts/GraficaFContext";
import BoardXX from "./Utilerias/BoardXX";
import GraficaF from "./GraficosDeFunciones/GraficaF";
import VariacionIntervaloF from "./FuncionesCuadraticas/VariacionIntervaloF";
import CaracterisParabola from "./FuncionesCuadraticas/CaracterisParabola";
import CaracParab2 from "./FuncionesCuadraticas/CaracParab2";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      <BoardsContextProvider>
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
      </BoardsContextProvider>
    </div>
  );
}
export default Bloque5;
