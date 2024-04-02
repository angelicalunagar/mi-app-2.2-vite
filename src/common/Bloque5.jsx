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
import PuntoMovibleMX from "./PuntoMovibleMX";
import Act14 from "./GraficosDeFunciones/Act14";

import Board from "./Board";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";
import GraficoArrastrePuntosX from "./GraficoArrastrePuntosX";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      <Act14 />
      <BoardContextProvider>
        <SegmentContextProvider>
          <RectaAGContextProvider>
            <Row>
              <Col md={6}>
                <Board />
                <GraficoArrastrePuntos />
              </Col>
              <Col>
                <SegmentAG />
                <RectaAG />
                <PuntoMovibleM />
              </Col>
            </Row>
          </RectaAGContextProvider>
        </SegmentContextProvider>
      </BoardContextProvider>

      <BoardsContextProvider>
        <SegmentContextProvider>
          <Row>
            <Col md={8}>
              <BoardX boardId="board1" boundingBox={[-2.5, 295, 32, -10]}/>
              <GraficoArrastrePuntosX boardId="board1" />
            </Col>
            <Col>
              <SegmentAGX boardId="board1" />
              <PuntoMovibleMX boardId="board1"/>
            </Col>
          </Row>
        </SegmentContextProvider>
      </BoardsContextProvider>

      <BoardsContextProvider>
        <SegmentContextProvider>
          <Row>
            <Col md={8}>
              <BoardX boardId="board2" boundingBox={[-2.5, 295, 32, -10]}/>
              <GraficoArrastrePuntosX boardId="board2" />
            </Col>
            <Col>
              <SegmentAGX boardId="board2" />
            </Col>
          </Row>
        </SegmentContextProvider>
      </BoardsContextProvider>
    </div>
  );
}
export default Bloque5;
