import { React, useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";
import { Row, Col, Form } from "react-bootstrap";

const Act15 = () => {
  const [respuestasAct15, setRespuestasAct15] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
  });

  const handleRespChangeAct15 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct15((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  useEffect(() => {
    console.log("Respuestas Act15", respuestasAct15);
  }, [respuestasAct15]);

  return (
    <>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 15:</b> Determina el dominio correspondiente a las
            siguientes reglas de correspondencia:
            <br />
          </p>

          <ul>
            <li>
              <em>
                <InlineMath>{"f(x) = \\sqrt{x + 2}"}</InlineMath>
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA1"
                  name="opciones1"
                  value="a"
                  checked={respuestasAct15.preg1 === "a"}
                  onChange={(e) => handleRespChangeAct15(e, "preg1")}
                  label={<InlineMath>{"x \\geq -2"}</InlineMath>}
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB1"
                  name="opciones1"
                  value="b"
                  checked={respuestasAct15.preg1 === "b"}
                  onChange={(e) => handleRespChangeAct15(e, "preg1")}
                  label={<InlineMath>{"x \\geq -4"}</InlineMath>}
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC1"
                  name="opciones1"
                  value="c"
                  checked={respuestasAct15.preg1 === "c"}
                  onChange={(e) => handleRespChangeAct15(e, "preg1")}
                  label={<InlineMath>{"x \\geq 2"}</InlineMath>}
                />
              </Form.Group>
            </Form>
            <br />
            <li>
              <em>
                <InlineMath>{"f(x) = \\sqrt{x - 3}"}</InlineMath>
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA2"
                  name="opciones2"
                  value="a"
                  checked={respuestasAct15.preg2 === "a"}
                  onChange={(e) => handleRespChangeAct15(e, "preg2")}
                  label={<InlineMath>{"x \\geq 2"}</InlineMath>}
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB2"
                  name="opciones2"
                  value="b"
                  checked={respuestasAct15.preg2 === "b"}
                  onChange={(e) => handleRespChangeAct15(e, "preg2")}
                  label={<InlineMath>{"x \\geq 3"}</InlineMath>}
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC2"
                  name="opciones2"
                  value="c"
                  checked={respuestasAct15.preg2 === "c"}
                  onChange={(e) => handleRespChangeAct15(e, "preg2")}
                  label={<InlineMath>{"x \\geq 4"}</InlineMath>}
                />
              </Form.Group>
            </Form>
            <br />
            <li>
              <em>
                <InlineMath>{"f(x) = \\frac{20}{x - 1}"}</InlineMath>
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA3"
                  name="opciones3"
                  value="a"
                  checked={respuestasAct15.preg3 === "a"}
                  onChange={(e) => handleRespChangeAct15(e, "preg3")}
                  label={
                    <InlineMath>
                      {"-\\infty < x < +\\infty,\\ excepto \\ x = -1"}
                    </InlineMath>
                  }
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB3"
                  name="opciones3"
                  value="b"
                  checked={respuestasAct15.preg3 === "b"}
                  onChange={(e) => handleRespChangeAct15(e, "preg3")}
                  label={
                    <InlineMath>
                      {"-\\infty < x < +\\infty,\\ excepto \\ x = 0"}
                    </InlineMath>
                  }
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC3"
                  name="opciones3"
                  value="c"
                  checked={respuestasAct15.preg3 === "c"}
                  onChange={(e) => handleRespChangeAct15(e, "preg3")}
                  label={
                    <InlineMath>
                      {"-\\infty < x < +\\infty,\\ excepto \\ x = 1"}
                    </InlineMath>
                  }
                />
              </Form.Group>
            </Form>
            <br />
            <li>
              <em>
                <InlineMath>{"f(x) = \\frac{5}{x + 3}"}</InlineMath>
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA4"
                  name="opciones4"
                  value="a"
                  checked={respuestasAct15.preg4 === "a"}
                  onChange={(e) => handleRespChangeAct15(e, "preg4")}
                  label={
                    <InlineMath>
                      {"-\\infty < x < +\\infty,\\ excepto \\ x = -3"}
                    </InlineMath>
                  }
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB4"
                  name="opciones4"
                  value="b"
                  checked={respuestasAct15.preg4 === "b"}
                  onChange={(e) => handleRespChangeAct15(e, "preg4")}
                  label={
                    <InlineMath>
                      {"-\\infty < x < +\\infty,\\ excepto \\ x = -4"}
                    </InlineMath>
                  }
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC4"
                  name="opciones4"
                  value="c"
                  checked={respuestasAct15.preg4 === "c"}
                  onChange={(e) => handleRespChangeAct15(e, "preg4")}
                  label={
                    <InlineMath>
                      {"-\\infty < x < +\\infty,\\ excepto \\ x = -5"}
                    </InlineMath>
                  }
                />
              </Form.Group>
            </Form>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Act15;
