/* import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import { React, useState } from "react";
import { Row, Col, Container, Form }from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";


const Act7 = () => {
  
  return (
    <>
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
                      checked={}
                      onChange={}
                      label="{0, 1, 2, 3, ..., 249, 250}"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones1_1"
                      value="b"
                      checked={}
                      onChange={}
                      label="{0, 1, 2, 4, ..., 3999, 4000}"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones1_1"
                      value="c"
                      checked={}
                      onChange={}
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
                      checked={}
                      onChange={}
                      label="{4000, 3750, 3500, 3250, ..., 500, 250}"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones1_2"
                      value="b"
                      checked={}
                      onChange={}
                      label="{0, 250, 500, 750, ..., 3750, 4000} "
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones1_2"
                      value="c"
                      checked={}
                      onChange={}
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
                      checked={}
                      onChange={}
                      label="0 ≤ x ≤ 30"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones2_1"
                      value="b"
                      checked={}
                      onChange={}
                      label="20 ≤ x ≤ 30"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones2_1"
                      value="c"
                      checked={}
                      onChange={}
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
                      checked={}
                      onChange={}
                      label="630 ≤ p(x) ≤ 0"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones2_2"
                      value="b"
                      checked={}
                      onChange={}
                      label="30 ≤ p(x) ≤ 630"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones2_2"
                      value="c"
                      checked={}
                      onChange={}
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
                      checked={}
                      onChange={}
                      label="2 ≤ t ≤ 30"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones3_1"
                      value="b"
                      checked={}
                      onChange={}
                      label="1 ≤ t ≤ 30"
                    />

                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones3_1"
                      value="c"
                      checked={}
                      onChange={}
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
                      checked={}
                      onChange={}
                      label="4 ≤ d(t) ≤ 60"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionB1"
                      name="opciones3_2"
                      value="b"
                      checked={}
                      onChange={}
                      label="0 ≤ d(t) ≤ 60"
                    />
                    <Form.Check
                      type="checkbox"
                      id="opcionC1"
                      name="opciones3_2"
                      value="c"
                      checked={}
                      onChange={}
                      label="2 ≤ d(t) ≤ 60"
                    />
                  </Form.Group>
                </Form>
              </li>
            </ul>
          </ul>
        </Col>
      </Row>
    </>
  )
}

export default Act7 */