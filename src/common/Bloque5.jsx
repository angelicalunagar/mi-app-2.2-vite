import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import QuizSub7 from "./ValoresVarDependiente/QuizSub7";
import Quiz15 from "./GraficosDeFunciones/Quiz15";
import FuncLinealesResumen2 from "./GraficosDeFunciones/FuncLinealesResumen2";
import Act2Original from "./VarDepYVarIndep/Act2Original";
import Act5Optimizado from "./ReglaDeCorrespondencia/Act5Optimizado";
import Act2Optimizado from "./VarDepYVarIndep/Act2";
import Act3Optimizado from "./VarDepYVarIndep/Act3";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      <Act2Optimizado />
      <Act3Optimizado />
      <Act5Optimizado />
      <Act2Original />

      <QuizSub7 />
      <Quiz15 />
      <FuncLinealesResumen2 md={9} />
    </div>
  );
}
export default Bloque5;
