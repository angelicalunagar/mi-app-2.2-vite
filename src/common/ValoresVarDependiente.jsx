import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";

const ValoresVarDependiente = () => {
  const [respuestasAct7, setRespuestasAct7] = useState({
    preg1_1: "",
    preg1_2: "",
    preg2_1: "",
    preg2_2: "",
    preg3_1: "",
    preg3_2: "",
  });

  const handleRespChangeAct7 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct7((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };
  return (
    <Container>
      <h4>Valores que adquiere la variable dependiente</h4>
      <Row className="main-row">
        <Col>
          <p>
            Continuemos con el caso del vendedor de helados. Nota que de acuerdo
            con la regla de correspondencia <InlineMath>{"g(x)=5x"}</InlineMath>
            , los valores que toma la ganancia <InlineMath>{"g(x)"}</InlineMath>{" "}
            , es decir, las distintas ganancias que puede tener el heladero,
            dependen del número de helados vendidos{" "}
            <InlineMath>{"x"}</InlineMath>. En la sección anterior determinamos
            que <InlineMath>{"x"}</InlineMath> puede valer desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"200"}</InlineMath>. Entonces, la{" "}
            <b>mínima ganancia</b> sucede caundo el heladero vende{" "}
            <InlineMath>{"0"}</InlineMath> helados:
            <BlockMath>{"g(0)=5(0)=0"}</BlockMath>Y la <b>máxima ganancia</b>{" "}
            sucede cuando el heladero vende <InlineMath>{"200"}</InlineMath>{" "}
            helados:
            <BlockMath>{"g(200)=5(200)=1000"}</BlockMath>
            Por lo que la ganancia <InlineMath>{"g(x)"}</InlineMath> va desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"1000"}</InlineMath> pesos, de{" "}
            <InlineMath>{"5"}</InlineMath> en <InlineMath>{"5"}</InlineMath>{" "}
            (como se aprecia en la Tabla 2):
            <BlockMath>{"\\{0, 5, 10, 15, \\ldots, 995, 1000\\}"}</BlockMath>
          </p>
        </Col>
      </Row>

      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 7:</b> Determina los valores que pueden adquirir las
            variables independiente y dependiente en cada situación.
          </p>
          <ul>
            <li>
              <em>
                Durante la quincena, la cantidad de dinero de Cristina depende
                del número de días que pasan de acuerdo con la regla de
                correspondencia <InlineMath>{"d(n)=4000-250n"}</InlineMath>.
              </em>
            </li>
            <ul>
              <li>
                ¿Qué valores puede adquirir el número de días n?
                <Form>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="opcionA1"
                      name="opciones1_1"
                      value="a"
                      checked={respuestasAct7.preg1_1 === "a"}
                      onChange={(e) => handleRespChangeAct7(e, "preg1_1")}
                      label="{0, 1, 2, 3, ..., 249, 250}"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones1_1"
                      value="b"
                      checked={respuestasAct7.preg1_1 === "b"}
                      onChange={(e) => handleRespChangeAct7(e, "preg1_1")}
                      label="{0, 1, 2, 4, ..., 3999, 4000}"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones1_1"
                      value="c"
                      checked={respuestasAct7.preg1_1 === "c"}
                      onChange={(e) => handleRespChangeAct7(e, "preg1_1")}
                      label="{0, 1, 2, 4, ...,14, 15}"
                    />
                  </Form.Group>
                </Form>
              </li>
              <br />
              <li>
                ¿Qué valores puede adquirir la cantidad de dinero{" "}
                <InlineMath>{"d(n)"}</InlineMath>?
                <Form>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="opcionA1"
                      name="opciones1_2"
                      value="a"
                      checked={respuestasAct7.preg1_2 === "a"}
                      onChange={(e) => handleRespChangeAct7(e, "preg1_2")}
                      label="{4000, 3750, 3500, 3250, ..., 500, 250}"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones1_2"
                      value="b"
                      checked={respuestasAct7.preg1_2 === "b"}
                      onChange={(e) => handleRespChangeAct7(e, "preg1_2")}
                      label="{0, 250, 500, 750, ..., 3750, 4000} "
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones1_2"
                      value="c"
                      checked={respuestasAct7.preg1_2 === "c"}
                      onChange={(e) => handleRespChangeAct7(e, "preg1_2")}
                      label="{250, 500, 750, 1000, ..., 3750, 4000}"
                    />
                  </Form.Group>
                </Form>
              </li>
            </ul>
            <br />
            <li>
              <em>
                Un taxi calcula el precio <InlineMath>{"p(x)"}</InlineMath> de
                sus viajes en función de la distancia recorrida{" "}
                <InlineMath>{"x"}</InlineMath> de acuerdo con la expresión{" "}
                <InlineMath>{"p(x)=30+20x"}</InlineMath>. Si el taxi no hace
                viajes más largos que <InlineMath>{"30km"}</InlineMath>:
              </em>
            </li>
            <ul>
              <li>
                ¿Qué valores puede adquirir la variable independiente{" "}
                <InlineMath>{"x"}</InlineMath>?
                <Form>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="opcionA1"
                      name="opciones2_1"
                      value="a"
                      checked={respuestasAct7.preg2_1 === "a"}
                      onChange={(e) => handleRespChangeAct7(e, "preg2_1")}
                      label="0 ≤ x ≤ 30"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones2_1"
                      value="b"
                      checked={respuestasAct7.preg2_1 === "b"}
                      onChange={(e) => handleRespChangeAct7(e, "preg2_1")}
                      label="20 ≤ x ≤ 30"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones2_1"
                      value="c"
                      checked={respuestasAct7.preg2_1 === "c"}
                      onChange={(e) => handleRespChangeAct7(e, "preg2_1")}
                      label="0 ≤ x ≤ 20"
                    />
                  </Form.Group>
                </Form>
              </li>
              <br />
              <li>
                ¿Qué valores puede adquirir la variable dependiente{" "}
                <InlineMath>{"p(x)"}</InlineMath>?
                <Form>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="opcionA1"
                      name="opciones2_2"
                      value="a"
                      checked={respuestasAct7.preg2_2 === "a"}
                      onChange={(e) => handleRespChangeAct7(e, "preg2_2")}
                      label="630 ≤ p(x) ≤ 0"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones2_2"
                      value="b"
                      checked={respuestasAct7.preg2_2 === "b"}
                      onChange={(e) => handleRespChangeAct7(e, "preg2_2")}
                      label="30 ≤ p(x) ≤ 630"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones2_2"
                      value="c"
                      checked={respuestasAct7.preg2_2 === "c"}
                      onChange={(e) => handleRespChangeAct7(e, "preg2_2")}
                      label="20 ≤ p(x) ≤ 630"
                    />
                  </Form.Group>
                </Form>
              </li>
            </ul>
            <br />
            <li>
              <em>
                La distancia recorrida (en km) de un automóvil de carreras es
                función del tiempo transcurrido (en min) de acuerdo con la
                expresión <InlineMath>{"d(t)=2t"}</InlineMath>. Sabiendo que el
                motor solo soporta estar en funcionamiento{" "}
                <InlineMath>{"30 min"}</InlineMath>:
              </em>
            </li>
            <ul>
              <li>
                ¿Qué valores puede adquirir el tiempo{" "}
                <InlineMath>{"t"}</InlineMath>?
                <Form>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="opcionA1"
                      name="opciones3_1"
                      value="a"
                      checked={respuestasAct7.preg3_1 === "a"}
                      onChange={(e) => handleRespChangeAct7(e, "preg3_1")}
                      label="2 ≤ t ≤ 30"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones3_1"
                      value="b"
                      checked={respuestasAct7.preg3_1 === "b"}
                      onChange={(e) => handleRespChangeAct7(e, "preg3_1")}
                      label="1 ≤ t ≤ 30"
                    />

                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones3_1"
                      value="c"
                      checked={respuestasAct7.preg3_1 === "c"}
                      onChange={(e) => handleRespChangeAct7(e, "preg3_1")}
                      label="0 ≤ t ≤ 30"
                    />
                  </Form.Group>
                </Form>
              </li>
              <br />
              <li>
                ¿Qué valores puede adquirir la distancia recorrida{" "}
                <InlineMath>{"d(t)"}</InlineMath>?
                <Form>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="opcionA1"
                      name="opciones3_2"
                      value="a"
                      checked={respuestasAct7.preg3_2 === "a"}
                      onChange={(e) => handleRespChangeAct7(e, "preg3_2")}
                      label="4 ≤ d(t) ≤ 60"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones3_2"
                      value="b"
                      checked={respuestasAct7.preg3_2 === "b"}
                      onChange={(e) => handleRespChangeAct7(e, "preg3_2")}
                      label="0 ≤ d(t) ≤ 60"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones3_2"
                      value="c"
                      checked={respuestasAct7.preg3_2 === "c"}
                      onChange={(e) => handleRespChangeAct7(e, "preg3_2")}
                      label="2 ≤ d(t) ≤ 60"
                    />
                  </Form.Group>
                </Form>
              </li>
            </ul>
          </ul>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Nota que cuando se tiene un conjunto de valores específicos como:{" "}
            <BlockMath>{"\\{0, 5, 10, 15, \\ldots, 995, 1000\\}"}</BlockMath>
            que representa los valores que puede adquirir la ganancia{" "}
            <InlineMath>g(x)</InlineMath> en el caso del heladero, la variable
            en cuestión no puede adquirir valores intermedios como{" "}
            <InlineMath>{"7.5"}</InlineMath> ya que para eso el heladero tendría
            que haber vendido <InlineMath>{"1.5"}</InlineMath> helados. Esto es,{" "}
            <InlineMath>{"g(x)"}</InlineMath> sólo puede adquirir cualquier
            valor del conjunto mencionado.
            <br />
            <br />
            Sin embargo, si se tiene un intervalo como{" "}
            <InlineMath>{"0 \\leq x \\leq 30"}</InlineMath>, que en el caso del
            taxi representa los valores que puede adquirir la distancia
            recorrida <InlineMath>{"x"}</InlineMath>, dicha variable puede tomar
            valores como <InlineMath>{" 1.5 \\, km"}</InlineMath>,{" "}
            <InlineMath>{" 7 \\, km"}</InlineMath>,{" "}
            <InlineMath>{" 29.4 \\, km"}</InlineMath>, y en general cualquier
            valor entre <InlineMath>{" 0 \\, km"}</InlineMath> y{" "}
            <InlineMath>{" 30 \\, km"}</InlineMath>, ya que todas son posibles
            distancias que el taxi puede recorrer.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ValoresVarDependiente;
