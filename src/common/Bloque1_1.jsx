import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import car from "../assets/car.jpg";
import iceCreamMan from "../assets/iceCreamMan.jpg";
import Table from "react-bootstrap/Table";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";
import Rectangulo from "./Rectangulo";

import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "../styles/Bloque1_1.css";
import { Button, Fade, Form, Image } from "react-bootstrap";
import graficarPuntos from "../assets/graficarPuntos.gif";
import VariacionFunciones from "./VariacionFunciones";

const Bloque1_1 = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  const [open, setOpen] = useState(false);

  const [valuesTable, setValuesTable] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
  });

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

  const [valuesPoints, setValuesPoints] = useState({
    a_x: "",
    a_y: "",
    b_x: "",
    b_y: "",
    c_x: "",
    c_y: "",
    d_x: "",
    d_y: "",
    e_x: "",
    e_y: "",
    f_x: "",
    f_y: "",
    g_x: "",
    g_y: "",
    h_x: "",
    h_y: "",
  });

  const [selectedHeaders, setSelectedHeaders] = useState({
    header1: "Número que ingresa a la función",
    header2: "Número que devuelve la función",
  });

  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const handleSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const [opcionSelecPreg1, setOpcionSelecPreg1] = useState(null);
  const handleSelecPreg1 = (opcion) => {
    setOpcionSelecPreg1(opcion);
  };

  const [opcionSelecPreg2, setOpcionSelecPreg2] = useState(null);
  const handleSelecPreg2 = (opcion) => {
    setOpcionSelecPreg2(opcion);
  };

  const [opcionSelecPreg3, setOpcionSelecPreg3] = useState(null);
  const handleSelecPreg3 = (opcion) => {
    setOpcionSelecPreg3(opcion);
  };

  const [opcionSelecPreg4, setOpcionSelecPreg4] = useState(null);
  const handleSelecPreg4 = (opcion) => {
    setOpcionSelecPreg4(opcion);
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
  const [respuestasAct4, setRespuestasAct4] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
  });

  const handleRespChangeAct4 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct4((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  const [respuestasAct5, setRespuestasAct5] = useState({
    preg1a: "",
    preg1b: "",
    preg2a: "",
    preg2b: "",
    preg3a: "",
    preg3b: "",
  });

  const handleInputAct5 = (key, value) => {
    setRespuestasAct5((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

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

  const [respuestasAct9, setRespuestasAct9] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
    preg5: "",
  });

  const handleRespChangeAct9 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct9((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  const handleInputAct3 = (key, value) => {
    setValuesAct3((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  // Manejador de cambios para actualizar el estado cuando se introduce un valor
  const handleInputChange = (cell, value) => {
    setValuesTable((prevValues) => ({
      ...prevValues,
      [cell]: value,
    }));
  };

  const handleEvalInputChange = (evalKey, value) => {
    setValuesEval((prevValues) => ({
      ...prevValues,
      [evalKey]: value,
    }));
  };

  const handlePointsInputChange = (pointKey, value) => {
    setValuesPoints((prevValues) => ({
      ...prevValues,
      [pointKey]: value,
    }));
  };

  const handleHeaderChange = (headerType, value) => {
    setSelectedHeaders((prevHeaders) => ({
      ...prevHeaders,
      [headerType]: value,
    }));
  };

  useEffect(() => {
    console.log("valuesEval:", valuesEval);
    console.log("valuesTable:", valuesTable);
    console.log("valuesPoints", valuesPoints);
    console.log("Respuestas Act4", respuestasAct4);
    console.log("Respuestas Act5", respuestasAct5);
    console.log("Respuestas Act6", valuesTableAct6);
    console.log("Respuestas Act7", respuestasAct7);
    console.log("Respuestas Act9", respuestasAct9);
    console.log("Respuestas Preg1", opcionSelecPreg1);
    console.log("Respuestas Preg2", opcionSelecPreg2);
    console.log("Respuestas Preg3", opcionSelecPreg3);
    console.log("Respuestas Preg4", opcionSelecPreg4);
  }, [
    valuesEval,
    valuesTable,
    valuesPoints,
    respuestasAct4,
    respuestasAct5,
    valuesTableAct6,
    respuestasAct7,
    respuestasAct9,
    valuesTableAct9,
    opcionSelecPreg1,
    opcionSelecPreg2,
    opcionSelecPreg3,
    opcionSelecPreg4,
  ]);

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
                {/* <tr>
                  <td>7</td>
                  <td>
                    <input
                      className="custom-input"
                      type="text"
                      value={valuesTable.cell1}
                      onChange={(e) =>
                        handleInputChange("cell_72", e.target.value)
                      }
                    />
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </Container>
          <div className="button-center">
            <Button onClick={() => setOpen(!open)}>Revisar respuestas</Button>
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
      <h4>Regla de correspondencia</h4>
      <Row>
        <Col>
          <p>
            Hasta ahora, en las situaciones de la actividad 2, sólo hemos
            identificado cuál es la variable dependiente y cuál es la variable
            independiente, y hemos dicho cómo se relacionan cualitativamente.
            Por ejemplo, en el caso del heladero, sabemos que entre más helados
            vende, más gana. Con esta información, ¿puedes saber cuánto gana si
            vende 20 helados?
          </p>
          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg1"
                value="a"
                checked={opcionSelecPreg1 === "a"}
                onChange={() => handleSelecPreg1("a")}
                label="Sí"
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg2"
                value="b"
                checked={opcionSelecPreg1 === "b"}
                onChange={() => handleSelecPreg1("b")}
                label="No"
              />
            </Form.Group>
          </Form>
          <p>
            Definitivamente no. Para responder esto necesitamos información
            cuantitativa (no sólo cualitativa) que relacione el número de
            helados vendidos con la ganancia. Pero si el heladero nos dice que
            gana 5 pesos por cada helado que vende, podemos calcular su
            ganancia:
            <br />
            <BlockMath>{"\\text{ganancia = 5 (número de helados)}"}</BlockMath>
            <br />
            Llamando <InlineMath>{"g"}</InlineMath> a la ganancia y{" "}
            <InlineMath>{"x"}</InlineMath> al número de helados, podemos
            escribir:
            <br />
            <BlockMath>{"g = 5x"}</BlockMath>
            <br />Y para hacer explícito que la ganancia{" "}
            <InlineMath>{"g"}</InlineMath> depende del número de helados{" "}
            <InlineMath>{"x"}</InlineMath>, en vez de escribir únicamente{" "}
            <InlineMath>{"g"}</InlineMath>, escribimos{" "}
            <InlineMath>{"g(x)"}</InlineMath>, que se lee “g de x”:
            <br />
            <BlockMath>{"g (x) = 5x"}</BlockMath>
            <br />
            Esta última expresión es una <b>regla de correspondencia</b> porque
            establece una correspondencia entre <InlineMath>{"2"}</InlineMath>{" "}
            variables (relación entre <InlineMath>{"2"}</InlineMath> variables),
            a saber, la ganancia <InlineMath>{"g(x)"}</InlineMath> y el número
            de helados <InlineMath>{"x"}</InlineMath>. La expresión{" "}
            <InlineMath>{"g(x)= 5x"}</InlineMath> nos dice que a cada valor que
            le asignemos a <InlineMath>{"x"}</InlineMath> le corresponde un
            valor <InlineMath>{"g(x)"}</InlineMath> que se calcula multiplicando{" "}
            <InlineMath>{"x"}</InlineMath> por <InlineMath>{"5"}</InlineMath>.
          </p>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 4:</b> Selecciona la regla de correspondencia que
            describe cada situación.
            <br />
          </p>

          <ul>
            <li>
              <em>
                Cristina gana 4000 pesos quincenales, de los cuáles gasta 250
                pesos diarios. La función que describe que el dinero restante
                depende del número de días que han trascurrido desde el pago de
                la quincena es:
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA1"
                  name="opciones1"
                  value="a"
                  checked={respuestasAct4.preg1 === "a"}
                  onChange={(e) => handleRespChangeAct4(e, "preg1")}
                  label="d(n)=2000-125n"
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB1"
                  name="opciones1"
                  value="b"
                  checked={respuestasAct4.preg1 === "b"}
                  onChange={(e) => handleRespChangeAct4(e, "preg1")}
                  label="d(n)=4000-250n"
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC1"
                  name="opciones1"
                  value="c"
                  checked={respuestasAct4.preg1 === "c"}
                  onChange={(e) => handleRespChangeAct4(e, "preg1")}
                  label="d(n)=250n+4000"
                />
              </Form.Group>
            </Form>
            <br />
            <li>
              <em>
                Un Uber cobra una cuota fija por contratación de $30.00 y
                adicionalmente $8.50 por km recorrido. La función que describe
                que el precio <InlineMath>{"p"}</InlineMath> de un viaje en Uber
                depende de la distancia recorrida <InlineMath>{"x"}</InlineMath>
                (en km) es:
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA2"
                  name="opciones2"
                  value="a"
                  checked={respuestasAct4.preg2 === "a"}
                  onChange={(e) => handleRespChangeAct4(e, "preg2")}
                  label="p(x)=30+8.50x"
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB2"
                  name="opciones2"
                  value="b"
                  checked={respuestasAct4.preg2 === "b"}
                  onChange={(e) => handleRespChangeAct4(e, "preg2")}
                  label="p(x)=30-8.50x"
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC2"
                  name="opciones2"
                  value="c"
                  checked={respuestasAct4.preg2 === "c"}
                  onChange={(e) => handleRespChangeAct4(e, "preg2")}
                  label="p(x)=-30+8.50x"
                />
              </Form.Group>
            </Form>
            <br />
            <li>
              <em>
                Un automóvil de carreras avanza 2 km por cada minuto, por lo que
                la distancia recorrida es función de tiempo transcurrido. ¿Cuál
                es la función correcta?
              </em>
            </li>
            <Form>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="opcionA3"
                  name="opciones3"
                  value="a"
                  checked={respuestasAct4.preg3 === "a"}
                  onChange={(e) => handleRespChangeAct4(e, "preg3")}
                  label="d(t)=2t + 10"
                />
                <Form.Check
                  type="checkbox"
                  id="opcionB3"
                  name="opciones3"
                  value="b"
                  checked={respuestasAct4.preg3 === "b"}
                  onChange={(e) => handleRespChangeAct4(e, "preg3")}
                  label="d(t)=-2t"
                />
                <Form.Check
                  type="checkbox"
                  id="opcionC3"
                  name="opciones3"
                  value="c"
                  checked={respuestasAct4.preg3 === "c"}
                  onChange={(e) => handleRespChangeAct4(e, "preg3")}
                  label="d(t)=2t"
                />
              </Form.Group>
            </Form>
          </ul>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            La regla de correspondencia nos permiten calcular el valor de una
            variable cuando conocemos el valor de la otra. Siguiendo con el
            ejemplo del heladero, ahora que conocemos la relación{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath>, podemos responder a la
            pregunta ¿Cuánto gana si vende <InlineMath>{"20"}</InlineMath>{" "}
            helados? En esta pregunta, claramente conocemos a la variable
            independiente No. de helados, o sea{" "}
            <InlineMath>{"x=20"}</InlineMath>, y lo que nos están preguntando es
            el valor de la variable dependiente ganancia{" "}
            <InlineMath>{"g(x)"}</InlineMath>. Es decir, basta con sustituir{" "}
            <InlineMath>{"x"}</InlineMath> por <InlineMath>{"20"}</InlineMath>{" "}
            en la regla de correspondencia para calcular la ganancia:
            <br />
            <BlockMath>{"g(x)=5x"}</BlockMath>
            <BlockMath>{"g(20)=5(20)"}</BlockMath>
            <BlockMath>{"g(20)=100"}</BlockMath>
            Observa que <InlineMath>{"g(20)"}</InlineMath> sólo es una notación
            que se usa para indicar que estamos calculando la ganancia cuando se
            venden <InlineMath>{"20"}</InlineMath> helados. Pero como dijimos,
            siempre que nos dan el valor de una de las variables, podemos saber
            el de la otra. Entonces también podríamos saber el número de helados
            vendidos si nos dicen que en total la ganancia del heladero fue de{" "}
            <InlineMath>{"$85.00"}</InlineMath>, es decir{" "}
            <InlineMath>{"g(x)=85"}</InlineMath>. Para resolver esto basta con
            sustituir <InlineMath>{"g(x)"}</InlineMath> por{" "}
            <InlineMath>{"85"}</InlineMath> en la regla de correspondencia y
            despejar <InlineMath>{"x"}</InlineMath> (número de helados):
            <BlockMath>{"g(x)=5x"}</BlockMath>
            <BlockMath>{"85 = 5x"}</BlockMath>
            <BlockMath>{"x=85/5"}</BlockMath>
            <BlockMath>{"x=17"}</BlockMath>
            Esto es, para obtener 85 pesos de ganancia, el heladero tuvo que
            haber vendido 17 helados.
          </p>
        </Col>
      </Row>

      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 5:</b> Calcula el valor de la variable dependiente y la
            variable independiente según cada situación.
          </p>
          <br />
          <ul>
            <li>
              Durante la quincena, el dinero d(n) de Cristina depende del número
              de días n que pasan de acuerdo con la regla de correspondencia
              d(n)=4000-250n. Nota que, si han transcurrido 0 días, Cristina
              tendrá 4000 pesos.
              <br />
              a) ¿Cuánto dinero le queda a Cristina, transcurridos 10 días?
              <input
                className="input-act5"
                type="text"
                value={respuestasAct5.preg1a}
                onChange={(e) => handleInputAct5("preg1a", e.target.value)}
              />
              <br />
              b) Si hasta ahora a Cristina le quedan $2750.00, cuántos días han
              transcurrido desde el pago de la quincena.
              <input
                className="input-act5"
                type="text"
                value={respuestasAct5.preg1b}
                onChange={(e) => handleInputAct5("preg1b", e.target.value)}
              />
            </li>
            <br />
            <li>
              Un taxi calcula el precio de sus viajes en función de la distancia
              recorrida de acuerdo con la expresión p(x)=30+20x.
              <br />
              a) ¿Cuánto cobra el taxi si el viaje de un cliente es de 7.5 km?
              <input
                className="input-act5"
                type="text"
                value={respuestasAct5.preg2a}
                onChange={(e) => handleInputAct5("preg2a", e.target.value)}
              />
              <br />
              b) ¿Si el taxi me ha cobrado 94 pesos, cuántos kilómetros
              recorrió?
              <input
                className="input-act5"
                type="text"
                value={respuestasAct5.preg2b}
                onChange={(e) => handleInputAct5("preg2b", e.target.value)}
              />
            </li>
            <br />
            <li>
              La distancia recorrida (en km) de un automóvil de carreras es
              función del tiempo transcurrido (en min) de acuerdo con la
              expresión d(t)=2t.
              <br />
              a) ¿Qué distancia ha recorrido el automóvil en 6.5 minutos?
              <input
                className="input-act5"
                type="text"
                value={respuestasAct5.preg3a}
                onChange={(e) => handleInputAct5("preg3a", e.target.value)}
              />
              <br />
              b) ¿Si la distancia recorrida es de 22.6 km, cuántos minutos ha
              estado andando el automóvil?
              <input
                className="input-act5"
                type="text"
                value={respuestasAct5.preg3b}
                onChange={(e) => handleInputAct5("preg3b", e.target.value)}
              />
            </li>
          </ul>
        </Col>
      </Row>
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
      <h4>Valores que adquiere la variable independiente</h4>
      <Row className="main-row">
        <Col>
          <p>
            Siguiendo con el caso del heladero, cuyas ganancias{" "}
            <InlineMath>{"g(x)"}</InlineMath> están en función del número de
            helados vendidos x de acuerdo con la regla de correspondencia{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath>, en la sección anterior
            tabulamos valores de <InlineMath>{"x"}</InlineMath>, desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta <InlineMath>{"5"}</InlineMath>,
            con sus respectivos valores de <InlineMath>{"g(x)"}</InlineMath>.
            <br />
            <br />
            Pero ¿cuál es el valor máximo que <InlineMath>
              {"x"}
            </InlineMath>{" "}
            puede tomar? Técnicamente, el heladero comenta que el número máximo
            de helados que caben en su carrito es{" "}
            <InlineMath>{"200"}</InlineMath>. Por lo tanto,{" "}
            <InlineMath>{"x"}</InlineMath> puede tomar valores enteros desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"200"}</InlineMath>.
            <br />
            <br />
            ¿Por qué <InlineMath>{"x"}</InlineMath> no puede tomar valores como{" "}
            <InlineMath>{"2.3"}</InlineMath> ó <InlineMath>{"4/3"}</InlineMath>?
            Simplemente porque en el contexto del que estamos hablando, el
            heladero no puede vender <InlineMath>{"2.3"}</InlineMath> helados ó{" "}
            <InlineMath>{"4/3"}</InlineMath> de helado, sólo puede vender
            helados completos. Por lo tanto, la <b>totalidad de valores</b> que
            puede adquirir la variable independiente{" "}
            <InlineMath>{"x"}</InlineMath> es:
            <BlockMath>{"\\{0, 1, 2, 3, \\ldots, 199, 200\\}"}</BlockMath>
          </p>
        </Col>
        <Col className="col-iceCreamMan" md={5}>
          <img src={iceCreamMan} alt="" />
        </Col>
      </Row>
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
      <h4>¿Qué es una función?</h4>
      <Row>
        <Col>
          <p>
            Ahora que comprendes que una regla de correspondencia es una
            expresión matemática que relaciona una variable independiente con
            una variable dependiente, definamos una función matemática:
            <br />
            <br />
            <em>
              "Una <b>función</b> es simplemente una{" "}
              <em>regla de correspondencia</em> que relaciona las variables
              independiente y dependiente. El conjunto de valores que la
              variable independiente puede tomar se llama <b>dominio</b> de la
              función, mientras que el conjunto de valores que la variable
              dependiente puede adquirir se conoce como su <b>imagen</b> o{" "}
              <b>rango</b>."
            </em>
            <br />
            <br />
            Es importante destacar que el concepto de función está constituido
            por tres elementos básicos: la regla de correspondencia, el dominio
            y el rango. Por lo tanto, definir una función implica conocer no
            solo la regla de correspondencia, sino también el dominio y el
            rango. Aunque a menudo se hace referencia a la regla de
            correspondencia como "función", es fundamental reconocer que la
            función está completamente definida solo cuando se conocen la regla
            el dominio y el rango.
            <br />
            <br />A continuación, se muestra un resumen de las funciones que
            hemos estudiado hasta aquí. Recuerda que el dominio y el rango de
            cada función se han definido de acuerdo al contexto.
          </p>
          <Container className="cont-table-act1">
            <div className="tittle-table">
              <h6>Tabla 3</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Funciones</th>
                  <th>Regla de correspondencia</th>
                  <th>Dominio</th>
                  <th>Rango</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Función g</td>
                  <td>g(x)=5x</td>
                  <td>
                    <span>&#123;</span>0, 1, 2, 3, . . . , 199, 200
                    <span>&#125;</span>
                  </td>
                  <td>
                    <span>&#123;</span>0, 5, 10, 15, . . . , 995, 1000
                    <span>&#125;</span>
                  </td>
                </tr>
                <tr>
                  <td>Función d</td>
                  <td>d(n)=4000-250n</td>
                  <td>
                    <span>&#123;</span>0, 1, 2, 3, . . . , 14, 15
                    <span>&#125;</span>
                  </td>
                  <td>
                    <span>&#123;</span>4000, 3750, 3500, 3250, . . . , 500, 250
                    <span>&#125;</span>
                  </td>
                </tr>
                <tr>
                  <td>Función p</td>
                  <td>p(x)=30+8.50x</td>
                  <td>0 ≤ x ≤ 30</td>
                  <td>30 ≤ p(x) ≤ 630</td>
                </tr>
                <tr>
                  <td>Función d</td>
                  <td>d(t)=2t</td>
                  <td>0 ≤ t ≤ 30</td>
                  <td>0 ≤ d(t) ≤ 60</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
      <h4>Nomenclatura de las funciones</h4>
      <Row>
        <Col>
          <p>
            "Por lo general, cuando representamos una función matemática,
            utilizamos letras como <InlineMath>{"g"}</InlineMath> para denotar
            ganancia, <InlineMath>{"d"}</InlineMath> para dinero o distancia, y
            p para precio. Respecto a la variable independiente, empleamos
            letras como <InlineMath>{"d"}</InlineMath> para el número de días y{" "}
            <InlineMath>{"t"}</InlineMath> para el tiempo. Y finalmente, en
            cuanto a la variable dependiente, utilizamos{" "}
            <InlineMath>{"g(n)"}</InlineMath> para indicar que la ganancia
            depende del número de helados, y <InlineMath>{"d(t)"}</InlineMath>
            para mostrar que la distancia recorrida depende del tiempo.
            <br />
            <br />
            Sin embargo, dado que a menudo se utiliza una función sin contexto,
            se recurre a <InlineMath>{"f"}</InlineMath> para representar una
            función genérica, <InlineMath>{"x"}</InlineMath> para la variable
            independiente y <InlineMath>{"f(x)"}</InlineMath> para la variable
            dependiente."
          </p>
        </Col>
      </Row>
      <h4>Funciones de dos variables</h4>
      <Row className="main-row">
        <Col>
          <p>
            Existen situaciones en las cuáles puede haber{" "}
            <InlineMath>{"2"}</InlineMath> variables independientes y una
            variable dependiente. Por ejemplo:
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="border" md={5}>
          <Rectangulo />
        </Col>
        <Col md={7}>
          <p>
            Un granjero hará un corral rectangular para las gallinas como el que
            se muestra a la izquierda y quiere calcular el área de dicho corral.
            Nombrando <InlineMath>{"x"}</InlineMath> a uno de los lados, y{" "}
            <InlineMath>{"y"}</InlineMath> al otro, la regla de correspondencia
            que calcula el área es:
            <BlockMath>{"A(x, y)=xy"}</BlockMath>
            Ya que el área de un rectángulo se calcula multiplicando su largo
            por su ancho. Recuerda que la notación{" "}
            <InlineMath>{"A(x, y)"}</InlineMath> sólo indica que el área depende
            de los valores <InlineMath>{"x"}</InlineMath> e{" "}
            <InlineMath>{"y"}</InlineMath>.
            <br />
            <br />
            ¿Cuál es el dominio de <InlineMath>{"x"}</InlineMath> y cuál es el
            dominio de <InlineMath>{"y"}</InlineMath>? hasta ahora tanto{" "}
            <InlineMath>{"x"}</InlineMath> como y podrían valer cualquier número
            en el rango <InlineMath>{"(0, \\infty)"}</InlineMath> porque el
            granjero no ha mencionado limitaciones del terreno en el cuál
            construirá su corral ni limitaciones económicas.
          </p>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            No obstante, el granjero indica que únicamente cuenta con{" "}
            <InlineMath>{"300m"}</InlineMath> de cerca para construir el corral.
            Sabemos entonces que el perímetro del corral es de{" "}
            {"                                   "}
            <InlineMath>{"300m"}</InlineMath>, lo que significa que:
            <br />
            <BlockMath>{"2x+2y=300"}</BlockMath>Es decir:
            <BlockMath>{"x+y=150"}</BlockMath>
            El corral que se ha dibujado en la <b>ventana gráfica 1</b> cumple
            con la condición de que su perímetro es{" "}
            <InlineMath>{"300m"}</InlineMath>, o lo que es lo mismo, la suma de
            los lados <InlineMath>{"x"}</InlineMath> y{" "}
            <InlineMath>{"y"}</InlineMath> es <InlineMath>{"150"}</InlineMath>.
            <br />
            <br />
            Si decidimos que el dominio del lado <InlineMath>
              {"x"}
            </InlineMath>{" "}
            sea:
            <BlockMath>{"0 \\leq x \\leq 40"}</BlockMath>
            podemos determinar el dominio de <InlineMath>{"y"}</InlineMath>{" "}
            deslizando el punto <InlineMath>{"B"}</InlineMath> sobre el eje{" "}
            <InlineMath>{"x"}</InlineMath> (<b>ventana gráfica 1</b>), empezando
            desde cero hasta llegar a <InlineMath>{"40"}</InlineMath>. ¿Qué
            valores adquirió la variable <InlineMath>{"y"}</InlineMath>?{" "}
            <InlineMath>{"y"}</InlineMath> empezó en{" "}
            <InlineMath>{"150"}</InlineMath> (cuando{" "}
            <InlineMath>{"x=0"}</InlineMath>) y fue disminuyendo hasta llegar a{" "}
            <InlineMath>{"110"}</InlineMath> (cuando{" "}
            <InlineMath>{"x=40"}</InlineMath>). Por lo tanto, el dominio de{" "}
            <InlineMath>{"y"}</InlineMath> es:
            <BlockMath>{"150 \\geq y \\geq 110"}</BlockMath>. Y ¿cuál es la
            imagen de la función área? Observa que cuando{" "}
            <InlineMath>{"x=0"}</InlineMath>, <InlineMath>{"y=150"}</InlineMath>{" "}
            y en consecuencia el área es:
            <BlockMath>{"A(x,y)=xy"}</BlockMath>
            <BlockMath>{"A(0, 150)=0*150=0"}</BlockMath>Y cuando{" "}
            <InlineMath>{"x=40"}</InlineMath>,{" "}
            <InlineMath>{"y=110"}</InlineMath>, y el área es:
            <BlockMath>{"A(x,y)=xy"}</BlockMath>
            <BlockMath>{"A(40, 110)=40*110=4400"}</BlockMath>
            Por lo que el área ha aumentado de <InlineMath>
              {"0"}
            </InlineMath>{" "}
            hasta <InlineMath>{" 4400 \\,  \\text{m}^2 "}</InlineMath>, es
            decir, la imagen de la función es:{" "}
            <BlockMath>{"0 \\leq A(x, y) \\leq 4400"}</BlockMath>
          </p>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 8.</b> Utiliza la ventana gráfica{" "}
            <InlineMath>{"2"}</InlineMath> para encontrar el dominio de{" "}
            <InlineMath>{"x"}</InlineMath> o de <InlineMath>{"y"}</InlineMath>,
            según se solicite, y la imagen de la función
            <InlineMath>{"A(x, y) = xy"}</InlineMath>. Recuerda que{" "}
            <InlineMath>{"x+y=150"}</InlineMath>.
          </p>
          <ul>
            <li>
              Determina el dominio de <InlineMath>{"y"}</InlineMath> y el rango
              de <InlineMath>{"A"}</InlineMath> para los siguientes dominios de{" "}
              <InlineMath>{"x"}</InlineMath>:
              <ul>
                <li>
                  <b>A)</b> Cuando el dominio de <InlineMath>{"x"}</InlineMath>{" "}
                  es <InlineMath>{"0 \\leq x \\leq 75"}</InlineMath>:
                  <br />
                  el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <InlineMath>{"\\leq y \\leq"}</InlineMath>
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <br />y la imagen de la función área es:{" "}
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                </li>
                <br />
                <br />
                <li>
                  <b>B)</b> Cuando <InlineMath>{"0 \\leq x \\leq 120"}</InlineMath>,{" "}
                  <br />
                  el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <InlineMath>{"\\leq y \\leq"}</InlineMath>
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <br />y la imagen de la función área es:{" "}
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                </li>
              </ul>
            </li>
            <br />
            <li>
              Determina el dominio de <InlineMath>{"x"}</InlineMath> y el rango
              de <InlineMath>{"A"}</InlineMath> para el siguiente dominio de{" "}
              <InlineMath>{"y"}</InlineMath>:
              <ul>
                <li>
                  <b>A)</b> Cuando <InlineMath>{"0 \\leq y \\leq 40"}</InlineMath>, <br />
                  el dominio de <InlineMath>{"x"}</InlineMath> es:{" "}
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <InlineMath>{"\\leq x \\leq"}</InlineMath>
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <br />y la imagen de la función área es:{" "}
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  <input
                    className="input-act8"
                    type="text"
                    value={respuestasAct5.preg1a}
                    onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Nota que debido a que <InlineMath>{"A"}</InlineMath> es una función
            de <InlineMath>{"2"}</InlineMath> variables independientes, pero
            dependientes entre sí (ya que <InlineMath>{"x+y=150"}</InlineMath>),
            el dominio de la variable <InlineMath>{"x"}</InlineMath> depende del
            dominio de la variable <InlineMath>{"y"}</InlineMath>, y viceversa,
            por lo que basta con fijar el dominio de una para obtener el dominio
            de la otra, y a su vez determinar la imagen de{" "}
            <InlineMath>{"A"}</InlineMath>.
            <br />
            <br />
            No es común trabajar con dos variables independientes, en vez de eso
            es preferible usar la relación entre ambas para hacer que{" "}
            <InlineMath>{"A"}</InlineMath> sólo dependa de una de las variables,
            ya sea <InlineMath>{"x"}</InlineMath> o{" "}
            <InlineMath>{"y"}</InlineMath>. Para ello, lo único que debemos
            hacer es despejar
            <InlineMath>{"x"}</InlineMath> o <InlineMath>{"y"}</InlineMath>,
            según cuál sea más fácil de despejar, de la relación{" "}
            <InlineMath>{"x+y=150"}</InlineMath>. En este caso despejaremos{" "}
            <InlineMath>{"y"}</InlineMath>:<BlockMath>{"x+y=150"}</BlockMath>
            <BlockMath>{"y=150-x"}</BlockMath>
            Este resultado expresa la variable <InlineMath>{"y"}</InlineMath> en
            función de <InlineMath>{"x"}</InlineMath>, lo que nos permite
            sustituirla en la función del área, de modo que esta última
            únicamente dependa de la variable <InlineMath>{"x"}</InlineMath>:
            <BlockMath>{"A(x, y)=xy"}</BlockMath>
            <BlockMath>{"A(x)=x(150-x)"}</BlockMath>
            <BlockMath>{"A(x)=150x-x^2"}</BlockMath>
            ¿Cuál es el dominio de esta nueva función? ¿Cuál es el rango?
            Analicemos un poco, recuerda que{" "}
            <InlineMath>{"x+y=150"}</InlineMath>, por lo que podemos ver dos
            casos extremos, el primero en el cuál{" "}
            <InlineMath>{"x=0"}</InlineMath>, y por lo tanto{" "}
            <InlineMath>{"y=150"}</InlineMath>, y el segundo en el cuál{" "}
            <InlineMath>{"x=150"}</InlineMath> y{" "}
            <InlineMath>{"y=0"}</InlineMath>. Entonces, gracias a la restricción
            hemos podido determinar que el dominio de{" "}
            <InlineMath>{"x"}</InlineMath> es:{" "}
            <InlineMath>{"0 \\leq x \\leq 150"}</InlineMath>.
            <br />
            <br />
            En cuanto al rango, aún cuando <InlineMath>
              {"A(0)=0"}
            </InlineMath> y <InlineMath>{"A(150)=0"}</InlineMath>, eso no
            significa que el rango es{" "}
            <InlineMath>{"0 \\leq A(x) \\leq 0"}</InlineMath>. Utilizando la
            vista gráfica 2 determina cuál es el rango de la función área y
            selecciona la respuesta:
          </p>
          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg2"
                value="a"
                checked={opcionSelecPreg2 === "a"}
                onChange={() => handleSelecPreg2("a")}
                label={<InlineMath>{"0 \\leq A(x) \\leq 150"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg2"
                value="b"
                checked={opcionSelecPreg2 === "b"}
                onChange={() => handleSelecPreg2("b")}
                label={<InlineMath>{"0 \\leq A(x) \\leq 5000"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg2"
                value="c"
                checked={opcionSelecPreg2 === "c"}
                onChange={() => handleSelecPreg2("c")}
                label={<InlineMath>{"0 \\leq A(x) \\leq 5625"}</InlineMath>}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 9.</b> Una empresa de lácteos desea elaborar sus cajas
            de leche de <InlineMath>{" 1000 \\,  \\text{cm}^3 "}</InlineMath>{" "}
            (1L). De acuerdo con el diseñador, la altura de la botella debe
            medir el doble de uno de sus lados de la base. Denotaremos la
            longitud (en cm) de uno de los lados de la base con{" "}
            <InlineMath>{"y"}</InlineMath>, el otro lado con{" "}
            <InlineMath>{"x"}</InlineMath>, y la altura con{" "}
            <InlineMath>{"2x"}</InlineMath>.
          </p>
          <ul>
            <li>
              ¿Cuál es la regla de correspondencia que calcula el área de la
              caja? Recuerda que para calcular el área de una caja debes sumar
              el área de sus 6 caras.
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA1"
                    name="opciones1"
                    value="a"
                    checked={respuestasAct9.preg1 === "a"}
                    onChange={(e) => handleRespChangeAct9(e, "preg1")}
                    label={<InlineMath>{"A(x,y) = 4x^2 + 6xy"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB1"
                    name="opciones1"
                    value="b"
                    checked={respuestasAct9.preg1 === "b"}
                    onChange={(e) => handleRespChangeAct9(e, "preg1")}
                    label={<InlineMath>{"A(x,y) = 4x^2 + 8xy"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC1"
                    name="opciones1"
                    value="c"
                    checked={respuestasAct9.preg1 === "c"}
                    onChange={(e) => handleRespChangeAct9(e, "preg1")}
                    label={<InlineMath>{"A(x,y) = 2x^2y + 6xy"}</InlineMath>}
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
              ¿Cuál es la relación entre las variables{" "}
              <InlineMath>x</InlineMath> y <InlineMath>y</InlineMath>?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA2"
                    name="opciones2"
                    value="a"
                    checked={respuestasAct9.preg2 === "a"}
                    onChange={(e) => handleRespChangeAct9(e, "preg2")}
                    label={<InlineMath>{"1000 = 2x^2y"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB2"
                    name="opciones2"
                    value="b"
                    checked={respuestasAct9.preg2 === "b"}
                    onChange={(e) => handleRespChangeAct9(e, "preg2")}
                    label={<InlineMath>{"2000 = 2x^2y"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC2"
                    name="opciones2"
                    value="c"
                    checked={respuestasAct9.preg2 === "c"}
                    onChange={(e) => handleRespChangeAct9(e, "preg2")}
                    label={<InlineMath>{"1000 = 2x^2"}</InlineMath>}
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
              ¿Cuál es la regla de correspondencia que calcula el área de la
              caja en función de <InlineMath>x</InlineMath> únicamente?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA3"
                    name="opciones3"
                    value="a"
                    checked={respuestasAct9.preg3 === "a"}
                    onChange={(e) => handleRespChangeAct9(e, "preg3")}
                    label={<InlineMath>{"A(x) = 4x^2 + 2000/x"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB3"
                    name="opciones3"
                    value="b"
                    checked={respuestasAct9.preg3 === "b"}
                    onChange={(e) => handleRespChangeAct9(e, "preg3")}
                    label={<InlineMath>{"A(x) = 4x^2 + 3000/x"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC3"
                    name="opciones3"
                    value="c"
                    checked={respuestasAct9.preg3 === "c"}
                    onChange={(e) => handleRespChangeAct9(e, "preg3")}
                    label={<InlineMath>{"A(x) = 4x^2 + 4000/x"}</InlineMath>}
                  />
                </Form.Group>
              </Form>
            </li>

            <li>
              ¿Cuál es la regla de correspondencia que calcula el área de la
              caja en función de y únicamente?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA4"
                    name="opciones4"
                    value="a"
                    checked={respuestasAct9.preg4 === "a"}
                    onChange={(e) => handleRespChangeAct9(e, "preg4")}
                    label={
                      <InlineMath>
                        {"A(y)=\\frac{2000}{y}+60\\sqrt{5} \\sqrt{y}"}
                      </InlineMath>
                    }
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB4"
                    name="opciones4"
                    value="b"
                    checked={respuestasAct9.preg4 === "b"}
                    onChange={(e) => handleRespChangeAct9(e, "preg4")}
                    label={
                      <InlineMath>
                        {"A(y)=\\frac{2000}{y}+60 \\sqrt{y}"}
                      </InlineMath>
                    }
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC4"
                    name="opciones4"
                    value="c"
                    checked={respuestasAct9.preg4 === "c"}
                    onChange={(e) => handleRespChangeAct9(e, "preg4")}
                    label={
                      <InlineMath>
                        {"A(y)=\\frac{2000}{\\sqrt{y}}+60 \\sqrt{5}\\sqrt{y}"}
                      </InlineMath>
                    }
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
              Considerando el área en función del lado{" "}
              <InlineMath>x</InlineMath> únicamente, si el diseñador dice que el
              dominio de <InlineMath>x</InlineMath> debe ser{" "}
              <InlineMath>{"5≤x≤20"}</InlineMath>. ¿Cuál es el rango de{" "}
              <InlineMath>A(x)</InlineMath>?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA5"
                    name="opciones5"
                    value="a"
                    checked={respuestasAct9.preg5 === "a"}
                    onChange={(e) => handleRespChangeAct9(e, "preg5")}
                    label={<InlineMath>{"624≤A(x)≤1750"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB5"
                    name="opciones5"
                    value="b"
                    checked={respuestasAct9.preg5 === "b"}
                    onChange={(e) => handleRespChangeAct9(e, "preg5")}
                    label={<InlineMath>{"700≤A(x)≤1100"}</InlineMath>}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC5"
                    name="opciones5"
                    value="c"
                    checked={respuestasAct9.preg5 === "c"}
                    onChange={(e) => handleRespChangeAct9(e, "preg5")}
                    label={<InlineMath>{"1100≤A(x)≤1750"}</InlineMath>}
                  />
                </Form.Group>
              </Form>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Como puedes ver, en muchos casos, cuando se tiene una función de dos
            o más variables, se busca reducir dicha función a una sola variable
            usando condiciones que relacionen a las variables independientes
            entre sí.
          </p>
        </Col>
      </Row>
      <h4>Tabla de una función</h4>
      <Row className="main-row">
        <p>
          ¿Recuerdas el caso del taxi que calcula el precio de sus viajes en
          función de los kilómetros recorridos? La regla de correspondencia es:
          <BlockMath>{"p(x)=30+8.5x"}</BlockMath>
          Con dominio:
          <BlockMath>{"0 ≤ x ≤ 30"}</BlockMath>
          ya que el taxi sólo podía recorrer un mínimo de cero km y un máximo de
          30 km. Y con imagen:
          <BlockMath>{"30 ≤ p(x) ≤ 630"}</BlockMath>
          ya que el precio del viaje es de mínimo <InlineMath>30</InlineMath> pesos (cuando el taxi
          recorre <InlineMath>0</InlineMath> km) y máximo <InlineMath>630</InlineMath> pesos (cuando el taxi recorre <InlineMath>30</InlineMath> km).
          <br />
          <br />
          Un día, el taxímetro se descompone y el taxista, para saber cuánto
          cobrar por cada viaje, decide hacer una tabla en la que pueda leer el
          precio para distintas distancias. El taxista comienza evaluando la
          función en kilómetros enteros, es decir en <InlineMath>x=0, 1, 2, 3, …, 30</InlineMath>. No
          obstante al percatarse que serán demasiados cálculos, decide evaluar
          la función de <InlineMath>{" 5 \\, km"}</InlineMath> en <InlineMath>{" 5 \\, km"}</InlineMath>, es decir, en <InlineMath>x=0, 5, 10, 15, 20, 25, 30</InlineMath>.
        </p>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 10:</b>. El taxista se encuentra evaluando la función{" "}
            <InlineMath>{"p(x)=30 + 8.5x"}</InlineMath> en{" "}
            <InlineMath>{"x=0, 5, 10, 15, 20, 25, 30"}</InlineMath>. Completa
            los cálculos que le faltan.
          </p>

          <BlockMath>{`f(0) = 30 + 8.5(0)=30+0=30`}</BlockMath>
          <BlockMath>{`f(5) = 30 + 8.5(5)=30+42.5=72.5`}</BlockMath>

          <InlineMath>{`f(10) = 30 + 8.5(`}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_1_1}
            onChange={(e) => handleEvalInputChange("eval_1_1", e.target.value)}
          />
          <InlineMath>{`) = `}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_1_2}
            onChange={(e) => handleEvalInputChange("eval_1_2", e.target.value)}
          />
          <br />
          <br />

          <InlineMath>{`f(15) = 30 + 8.5(`}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_2_1}
            onChange={(e) => handleEvalInputChange("eval_2_1", e.target.value)}
          />
          <InlineMath>{`) = `}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_2_2}
            onChange={(e) => handleEvalInputChange("eval_2_2", e.target.value)}
          />
          <br />
          <br />

          <InlineMath>{`f(20) = 30 + 8.5(`}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_3_1}
            onChange={(e) => handleEvalInputChange("eval_3_1", e.target.value)}
          />
          <InlineMath>{`) = `}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_3_2}
            onChange={(e) => handleEvalInputChange("eval_3_2", e.target.value)}
          />
          <br />
          <br />

          <InlineMath>{`f(25) = 30 + 8.5(`}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_4_1}
            onChange={(e) => handleEvalInputChange("eval_4_1", e.target.value)}
          />
          <InlineMath>{`) = `}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_4_2}
            onChange={(e) => handleEvalInputChange("eval_4_2", e.target.value)}
          />
          <br />
          <br />

          <InlineMath>{`f(30) = 30 + 8.5(`}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_5_1}
            onChange={(e) => handleEvalInputChange("eval_5_1", e.target.value)}
          />
          <InlineMath>{`) = `}</InlineMath>
          <input
            className="input-eval"
            type="text"
            value={valuesEval.eval_5_2}
            onChange={(e) => handleEvalInputChange("eval_5_2", e.target.value)}
          />
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Ahora, el taxista acomoda los datos en una tabla, en cuya primera
            columna coloca la variable independiente x, que denota la distancia
            recorrida y en la segunda coloca la variable dependiente p(x), que
            denota el precio de un viaje. <b>Contesta la Actividad 9</b>.
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
            tabla podemos leer que cuando la distancia x es igual a 10, el
            precio p(x) será 115. ¿En cuál de los siguientes casos la tabla no
            le sirve taxista?
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
            En realidad, la tabla sólo le sirve al taxista para distancias x
            múltiplos de 5, lo cual sucede con poca frecuencia. Un pasajero se
            sube al taxi y sólo recorre 2.5 km, ¿cómo debe hacer el taxista para
            saber cuánto debe de cobrar? Una opción es calcular p(2.5), pero si
            otro pasajero recorre 3.7 km, también deberá calcular p(3.7), y
            entonces la tabla no le habrá servido de mucho.
          </p>
        </Col>
      </Row>
      <Row className="row-nuevotema">
        <Col md={8}>
          <h4>Gráficos de funciones</h4>
          <p>
            Una vez que el taxista ha tabulado la función p(x)=30+8.5x con la
            cuál calcula el precio de sus viajes para ciertas distancias x (ver
            tabla), llegamos a la conclusión de que dicha tabla no le servía
            para la mayoría de sus viajes, ya que la distancia podía no ser un
            múltiplo de 5 precisamente.
            <br />
            <br />
            Una manera de aprovechar la tabla hecha por el taxista es graficar
            los datos en el plano cartesiano. Para ello, graficamos un punto por
            cada pareja (x, p(x)) siguiendo la convención para graficar puntos
            en el plano:
            <br />
            • ubicar la variable independiente en el eje x.
            <br />
            • ubicar la variable dependiente en el eje y. Debido a esto, a
            menudo se le suele llamar “y” a la variable dependiente, es decir
            y=p(x).
            <br />
          </p>
        </Col>
        <Col md={4} className="mi-col">
          <Container className="cont-table-act3">
            <div className="tittle-table">
              <h6>Tabla 5</h6>
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
                  <td>115</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>157.5</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>242.5</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>285</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <p>
            <br />
            Comencemos graficando el punto (0, p(0)), o sea el punto (0, 30),
            para lo cuál ubicamos 0 en el eje x y subimos hasta que y valga 30,
            tal como se aprecia en el GIF de la derecha (haz click sobre el GIF
            para expandirlo o contraerlo). Al punto obtenido lo hemos llamado A.
            <br />
            <br />
            Del mismo modo graficamos el punto (5, p(5)), o sea el punto B(5,
            72.5): ubicamos 5 en el eje x y subimos hasta y=72.5.{" "}
            <b>Contesta las actividades 10 y 11.</b>
          </p>
        </Col>
        <Col md={7}>
          <Image
            src={graficarPuntos}
            alt="GIF graficar"
            fluid
            className={`custom-gif ${fullscreen ? "fullscreen" : ""}`}
            onClick={toggleFullscreen}
          />
        </Col>
      </Row>
      <Row className="main-row">
        <Col className="actividad" sm={12} md={9} xl={6}>
          <p>
            <b>Actividad 12:</b> Tomando en cuenta tus resultados de la
            actividad 2, completa la siguiente información:
          </p>
          <ul>
            <li className="liAct-4">
              <InlineMath>{"0"}</InlineMath> y <InlineMath>{"f(0)"}</InlineMath>{" "}
              se pueden graficar como el punto{" "}
              <InlineMath>{"A=(0, 30)"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"5"}</InlineMath> y <InlineMath>{"f(5)"}</InlineMath>{" "}
              se pueden graficar como el punto{" "}
              <InlineMath>{"B(5, 72.5)"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"10"}</InlineMath> y{" "}
              <InlineMath>{"f(10)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"C("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.c_x}
                onChange={(e) => handlePointsInputChange("c_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.c_y}
                onChange={(e) => handlePointsInputChange("c_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"15"}</InlineMath> y{" "}
              <InlineMath>{"f(15)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"D("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.d_x}
                onChange={(e) => handlePointsInputChange("d_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.d_y}
                onChange={(e) => handlePointsInputChange("d_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"20"}</InlineMath> y{" "}
              <InlineMath>{"f(20)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"E("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.e_x}
                onChange={(e) => handlePointsInputChange("e_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.e_y}
                onChange={(e) => handlePointsInputChange("e_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"25"}</InlineMath> y{" "}
              <InlineMath>{"f(25)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"F("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.f_x}
                onChange={(e) => handlePointsInputChange("f_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.f_y}
                onChange={(e) => handlePointsInputChange("f_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"30"}</InlineMath> y{" "}
              <InlineMath>{"f(30)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"G("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.g_x}
                onChange={(e) => handlePointsInputChange("g_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.g_y}
                onChange={(e) => handlePointsInputChange("g_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            y en general:
            <br />
            <li>
              <InlineMath>{"x"}</InlineMath> y <InlineMath>{"f(x)"}</InlineMath>{" "}
              se puede graficar como el punto{" "}
              <InlineMath>{"P(x, y)"}</InlineMath>.
            </li>
          </ul>
        </Col>
        <Col className="actividad" sm={12} md={9} xl={5}>
          <p>
            <b>Actividad 13:</b> En la siguiente cuadrícula, arrastra los puntos
            amarillos a las coordenadas que les corresponden, según la actividad
            10.
            <br />
            <br />
            <Button>
              Segmento <InlineMath>{"AH"}</InlineMath>
            </Button>
            <Button>
              Gráfica de <InlineMath>{"f(x)=2x"}</InlineMath>
            </Button>
          </p>
          <GraficoArrastrePuntos />
        </Col>
      </Row>
      <Row className="main-row">
        <p>
          Hasta aquí lo que hemos obtenido son sólo puntos aislados que
          pertenecen a la gráfica de la función, mas no la gráfica completa.
          ¿Qué se forma si unimos los puntos que graficamos?
        </p>
        <Form /* className="prueba" */>
          <Form.Group>
            <Form.Check
              type="checkbox"
              id="opcionA"
              name="opcionesPreg4"
              value="a"
              checked={opcionSelecPreg4 === "a"}
              onChange={() => handleSelecPreg4("a")}
              label="Una recta"
            />
            <Form.Check
              type="checkbox"
              id="opcionB"
              name="opcionesPreg4"
              value="b"
              checked={opcionSelecPreg4 === "b"}
              onChange={() => handleSelecPreg4("b")}
              label="Una parábola"
            />

            <Form.Check
              type="checkbox"
              id="opcionC"
              name="opcionesPreg4"
              value="c"
              checked={opcionSelecPreg4 === "c"}
              onChange={() => handleSelecPreg4("c")}
              label="El segmento de recta AH"
            />
            <Form.Check
              type="checkbox"
              id="opcionD"
              name="opcionesPreg4"
              value="d"
              checked={opcionSelecPreg4 === "d"}
              onChange={() => handleSelecPreg4("d")}
              label="Una curva cúbica"
            />
          </Form.Group>
        </Form>
        <p>
          <br />
          Ciertamente, cuando unimos los puntos lo que se forma es el segmento
          de recta AH, que es sólo una parte de la gráfica de la función. Usa el
          siguiente botón para dibujar el segmento en la cuadrícula de la
          actividad 5.
          <br />
          <br />
          <Button>
            Graficar segmento <InlineMath>{"AH"}</InlineMath>
          </Button>
          <br />
          <br />
          De hecho, ni siquiera podemos dibujar la gráfica completa, sino
          solamente la parte que cabe en nuestra cuadrícula. Esto se debe a que
          la función <InlineMath>{"f(x)=2x"}</InlineMath> puede recibir
          cualquier número de la recta real, desde números tan negativos como{" "}
          <InlineMath>{"\\text{-10 000 000 000}"}</InlineMath>, números
          irracionales como <InlineMath>{"e"}</InlineMath> y{" "}
          <InlineMath>{"\\pi"}</InlineMath>, números racionales como{" "}
          <InlineMath>{"5/2"}</InlineMath> y{" "}
          <InlineMath>{"234/899"}</InlineMath>, y números positivos tan grandes
          como <InlineMath>{"\\text{999 999 999}"}</InlineMath>, ya que la
          función es capaz de devolver un valor para cualquiera de estos
          números.
          <br />
          <br />A la totalidad de valores que puede recibir una función se le
          llama <b>dominio de la función</b>, y por ahora basta con saber que el
          dominio de <InlineMath>{"f(x)=2x"}</InlineMath> es el conjunto de los
          números reales <InlineMath>{"(-\\infty, +\\infty)"}</InlineMath>.
          Similarmente, a la totalidad de valores que devuelve una función se le
          llama <b>rango</b> o <b>imagen</b>, que en el caso de{" "}
          <InlineMath>{"f(x)=2x"}</InlineMath> es igualmente el conjunto de los
          números reales. Esto se denota como:
          <br />
          <br />
          <BlockMath>{"\\text{Dom}(f): \\{ x \\in \\mathbb{R} \\}"}</BlockMath>
          <BlockMath>
            {"\\text{Im}(f): \\{ f(x) \\in \\mathbb{R} \\}"}
          </BlockMath>
          <br />
          Así como hemos graficado el punto (3, f(3))=(3, 6) también podríamos
          graficar los puntos (10, 000, f(10, 000))=(10 000, 20 000) o bien
          (-100, f(-100))=(-100, -200), y en general puntos cada vez más
          alejados del origen del plano cartesiano, si no fuera porque nuestra
          cuadrícula solo abarca puntos (x, y=f(x)) cuya coordenada x esté entre
          -4 y 4 (xe [-4, 4]) y cuya coordenada y esté entre -5 y 7 (y e [-5,
          7]). Esta limitación técnica obliga a dibujar únicamente la parte de
          la gráfica que cabe en la cuadrícula. Usa el siguiente botón para
          dibujar la gráfica de la función <InlineMath>{"f(x)=2x"}</InlineMath>.
          <br />
          <br />
          <Button>
            Graficar la función <InlineMath>{"f(x)=2x"}</InlineMath>
          </Button>
          <br />
          <br />
          Como pudiste observar, la gráfica de f(x)=2x es una línea reacta, por
          lo que se dice que es una función lineal. Otros ejemplos de funciones
          lineales son:
        </p>
        <ul>
          <li>f(x)=x</li>
          <li>f(x)=3x</li>
          <li>f(x)=3x+4</li>
          <li>f(x)=-3x+4</li>y en general:
          <li>f(x)=a1x+a0</li>
        </ul>
        <p>
          Donde a1 y a0 son constantes. Por ejemplo, en la función f(x)=x, a1 es
          el coeficiente de x, o sea a1=1, y a0 es el término independiente de
          x, o sea x0=0:
        </p>
        <ul>
          <li>f(x)=1x+0</li>
          <li>f(x)=x</li>
        </ul>
        <p>
          Observar que en las funciones lineales el exponente de x siempre es 1.
          <br />
          <br />
          <b>Actividad 6:</b>
          Dadas las siguienetes funciones lineales, determinar los valores de a0
          y a1:
        </p>
        <ul>
          <li>En la función f(x)=-x+3, a0= y a1= </li>
          <li>En la función f(x)=x-1, a0= y a1= </li>
          <li>En la función f(x)=100x, a0= y a1= </li>
          <li>En la función f(x)=2/3x-3, a0= y a1= </li>
          <li>En la función f(x)=-0.3x, a0= y a1= </li>
        </ul>
        <p>
          Sugerencia: utiliza un graficador como GeoGrebra para verificar que
          las graficas de las funciones de esta actividad son rectas.
        </p>
        <p>
          Imagina que pasaría si en vez de que la función duplicara el valor que
          ingresa, lo elevara al cuadrado. ¿Cuál de las siguientes expresiones
          es la correcta?
        </p>
        <ul>
          <li>f(x)=x^3</li>
          <li>f(x)=3x</li>
          <li>f(x)=x^2</li>
          <li>f(x)=x^4</li>
        </ul>
        Este tipo de funciones donde el exponente de x está elevado al cuadrado
        se llaman funciones cuadráticas, y su gráfica ya no es una recta sino
        una parábola.
      </Row>
      <Row>
        <Col>
          <h4>Dominio e imagen puntuales</h4>
          <h4>Dominio e imagen en intervalos</h4>
        </Col>
        <Col>{/* <VariacionFunciones /> */}</Col>
      </Row>
      <Row>
        <Fade in={open}>
          <Col md={6}>
            <p>
              En matemáticas se representan las funciones con letras, como{" "}
              <InlineMath>{"f"}</InlineMath>, <InlineMath>{"g"}</InlineMath>,{" "}
              <InlineMath>{"h"}</InlineMath>, etc. Del mismo modo, el número que
              ingresa a una función se denota generalmente con{" "}
              <InlineMath>{"x"}</InlineMath>, pero puede ser{" "}
              <InlineMath>{"a"}</InlineMath>, <InlineMath>{"t"}</InlineMath>,
              etc, y se acostumbra llamarla <b>variable independiente</b>.
              Finalmente, el número que devuelve la función se escribe como{" "}
              <InlineMath>{"f(x)"}</InlineMath>, llamado{" "}
              <b>variable dependiente</b>, ya que su valor depende del número
              que ingresaste a la función. Por ejemplo, para nuestro caso
              podríamos representar la función que duplica el número que recibe
              como:
            </p>

            <BlockMath>{"f(x)=2x"}</BlockMath>
            <p>
              Donde <InlineMath>{"f"}</InlineMath> es el nombre de esta función,{" "}
              <InlineMath>{"x"}</InlineMath> es el valor que recibe y{" "}
              <InlineMath>{"f(x)"}</InlineMath> es el valor que devuelve, que en
              nuestro contexto específico es <InlineMath>{"2x"}</InlineMath>{" "}
              porque devuelve el doble del número que ingresa. Concretamente, si{" "}
              <InlineMath>{"f"}</InlineMath> recibe el valor
              <InlineMath>{"-2"}</InlineMath>, es decir{" "}
              <InlineMath>{"x=-2"}</InlineMath>, el valor devuelto es{" "}
              <InlineMath>{"-4"}</InlineMath>, o sea
              <InlineMath>{"f(-2)= -4"}</InlineMath>:
              <BlockMath>{"f(-2) = 2(-2)"}</BlockMath>
              <BlockMath>{"f(-2) = -4"}</BlockMath>
              Si <InlineMath>{"f"}</InlineMath> recibe el valor{" "}
              <InlineMath>{"-1.5"}</InlineMath>, es decir{" "}
              <InlineMath>{"x=-1.5"}</InlineMath>, el valor devuelto es{" "}
              <InlineMath>{"-3"}</InlineMath>, o sea{" "}
              <InlineMath>{"f(-1.5)= -3"}</InlineMath>:
              <BlockMath>{"f(-1.5) = 2(-1.5)=-3"}</BlockMath>
            </p>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
};

export default Bloque1_1;
