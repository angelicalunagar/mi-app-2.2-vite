import { Row, Col } from "react-bootstrap";
import { useContext } from "react";

import BoardXX from "../BoardXX";
import FuncionLineal2 from "./FuncionLineal2";
import  TextoFuncion from './TextoFuncion';

import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { FuncLinealContextProvider } from "../../contexts/FuncLinealContext";
import { FuncLinealContext } from "../../contexts/FuncLinealContext";


const GraficaAct15 = () => {

  return (
    <>
    <Row className="row-nuevotema">
    
        <BoardsContextProvider>
          <FuncLinealContextProvider>
            <Col className="border " md={6}>
          {/*   console.log(intercept); */}
             {/*  Function: f(x) = {slope} x + {intercept}  */}
              <div className="sticky">
                <TextoFuncion />
                <BoardXX boardId="board5" boundingBox={[-20, 60, 20, -30]} />
                <FuncionLineal2 boardId="board5" />
              </div>
            </Col>
            <Col className="actividad" md={5}>
              <p>
                <b>Actividad 15.</b> Utiliza la ventana gráfica{" "}
              </p>
            </Col>
          </FuncLinealContextProvider>
        </BoardsContextProvider>
      </Row>
    </>
  )
}

export default GraficaAct15