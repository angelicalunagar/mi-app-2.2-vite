import { React, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
/* import { Eye } from "react-bootstrap-icons"; */
import { ImEyePlus } from "react-icons/im";

const Act2 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");

  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1_1: "",
    ru1_2: "",
    ru2_1: "",
    ru2_2: "",
    ru3_1: "",
    ru3_2: "",
  });

  const revisarRespuestas = () => {
    setMostrarIconos(true);
    setBloquearSeleccion(true);
    setMensajeCalificacion('Haz click sobre el ícono para ver la respuesta');
  };

  const mostrarIcono = () => {
    if (!mostrarIconos) return null;
    return <ImEyePlus style={{ color: "blue", cursor: "pointer" }}/>
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
    setMensajeCalificacion('');
    setRespuestasUsuario({
      ru1_1: "",
      ru1_2: "",
      ru2_1: "",
      ru2_2: "",
      ru3_1: "",
      ru3_2: "",
    });
  };

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
                {mostrarIcono()}
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
                {mostrarIcono()}
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
                {mostrarIcono()}
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
                {mostrarIcono()}
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
                {mostrarIcono()}
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
                {mostrarIcono()}
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
