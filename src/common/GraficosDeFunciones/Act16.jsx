import { React, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../../styles/Bloque1_1.css";

const Act16 = () => {
  const [respuestasAct16, setRespuestasAct16] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
  });

  const handleRespChangeAct16 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct16((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  return (
    <div>
      <Row>
        <Col className="actividad" >
          <p>
            <b>Actividad 16:</b>
            En la ventana gráfica 7 hemos graficado f(x)=8.5x+30. Modifica el
            coeficiente de x, al cual denotaremos con m, y el término
            independiente, denotado con b. Observa cómo se modifica la gráfica
            de la función y contesta las siguientes preguntas:
          </p>
          <ul>
            <li>
              Mueve el coeficiente m para que valga 2. ¿Qué sucedió con la
              inclinación de la recta?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA1"
                    name="opciones1"
                    value="a"
                    checked={respuestasAct16.preg1 === "a"}
                    onChange={(e) => handleRespChangeAct16(e, "preg1")}
                    label="Aumentó"
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB1"
                    name="opciones1"
                    value="b"
                    checked={respuestasAct16.preg1 === "b"}
                    onChange={(e) => handleRespChangeAct16(e, "preg1")}
                    label="Disminuyó"
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC1"
                    name="opciones1"
                    value="c"
                    checked={respuestasAct16.preg1 === "c"}
                    onChange={(e) => handleRespChangeAct16(e, "preg1")}
                    label="Permaneció igual"
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
              Mueve el coeficiente m para que valga -2. ¿Qué sucedió con la
              inclinación de la recta con respecto a la anterior?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA2"
                    name="opciones2"
                    value="a"
                    checked={respuestasAct16.preg2 === "a"}
                    onChange={(e) => handleRespChangeAct16(e, "preg2")}
                    label="Cambió su dirección"
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB2"
                    name="opciones2"
                    value="b"
                    checked={respuestasAct16.preg2 === "b"}
                    onChange={(e) => handleRespChangeAct16(e, "preg2")}
                    label="Permaneció igual"
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC2"
                    name="opciones2"
                    value="c"
                    checked={respuestasAct16.preg2 === "c"}
                    onChange={(e) => handleRespChangeAct16(e, "preg2")}
                    label="Aumentó"
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
              Siempre que el coeficiente m es positivo, la recta:
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA3"
                    name="opciones3"
                    value="a"
                    checked={respuestasAct16.preg3 === "a"}
                    onChange={(e) => handleRespChangeAct16(e, "preg3")}
                    label="Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo."
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB3"
                    name="opciones3"
                    value="b"
                    checked={respuestasAct16.preg3 === "b"}
                    onChange={(e) => handleRespChangeAct16(e, "preg3")}
                    label="Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando."
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC3"
                    name="opciones3"
                    value="c"
                    checked={respuestasAct16.preg3 === "c"}
                    onChange={(e) => handleRespChangeAct16(e, "preg3")}
                    label="No es creciente ni decreciente (horizontal). "
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
            Siempre que el coeficiente m es negativo, la recta:
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA4"
                    name="opciones4"
                    value="a"
                    checked={respuestasAct16.preg4 === "a"}
                    onChange={(e) => handleRespChangeAct16(e, "preg4")}
                    label="Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo."
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB4"
                    name="opciones4"
                    value="b"
                    checked={respuestasAct16.preg4 === "b"}
                    onChange={(e) => handleRespChangeAct16(e, "preg4")}
                    label="Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando."
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC4"
                    name="opciones4"
                    value="c"
                    checked={respuestasAct16.preg4 === "c"}
                    onChange={(e) => handleRespChangeAct16(e, "preg4")}
                    label="No es creciente ni decreciente (horizontal)."
                  />
                </Form.Group>
              </Form>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Act16;
