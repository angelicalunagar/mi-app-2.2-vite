import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import machine1 from "../assets/machine1.png";
import machine2 from "../assets/machine2.png";
import puntoG from "../assets/puntoG.png";
import corral from "../assets/corral.png";
import Table from "react-bootstrap/Table";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";
import VariacionFunciones from "./VariacionFunciones";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "../styles/Bloque1_1.css";
import { Button, Fade, Form } from "react-bootstrap";

const Bloque1_1 = () => {
  const [open, setOpen] = useState(false);

  const [valuesTable, setValuesTable] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
  });

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
  const [opcionSelecPreg1, setOpcionSelecPreg1] = useState(null);
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
    dom1_1: "",
    dom1_2: "",
    im1_1: "",
    im1_2: "",
    elemDe1: "",
    dom2_1: "",
    dom2_2: "",
    im2_1: "",
    im2_2: "",
    elemDe2: "",
    dom3_1: "",
    dom3_2: "",
    im3_1: "",
    im3_2: "",
    dom4_1: "",
    dom4_2: "",
    im4_1: "",
    im4_2: "",
    elemDe4: "",
    dom5_1: "",
    dom5_2: "",
    im5_1: "",
    im5_2: "",
    elemDe5: "",
    dom6_1: "",
    dom6_2: "",
    im6_1: "",
    im6_2: "",
    elemDe6: "",
  });

  const handleInputAct7 = (key, value) => {
    setRespuestasAct7((prevValues) => ({
      ...prevValues,
      [key]: value,
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
  const handleSelecPreg1 = (opcion) => {
    setOpcionSelecPreg1(opcion);
  };

  const handleSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  useEffect(() => {
    console.log("valuesEval:", valuesEval);
    console.log("valuesTable:", valuesTable);
    console.log("valuesPoints", valuesPoints);
    console.log("Respuestas Act4", respuestasAct4);
    console.log("Respuestas Act5", respuestasAct5);
    console.log("Respuestas Act6", valuesTableAct6);
    console.log("Respuestas Act7", respuestasAct7);
  }, [
    valuesEval,
    valuesTable,
    valuesPoints,
    respuestasAct4,
    respuestasAct5,
    valuesTableAct6,
    respuestasAct7,
  ]);

  return (
    <Container>
      <Row className="main-row">
        <Col md={6}>
          <p>
            Una función es como una "máquina matemática" que toma un número como
            entrada, realiza alguna operación con ese número, y nos da otro
            número como resultado. Puedes pensar en ello como una especie de
            "regla" matemática.
            <br />
            <br />
            Por ejemplo, imagina una máquina que duplica cualquier número que le
            des. Si le das el número 3, la máquina te devuelve 6. Si le das el
            número 5, la máquina te devuelve 10. Esta máquina es una función
            simple : duplica cualquier número que le des.
          </p>
        </Col>
        <Col md={6} className="main-col">
          <img
            src={machine1}
            alt=""
            className="imagen-col contenedor-machine"
          />
          <img
            src={machine2}
            alt=""
            className="imagen-col contenedor-machine"
          />
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Ahora, imagina un automóvil de carreras que se mueve a 2km por cada
            minuto, es decir, su velocidad es 2km/min. Si han pasado 2 min
            recorrerá 4 km, si pasan 5 min recorrerá 10 km, y así sucesivamente.
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
            transcurrido. En este caso el tiempo es la <b><em>variable independiente</em></b>. 
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
        <Col md={5}>
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
            <br />
            <br />
            Hasta ahora, en las situaciones de la actividad 2, sólo hemos
            identificado cuál es la variable dependiente y cuál es la variable
            independiente, y hemos dicho cómo se relacionan cualitativamente.
            Por ejemplo, en el caso del heladero, sabemos que entre más helados
            vende, más gana. Con esta información, ¿puedes saber cuánto gana si
            vende 20 helados?
            <br />
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
          <br />
        </Col>
        <Col className="actividad" md={6}>
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
        <Col></Col>
      </Row>
      <Row>
        <Col>
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
            Esta última expresión es una <b>función matemática</b> porque
            relaciona 2 variables, a saber, la ganancia{" "}
            <InlineMath>{"g(x)"}</InlineMath> y el número de helados{" "}
            <InlineMath>{"x"}</InlineMath>, y nos dice que para calcular la
            ganancia hay que multiplicar el número de helados por cinco. La
            función <InlineMath>{"g(x)=5x"}</InlineMath> es como una máquina,
            que recibe un valor <InlineMath>{"x"}</InlineMath> y entrega otro
            valor <InlineMath>{"g(x)"}</InlineMath>.
          </p>
        </Col>
      </Row>
      
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 4:</b> Selecciona la función que describe cada
            situación.
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
                que el precio <InlineMath>{'p'}</InlineMath> de un viaje en Uber depende de la distancia
                recorrida <InlineMath>{'x'}</InlineMath>(en km) es:
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
      <Row>
        <Col>
          <p>
            Recuerda que al principio cuando relacionamos dos variables sólo
            decíamos frases como “si una variable aumenta, la otra también
            aumenta” o “si una variable aumenta, la otra disminuye”. Ahora ya
            podemos dar cuenta numérica de eso si elaboramos una tabla. Por
            ejemplo, en el caso del heladero, sabemos que la expresión g(x)=5x
            describe la ganancia en función del número de helados vendidos. Por
            lo tanto, podemos calcular g(x) para distintos valores de x.
            Sustituyendo x=0 en g(x)=5x: g(0)=5(0) g(0)=0 Sustituyendo x=1 en
            g(x)=5x: g(1)=5(1)=5 Sustituyendo x=2 en g(x)=5x: g(2)=5(2)=10 A lo
            que acabamos de hacer: asignar un valor a la variable x y realizar
            las operaciones que indica la función para calcular la variable
            dependiente, g(x) en este caso, se llama <b>evaluar la función</b>.
          </p>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Las funciones nos permiten calcular el valor de una variable cuando
            tenemos el valor de la otra. Siguiendo con el ejemplo del heladero,
            ahora que conocemos la función <InlineMath>{"g(x)=5x"}</InlineMath>,
            podemos responder a la pregunta ¿Cuánto gana si vende{" "}
            <InlineMath>{"20"}</InlineMath> helados? En esta pregunta,
            claramente conocemos a la variable independiente No. de helados, o
            sea <InlineMath>{"x=20"}</InlineMath>, y lo que nos están
            preguntando es el valor de la variable dependiente ganancia{" "}
            <InlineMath>{"g(x)"}</InlineMath>. Es decir, basta con sustituir{" "}
            <InlineMath>{"x"}</InlineMath> por <InlineMath>{"20"}</InlineMath>{" "}
            en la función para calcular la ganancia:
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
            <InlineMath>{"85"}</InlineMath> en la función y despejar{" "}
            <InlineMath>{"x"}</InlineMath> (número de helados):
            <BlockMath>{"g(x)=5x"}</BlockMath>
            <BlockMath>{"85 = 5x"}</BlockMath>
            <BlockMath>{"x=85/5"}</BlockMath>
            <BlockMath>{"x=17"}</BlockMath>
            Esto es, el heladero vendió 17 helados para obtener 85 pesos de ganancia. 
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
              Durante la quincena, el dinero de Cristina depende del número de
              días que pasan de acuerdo con la función d(n)=4000-250n. Observa
              que, si han transcurrido 0 días, Cristina tendrá 4000 pesos.
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
              Sustituyendo <InlineMath>{"x=0"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(0)=5(0)"}</BlockMath>
              <BlockMath>{"g(0)=0"}</BlockMath>
            </li>
            <li>
              Sustituyendo <InlineMath>{"x=1"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(1)=5(1)=5"}</BlockMath>
            </li>
            <li>
              Sustituyendo <InlineMath>{"x=2"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(2)=5(2)=10"}</BlockMath>
            </li>
          </ul>
          <p>
            Al proceso de asignar un valor a la variable{" "}
            <InlineMath>{"x"}</InlineMath> y realizar las operaciones que indica
            la función para calcular la variable dependiente,{" "}
            <InlineMath>{"g(x)"}</InlineMath> en este caso, se llama <b>evaluar la
            función.</b>
          </p>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <b>Actividad 6:</b> Evalúa la función{" "}
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
              Utiliza tus resultados de las evaluaciones de la función{" "}
              <InlineMath>{"g"}</InlineMath> para completar los espacios vacíos
              de la siguiente tabla.
            </p>
          </Container>
          <Container className="cont-table-act3">
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
          <ul className="justified-list">
            <li>
              A medida que <InlineMath>{"x"}</InlineMath> se incrementa,{" "}
              <InlineMath>{"g(x)"}</InlineMath> también se incrementa.
            </li>
            <li>
              Los valores que toma la variable <InlineMath>{"x"}</InlineMath>{" "}
              son <InlineMath>{"0, 1, 2, 3,"}</InlineMath> etc. Pero ¿cuál es el
              valor máximo que <InlineMath>{"x"}</InlineMath> puede tomar?
              Técnicamente, el heladero comenta que el número máximo de helados
              que caben en su carro es <InlineMath>{"200"}</InlineMath>. Por lo
              tanto, <InlineMath>{"x"}</InlineMath> puede tomar valores enteros
              desde <InlineMath>{"0"}</InlineMath> hasta{" "}
              <InlineMath>{"200"}</InlineMath>. ¿Por qué{" "}
              <InlineMath>{"x"}</InlineMath> no puede tomar valores como{" "}
              <InlineMath>{"2.3"}</InlineMath> ó{" "}
              <InlineMath>{"4/3"}</InlineMath>? Simplemente porque en el
              contexto del que estamos hablando, el heladero no puede vender <InlineMath>{"2.3"}</InlineMath> helados ó{" "}<InlineMath>{"4/3"}</InlineMath> de helado, sólo puede vender
              helados completos. A la totalidad de valores que puede
              adquirir la variable independiente de una función se le llama{" "}
              <b>dominio de la función</b>, por lo que el dominio de la función{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>, en nuestro contexto, es todo{" "}
              <InlineMath>{"x"}</InlineMath> elemento de{" "}
              <InlineMath>{"[0, 200]"}</InlineMath> tal que{" "}
              <InlineMath>{"x"}</InlineMath> pertenece al conjunto de los
              números naturales. En notación matemática esto es:
              <BlockMath>
                {
                  "\\text{Dom}(g): \\{ x \\in [0, 200] \\mid x \\in \\mathbb{N} \\}"
                }
              </BlockMath>
              Que se lee como: “el dominio de <InlineMath>{"g"}</InlineMath> (de
              la función g) es todo <InlineMath>{"x"}</InlineMath> en el
              intervalo <InlineMath>{"[0, 200]"}</InlineMath> tal que{" "}
              <InlineMath>{"x"}</InlineMath> es un número natural”.
            </li>
            <li>
              Observa que si nos hubieran dado la función{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath> sin el contexto del heladero,
              es decir, si <InlineMath>{"x"}</InlineMath> no representara el
              número de helados vendidos, los valores de{" "}
              <InlineMath>{"x"}</InlineMath> dejarían de limitarse a números
              enteros positivos, y podrían ser, además, números racionales como{" "}
              <InlineMath>{"4/3"}</InlineMath>, números decimales como{" "}
              <InlineMath>{"2.3"}</InlineMath> y números irracionales como{" "}
              <InlineMath>{"\\pi"}</InlineMath>, ya que siempre sería posible
              calcular g(x) al multiplicar cualquiera de estos valores por{" "}
              <InlineMath>{"5"}</InlineMath>. Y más aún, dejar de lado el
              contexto del heladero significa olvidar que su carro solo puede
              contener un máximo de <InlineMath>{"200"}</InlineMath> helados y
              un mínimo de cero, y entonces <InlineMath>{"x"}</InlineMath>{" "}
              podría ser tanto positivo como negativo y de cualquier magnitud,
              lo que afectaría el dominio y el rango de la función. A este
              dominio de la función, sin contexto alguno se le llama{" "}
              <b>dominio natural de la función</b>. En notación matemática esto
              es:
              <BlockMath>
                {"\\text{Dom}(g): \\{ x \\in (-\\infty, +\\infty)\\}"}
              </BlockMath>
              O equivalentemente:
              <BlockMath>
                {"\\text{Dom}(g): \\{ x \\in \\mathbb{R} \\}"}
              </BlockMath>
              Que se lee como: “el dominio de <InlineMath>{"g"}</InlineMath> es
              todo <InlineMath>{"x"}</InlineMath> elemento de los números
              reales”.
            </li>
            <li>
              Los valores que toma la variable <InlineMath>{"g(x)"}</InlineMath>{" "}
              dependen del valor que tome <InlineMath>{"x"}</InlineMath>, y en
              la tabla van desde <InlineMath>{"0"}</InlineMath> hasta{" "}
              <InlineMath>{"25"}</InlineMath> porque hemos decidido tabular
              valores de <InlineMath>{"x"}</InlineMath> de{" "}
              <InlineMath>{"0"}</InlineMath> hasta{" "}
              <InlineMath>{"5"}</InlineMath>, pero ¿cuál es el máximo valor que
              puede tomar <InlineMath>{"x"}</InlineMath>?. Pues si tomamos en
              cuenta el contexto, <InlineMath>{"x"}</InlineMath> puede valer
              hasta
              <InlineMath>{"200"}</InlineMath>, y por lo tanto el valor máximo
              de <InlineMath>{"g(x)"}</InlineMath> es:
              <BlockMath>{"g(200)=5(200)=1000"}</BlockMath>
              Lo que quiere decir que la ganancia{" "}
              <InlineMath>{"g(x)"}</InlineMath> va desde{" "}
              <InlineMath>{"0"}</InlineMath> (cuando{" "}
              <InlineMath>{"x=0"}</InlineMath>) hasta{" "}
              <InlineMath>{"1000"}</InlineMath> (cuando{" "}
              <InlineMath>{"x=200"}</InlineMath>). A la totalidad de valores que
              puede adquirir la variable dependiente de una función se le llama{" "}
              <b>rango</b> o <b>imagen de la función</b>, por lo que la imagen
              de la función <InlineMath>{"g(x)=5x"}</InlineMath>, en nuestro
              contexto, es todo <InlineMath>{"g(x)"}</InlineMath> elemento de{" "}
              {""}
              <InlineMath>{"[0, 1000]"}</InlineMath> tal que{" "}
              <InlineMath>{"g(x)"}</InlineMath> pertenece al conjunto de los
              números naturales, pues en ningún caso se obtendrían ganancias
              decimales, racionales o irracionales. En notación matemática esto
              es:
              <BlockMath>
                {
                  "\\text{Im}(g): \\{ g(x) \\in [0, 1000] \\mid g(x) \\in \\mathbb{N}\\}"
                }
              </BlockMath>
              Que se lee como: “la imagen de <InlineMath>{"g"}</InlineMath> es
              todo <InlineMath>{"g(x)"}</InlineMath> en el intervalo{" "}
              <InlineMath>{"[0, 1000]"}</InlineMath> tal que{" "}
              <InlineMath>{"g(x)"}</InlineMath> es un número natural.
            </li>
            <li>
              Sin el contexto del heladero, dijimos que{" "}
              <InlineMath>{"x"}</InlineMath> va desde{" "}
              <InlineMath>{"0"}</InlineMath> hasta infinito, además de que{" "}
              <InlineMath>{"x"}</InlineMath> puede ser cualquier número real;
              como <InlineMath>{"g(x)"}</InlineMath>
              depende de <InlineMath>{"x"}</InlineMath>, entonces{" "}
              <InlineMath>{"g(x)"}</InlineMath> va desde{" "}
              <InlineMath>{"0"}</InlineMath> (cuando{" "}
              <InlineMath>{"x=0"}</InlineMath>) hasta infinito ya que:
              <BlockMath>{"g(\\infty)=5(\\infty)=\\infty"}</BlockMath>A esta
              imagen de la función se le llama{" "}
              <b>imagen natural de la función</b>. En notación matemática esto
              se escribe como:
              <BlockMath>
                {
                  "\\text{Im}(g): \\{ g(x) \\in [0, \\infty) \\mid g(x) \\in \\mathbb{R}\\}"
                }
              </BlockMath>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 7:</b> Determina el dominio e imagen de las siguientes
            funciones.{" "}
          </p>
          <ul>
            <li>
              Durante la quincena, la cantidad de dinero de Cristina depende del
              número de días que pasan de acuerdo con la función d(n)=4000-250n.
              Determina el dominio e imagen, de acuerdo al contexto.
              <ul>
                <li>
                  <InlineMath>{"\\text{Dom}(d): \\{ n \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom1_1}
                    onChange={(e) => handleInputAct7("dom1_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom1_2}
                    onChange={(e) => handleInputAct7("dom1_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid n \\in \\mathbb{N}"}</InlineMath>
                  <br />
                </li>
                <li>
                  <InlineMath>{"\\text{Im}(d): \\{ d(n) \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im1_1}
                    onChange={(e) => handleInputAct7("im1_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im1_2}
                    onChange={(e) => handleInputAct7("im1_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid d(n) \\in   "}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.elemDe1}
                    onChange={(e) => handleInputAct7("elemDe1", e.target.value)}
                  />
                </li>
              </ul>
            </li>
            <li>
              Se tiene la función d la cual está dada por d(n)=4000-250n.
              Determina el dominio e imagen naturales.
              <ul>
                <li>
                  <InlineMath>{"\\text{Dom}(d): \\{ n \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom2_1}
                    onChange={(e) => handleInputAct7("dom2_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom2_2}
                    onChange={(e) => handleInputAct7("dom2_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid n \\in \\mathbb{R}"}</InlineMath>
                </li>
                <li>
                  <InlineMath>{"\\text{Im}(d): \\{ d(n) \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im2_1}
                    onChange={(e) => handleInputAct7("im2_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im2_2}
                    onChange={(e) => handleInputAct7("im2_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid d(n) \\in   "}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.elemDe2}
                    onChange={(e) => handleInputAct7("elemDe2", e.target.value)}
                  />
                </li>
              </ul>
              <br />
              <BlockMath>
                {"\\text{Dom}(d): \\{ n \\in (-\\infty, +\\infty)\\}"}
              </BlockMath>
              <BlockMath>
                {"\\text{Im}(d): \\{ d(n) \\in (-\\infty, +\\infty)\\}"}
              </BlockMath>
            </li>
            <li>
              Un Uber calcula el precio de sus viajes en función de la distancia
              recorrida de acuerdo con la expresión p(x)=30+20x. Determina el
              dominio e imagen sabiendo que el taxi no hace viajes más largos
              que 30km.
              <ul>
                <li>
                  <InlineMath>{"\\text{Dom}(p): \\{ x \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom3_1}
                    onChange={(e) => handleInputAct7("dom3_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom3_2}
                    onChange={(e) => handleInputAct7("dom3_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid x \\in \\mathbb{R}"}</InlineMath>
                </li>
                <li>
                  <InlineMath>{"\\text{Im}(p): \\{ p(x) \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im3_1}
                    onChange={(e) => handleInputAct7("im3_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im3_2}
                    onChange={(e) => handleInputAct7("im3_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid p(x) \\in \\mathbb{R}"}</InlineMath>
                  <BlockMath>{"Dom(p)= { x e [0, 30] | x e R }"}</BlockMath>
                  <BlockMath>{" p(x) e [30, 630] | p(x) e R"}</BlockMath>
                </li>
              </ul>
              <br />
            </li>
            <li>
              Se tiene la función p, cuya regla de correspondencia es
              p(x)=30+20x. Determina el dominio e imagen naturales.
              <br />
              <ul>
                <li>
                  <InlineMath>{"\\text{Dom}(p): \\{ x \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom4_1}
                    onChange={(e) => handleInputAct7("dom4_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom4_2}
                    onChange={(e) => handleInputAct7("dom4_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid x \\in "}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.elemDe4}
                    onChange={(e) => handleInputAct7("elemDe4", e.target.value)}
                  />
                </li>
                <li>
                  <InlineMath>{"\\text{Im}(p): \\{ p(x) \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im4_1}
                    onChange={(e) => handleInputAct7("im4_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im4_2}
                    onChange={(e) => handleInputAct7("im4_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid p(x) \\in \\mathbb{R}"}</InlineMath>
                </li>
              </ul>
              <br />
              <BlockMath>{"Dom(p)= { x e [-inf, inf] | x e R }"}</BlockMath>
              <BlockMath>
                {"Im(p)= { p(x) e [-inf, inf] | p(x) e R }"}
              </BlockMath>
            </li>
            <li>
              La distancia recorrida (en km) de un automóvil de carreras es
              función del tiempo transcurrido (en min) de acuerdo con la
              expresión d(t)=2t. Determina el dominio e imagen sabiendo que el
              motor solo soporta estar en funcionamiento 30 min.
              <br />
              <ul>
                <li>
                  <InlineMath>{"\\text{Dom}(d): \\{ t \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom5_1}
                    onChange={(e) => handleInputAct7("dom5_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom5_2}
                    onChange={(e) => handleInputAct7("dom5_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid t \\in "}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.elemDe5}
                    onChange={(e) => handleInputAct7("elemDe5", e.target.value)}
                  />
                </li>
                <li>
                  <InlineMath>{"\\text{Im}(d): \\{ d(t) \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im5_1}
                    onChange={(e) => handleInputAct7("im5_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im5_2}
                    onChange={(e) => handleInputAct7("im5_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid d(t) \\in \\mathbb{R}"}</InlineMath>
                </li>
              </ul>
              <br />
              <BlockMath>{"Dom(d)= {t e [0, 30] | t e R}"}</BlockMath>
              <BlockMath>{"Im(d)= {d(t) e [0, 60] | d(t) e R}"}</BlockMath>
            </li>
            <li>
              La función d está dada por la expresión d(t)=2t. Determina el
              dominio e imagen naturales.
              <br />
              <ul>
                <li>
                  <InlineMath>{"\\text{Dom}(d): \\{ t \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom6_1}
                    onChange={(e) => handleInputAct7("dom6_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.dom6_2}
                    onChange={(e) => handleInputAct7("dom6_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid t \\in "}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.elemDe6}
                    onChange={(e) => handleInputAct7("elemDe6", e.target.value)}
                  />
                </li>
                <li>
                  <InlineMath>{"\\text{Im}(d): \\{ d(t) \\in ["}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im6_1}
                    onChange={(e) => handleInputAct7("im6_1", e.target.value)}
                  />
                  <InlineMath>{","}</InlineMath>
                  <input
                    className="input-eval"
                    type="text"
                    value={respuestasAct7.im6_2}
                    onChange={(e) => handleInputAct7("im6_2", e.target.value)}
                  />
                  <InlineMath>{"] \\mid d(t) \\in \\mathbb{R}"}</InlineMath>
                </li>
              </ul>
              <br />
              <BlockMath>{"Dom(d)= {t e [-inf, inf] | t e R}"}</BlockMath>
              <BlockMath>{"Im(d)= {d(t) e [-inf, inf] | d(t) e R}"}</BlockMath>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Como hemos visto, en matemáticas representamos las funciones con
            letras como <InlineMath>{"g"}</InlineMath>,{" "}
            <InlineMath>{"d"}</InlineMath> y <InlineMath>{"p"}</InlineMath>, de
            acuerdo al contexto, sin embargo, si no hay contexto, se suele usar{" "}
            <InlineMath>{"f"}</InlineMath> para representar una función. Por su
            parte, la variable dependiente se denota con letras como{" "}
            <InlineMath>{"n"}</InlineMath> y <InlineMath>{"t"}</InlineMath>,
            dependiendo del contexto, pero si no hay contexto, se suele usar{" "}
            <InlineMath>{"x"}</InlineMath>. En consecuencia, la variable
            dependiente puede ser del estilo <InlineMath>{"g(x)"}</InlineMath>,{" "}
            <InlineMath>{"d(n)"}</InlineMath>,<InlineMath>{"p(x)"}</InlineMath>{" "}
            etc. pero sin contexto, debido a que generalmente se usa f para
            denotar una función y <InlineMath>{"x"}</InlineMath>para denotar a
            la variable independiente, la variable dependiente suele ser{" "}
            <InlineMath>{"f(x)"}</InlineMath>.
            <br />
            <br />
            Hasta ahora, todas las funciones que hemos visto han sido funciones
            que relacionan una variable dependiente con una única variable
            independiente. A estas funciones se les llama funciones de una
            variable, por ejemplo: En la función{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath>, la única variable
            independiente es <InlineMath>{"x"}</InlineMath>. En la función{" "}
            <InlineMath>{"d(t)=2t"}</InlineMath>, la única variable
            independiente es <InlineMath>{"t"}</InlineMath>.
            <br />
            <br />
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <img
            src={corral}
            alt="corral"
            style={{ width: "100%" }}
            className="border"
          />
        </Col>
        <Col md={8}>
          <p>
            No obstante, existen situaciones en las cuáles puede haber <InlineMath>{"2"}</InlineMath> variables independientes
            y una variable independiente. Un ejemplo
            de función de dos variables es el siguiente:
            <br />
            <br />
            Un granjero hará un corral rectangular para las gallinas como el que
            se muestra en la imagen de la izquierda y quiere calcular el área de
            dicho corral.
          </p>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            La función que calcula el área es entonces <InlineMath>{"A(x, y)=xy"}</InlineMath> Ya que el área
            de un rectángulo depende de la longitud de sus lados y se calcula
            multiplicando su largo por ancho. Recuerda que la notación <InlineMath>{"A(x, y)"}</InlineMath>
            sólo indica que el área depende de los valores <InlineMath>{"x"}</InlineMath> y <InlineMath>{"y"}</InlineMath>. En este caso
            tanto <InlineMath>{"x"}</InlineMath> como <InlineMath>{"y"}</InlineMath> podrían valer cualquier real positivo, a menos que el
            granjero indique alguna condición que relacione a las variables
            independientes <InlineMath>{"x"}</InlineMath> y <InlineMath>{"y"}</InlineMath>. Por ejemplo, si el granjero menciona que para
            construir el corral únicamente cuenta con <InlineMath>{"300m"}</InlineMath> de cerca, esto nos
            ayudará a hacer que la función dependa sólo de una variable, ya sea
            <InlineMath>{"x"}</InlineMath> o <InlineMath>{"y"}</InlineMath>. Observa que, si el perímetro de la cerca es de <InlineMath>{"300m"}</InlineMath>, esto
            significa que:
            <br />
            <BlockMath>{"2x+2y=300"}</BlockMath>
             Y de aquí podemos despejar <InlineMath>{"x"}</InlineMath> o <InlineMath>{"y"}</InlineMath>, según cuál sea más fácil
            de despejar. En este caso da lo mismo despejar <InlineMath>{"x"}</InlineMath> o despejar <InlineMath>{"y"}</InlineMath>, por
            lo que despejaremos <InlineMath>{"y"}</InlineMath>:
            <BlockMath>{"2y=300-2x"}</BlockMath>
            <BlockMath>{"y=(300-2x)/2"}</BlockMath>
            Este resultado pone a la variable <InlineMath>{"y"}</InlineMath> en función de <InlineMath>{"x"}</InlineMath>, y lo podemos sustituir en la función del área:
            <BlockMath>{"A(x, y)=xy"}</BlockMath>
            <BlockMath>{"A(x)=x((300-2x)/2)"}</BlockMath>
            <BlockMath>{"A(x)=150x-x^2"}</BlockMath>
            
            Obteniendo al área en función únicamente de <InlineMath>{"x"}</InlineMath>. En muchos casos, cuando se tiene una
            función de dos variables, se busca reducir dicha función a una sola
            variable usando alguna condición que se mencione en el problema. De
            igual manera, es útil mencionar que existen funciones de <InlineMath>{"3"}</InlineMath> o más
            variables, aunque no serán objeto de estudio en este curso.
          </p>
        </Col>
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

      <Row className="main-row">
        <p>
          Evaluar una función consiste en asignar un valor a la variable
          independiente <InlineMath>{"x"}</InlineMath>, realizar las operaciones
          que la función indica y devolver el valor de la variable dependiente{" "}
          <InlineMath>{"f(x)"}</InlineMath>.
        </p>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 2:</b> Evalúa nuestra función{" "}
            <InlineMath>{"f(x)= 2x"}</InlineMath> en{" "}
            <InlineMath>{"x=-1, 0, 1, 2, 2.6"}</InlineMath>:
            <br />
          </p>

          <InlineMath>{`f(-1) = 2(`}</InlineMath>
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

          <InlineMath>{`f(0) = 2(`}</InlineMath>
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

          <InlineMath>{`f(1) = 2(`}</InlineMath>
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

          <InlineMath>{`f(2) = 2(`}</InlineMath>
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

          <InlineMath>{`f(2.6) = 2(`}</InlineMath>
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
        <p>
          Lo que acabas de hacer es volver a calcular los valores de la segunda
          columna de la tabla, sólo que usando la notación de función.
        </p>
      </Row>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 3:</b> Ahora que ya sabes qué representan{" "}
            <InlineMath>{"f"}</InlineMath>, <InlineMath>{"x"}</InlineMath> y{" "}
            <InlineMath>{"f(x)"}</InlineMath>, reemplaza los encabezados de la
            tabla seleccionando el encabezado adecuado.
            <br />
            <br />
          </p>
          <Container className="cont-table-act3">
            <Table striped bordered hover id="table-act3">
              <thead>
                <tr>
                  <th>
                    <Form.Select
                      style={{ backgroundColor: "#ffecd1" }}
                      value={selectedHeaders.header1}
                      onChange={(e) =>
                        handleHeaderChange("header1", e.target.value)
                      }
                    >
                      <option value="Número que ingresa a la función">
                        Número que ingresa a la función
                      </option>
                      <option value="f">f</option>
                      <option value="x">x</option>
                      <option value="f(x)">f(x)</option>
                    </Form.Select>
                  </th>
                  <th>
                    <Form.Select
                      className="custom-select"
                      style={{ backgroundColor: "#ffecd1" }}
                      value={selectedHeaders.header2}
                      onChange={(e) =>
                        handleHeaderChange("header2", e.target.value)
                      }
                    >
                      <option value="Número que devuelve la función">
                        Número que devuelve la función
                      </option>
                      <option value="f">f</option>
                      <option value="x">x</option>
                      <option value="f(x)">f(x)</option>
                    </Form.Select>
                  </th>
                  {/* <th>Parejas (x, y)</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-2</td>
                  <td>-4</td>
                  {/* <td>A(, )</td> */}
                </tr>
                <tr>
                  <td>-1.5</td>
                  <td>-3</td>
                </tr>
                <tr>
                  <td>-1</td>
                  <td>-2</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>2.6</td>
                  <td>5.2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>6</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
      <Row className="row-nuevotema">
        <Col md={8}>
          <h4>Gráficos de funciones</h4>
          <p>
            <br />
            Cuando graficamos funciones, mostramos en el plano cartesiano cómo
            los valores <InlineMath>{"x"}</InlineMath> que recibe la función se
            relacionan con los valores <InlineMath>{"f(x)"}</InlineMath> que
            devuelve. Lo que hacemos es graficar un punto por cada pareja (
            <InlineMath>{"x, f(x)"}</InlineMath>) ubicando el valor{" "}
            <InlineMath>{"x"}</InlineMath> en el eje{" "}
            <InlineMath>{"x"}</InlineMath> y el valor{" "}
            <InlineMath>{"f(x)"}</InlineMath> en el eje{" "}
            <InlineMath>{"y"}</InlineMath> (es decir,{" "}
            <InlineMath>{"y=f(x)"}</InlineMath>) para obtener puntos con
            coordenadas <InlineMath>{"(x, y)"}</InlineMath>. Por ejemplo, para
            nuestra función
            <InlineMath>{"f(x)=2x"}</InlineMath> el punto (
            <InlineMath>{"2.6, f(2.6)"}</InlineMath>) es en realidad el punto{" "}
            <InlineMath>{"(2.6, 5.2)"}</InlineMath>, y para graficar este punto
            debemos ubicar la coordenada <InlineMath>{"2.6"}</InlineMath> en el
            eje <InlineMath>{"x"}</InlineMath> y luego buscar la coordenada{" "}
            <InlineMath>{"5.2"}</InlineMath> en el eje{" "}
            <InlineMath>{"y"}</InlineMath>, como se aprecia en la imagen de la
            derecha. Al punto obtenido lo hemos llamado{" "}
            <InlineMath>{"G"}</InlineMath>.
          </p>
        </Col>

        <Col md={4} className="mi-col">
          <img
            src={puntoG}
            alt="Punto G"
            style={{ height: "80%" }}
            className="border"
          />
        </Col>
      </Row>
      <Row className="main-row">
        <Col className="actividad" sm={12} md={9} xl={6}>
          <p>
            <b>Actividad 4:</b> Tomando en cuenta tus resultados de la actividad
            2, completa la siguiente información:
          </p>
          <ul>
            <li className="liAct-4">
              <InlineMath>{"-2"}</InlineMath> y{" "}
              <InlineMath>{"f(-2)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"A("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.a_x}
                onChange={(e) => handlePointsInputChange("a_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.a_y}
                onChange={(e) => handlePointsInputChange("a_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"-1.5"}</InlineMath> y{" "}
              <InlineMath>{"f(-1.5)"}</InlineMath> se pueden graficar como el
              punto <InlineMath>{"B("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.b_x}
                onChange={(e) => handlePointsInputChange("b_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.b_y}
                onChange={(e) => handlePointsInputChange("b_y", e.target.value)}
              />
              <InlineMath>{")"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"-1"}</InlineMath> y{" "}
              <InlineMath>{"f(-1)"}</InlineMath> se pueden graficar como el
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
              <InlineMath>{"0"}</InlineMath> y <InlineMath>{"f(0)"}</InlineMath>{" "}
              se pueden graficar como el punto <InlineMath>{"D("}</InlineMath>
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
              <InlineMath>{"1"}</InlineMath> y <InlineMath>{"f(1)"}</InlineMath>{" "}
              se pueden graficar como el punto <InlineMath>{"E("}</InlineMath>
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
              <InlineMath>{"2"}</InlineMath> y <InlineMath>{"f(2)"}</InlineMath>{" "}
              se pueden graficar como el punto <InlineMath>{"F("}</InlineMath>
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
              <InlineMath>{"2.6"}</InlineMath> y{" "}
              <InlineMath>{"f(2.6)"}</InlineMath> se pueden graficar como el
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
            <li className="liAct-4">
              <InlineMath>{"3"}</InlineMath> y <InlineMath>{"f(3)"}</InlineMath>{" "}
              se pueden graficar como el punto <InlineMath>{"H("}</InlineMath>
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.h_x}
                onChange={(e) => handlePointsInputChange("h_x", e.target.value)}
              />
              ,
              <input
                className="input-coord"
                type="text"
                value={valuesPoints.h_y}
                onChange={(e) => handlePointsInputChange("h_y", e.target.value)}
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
            <b>Actividad 5:</b> En la gráfica de la derecha, arrastra los puntos
            amarillos a las coordenadas que les corresponden, según la actividad
            4.
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
              name="opciones"
              value="a"
              checked={opcionSeleccionada === "a"}
              onChange={() => handleSeleccion("a")}
              label="Una recta"
            />
            <Form.Check
              type="checkbox"
              id="opcionB"
              name="opciones"
              value="b"
              checked={opcionSeleccionada === "b"}
              onChange={() => handleSeleccion("b")}
              label="Una parábola"
            />

            <Form.Check
              type="checkbox"
              id="opcionC"
              name="opciones"
              value="c"
              checked={opcionSeleccionada === "c"}
              onChange={() => handleSeleccion("c")}
              label="El segmento de recta AH"
            />
            <Form.Check
              type="checkbox"
              id="opcionD"
              name="opciones"
              value="d"
              checked={opcionSeleccionada === "d"}
              onChange={() => handleSeleccion("d")}
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
        <Col className="border">
          <VariacionFunciones />
        </Col>
      </Row>
      <p>
        <br />
        <br />
        <br />
      </p>
    </Container>
  );
};

export default Bloque1_1;
