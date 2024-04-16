import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import Quiz16 from "./GraficosDeFunciones/Quiz16";
import Quiz15 from "./GraficosDeFunciones/Quiz15";

function Bloque5() {
  return (
    <div className="bloque5-contenedor" >
      <h1>Bloque 5</h1>
    <Quiz16 />
    <Quiz15 />
    </div>
  );
}
export default Bloque5;
