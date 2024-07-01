import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { FaRegFilePdf } from "react-icons/fa6";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BlockMath } from "react-katex";
import BoardXX from "../Utilerias/BoardXX";
import TextoFuncion from "../GraficosDeFunciones/TextoFuncion";
import FuncionLineal2 from "../GraficosDeFunciones/FuncionLineal2";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { FuncLinealContextProvider } from "../../contexts/FuncLinealContext";
import FuncLinealesResumen2 from "./FuncLinealesResumen2";
import "../../styles/Bloque1_1.css";

const FuncLineales = () => {
  return (
    <Container>
      <Row className="row-nuevotema">
        <BoardsContextProvider>
          <FuncLinealContextProvider>
            <Col 
            md={5}
            className="border borde-redon"
            style={{ backgroundColor: "#011627" }}
            >
              <div className="sticky-act16">
                <div className="tittle-table">
                  <h6 style={{ color: "white" }}>Ventana gráfica 8</h6>
                </div>
                <BoardXX boardId="board6" boundingBox={[-20, 60, 20, -30]} />
                <TextoFuncion />
                <FuncionLineal2 boardId="board6" />
              </div>
            </Col>
          </FuncLinealContextProvider>
        </BoardsContextProvider>

        <Col md={7}>
          <h4>Funciones lineales</h4>
          <br />
          <p>
            Como pudiste observar, la gráfica de la función: 
            <BlockMath>f(x)=8.5x+30 </BlockMath> 
            y todas las demás funciones que graficaste en la <b>Ventana gráfica 7</b> son
            líneas rectas, por lo que se dice que son <b>funciones lineales</b>.
            Completa el siguiente resumen sobre las funciones lineales usando la <b>Ventana gráfica 8</b>:
          </p>
          <br />
          <p style={{fontSize: '21px'}}><b>Resumen</b></p>
          <FuncLinealesResumen2 md={12}/> 
        </Col>
      </Row>
      <br />
      <br />
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex justify-content-center">
          <Button variant="primary" href="https://es.surveymonkey.com/r/7MTRMVY" target="_blank">
            <RiQuestionnaireLine /> ENCUESTA
          </Button>
        </Col>
        <Col xs="auto" className="d-flex justify-content-center">
          <Button variant="secondary" href="https://correobuap-my.sharepoint.com/:f:/g/personal/angelica_lunagar_alumno_buap_mx/Eh0vaHVAddlDtT5STFL3LS0BdaGZRUXC0RFKM4e0wBqrQg?e=WOYqF9" target="_blank">
            <FaRegFilePdf /> SUBE TUS EVIDENCIAS
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default FuncLineales;
