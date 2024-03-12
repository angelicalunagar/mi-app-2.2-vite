import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const EvaluarLaReglaDeCorrespon = () => {
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

  const [valuesTableAct6, setValuesTableAct6] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
  });

  const handleInputAct6 = (cell, value) => {
    setValuesTableAct6((prevValues) => ({
      ...prevValues,
      [cell]: value,
    }));
  };

  return (
    <Container>
      <h4>Evaluar la regla de correspondencia</h4>
      <Row className="main-row">
        <Col>
          <p>
            Recuerda que al principio cuando relacionamos dos variables sólo
            decíamos frases como “si una variable aumenta, la otra también
            aumenta” o “si una variable aumenta, la otra disminuye”. Ahora ya
            podemos dar cuenta numérica de eso si elaboramos una tabla. Por
            ejemplo, en el caso del heladero, sabemos que la expresión{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath> describe la ganancia en función
            del número de helados vendidos. Por lo tanto, podemos calcular{" "}
            <InlineMath>{"g(x)"}</InlineMath> para distintos valores de{" "}
            <InlineMath>{"x"}</InlineMath>.
          </p>
          <ul>
            <br />
            <li>
              Para 0 helados vendidos, sustituimos{" "}
              <InlineMath>{"x=0"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(0)=5(0)"}</BlockMath>
              <BlockMath>{"g(0)=0"}</BlockMath>
            </li>
            <li>
              Para 1 helado vendido, sustituimos{" "}
              <InlineMath>{"x=1"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(1)=5(1)=5"}</BlockMath>
            </li>
            <li>
              Para 2 helados vendidos, sustituimos{" "}
              <InlineMath>{"x=2"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(2)=5(2)=10"}</BlockMath>
            </li>
          </ul>
          <p>
            Al proceso de asignar un valor a la variable{" "}
            <InlineMath>{"x"}</InlineMath> y realizar las operaciones que indica
            la regla de correspondencia para calcular la variable dependiente,{" "}
            <InlineMath>{"g(x)"}</InlineMath> en este caso, se llama{" "}
            <b>evaluar la regla de correspondencia.</b>
          </p>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <b>Actividad 6:</b> Evalúa la regla de correspondencia{" "}
          <InlineMath>{"g(x)=5x"}</InlineMath> en{" "}
          <InlineMath>{"x=3, 4, 5"}</InlineMath>.
          <br />
          <br />
          <Container className="act6-center">
            <div>
              <InlineMath>{`g(3) = 5(`}</InlineMath>
              <input
                className="input-eval"
                type="text"
                value={valuesEval.eval_1_1}
                onChange={(e) =>
                  handleEvalInputChange("eval_1_1", e.target.value)
                }
              />
              <InlineMath>{`) = `}</InlineMath>
              <input
                className="input-eval"
                type="text"
                value={valuesEval.eval_1_2}
                onChange={(e) =>
                  handleEvalInputChange("eval_1_2", e.target.value)
                }
              />
            </div>
            <br />
            <div>
              <InlineMath>{`g(4) = 5(`}</InlineMath>
              <input
                className="input-eval"
                type="text"
                value={valuesEval.eval_2_1}
                onChange={(e) =>
                  handleEvalInputChange("eval_2_1", e.target.value)
                }
              />
              <InlineMath>{`) = `}</InlineMath>
              <input
                className="input-eval"
                type="text"
                value={valuesEval.eval_2_2}
                onChange={(e) =>
                  handleEvalInputChange("eval_2_2", e.target.value)
                }
              />
            </div>
            <br />
            <div>
              <InlineMath>{`g(5) = 5(`}</InlineMath>
              <input
                className="input-eval"
                type="text"
                value={valuesEval.eval_3_1}
                onChange={(e) =>
                  handleEvalInputChange("eval_3_1", e.target.value)
                }
              />
              <InlineMath>{`) = `}</InlineMath>
              <input
                className="input-eval"
                type="text"
                value={valuesEval.eval_3_2}
                onChange={(e) =>
                  handleEvalInputChange("eval_3_2", e.target.value)
                }
              />
            </div>
          </Container>
          <Container>
            <p>
              Utiliza tus resultados de las evaluaciones para completar los
              espacios vacíos de la siguiente tabla.
            </p>
          </Container>
          <Container className="cont-table-act3">
            <div className="tittle-table">
              <h6>Tabla 2</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>x</th>
                  <th>g(x)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct6.cell_22}
                      onChange={(e) =>
                        handleInputAct6("cell_22", e.target.value)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct6.cell_31}
                      onChange={(e) =>
                        handleInputAct6("cell_31", e.target.value)
                      }
                    />
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct6.cell_42}
                      onChange={(e) =>
                        handleInputAct6("cell_42", e.target.value)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct6.cell_52}
                      onChange={(e) =>
                        handleInputAct6("cell_52", e.target.value)
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTableAct6.cell_62}
                      onChange={(e) =>
                        handleInputAct6("cell_62", e.target.value)
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <div className="button-center">
            <Button>Revisar respuestas</Button>
          </div>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Observa que de la tabla podemos sacar algunas conclusiones valiosas,
            por ejemplo:
          </p>
          <ul>
            <li>
              A medida que la variable independiente{" "}
              <InlineMath>{"x"}</InlineMath> se incrementa, la variable
              dependiente <InlineMath>{"g(x)"}</InlineMath> también se
              incrementa. Recuerda que <InlineMath>{"x"}</InlineMath> es el
              número de helados vendidos y <InlineMath>{"g(x)"}</InlineMath> es
              la ganancia.
            </li>
            <br />
            <li>
              Hemos decidido que <InlineMath>{"x"}</InlineMath> adquiera valores
              desde <InlineMath>{"0"}</InlineMath> helados hasta{" "}
              <InlineMath>{"5"}</InlineMath> helados, pero hasta este momento no
              tenemos ningún impedimento para que <InlineMath>{"x"}</InlineMath>{" "}
              valga <InlineMath>{"100"}</InlineMath>,{" "}
              <InlineMath>{"300"}</InlineMath>, o cualquier otra cantidad
              helados.
            </li>
            <br />
            <li>
              A cada número de helados <InlineMath>{"x"}</InlineMath> le
              corresponde un único valor de ganancia{" "}
              <InlineMath>{"g(x)"}</InlineMath>. Por ejemplo, a{" "}
              <InlineMath>{"x=2"}</InlineMath> le corresponde{" "}
              <InlineMath>{"g(x)=10"}</InlineMath>, y a{" "}
              <InlineMath>{"x=5"}</InlineMath> le corresponde{" "}
              <InlineMath>{"g(x)=25"}</InlineMath>.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default EvaluarLaReglaDeCorrespon;
