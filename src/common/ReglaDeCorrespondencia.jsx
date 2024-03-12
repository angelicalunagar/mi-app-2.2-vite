import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";


const ReglaDeCorrespondencia = () => {
  const [opcionSelecPreg1, setOpcionSelecPreg1] = useState(null);
  const handleSelecPreg1 = (opcion) => {
    setOpcionSelecPreg1(opcion);
  };

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
  return (
    <Container>
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

    </Container>
  )
}

export default ReglaDeCorrespondencia