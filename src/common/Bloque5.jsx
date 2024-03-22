import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import { FuncionContextProvider } from "../contexts/FuncionContext";
import { SegmentContextProvider } from "../contexts/SegmentContext";
import { BoardZoomContextProvider } from "../contexts/BoardZoomContext";
import {RectaAGContextProvider} from '../contexts/RectaAGContext';

import SegmentAG from "./SegmentAG";
import BoardZoom from "./BoardZoom";
import RectaAG from "./RectaAG";

import Board from "./Board";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";


function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      <BoardContextProvider>
        <SegmentContextProvider>
         <RectaAGContextProvider>
          <Row>
            <Col md={6}>
              {/* <GrafDeFunciones /> */}
              <Board />
              <GraficoArrastrePuntos />
            </Col>
            <Col>
              <SegmentAG />
              <RectaAG />
            </Col>
          </Row>
          </RectaAGContextProvider> 
        </SegmentContextProvider>
      </BoardContextProvider>
      <BoardZoomContextProvider>
        <Row>
          <Col md={9}>
            <BoardZoom />
          </Col>
        </Row>
      </BoardZoomContextProvider>
    </div>
  );
}
export default Bloque5;
