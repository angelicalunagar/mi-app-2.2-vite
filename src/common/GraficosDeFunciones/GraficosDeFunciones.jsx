//GraficosDeFunciones.jsx
import { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Image,
} from "react-bootstrap";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import graficarPuntos from "../../assets/graficarPuntos.gif";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { SegmentContextProvider } from "../../contexts/SegmentContext";
import { FuncLinealContextProvider } from "../../contexts/FuncLinealContext";

/* import { RectaAGContextProvider } from "../contexts/RectaAGContext"; */

import BoardX from "../BoardX";
import BoardXX from "../BoardXX";
/* import FuncionLineal from "./FuncionLineal"; */
import FuncionLineal2 from "./FuncionLineal2";
import GraficoArrastrePuntosX from "../GraficoArrastrePuntosX";
import GraficoArrastrePuntosFR from "./GraficoArrastrePuntosFR";
import GraficoArrastrePuntosFRaiz from "./GraficoArrastrePuntosFRaiz";
import GraficaF from "./GraficaF";
import GraficoArrastrePuntosFL from "./GraficoArrastrePuntosFL";
import { GraficaFContextProvider } from "../../contexts/GraficaFContext";
import SegmentAGX from "../SegmentAGX";
import PuntoMovibleMX from "../PuntoMovibleMX";
import CuestionarioFR from "./CuestionarioFR";
import Act12 from "./Act12";
import Act14 from "./Act14";
import Act15 from "./Act15";
import Act16 from "./Act16";
import Act16Aleatorio from "./Act16Aleatorio";
import PuntoMovibleF from "./PuntoMovibleF";
import TextoFuncion from "./TextoFuncion";


/* import RectaAG from "./RectaAG"; */

const GraficosDeFunciones = () => {
  const [fullscreen, setFullscreen] = useState(false);
  /*   const {intercept, slope } = useContext(FuncLinealContext); */

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  const [opcionSelecPreg4, setOpcionSelecPreg4] = useState(null);
  const handleSelecPreg4 = (opcion) => {
    setOpcionSelecPreg4(opcion);
  };

  const [opcionSelecPreg6, setOpcionSelecPreg6] = useState(null);
  const handleSelecPreg6 = (opcion) => {
    setOpcionSelecPreg6(opcion);
  };

  const [opcionSelecPreg7, setOpcionSelecPreg7] = useState(null);
  const handleSelecPreg7 = (opcion) => {
    setOpcionSelecPreg7(opcion);
  };

  const [opcionSelecPreg8, setOpcionSelecPreg8] = useState(null);
  const handleSelecPreg8 = (opcion) => {
    setOpcionSelecPreg8(opcion);
  };

  return (
    <Container>
      <Row className="row-nuevotema">
        <Col md={8}>
          <h4>Gráficos de funciones</h4>
          <p>
            Una vez que el taxista ha tabulado la función p(x)=30+8.5x con la
            cuál calcula el precio de sus viajes para ciertas distancias x (ver
            tabla 5), llegamos a la conclusión de que dicha tabla no le sirve
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
            <b>Contesta las actividades 12 y 13.</b>
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
      <Row>
        <BoardsContextProvider>
          <SegmentContextProvider>
            {/* <RectaAGContextProvider> */}
            <Col sm={12} md={6}>
              <Act12 />
              <Row>
                <Col>
                  <p>
                    Hasta aquí lo que hemos obtenido son solo puntos aislados
                    que representan exactamente la misma información que la
                    Tabla 5. Es decir, de estos puntos graficados en el plano
                    cartesiano es posible leer cuánto cobrará el taxista si
                    recorre 5 km, 10 km, etc. tan solo con mirar a que altura
                    (coordenada y) se encuentra cada punto. No obstante, podemos
                    obtener más información si unimos los puntos. ¿Qué se forma
                    si unimos los puntos que graficamos?
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
                        label="Un segmento de recta"
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
                    Ciertamente, cuando unimos los puntos se forma el segmento
                    de recta AG. Oprime el siguiente botón para trazar el
                    segmento en la ventana gráfica de la Actividad 13.
                    <br />
                    <br />
                    <SegmentAGX boardId="board1" />
                    <br />
                    <br />
                    Dicho segmento nos permite aproximar el precio de cualquier
                    viaje que comprenda una distancia entre 0 y 30 km. Por
                    ejemplo, si un viaje dura 12.3 km, lo único que tienes que
                    hacer es buscar 12.3 en el eje x y mirar cuál es la
                    coordenada y que le corresponde, que en este caso es 134.55
                    pesos, tal como apreciarás en la vista gráfica X si oprimes
                    el botón "Dibujar Punto M".
                    <br />
                    <br />
                    <PuntoMovibleMX boardId="board1" />
                    {/* <BlockMath>
                        {"\\text{Dom}(f): \\{ x \\in \\mathbb{R} \\}"}
                      </BlockMath>
                      <BlockMath>
                        {"\\text{Im}(f): \\{ f(x) \\in \\mathbb{R} \\}"}
                      </BlockMath> */}
                    <br />
                    <br />
                    <Button>
                      Graficar la función <InlineMath>{"f(x)=2x"}</InlineMath>
                    </Button>
                    <br />
                    <br />
                  </p>
                </Col>
              </Row>
              <Act14 />
            </Col>
            <Col sm={12} md={6}>
              <Row className="sticky-act13">
                <Col className="actividad">
                  <div>
                    <p>
                      <b>Actividad 13:</b> En la siguiente cuadrícula, arrastra
                      los puntos amarillos a las coordenadas que les
                      corresponden, según la actividad 12.
                      <br />
                    </p>
                    <div className="tittle-table">
                      <h6>Ventana gráfica 3</h6>
                    </div>
                    <BoardX
                      boardId="board1"
                      boundingBox={[-2.5, 295, 32, -10]}
                    />
                    <GraficoArrastrePuntosX boardId="board1" />
                  </div>
                </Col>
              </Row>
            </Col>
            {/* </RectaAGContextProvider> */}
          </SegmentContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row>
        <Col>
          <p>
            Como has podido observar. La situación contextual del taxista ha
            limitado el dominio, y por lo tanto el rango, de la regla de
            correspondencia p(x)=30+8.5x. Sin embargo, esta misma regla de
            correspondencia podría tener otro dominio y otro rango en otras
            circunstancias.
            <br />
            <br />
            Por ejemplo, supón que un vehículo todoterreno se mueve con una
            velocidad de 30 km/h y el automóvil en cierta pendiente sólo puede
            experimentar una aceleración o desaceleración de 8.5 km/h^2. En este
            contexto, x representa el tiempo (en h) que el vehículo acelera o
            desacelera, por lo que, si el vehículo acelera, x deberá ser
            positivo ya que está aumentando la velocidad, mientras que, si el
            vehículo desacelera, x es negativo porque ahora la velocidad está
            disminuyendo.
            <br />
            <br />
            Observa que la regla de correspondencia es exactamente la misma que
            la del taxista: p(x)=30+8.5x No obstante, para representar mejor la
            nueva situación, cambiemos p por v ya que ahora la regla nos da la
            velocidad del vehículo: v(x)=30+8.5x Ahora bien, como recordarás,
            una función no solo consta de la regla de correspondencia, también
            es necesario determinar su dominio y rango. Sabiendo que la
            velocidad máxima que puede alcanzar el vehículo es de 67 km/h, ¿cuál
            es el rango, es decir, qué valores puede adquirir la velocidad?
            <br />
          </p>

          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg6"
                value="a"
                checked={opcionSelecPreg6 === "a"}
                onChange={() => handleSelecPreg6("a")}
                label={<InlineMath>{"0 \\leq v(x) \\leq 67"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg6"
                value="b"
                checked={opcionSelecPreg6 === "b"}
                onChange={() => handleSelecPreg6("b")}
                label={<InlineMath>{"30 \\leq v(x) \\leq 67"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg6"
                value="c"
                checked={opcionSelecPreg6 === "c"}
                onChange={() => handleSelecPreg6("c")}
                label={<InlineMath>{"8.5 \\leq v(x) \\leq 67"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            <br />
            ¿Cuál es el dominio?
            <br />
          </p>
          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg7"
                value="a"
                checked={opcionSelecPreg7 === "a"}
                onChange={() => handleSelecPreg7("a")}
                label={<InlineMath>{"-3.5 \\leq x \\leq 4.4"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg7"
                value="b"
                checked={opcionSelecPreg7 === "b"}
                onChange={() => handleSelecPreg7("b")}
                label={<InlineMath>{"-10 \\leq x \\leq 5.8"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg7"
                value="c"
                checked={opcionSelecPreg7 === "c"}
                onChange={() => handleSelecPreg7("c")}
                label={<InlineMath>{"0 \\leq x \\leq 3.7"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            Una diferencia notable entre las situaciones del taxista y del
            vehículo todoterreno es que, si bien tienen la misma regla de
            correspondencia, sus dominios y rangos son tan diferentes al grado
            que el dominio en el caso del taxista no acepta valores de x
            negativos, mientras que en el caso del todoterreno sí.
            <br />
            <br />
            Podríamos seguir explorado situaciones en las cuáles la regla de
            correspondencia p(x)=30+8.5x aplique, y para cada una de esas
            situaciones encontraríamos un dominio y rango. No obstante, muy a
            menudo en los cursos de matemáticas encontrarás reglas de
            correspondencia para las cuáles no se da un contexto. Aún así, es
            posible encontrar el dominio y el rango para cualquier regla de
            correspondencia, con la diferencia de que ya no estarán limitados
            por la situación contextual, sino por la regla misma. Este dominio,
            se llama dominio máximo.
            <br />
            <br />
            Antes de determinar el dominio y rango máximos de la función
            p(x)=30+8.5x, dado que ahora no se está describiendo una situación
            particular, sería más apropiado expresarlo de forma genérica, como
            se indicó en el apartado de nomenclatura de funciones. Por lo tanto,
            simplemente sustituiremos p por f, en referencia a que se trata de
            la regla de correspondencia de una función genérica:
            <br />
            <br />
            f(x)= 30+8.5x
            <br />
            <br />
            Pronto volveremos a esta expresión. Por ahora, veremos casos en los
            que una regla de correspondencia genérica presenta restricciones en
            cuanto a su dominio, y por lo tanto, también en cuanto a su rango.
            <br />
            <br />
            Como recordarás de tus cursos de aritmética y álgebra, no es posible
            dividir un número real cualquiera entre cero, ni tampoco es posible
            sacar la raíz cuadrada de un número negativo en los reales. Estos
            dos casos representan las principales limitaciones en cuanto al
            dominio y rango de una función real.
            <br />
            <br />
            Teniendo en cuenta la imposibilidad de la división entre cero,
            determinemos el dominio y el rango de la regla de correspondencia
            f(x)=2/x. ¿Cuál de los siguientes números no es un valor válido para
            x?
          </p>

          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg8"
                value="a"
                checked={opcionSelecPreg8 === "a"}
                onChange={() => handleSelecPreg8("a")}
                label={<InlineMath>{"-99"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg8"
                value="b"
                checked={opcionSelecPreg8 === "b"}
                onChange={() => handleSelecPreg8("b")}
                label={<InlineMath>{"0"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg8"
                value="c"
                checked={opcionSelecPreg8 === "c"}
                onChange={() => handleSelecPreg8("c")}
                label={<InlineMath>{"100"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionD"
                name="opcionesPreg8"
                value="d"
                checked={opcionSelecPreg8 === "d"}
                onChange={() => handleSelecPreg8("d")}
                label={<InlineMath>{"0.15"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            Otra manera de estructurar la pregunta es cuestionarnos: ¿es posible
            dividir 2 entre -99? ¿Es posible dividir 2 entre 0? Etc. Esto nos
            lleva a recordar que la división entre cero no está definida, y por
            lo tanto no podemos obtener ningún resultado cuando evaluamos f(0):
            <BlockMath>{"f(0) = \\frac{2}{0} =!"}</BlockMath>
            Entonces, podemos excluir al cero del dominio de la función y decir
            que el dominio de f(x)=2/x consiste en todos los reales excepto el
            cero:
            <BlockMath>
              {"-\\infty < x < +\\infty,\\ excepto \\ x = 0"}
            </BlockMath>
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={5}>
              <p>
                Ya que hemos encontrado el dominio, podemos determinar el rango.
                Para ello es conveniente ver cómo se comportan los valores que
                adquiere la variable f(x) en distintas situaciones. La Tabla 6
                muestra los valores de f(x) para distintos valores de x,
                complétala.
              </p>

              <Container className="cont-table-fr">
                <div className="tittle-table">
                  <h6>Tabla 6</h6>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>x</th>
                      <th>f(x)</th>
                      <th>Punto (x, y=f(x))</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>-25</td>
                      <td>-0.08</td>
                      <td>A=(-25, -0.08)</td>
                    </tr>
                    <tr>
                      <td>-8.5</td>
                      <td>-0.24</td>
                      <td>B=(-8.5, -0.24)</td>
                    </tr>
                    <tr>
                      <td>-1.5</td>
                      <td>-1.33</td>
                      <td>C=(-1.5, -1.33)</td>
                    </tr>
                    <tr>
                      <td>-0.03</td>
                      <td>-66.67</td>
                      <td>D=(-0.03, -66.67)</td>
                    </tr>
                    <tr>
                      <td>0.03</td>
                      <td>66.67</td>
                      <td>E=(0.03, 66.67)</td>
                    </tr>
                    <tr>
                      <td>1.5</td>
                      <td>1.33</td>
                      <td>F=(1.5, 1.33)</td>
                    </tr>
                    <tr>
                      <td>8.5</td>
                      <td>0.24</td>
                      <td>G=(8.5, 0.24)</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>0.08</td>
                      <td>H=(25, 0.08)</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
              <p>
                <br />
                Como se ha visto anteriormente, cada par ordenado (x, f(x)) se
                puede representar como un punto en el plano. Coloca los puntos
                amarillos donde les corresponda según la Tabla 6.
                <br />
                <br />
                Los puntos A-H son tan solo algunos de los puntos que forman a
                la gráfica de la función, pero muestran cómo es su tendencia y
                dan una idea de su forma. Presiona el siguiente botón para
                graficar la función f(x)=2/x, la cuál está conformada por todos
                los pares ordenados (x, 2/x) situados en el plano cartesiano
              </p>

              <GraficaF boardId="board2" funcionGrafica={(x) => 20 / x} />

              {/* <SegmentFR boardId="board2" /> */}
              <br />
              <CuestionarioFR />

              <p>
                Después de analizar las primeras cuatro preguntas y sus
                respuestas, es hora de profundizar en la comprensión de la
                función f(x)=2/x mediante una reflexión más detallada. Para
                ello, te invito a dibujar el punto M y deslizarlo a lo largo de
                la gráfica de la función.
                <br />
                <br />
                <PuntoMovibleF boardId="board2" />
                <br />
                <br />
                Este ejercicio te ayudará a visualizar mejor el comportamiento
                de la función en diferentes rangos de valores de x y a
                relacionarlo con los conceptos discutidos anteriormente.
                <br />
                <br />
                Mientras realizas esta actividad, considera las siguientes
                preguntas para reflexionar:
                <br />
                <br />
              </p>
              <ul className="li-preg-reflex">
                <li>¿A cuánto tiende f(x) cuando x es negativo y grande?</li>
                <li>
                  ¿Cuál es la tendencia de f(x) cuando x es negativo y muy
                  pequeño?
                </li>
                <li>
                  ¿Cuál es la tendencia de f(x) cuando x es positivo y muy
                  pequeño?
                </li>
                <li>
                  ¿A cuánto se aproxima f(x) cuando x es positivo y grande?
                </li>
                <li>¿Por qué f(x) nunca es igual a cero?</li>
              </ul>
              <p>
                <br />
                <br />
                Observa que en la gráfica de f(x)=2/x, el rango va de -inf a 0
                por la derecha, sin tocarlo, y de +inf a cero por la izquierda,
                sin tocarlo. Por lo que se puede concluir que el rango es:
                {/* -inf < f(x) <  +inf,f(x)≠0 */}
                <BlockMath>
                  {"-\\infty < f(x) < +\\infty,\\ excepto \\ f(x) = 0"}
                </BlockMath>
              </p>
            </Col>
            <Col md={7}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 4</h6>
                </div>
                <BoardXX boardId="board2" boundingBox={[-27, 130, 27, -80]} />
                <GraficoArrastrePuntosFR boardId="board2" />
              </Row>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Examinemos otro caso en el cuál la regla de correspondencia impone
            una restricción al dominio, pero esta vez en cuanto a la
            imposibilidad de sacar raíz cuadrada de un número negativo. Piensa
            en qué casos no es posible evaluar la siguiente regla:
            <BlockMath>{"f(x)=√x"}</BlockMath>
            Como se mencionó antes, no es posible sacar raíz cuadrada de números
            reales negativos, lo que quiere decir que el dominio consiste sólo
            en números positivos. Pero ¿hasta qué número positivo? En realidad,
            no hay límite en el sentido de que no hay ninguna restricción
            contextual y siempre es posible sacar raíz cuadrada de un número
            cada vez más grande, por lo que el dominio de la función son todos
            los reales positivos y el cero:
            <BlockMath>{"0 <= x < +\\infty"}</BlockMath>
            Por otra parte, para encontrar el rango, graficaremos algunos puntos
            de la función y observemos la tendencia. Completa la Tabla 7 con los
            datos que faltan y luego grafica los puntos amarillos donde les
            corresponde.
            <br />
            <br />
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={5}>
              <Container className="cont-table-fr">
                <div className="tittle-table">
                  <h6>Tabla 7</h6>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>x</th>
                      <th>f(x)</th>
                      <th>Punto (x, y=f(x))</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>0</td>
                      <td>A = (0, 0)</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>2</td>
                      <td>B = (4, 2)</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>3</td>
                      <td>C = (9, 3)</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>4.5</td>
                      <td>D = (20, 4.5)</td>
                    </tr>
                    <tr>
                      <td>31.5</td>
                      <td>5.6</td>
                      <td>E = (31.5, 5.6)</td>
                    </tr>
                    <tr>
                      <td>49</td>
                      <td>7</td>
                      <td>F = (49, 7)</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
              <p>
                <br />
                Los puntos A-F son tan solo algunos de los puntos que forman a
                la gráfica de f(x)=sqrt(x), pero muestran cómo es su tendencia y
                dan una idea de su forma.
                <br />
                <br />
                Presiona el siguiente botón para graficar la función, la cuál
                está conformada por todos los pares ordenados (x, sqrt(x))
                situados en el plano cartesiano.
              </p>
              <GraficaF boardId="board3" funcionGrafica={(x) => Math.sqrt(x)} />
              <p>
                <br />
                Esta gráfica muestra la tendencia de f(x) a medida que x cambia.
                Por ejemplo, observa que f(x) se incrementa cuando x se
                incrementa cada vez más. Para visualizarlo mejor, puedes
                graficar el punto M y observar el valor de f(x) para distintos
                valores de x cada vez más grandes.
                <br />
              </p>
              <PuntoMovibleF boardId="board3" />
              <p>
                <br />
                "Esta tendencia tiene lógica, ya que al calcular la raíz
                cuadrada de números cada vez más grandes, los valores
                resultantes también aumentan. Por lo tanto podemos concluir que
                el rango máximo de f(x)=sqrt(x) son todos los reales positivos y
                el cero:
                <BlockMath>{"0 <= f(x) < +\\infty"}</BlockMath>
              </p>
            </Col>
            <Col md={7}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 5</h6>
                </div>
                <BoardXX boardId="board3" boundingBox={[-2, 11, 51, -1]} />
                <GraficoArrastrePuntosFRaiz boardId="board3" />
              </Row>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row>
        <Col>
          <p>
            Estos dos casos, a saber, f(x)=20/x y f(x)=sqrt(x), son ejemplos de
            funciones que presentan indeterminaciones para ciertos valores de x,
            por lo que para hallar su dominio basta con excluir aquellos valores
            para los cuáles la expresión se indetermina.
          </p>
        </Col>
      </Row>
      <br />
      <Act15 />
      <Row>
        <Col>
          <p>
            <br />
            Si bien en estas actividades no estudiaremos funciones racionales ni
            con raíces, es importante conocerlas para entender en qué casos la
            regla misma delimita su dominio.
            <br />
            <br />
            Volvamos a la regla de correspondencia genérica f(x)=30+8.5x y
            piensa en si existe algun número en el cuál no podamos evaluar la
            función. Para ello es necesario recordar que en matemáticas las
            indeterminaciones suceden cuando se tiene división entre cero o
            cuando se intenta sacar raíz cuadrada de números negativos. En vista
            de que f(x)=30+8.5x consiste únicamente en una suma y un producto,
            no hay nada que restrinja su dominio y en consecuencia su dominio
            máximo son todos los números reales:
            <BlockMath>{"-\\infty < x < +\\infty"}</BlockMath>
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={5}>
              <p>
                Ahora, para conocer su rango, analicemos cuál es el
                comportamiento de f(x) para distintos valores de x. Para ello
                podemos recordar que ya hemos graficado algunos puntos de la
                función y que incluso unimos dichos puntos con el segmento AG.
                Esto nos permite conocer cómo es la función para{" "}
                <InlineMath>{"0 <= x <= 30"}</InlineMath>.
                <br />
                <br />
                ¿Qué sucede con f(x) conforme x se hace más grande que 30 y cada
                vez mayor? Pues si evaluáramos la función en números cada vez
                más grandes podemos ver cómo f(x) también se va incrementando,
                esto es, si x crece, f(x) también crece.
                <br />
                <br />Y ¿cómo es f(x) a medida que x es menor que cero y cada
                vez de mayor magnitud? En este caso f(x) también es negativo y
                cada vez de mayor magnitud. Grafica f(x)=30+8.5x y desliza el
                punto M sobre la gráfica de la función para confirmar estas
                observaciones.
              </p>

              <GraficaF boardId="board4" funcionGrafica={(x) => 30 + 8.5 * x} />
              <p>
                <br />
                Lo anterior quiere decir que f(x) abarca valores negativos y de
                una magnitud tan grande como se quiera hasta valores positivos
                tan grandes como se desee, por lo que el rango es:
                <BlockMath>{"-\\infty < f(x) < +\\infty"}</BlockMath>
                Ya que has graficado f(x)= 30+8.5x, usa los botones de zoom para
                observar que la gráfica tiene un dominio que abarca todos los
                números reales (de −∞−∞ a +∞+∞) y su rango también son todos los
                números reales. Como has observado, la gráfica de f(x)=30+8.5x
                es una línea recta.
              </p>
            </Col>
            <Col md={7}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 6</h6>
                </div>
                <BoardXX boardId="board4" boundingBox={[-2.5, 295, 32, -10]} />
                <GraficoArrastrePuntosFL boardId="board4" />
              </Row>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>

      <Row className="row-nuevotema">
        <BoardsContextProvider>
          <FuncLinealContextProvider>
            <Col
              className="border borde-redon"
              md={6}
              style={{ backgroundColor: "#011627" }}
            >
              <br />
              <div className="sticky-act16">
                <div className="tittle-table">
                  <h6 style={{ color: "white" }}>Ventana gráfica 7</h6>
                </div>
                <BoardXX boardId="board5" boundingBox={[-20, 60, 20, -30]} />
                <TextoFuncion />
                <FuncionLineal2 boardId="board5" />
              </div>
            </Col>
            <Col>
              <Act16Aleatorio />
            </Col>
          </FuncLinealContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row className="main-row">
        <p>
          <br />
          Como pudiste observar, la gráfica de f(x)=2x es una línea recta, por
          lo que se dice que es una función lineal. Otros ejemplos de funciones
          lineales son:
        </p>
        <ul>
          <li>f(x)=x</li>
          <li>f(x)=3x</li>
          <li>f(x)=-3x</li>
          <li>f(x)=3x+4</li>
          <li>f(x)=3x-4</li>y en general:
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
    </Container>
  );
};

export default GraficosDeFunciones;
