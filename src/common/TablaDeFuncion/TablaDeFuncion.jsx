import React from "react";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Button, Form} from "react-bootstrap";
import Act10 from "./Act10";

const TablaDeFuncion = () => {
  const [valuesEval, setValuesEval] = useState({
    eval_1_1: "",
    eval_1_2: "",
    eval_2_1: "",
    eval_2_2: "",
    eval_3_1: "",
    eval_3_2: "",
    eval_4_1: "",
    eval_4_2: "",
    eval_5_1: "",
    eval_5_2: "",
  });

  const handleEvalInputChange = (evalKey, value) => {
    setValuesEval((prevValues) => ({
      ...prevValues,
      [evalKey]: value,
    }));
  };

  const [valuesTableAct9, setValuesTableAct9] = useState({
    cell_32: "",
    cell_41: "",
    cell_52: "",
    cell_61: "",
    cell_72: "",
  });

  const handleTableAct9 = (cell, value) => {
    setValuesTableAct9((prevValues) => ({
      ...prevValues,
      [cell]: value,
    }));
  };

  const [opcionSelecPreg3, setOpcionSelecPreg3] = useState(null);
  const handleSelecPreg3 = (opcion) => {
    setOpcionSelecPreg3(opcion);
  };


  return (
    <Container>
      <h4>Tabla de una función</h4>
      <Row className="main-row">
        <p>
          ¿Recuerdas el caso del taxi que calcula el precio de sus viajes en
          función de los kilómetros recorridos? La regla de correspondencia es:
          <BlockMath>{"p(x)=30+8.5x"}</BlockMath>
          Con dominio:
          <BlockMath>{"0 ≤ x ≤ 30"}</BlockMath>
          ya que el taxi sólo podía recorrer un mínimo de{" "}
          <InlineMath>{" 0 \\, km"}</InlineMath> y un máximo de{" "}
          <InlineMath>{" 30 \\, km"}</InlineMath>. Y con imagen:
          <BlockMath>{"30 ≤ p(x) ≤ 630"}</BlockMath>
          ya que el precio del viaje es de mínimo{" "}
          <InlineMath>{" 30 "}</InlineMath> pesos (cuando el taxi recorre{" "}
          <InlineMath>0</InlineMath> km) y máximo <InlineMath>630</InlineMath>{" "}
          pesos (cuando el taxi recorre <InlineMath>{" 30 \\, km"}</InlineMath>
          ).
          <br />
          <br />
          Un día, el taxímetro se descompone y el taxista, para saber cuánto
          cobrar por cada viaje, decide hacer una tabla en la que pueda leer el
          precio para distintas distancias. El taxista comienza evaluando la
          función en kilómetros enteros, es decir en{" "}
          <InlineMath>x=0, 1, 2, 3, …, 30</InlineMath>. No obstante al
          percatarse que serán demasiados cálculos, decide evaluar la función de{" "}
          <InlineMath>{" 5 \\, km"}</InlineMath> en{" "}
          <InlineMath>{" 5 \\, km"}</InlineMath>, es decir, en{" "}
          <InlineMath>x=0, 5, 10, 15, 20, 25, 30</InlineMath>.
        </p>
      </Row>
      <Act10 />
      <Row className="main-row">
        <Col>
          <p>
            Ahora, el taxista acomoda los datos en una tabla, en cuya primera
            columna coloca la variable independiente <InlineMath>x</InlineMath>,
            que denota la distancia recorrida y en la segunda coloca la variable
            dependiente <InlineMath>p(x)</InlineMath>, que denota el precio de
            un viaje. <b>Contesta la Actividad 11</b>.
          </p>
        </Col>
      </Row>
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
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct9.cell_32}
                      onChange={(e) =>
                        handleTableAct9("cell_32", e.target.value)
                      }
                    />
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
      <Row className="main-row">
        <Col>
          <p>
            Piensa en qué casos le sirve la tabla al taxista. ¿Le sirve para
            saber cuánto cobrar si hace un viaje de 10 km? Sí, porque de la
            tabla podemos leer que cuando la distancia{" "}
            <InlineMath>x</InlineMath> es igual a <InlineMath>10</InlineMath>,
            el precio <InlineMath>p(x)</InlineMath> será{" "}
            <InlineMath>115</InlineMath>. ¿En cuál de los siguientes casos la
            tabla no le sirve al taxista?
          </p>
          <Form>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg3"
                value="a"
                checked={opcionSelecPreg3 === "a"}
                onChange={() => handleSelecPreg3("a")}
                label={<InlineMath>{"x=20"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg3"
                value="b"
                checked={opcionSelecPreg3 === "b"}
                onChange={() => handleSelecPreg3("b")}
                label={<InlineMath>{"x=25"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg3"
                value="c"
                checked={opcionSelecPreg3 === "c"}
                onChange={() => handleSelecPreg3("c")}
                label={<InlineMath>{"x=27"}</InlineMath>}
              />
            </Form.Group>
          </Form>

          <p>
            <br />
            En realidad, la tabla sólo le sirve al taxista para distancias{" "}
            <InlineMath>{"x"}</InlineMath> múltiplos de{" "}
            <InlineMath>{"5"}</InlineMath>, lo cual sucede con poca frecuencia.
            Un pasajero se sube al taxi y sólo recorre{" "}
            <InlineMath>{" 2.5 \\, km"}</InlineMath>, ¿cómo debe hacer el
            taxista para saber cuánto debe de cobrar? Una opción es calcular{" "}
            <InlineMath>{"p(2.5)"}</InlineMath>, pero si otro pasajero recorre{" "}
            <InlineMath>{"3.7 \\, km"}</InlineMath>, también deberá calcular{" "}
            <InlineMath>{"p(3.7)"}</InlineMath>, y entonces la tabla no le habrá
            servido de mucho.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TablaDeFuncion;
