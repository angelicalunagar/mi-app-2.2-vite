import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import Quiz1 from "./GraficosDeFunciones/Quiz1";

function Bloque5() {
  return (
    <div className="bloque5-contenedor" >
      <h1>Bloque 5</h1>
    <Quiz1 />
    </div>
  );
}
export default Bloque5;
