import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import { FuncionContextProvider } from "../contexts/FuncionContext";
import { SegmentContextProvider } from "../contexts/SegmentContext";
import { BoardZoomContextProvider } from "../contexts/BoardZoomContext";
import { RectaAGContextProvider } from "../contexts/RectaAGContext";
import { BoardsContextProvider } from "../contexts/BoardsContext";

import SegmentAG from "./SegmentAG";
import SegmentAGX from "./SegmentAGX";
import BoardZoom from "./BoardZoom";
import RectaAG from "./RectaAG";
import PuntoMovibleM from "./PuntoMovibleM";
import BoardX from "./BoardX";
import BoardXX from "./BoardXX";
import PuntoMovibleMX from "./PuntoMovibleMX";
import VariacionFunciones from './VariacionFunciones';

import Board from "./Board";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";
import GraficoArrastrePuntosX from "./GraficoArrastrePuntosX";

function Bloque5() {
  return (
    <div className="bloque5-contenedor" >
      <h1>Bloque 5</h1>
    
    </div>
  );
}
export default Bloque5;
