import React, { useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { BlockMath, InlineMath } from "react-katex";

const Act11 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1: "",
    ru2: "",
    ru3: "",
    ru4: "",
    ru5: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1: false,
    ru2: false,
    ru3: false,
    ru4: false,
    ru5: false,
  });

  const retroalimentacion = {
    ru1: "115",
    ru2: "15",
    ru3: "200",
    ru4: "25",
    ru5: "285",
  };

  const toggleIcono = (key) => {
    setIconosPlus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleInputAct = (key, value) => {
    if (bloquearInput) return;
    setRespuestasUsuario((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const renderInput = (key) => (
    <>
      <input
        className="custom-input"
        type="number"
        value={respuestasUsuario[key]}
        onChange={(e) => handleInputAct(key, e.target.value)}
      />
      {mostrarIconos && (
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverRight(retroalimentacion[key])}
        >
          <Button onClick={() => toggleIcono(key)}>
            {iconosPlus[key] ? <ImEyeMinus /> : <ImEyePlus />}
          </Button>
        </OverlayTrigger>
      )}
    </>
  );

  const popoverRight = (content) => (
    <Popover
      id="popover-positioned-right"
      title="Popover right"
      style={{ padding: "5px", justifyItems: "center", alignItems: "center" }}
    >
      {content}
    </Popover>
  );

  const revisarRespuestas = () => {
    setBloquearInput(true);
    setMostrarIconos(true);
  };

  const modificarRespuestas = () => {
    setMostrarIconos(false);
    setBloquearInput(false);
    setRespuestasUsuario({
      ru1: "",
      ru2: "",
      ru3: "",
      ru4: "",
      ru5: "",
    });
    setIconosPlus({
      ru1: false,
      ru2: false,
      ru3: false,
      ru4: false,
      ru5: false,
    });
  };

  return (
    <div>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 11:</b> Utilizando las evaluaciones previas realizadas
            sobre la función, completa los campos vacíos de la siguiente tabla:
          </p>
          <Container className="cont-table-act3">
            <div className="tittle-table">
              <h6>Tabla 4</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>x</th>
                  <th>p(x)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>72.5</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                  {renderInput("ru1")}{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct9.cell_41}
                      onChange={(e) =>
                        handleTableAct9("cell_41", e.target.value)
                      }
                    />
                  </td>
                  <td>157.5</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct9.cell_52}
                      onChange={(e) =>
                        handleTableAct9("cell_52", e.target.value)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct9.cell_61}
                      onChange={(e) =>
                        handleTableAct9("cell_61", e.target.value)
                      }
                    />
                  </td>
                  <td>242.5</td>
                </tr>

                <tr>
                  <td>30</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct9.cell_72}
                      onChange={(e) =>
                        handleTableAct9("cell_72", e.target.value)
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <div className="button-center">
            <Button onClick={() => setOpen(!open)}>Revisar respuestas</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Act11;
