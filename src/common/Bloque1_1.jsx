import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Table from "react-bootstrap/Table";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";
import Rectangulo from "./Rectangulo";
import RectanguloArea from "./RectanguloArea";

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

  const [opcionSelecPreg2, setOpcionSelecPreg2] = useState(null);
  const handleSelecPreg2 = (opcion) => {
    setOpcionSelecPreg2(opcion);
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

 

  const [opcionSelecPreg4, setOpcionSelecPreg4] = useState(null);
  const handleSelecPreg4 = (opcion) => {
    setOpcionSelecPreg4(opcion);
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
    
    console.log("valuesTable:", valuesTable);
    console.log("valuesPoints", valuesPoints);
    console.log("Respuestas Act4", respuestasAct4);
    console.log("Respuestas Act5", respuestasAct5);
    console.log("Respuestas Act6", valuesTableAct6);
    console.log("Respuestas Act7", respuestasAct7);
    console.log("Respuestas Act9", respuestasAct9);
    console.log("Respuestas Preg1", opcionSelecPreg1);
    console.log("Respuestas Preg2", opcionSelecPreg2);
    console.log("Respuestas Preg4", opcionSelecPreg4);
  }, [
   
    valuesTable,
    valuesPoints,
    respuestasAct4,
    respuestasAct5,
    valuesTableAct6,
    respuestasAct7,
    respuestasAct9,
    opcionSelecPreg1,
    opcionSelecPreg2,
 
    opcionSelecPreg4,
  ]);

  return (
    <Container>
   
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
