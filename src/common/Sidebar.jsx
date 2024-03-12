import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import VarDepYVarIndep from "./VarDepYVarIndep";
import ReglaDeCorrespondencia from "./ReglaDeCorrespondencia";
import EvaluarLaReglaDeCorrespon from "./EvaluarLaReglaDeCorrespon";
import ValoresVarIndep from "./ValoresVarIndep";
import ValoresVarDependiente from "./ValoresVarDependiente";
import QueEsFuncion from "./QueEsFuncion";
import NomenclaturaFunciones from "./NomenclaturaFunciones";
import FuncionesDosVariables from "./FuncionesDosVariables";
import TablaDeFuncion from "./TablaDeFuncion";

function Sidebar({ show, close }) {
  /* const [show, setShow] = useState(false); */
  const [selectedComponent, setSelectedComponent] = useState(null);

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("VarDepYVarIndep")}
              >
                VarDepYVarIndep
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("ReglaDeCorrespondencia")}
              >
                ReglaDeCorrespondencia
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() =>
                  setSelectedComponent("EvaluarLaReglaDeCorrespon")
                }
              >
                EvaluarLaReglaDeCorrespon
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("ValoresVarIndep")}
              >
                ValoresVarIndep
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("ValoresVarDependiente")}
              >
                ValoresVarDependiente
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("QueEsFuncion")}
              >
                QueEsFuncion
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("NomenclaturaFunciones")}
              >
                NomenclaturaFunciones
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("FuncionesDosVariables")}
              >
                FuncionesDosVariables
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => setSelectedComponent("TablaDeFuncion")}
              >
                TablaDeFuncion
              </Button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {selectedComponent && (
        <div style={{ marginTop: "0px" }}>
          {renderComponent()}
        </div>
      )}
    </>
  );
}

export default Sidebar;
