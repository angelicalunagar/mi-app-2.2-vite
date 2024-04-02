import { useState } from "react";
import { 
  Row,
  Col,
  Form,
} from "react-bootstrap";

const Act14 = () => {
  const [respuestasAct14, setRespuestasAct14] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
    preg5: "",
  });

  const handleRespChangeAct14 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct14((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  const generarNumeroAleatorio = (min, max) => {
    return (min + Math.random() * (max - min)).toFixed(1);
  };

  const calcularPrecioViaje = (distancia) => {
    return (30 + 8.5 * distancia).toFixed(1);
  };

  const calcularDistanciaViaje = (distancia) => {
    return ((distancia - 30) / 8.5).toFixed(1);
  };

  /* const distanciaViaje1 = generarNumeroAleatorio(5, 15);
  const distanciaViaje1a = generarNumeroAleatorio(5, 15);
  const distanciaViaje1b = generarNumeroAleatorio(5, 15);

  const precioViaje2 = generarNumeroAleatorio(150, 300);
  const precioViaje2a = generarNumeroAleatorio(150, 300);
  const precioViaje2b = generarNumeroAleatorio(150, 300);

  const distanciaViaje3 = generarNumeroAleatorio(20, 30);
  const distanciaViaje3a = generarNumeroAleatorio(20, 30);
  const distanciaViaje3b = generarNumeroAleatorio(20, 30);

  const distanciaViaje4 = generarNumeroAleatorio(-10, 0);
  const distanciaViaje4a = generarNumeroAleatorio(-10, 0);
  const distanciaViaje4b = generarNumeroAleatorio(-10, 0);

  const distanciaViaje5 = generarNumeroAleatorio(30.1, 40);
  const distanciaViaje5a = generarNumeroAleatorio(30.1, 40);
  const distanciaViaje5b = generarNumeroAleatorio(30.1, 40); */

  const [distanciasPrecios, setDistanciasPrecios] = useState({
    distanciaViaje1: generarNumeroAleatorio(5, 15),
    distanciaViaje1a: generarNumeroAleatorio(5, 15),
    distanciaViaje1b: generarNumeroAleatorio(5, 15),
    precioViaje2: generarNumeroAleatorio(150, 300),
    precioViaje2a: generarNumeroAleatorio(150, 300),
    precioViaje2b: generarNumeroAleatorio(150, 300),
    distanciaViaje3: generarNumeroAleatorio(20, 30),
    distanciaViaje3a: generarNumeroAleatorio(20, 30),
    distanciaViaje3b: generarNumeroAleatorio(20, 30),
   /*  distanciaViaje4: generarNumeroAleatorio(-10, 0),
    distanciaViaje4a: generarNumeroAleatorio(-10, 0),
    distanciaViaje4b: generarNumeroAleatorio(-10, 0), */
    distanciaViaje5: generarNumeroAleatorio(30.1, 40),
    distanciaViaje5a: generarNumeroAleatorio(30.1, 40),
    distanciaViaje5b: generarNumeroAleatorio(30.1, 40),
  });

  const {
    distanciaViaje1,
    distanciaViaje1a,
    distanciaViaje1b,
    precioViaje2,
    precioViaje2a,
    precioViaje2b,
    distanciaViaje3,
    distanciaViaje3a,
    distanciaViaje3b,
    distanciaViaje4,
    distanciaViaje4a,
    distanciaViaje4b,
    distanciaViaje5,
    distanciaViaje5a,
    distanciaViaje5b,
  } = distanciasPrecios;

  return (
    <div>
      <Row>
        <Col className="actividad" /* sm={12} md={9} xl={6} */>
          <p>
            <b>Actividad 14:</b> Moviendo el punto M de la ventana gráfica X,
            contesta las siguientes preguntas sobre el caso del taxista.
            <br />
            <br />
            Recuerda que el segmento AG de la Actividad 13 representa a la
            función que describe el precio p(x) de un viaje en taxi en función
            de la distancia recorrida x:
            <br />
            <br />
            Regla de correspondencia: p(x)=30+8.5x
            <br />
            Dominio: 0 ≤ x ≤ 30
            <br />
            Rango: 30 ≤ p(x) ≤ 630
          </p>
          <ul>
            <li className="liAct-4">
              ¿Cuál es el precio de un viaje de {distanciaViaje1} km?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA1"
                    name="opciones1"
                    value="a"
                    checked={respuestasAct14.preg1 === "a"}
                    onChange={(e) => handleRespChangeAct14(e, "preg1")}
                    label={calcularPrecioViaje(distanciaViaje1)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB1"
                    name="opciones1"
                    value="b"
                    checked={respuestasAct14.preg1 === "b"}
                    onChange={(e) => handleRespChangeAct14(e, "preg1")}
                    label={calcularPrecioViaje(distanciaViaje1a)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC1"
                    name="opciones1"
                    value="c"
                    checked={respuestasAct14.preg1 === "c"}
                    onChange={(e) => handleRespChangeAct14(e, "preg1")}
                    label={calcularPrecioViaje(distanciaViaje1b)}
                  />
                </Form.Group>
              </Form>
            </li>
            <li className="liAct-4">
              Juan contrató el taxi y al término de su viaje pagó {precioViaje2}
              pesos. ¿Qué distancia recorrió el taxi?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA2"
                    name="opciones2"
                    value="a"
                    checked={respuestasAct14.preg2 === "a"}
                    onChange={(e) => handleRespChangeAct14(e, "preg2")}
                    label={calcularDistanciaViaje(precioViaje2a)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB2"
                    name="opciones2"
                    value="b"
                    checked={respuestasAct14.preg2 === "b"}
                    onChange={(e) => handleRespChangeAct14(e, "preg2")}
                    label={calcularDistanciaViaje(precioViaje2b)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC2"
                    name="opciones2"
                    value="c"
                    checked={respuestasAct14.preg2 === "c"}
                    onChange={(e) => handleRespChangeAct14(e, "preg2")}
                    label={calcularDistanciaViaje(precioViaje2)}
                  />
                </Form.Group>
              </Form>
            </li>
            <li>
              ¿Cuánto cobrará el taxista por un viaje de {distanciaViaje3} km?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA3"
                    name="opciones3"
                    value="a"
                    checked={respuestasAct14.preg3 === "a"}
                    onChange={(e) => handleRespChangeAct14(e, "preg3")}
                    label={calcularPrecioViaje(distanciaViaje3)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB3"
                    name="opciones3"
                    value="b"
                    checked={respuestasAct14.preg3 === "b"}
                    onChange={(e) => handleRespChangeAct14(e, "preg3")}
                    label={calcularPrecioViaje(distanciaViaje3a)}
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC3"
                    name="opciones3"
                    value="c"
                    checked={respuestasAct14.preg3 === "c"}
                    onChange={(e) => handleRespChangeAct14(e, "preg3")}
                    label={calcularPrecioViaje(distanciaViaje3b)}
                  />
                </Form.Group>
              </Form>
            </li>
           {/*  <li>
              ¿Cuánto cobrará el taxista por un viaje de {distanciaViaje4} km?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA4"
                    name="opciones4"
                    value="a"
                    checked={respuestasAct14.preg4 === "a"}
                    onChange={(e) => handleRespChangeAct14(e, "preg4")}
                    label='La distancia x está fuera del rango'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB4"
                    name="opciones4"
                    value="b"
                    checked={respuestasAct14.preg4 === "b"}
                    onChange={(e) => handleRespChangeAct14(e, "preg4")}
                    label='La distancia x está fuera del dominio'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC4"
                    name="opciones4"
                    value="c"
                    checked={respuestasAct14.preg4 === "c"}
                    onChange={(e) => handleRespChangeAct14(e, "preg4")}
                    label={calcularPrecioViaje(distanciaViaje4)}
                  />
                </Form.Group>
              </Form>
            </li> */}
            <li>
              ¿Cuánto cobrará el taxista por un viaje de {distanciaViaje5} km?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA5"
                    name="opciones5"
                    value="a"
                    checked={respuestasAct14.preg5 === "a"}
                    onChange={(e) => handleRespChangeAct14(e, "preg5")}
                    label='La distancia x está fuera del rango'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB5"
                    name="opciones5"
                    value="b"
                    checked={respuestasAct14.preg5 === "b"}
                    onChange={(e) => handleRespChangeAct14(e, "preg5")}
                    label='La distancia x está fuera del dominio'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionC5"
                    name="opciones5"
                    value="c"
                    checked={respuestasAct14.preg5 === "c"}
                    onChange={(e) => handleRespChangeAct14(e, "preg5")}
                    label={calcularPrecioViaje(distanciaViaje5)}
                  />
                </Form.Group>
              </Form>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Act14;
