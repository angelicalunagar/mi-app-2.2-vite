import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { useState} from "react";
import { Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import car from "../assets/car.jpg";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const VarDepYVarIndep = () => {
  const [valuesTable, setValuesTable] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
  });

  // Manejador de cambios para actualizar el estado cuando se introduce un valor
  const handleInputChange = (cell, value) => {
    setValuesTable((prevValues) => ({
      ...prevValues,
      [cell]: value,
    }));
  };

  const [valuesAct2, setValuesAct2] = useState({
    vd_1: "",
    vi_1: "",
    vd_2: "",
    vi_2: "",
    vd_3: "",
    vi_3: "",
  });

  const handleInputAct2 = (key, value) => {
    setValuesAct2((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const [valuesAct3, setValuesAct3] = useState({
    vd_1: "",
    vi_1: "",
    vd_2: "",
    vi_2: "",
    vd_3: "",
    vi_3: "",
  });
  const handleInputAct3 = (key, value) => {
    setValuesAct3((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <Container>
      <h4>Variable dependiente y variable independiente</h4>
      <Row className="row-car">
        <img src={car} alt="" />
      </Row>
      <Row className="row-nuevotema">
        <Col>
          <p>
            Imagina un automóvil de carreras que se mueve a 2km por cada minuto,
            es decir, su velocidad es 2km/min. Si han pasado 2 min recorrerá 4
            km, si pasan 5 min recorrerá 10 km, y así sucesivamente.
            <br />
            <br />
            Podemos pensar que el movimiento del automóvil se comporta como una
            máquina que para cada tiempo en minutos, devuelve la distancia
            recorrida en dicho tiempo (en km). <b>Contesta la Actividad 1.</b>
            <br />
            <br />
            En este caso, al tiempo y a la distancia recorrida se les llama
            variables porque son valores que pueden cambiar y además son
            codependientes, ya que el valor de una depende del valor de la otra,
            pero ¿quién depende de quién? ¿El tiempo depende de la distancia
            recorrida? o ¿la distancia recorrida depende del tiempo?
            <br />
            <br />
            Identificar que la distancia recorrida depende del tiempo que
            hallamos puesto a andar el auto es primordial para identificar la
            variable dependiente y la variable independiente.
            <br />
            <br />
            Si la{" "}
            <b>
              <em>variable dependiente</em>
            </b>{" "}
            es aquella cuyo valor depende de la otra variable, en el ejemplo del
            automóvil, la{" "}
            <b>
              <em>variable dependiente</em>
            </b>{" "}
            es la distancia recorrida, ya que esta dependerá de cuánto tiempo ha
            transcurrido. En este caso el tiempo es la{" "}
            <b>
              <em>variable independiente</em>
            </b>
            .
            <br />
            <br />
            <b>Contesta la Actividad 2.</b>
            <br />
          </p>
        </Col>
        <Col className="actividad" md={5}>
          <p>
            <b>Actividad 1:</b> Completa la siguiente tabla tomando en cuenta
            que tienes un automóvil con velocidad de 2km/min.
          </p>
          <Container className="cont-table-act1">
            <div className="tittle-table">
              <h6>Tabla 1</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Tiempo transcurrido <br />
                    (minutos)
                  </th>
                  <th>
                    Distancia recorrida <br />
                    (km)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1.5</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTable.cell_22}
                      onChange={(e) =>
                        handleInputChange("cell_22", e.target.value)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTable.cell_31}
                      onChange={(e) =>
                        handleInputChange("cell_31", e.target.value)
                      }
                    />
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>3.7</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTable.cell_42}
                      onChange={(e) =>
                        handleInputChange("cell_42", e.target.value)
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
                      value={valuesTable.cell_52}
                      onChange={(e) =>
                        handleInputChange("cell_52", e.target.value)
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTable.cell_62}
                      onChange={(e) =>
                        handleInputChange("cell_62", e.target.value)
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
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  value={valuesAct2.vd_1}
                  onChange={(e) => handleInputAct2("vd_1", e.target.value)}
                />
              </label>
              <br />
              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  value={valuesAct2.vi_1}
                  onChange={(e) => handleInputAct2("vi_1", e.target.value)}
                />
              </label>
            </li>
            <br />
            <li>
              <em>
                Cristina comienza la quincena con una cantidad de dinero, pero a
                medida que pasan los días, su dinero va disminuyendo.
              </em>

              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  value={valuesAct2.vd_2}
                  onChange={(e) => handleInputAct2("vd_2", e.target.value)}
                />
              </label>
              <br />

              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  value={valuesAct2.vi_2}
                  onChange={(e) => handleInputAct2("vi_2", e.target.value)}
                />
              </label>
            </li>
            <br />
            <li>
              <em>
                Raúl observa que el Uber le cobra más cuando la distancia
                recorrida es mayor.
              </em>

              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  value={valuesAct2.vd_3}
                  onChange={(e) => handleInputAct2("vd_3", e.target.value)}
                />
              </label>

              <br />
              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  value={valuesAct2.vi_3}
                  onChange={(e) => handleInputAct2("vi_3", e.target.value)}
                />
              </label>
            </li>
          </ul>
          <div className="button-center">
            <Button>Revisar respuestas</Button>
          </div>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Observemos entonces que siempre que existe codependencia entre dos
            variables, una de ellas es la variable dependiente y la otra es la
            variable independiente, y se dice que la variable dependiente es
            función de la variable independiente, lo cual significa simplemente
            que la variable dependiente “depende” de la variable independiente.
            Por ejemplo: si la distancia recorrida depende del tiempo que el
            automóvil ha viajado, se dice que la distancia{" "}
            <b>
              <em>es función</em>
            </b>{" "}
            (o es una función) del tiempo. <b>Contesta la actividad 3.</b>
          </p>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 3:</b> Completa los espacios en blanco:
            <br />
          </p>
          <ul>
            <li>
              Si la ganancia del heladero depende del número de helados
              vendidos, se dice que{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vd_1}
                onChange={(e) => handleInputAct3("vd_1", e.target.value)}
              />
              es función (o es una función) de{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vi_1}
                onChange={(e) => handleInputAct3("vi_1", e.target.value)}
              />
            </li>
            <br />
            <li>
              Si el dinero de Cristina depende de los días que han transcurrido
              a partir del cobro de la quincena, se dice que{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vd_2}
                onChange={(e) => handleInputAct3("vd_2", e.target.value)}
              />
              es función (o es una función) de{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vi_2}
                onChange={(e) => handleInputAct3("vi_2", e.target.value)}
              />
            </li>
            <br />
            <li>
              Si el precio final de un viaje en Uber depende de la distancia
              recorrida, se dice que{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vd_3}
                onChange={(e) => handleInputAct3("vd_3", e.target.value)}
              />
              es función (o es una función) de{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vi_3}
                onChange={(e) => handleInputAct3("vi_3", e.target.value)}
              />
            </li>
          </ul>
          <div className="button-center">
            <Button>Revisar respuestas</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VarDepYVarIndep;
