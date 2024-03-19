import "../styles/Bloque5.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoardContextProvider } from "../contexts/BoardContext";
import { FuncionContextProvider } from '../contexts/FuncionContext';
import { SegmentContextProvider } from '../contexts/SegmentContext';
import SegmentAG from './SegmentAG';

import Board from "./Board";
import GraficoArrastrePuntos from './GraficoArrastrePuntos'

function Bloque5() {
  
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      <BoardContextProvider>
      <SegmentContextProvider>
     
      <Row>
        <Col md={6}>
          
            {/* <GrafDeFunciones /> */}
            <Board />

            <GraficoArrastrePuntos/>

        </Col>
        <Col>
        <SegmentAG/>
        </Col>
      </Row>
      
      </SegmentContextProvider>
      </BoardContextProvider>
    </div>
  );
}
export default Bloque5;
