import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import QuizSub7 from "./ValoresVarDependiente/QuizSub7";
import Quiz15 from "./GraficosDeFunciones/Quiz15";
import FuncLinealesResumen2 from "./FuncionesLineales/FuncLinealesResumen2";
import Act2Original from "./VarDepYVarIndep/Act2Original";
import Act5 from "./ReglaDeCorrespondencia/Act5";
import Act2 from "./VarDepYVarIndep/Act2";
import Act3 from "./VarDepYVarIndep/Act3";
import VariacionFunciones from "./VariacionFunciones";
import { BoardsContextProvider } from "../contexts/BoardsContext";
import { GraficaFContextProvider } from "../contexts/GraficaFContext";
import BoardXX from "./Utilerias/BoardXX";
import GraficaF from "./GraficosDeFunciones/GraficaF";
import VariacionIntervaloF from "./FuncionesCuadraticas/VariacionIntervaloF";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      {/* <Act2 />
      <Act3 />
      <Act5 />
      <Act2Original />

      <QuizSub7 />
      <Quiz15 />
      <FuncLinealesResumen2 md={9} /> */}
<BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={7}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 9</h6>
                </div>
                <BoardXX
                  boardId="board7.5"
                  boundingBox={[-10, 6800, 180, -300]}
                />
                <span style={{ display: "inline-block" }}>
                  <GraficaF
                    boardId="board7.5"
                    funcionGrafica={(x) => 150 * x - x * x}
                  />
                   <VariacionIntervaloF
                    boardId="board7.5"
                    initialCoordinates={[8, 1136, 20, 2600]}
                  />
                </span>
              </Row>
            </Col>
            <Col>
            
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>

      <VariacionFunciones />
    </div>
  );
}
export default Bloque5;
