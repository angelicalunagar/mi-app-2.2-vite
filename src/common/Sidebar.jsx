import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import VarDepYVarIndep from "./VarDepYVarIndep/VarDepYVarIndep";
import ReglaDeCorrespondencia from "./ReglaDeCorrespondencia/ReglaDeCorrespondencia";
import EvaluarLaReglaDeCorrespon from "./EvaluarLaReglaDeCorrespon/EvaluarLaReglaDeCorrespon";
import ValoresVarIndep from "./ValoresVarIndep";
import ValoresVarDependiente from "./ValoresVarDependiente/ValoresVarDependiente";
import QueEsFuncion from "./QueEsFuncion";
import NomenclaturaFunciones from "./NomenclaturaFunciones";
import FuncionesDosVariables from "./FuncionesDosVariables/FuncionesDosVariables";
import TablaDeFuncion from "./TablaDeFuncion/TablaDeFuncion";
import GraficosDeFunciones from "./GraficosDeFunciones/GraficosDeFunciones";
import FuncLineales from "./FuncionesLineales/FuncLineales";
import FuncionesCuadraticas from "./FuncionesCuadraticas/FuncionesCuadraticas";
import FunPolinomiales from "./FuncionesPolinomiales.jsx/FunPolinomiales";
import { Col, Button } from "react-bootstrap";
import { RiQuestionnaireLine } from "react-icons/ri";
import "../styles/Sidebar.css";

function Sidebar({ show, close }) {
  /* const [show, setShow] = useState(false); */
  const [selectedComponent, setSelectedComponent] = useState("VarDepYVarIndep");

  /*   const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true); */

  // Función para renderizar el componente seleccionado
  const renderComponent = () => {
    switch (selectedComponent) {
      case "VarDepYVarIndep":
        return <VarDepYVarIndep />;
      case "ReglaDeCorrespondencia":
        return <ReglaDeCorrespondencia />;
      case "EvaluarLaReglaDeCorrespon":
        return <EvaluarLaReglaDeCorrespon />;
      case "ValoresVarIndep":
        return <ValoresVarIndep />;
      case "ValoresVarDependiente":
        return <ValoresVarDependiente />;
      case "QueEsFuncion":
        return <QueEsFuncion />;
      case "NomenclaturaFunciones":
        return <NomenclaturaFunciones />;
      case "FuncionesDosVariables":
        return <FuncionesDosVariables />;
      case "TablaDeFuncion":
        return <TablaDeFuncion />;
      case "GraficosDeFunciones":
        return <GraficosDeFunciones />;
      case "FuncLineales":
        return <FuncLineales />;
      case "FuncionesCuadraticas":
        return <FuncionesCuadraticas />;
      case "FunPolinomiales":
        return <FunPolinomiales />;
      /* case "EncuestaFinal":
        return null; */
      default:
        return null;
    }
  };

  return (
    <>
      {/*  <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={close}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contenido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sidebar">
          <ul className="list-unstyled">
            <li>
              <button
                onClick={() => setSelectedComponent("VarDepYVarIndep")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "VarDepYVarIndep" ? "selected" : ""
                }`}
              >
                1. Variable dependiente y variable independiente
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("ReglaDeCorrespondencia")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "ReglaDeCorrespondencia"
                    ? "selected"
                    : ""
                }`}
              >
                2. Regla de correspondencia
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedComponent("EvaluarLaReglaDeCorrespon")
                }
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "EvaluarLaReglaDeCorrespon"
                    ? "selected"
                    : ""
                }`}
              >
                3. Evaluar la regla de correspondencia
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("ValoresVarIndep")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "ValoresVarIndep" ? "selected" : ""
                }`}
              >
                4. Valores que adquiere la variable independiente
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("ValoresVarDependiente")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "ValoresVarDependiente"
                    ? "selected"
                    : ""
                }`}
              >
                5. Valores que adquiere la variable dependiente
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("QueEsFuncion")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "QueEsFuncion" ? "selected" : ""
                }`}
              >
                6. ¿Qué es una función?
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("NomenclaturaFunciones")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "NomenclaturaFunciones"
                    ? "selected"
                    : ""
                }`}
              >
                7. Nomenclatura de las funciones
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FuncionesDosVariables")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FuncionesDosVariables"
                    ? "selected"
                    : ""
                }`}
              >
                8. Funciones de dos variables
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("TablaDeFuncion")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "TablaDeFuncion" ? "selected" : ""
                }`}
              >
                9. Tabla de una función
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("GraficosDeFunciones")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "GraficosDeFunciones" ? "selected" : ""
                }`}
              >
                10. Gráficos de Funciones
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FuncLineales")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FuncLineales" ? "selected" : ""
                }`}
              >
                11. Funciones Lineales
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FuncionesCuadraticas")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FuncionesCuadraticas" ? "selected" : ""
                }`}
              >
                12. Funciones Cuadráticas
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FunPolinomiales")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FunPolinomiales" ? "selected" : ""
                }`}
              >
                13. Funciones Polinomiales
              </button>
            </li>
            <li>
              <Col xs="auto" className="d-flex justify-content-center">
                <Button
                  variant="secondary"
                  href="https://es.surveymonkey.com/r/7XZ76JC"
                  target="_blank"
                >
                  <RiQuestionnaireLine /> ENCUESTA FINAL
                </Button>
              </Col>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {selectedComponent && (
        <div style={{ marginTop: "0px" }}>{renderComponent()}</div>
      )}
    </>
  );
}

export default Sidebar;
