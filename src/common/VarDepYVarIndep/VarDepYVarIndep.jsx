import React from "react";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import { useState} from "react";
import { Button, Row, Col, Container, Table} from "react-bootstrap";
import car from "../../assets/car.jpg";
import Act2 from "./Act2";
import Act3 from "./Act3";

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
      
      <Act2 />
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
      <Act3 />
    </Container>
  );
};

export default VarDepYVarIndep;
