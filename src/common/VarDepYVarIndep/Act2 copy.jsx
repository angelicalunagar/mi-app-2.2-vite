import { React, useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
/* import { Eye } from "react-bootstrap-icons"; */
import { ImEyePlus } from "react-icons/im";

const Act2 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");
  const [mostrarRetroalimentacion, setMostrarRetroalimentacion] = useState({
    ru1_1: false,
    ru1_2: false,
    ru2_1: false,
    ru2_2: false,
    ru3_1: false,
    ru3_2: false,
  });

  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1_1: "",
    ru1_2: "",
    ru2_1: "",
    ru2_2: "",
    ru3_1: "",
    ru3_2: "",
  });

  const retroalimentacion = {
    ru1_1: "ganancia",
    ru1_2: "número de helados vendidos",
    ru2_1: "dinero disponible",
    ru2_2: "días de la quincena transcurridos",
    ru3_1: "precio de un viaje en Uber",
    ru3_2: "distancia recorrida",
  };

  const revisarRespuestas = () => {
    setMostrarIconos(true);
    setBloquearSeleccion(true);
    setMensajeCalificacion("Haz click sobre el ícono para ver la respuesta");
  };

  const mostrarIcono = (respX) => {
    if (!mostrarIconos) return null;
    return (
      <ImEyePlus
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => handleMostrarRetroalimentacion(respX)}
      />
    );
  };

  const handleMostrarRetroalimentacion = (inputId) => {
    setMostrarRetroalimentacion((prev) => ({
      ...prev,
      [inputId]: true,
    }));
  };

  const handleInputAct2 = (key, value) => {
    if (bloquearSeleccion) return;
    setRespuestasUsuario((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const modificarRespuestas = () => {
    setMostrarIconos(false);
    setBloquearSeleccion(false);
    setMensajeCalificacion("");
    setRespuestasUsuario({
      ru1_1: "",
      ru1_2: "",
      ru2_1: "",
      ru2_2: "",
      ru3_1: "",
      ru3_2: "",
    });
    setMostrarRetroalimentacion({
      ru1_1: false,
      ru1_2: false,
      ru2_1: false,
      ru2_2: false,
      ru3_1: false,
      ru3_2: false,
    });
  };

  const popoverRight = (
    <Popover id="popover-positioned-right" title="Popover right">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );

  const popoverRight2 = (
    <>
      <Popover id="popover-positioned-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    </>
  );

  const popover = (inputId, content) => (
    <Popover id={`popover-${inputId}`}>
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );

  return (
    <div>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 2:</b> En las siguientes situaciones, identifica la
            variable dependiente y a la variable independiente.
          </p>
          <br />
          <ul>
            <li>
              <em>
                Mi vecino es heladero y me ha comentado que su ganancia aumenta
                a medida que incrementa la cantidad de helados vendidos.
              </em>
              <br />
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru1_1"
                  value={respuestasUsuario.ru1_1}
                  onChange={(e) => handleInputAct2("ru1_1", e.target.value)}
                />
                {mostrarIcono("ru1_1")}
                {mostrarRetroalimentacion.ru1_1 && (
                  {/* <div style={{ height: 100 }}>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popoverRight}
                    >
                      <Button>Holy guacamole!</Button>
                    </OverlayTrigger>
                  </div> */},
                  popoverRight2
                )}
              </label>
              <br />
              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru1_2"
                  value={respuestasUsuario.ru1_2}
                  onChange={(e) => handleInputAct2("ru1_2", e.target.value)}
                />
                {mostrarIcono("ru1_2")}
                {mostrarRetroalimentacion.ru1_2 && (
                  <span style={{ marginLeft: "10px" }}>
                    Respuesta: {retroalimentacion.ru1_2}
                  </span>
                )}
              </label>
            </li>
            <br />
            <li>
              <em>
                Cristina comienza la quincena con una cantidad de dinero, pero a
                medida que pasan los días, su dinero va disminuyendo.
              </em>
              <br />
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru2_1"
                  value={respuestasUsuario.ru2_1}
                  onChange={(e) => handleInputAct2("ru2_1", e.target.value)}
                />
                {mostrarIcono("ru2_1")}
                {mostrarRetroalimentacion.ru2_1 && (
                  <span style={{ marginLeft: "10px" }}>
                    Respuesta: {retroalimentacion.ru2_1}
                  </span>
                )}
              </label>
              <br />

              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru2_2"
                  value={respuestasUsuario.ru2_2}
                  onChange={(e) => handleInputAct2("ru2_2", e.target.value)}
                />
                {mostrarIcono("ru2_2")}
                {mostrarRetroalimentacion.ru2_2 && (
                  <span style={{ marginLeft: "10px" }}>
                    Retroalimentación: {retroalimentacion.ru2_2}
                  </span>
                )}
              </label>
            </li>
            <br />
            <li>
              <em>
                Raúl observa que el Uber le cobra más cuando la distancia
                recorrida es mayor.
              </em>
              <br />
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru3_1"
                  value={respuestasUsuario.ru3_1}
                  onChange={(e) => handleInputAct2("ru3_1", e.target.value)}
                />
                {mostrarIcono("ru3_1")}
                {mostrarRetroalimentacion.ru3_1 && (
                  <span style={{ marginLeft: "10px" }}>
                    Respuesta: {retroalimentacion.ru3_1}
                  </span>
                )}
              </label>

              <br />
              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru3_2"
                  value={respuestasUsuario.ru3_2}
                  onChange={(e) => handleInputAct2("ru3_2", e.target.value)}
                />
                {mostrarIcono("ru3_2")}
                {mostrarRetroalimentacion.ru3_2 && (
                  <span style={{ marginLeft: "10px" }}>
                    Respuesta: {retroalimentacion.ru3_2}
                  </span>
                )}
              </label>
            </li>
          </ul>
          <div className="button-center">
            {bloquearSeleccion ? (
              <>
                <div>
                  <Button onClick={modificarRespuestas}>
                    Modificar respuestas
                  </Button>
                  <span style={{ marginLeft: "10px" }}>
                    {mensajeCalificacion}
                  </span>
                </div>
              </>
            ) : (
              <Button onClick={revisarRespuestas}>Revisar respuestas</Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Act2;
