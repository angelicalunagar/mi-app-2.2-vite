import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import funcion_maquina from "../assets/funcion_maquina.png";
import puntoG from "../assets/puntoG.png";
import Table from "react-bootstrap/Table";
import GraficoArrastrePuntos from "./GraficoArrastrePuntos";
import VariacionFunciones from "./VariacionFunciones";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "../styles/Bloque1_1.css";


const Bloque1_1 = () => {
  /* let mostrarElemento = 'none'; */
  // Estado para almacenar los valores ingresados por el usuario
  const [valuesTable, setValuesTable] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
    cell_72: "",
    cell_81: "",
  });

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

  useEffect(() => {
    console.log("valuesEval:", valuesEval);
    console.log("valuesTable:", valuesTable);
    console.log("valuesPoints", valuesPoints);
  }, [valuesEval, valuesTable, valuesPoints]);

  return (
    <Container>
      <Row>
        <Col md={8}>
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
            <br />
            <br />
          </p>
        </Col>
        <Col md={4}>
          <img src={funcion_maquina} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className="actividad" md={4}>
          <p>
            <b>Actividad 1:</b> Completa la siguiente tabla tomando en cuenta
            que tienes una función que duplica cualquier número:
          </p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Número que ingresa a la función</th>
                <th>Número que devuelve la función</th>
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
                <td>
                  <input
                    className="custom-input"
                    type="text"
                    value={valuesTable.cell1}
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
                    value={valuesTable.cell1}
                    onChange={(e) =>
                      handleInputChange("cell_31", e.target.value)
                    }
                  />
                </td>
                <td>-2</td>
              </tr>
              <tr>
                <td>0</td>
                <td>
                  <input
                    className="custom-input"
                    type="text"
                    value={valuesTable.cell1}
                    onChange={(e) =>
                      handleInputChange("cell_42", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <input
                    className="custom-input"
                    type="text"
                    value={valuesTable.cell1}
                    onChange={(e) =>
                      handleInputChange("cell_52", e.target.value)
                    }
                  />
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <input
                    className="custom-input"
                    type="text"
                    value={valuesTable.cell1}
                    onChange={(e) =>
                      handleInputChange("cell_62", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>2.6</td>
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
              </tr>
              <tr>
                <td>
                  <input
                    className="custom-input"
                    type="text"
                    value={valuesTable.cell1}
                    onChange={(e) =>
                      handleInputChange("cell_81", e.target.value)
                    }
                  />
                </td>
                <td>6</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={8} /* style={{display: {mostrarElemento} }} */>
          <p>
            <br />
            En matemáticas se representan las funciones con letras, como{" "}
            <InlineMath>{"f"}</InlineMath>, <InlineMath>{"g"}</InlineMath>,{" "}
            <InlineMath>{"h"}</InlineMath>, etc. Del mismo modo, el número que
            ingresa a una función se denota generalmente con{" "}
            <InlineMath>{"x"}</InlineMath>, pero puede ser{" "}
            <InlineMath>{"a"}</InlineMath>, <InlineMath>{"t"}</InlineMath>, etc,
            y se acostumbra llamarla <b>variable independiente</b>. Finalmente,
            el número que devuelve la función se escribe como{" "}
            <InlineMath>{"f(x)"}</InlineMath>, llamado{" "}
            <b>variable dependiente</b>, ya que su valor depende del número que
            ingresaste a la función. Por ejemplo, para nuestro caso podríamos
            representar la función que duplica el número que recibe como:
            <BlockMath>{"f(x)=2x"}</BlockMath>
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
      </Row>
      <Row>
        <p>
          Evaluar una función consiste en asignar un valor a la variable
          independiente <InlineMath>{"x"}</InlineMath>, realizar las operaciones
          que la función indica y devolver el valor de la variable dependiente{" "}
          <InlineMath>{"f(x)"}</InlineMath>.
        </p>
      </Row>
      <Row className="act-width">
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
          <br />
          <br />
        </Col>
        <p>
          <br />
          Lo que acabas de hacer es volver a calcular los valores de la segunda
          columna de la tabla, sólo que usando la notación de función.
          <br />
          <br />
        </p>
      </Row>
      <Row className="act-width" style={{marginBottom: '4rem'}}>
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 3:</b> Ahora que ya sabes qué representan{" "}
            <InlineMath>{"f"}</InlineMath>, <InlineMath>{"x"}</InlineMath> y{" "}
            <InlineMath>{"f(x)"}</InlineMath>, reemplaza los encabezados de la
            tabla seleccionando el encabezado adecuado.
            <br />
            <br />
          </p>
          <Container className="cont-table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Número que ingresa a la función</th>
                  <th>Número que devuelve la función</th>
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
      <Row className="row-grafDeFunc">
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
        <Col md={4}>
          <img
            src={puntoG}
            alt="Punto G"
            style={{ width: "auto", height: "95%" }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="actividad col-act4y5">
          <p>
            <b>Actividad 4:</b> Tomando en cuenta tus resultados de la actividad
            2, completa la siguiente información:
            <ul>
              <li className="liAct-4">
                <InlineMath>{"-2"}</InlineMath> y{" "}
                <InlineMath>{"f(-2)"}</InlineMath> se pueden graficar como el
                punto <InlineMath>{"A("}</InlineMath>
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.a_x}
                  onChange={(e) =>
                    handlePointsInputChange("a_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.a_y}
                  onChange={(e) =>
                    handlePointsInputChange("a_y", e.target.value)
                  }
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
                  onChange={(e) =>
                    handlePointsInputChange("b_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.b_y}
                  onChange={(e) =>
                    handlePointsInputChange("b_y", e.target.value)
                  }
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
                  onChange={(e) =>
                    handlePointsInputChange("c_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.c_y}
                  onChange={(e) =>
                    handlePointsInputChange("c_y", e.target.value)
                  }
                />
                <InlineMath>{")"}</InlineMath>
              </li>
              <li className="liAct-4">
                <InlineMath>{"0"}</InlineMath> y{" "}
                <InlineMath>{"f(0)"}</InlineMath> se pueden graficar como el
                punto <InlineMath>{"D("}</InlineMath>
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.d_x}
                  onChange={(e) =>
                    handlePointsInputChange("d_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.d_y}
                  onChange={(e) =>
                    handlePointsInputChange("d_y", e.target.value)
                  }
                />
                <InlineMath>{")"}</InlineMath>
              </li>
              <li className="liAct-4">
                <InlineMath>{"1"}</InlineMath> y{" "}
                <InlineMath>{"f(1)"}</InlineMath> se pueden graficar como el
                punto <InlineMath>{"E("}</InlineMath>
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.e_x}
                  onChange={(e) =>
                    handlePointsInputChange("e_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.e_y}
                  onChange={(e) =>
                    handlePointsInputChange("e_y", e.target.value)
                  }
                />
                <InlineMath>{")"}</InlineMath>
              </li>
              <li className="liAct-4">
                <InlineMath>{"2"}</InlineMath> y{" "}
                <InlineMath>{"f(2)"}</InlineMath> se pueden graficar como el
                punto <InlineMath>{"F("}</InlineMath>
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.f_x}
                  onChange={(e) =>
                    handlePointsInputChange("f_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.f_y}
                  onChange={(e) =>
                    handlePointsInputChange("f_y", e.target.value)
                  }
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
                  onChange={(e) =>
                    handlePointsInputChange("g_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.g_y}
                  onChange={(e) =>
                    handlePointsInputChange("g_y", e.target.value)
                  }
                />
                <InlineMath>{")"}</InlineMath>
              </li>
              <li className="liAct-4">
                <InlineMath>{"3"}</InlineMath> y{" "}
                <InlineMath>{"f(3)"}</InlineMath> se pueden graficar como el
                punto <InlineMath>{"H("}</InlineMath>
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.h_x}
                  onChange={(e) =>
                    handlePointsInputChange("h_x", e.target.value)
                  }
                />
                ,
                <input
                  className="input-coord"
                  type="text"
                  value={valuesPoints.h_y}
                  onChange={(e) =>
                    handlePointsInputChange("h_y", e.target.value)
                  }
                />
                <InlineMath>{")"}</InlineMath>
              </li>
              y en general:
              <br />
              <li>
                <InlineMath>{"x"}</InlineMath> y{" "}
                <InlineMath>{"f(x)"}</InlineMath> se puede graficar como el
                punto <InlineMath>{"P(x, y)"}</InlineMath>.
              </li>
            </ul>
          </p>
        </Col>
        <Col className="actividad col-act4y5">
          <p>
            <b>Actividad 5:</b> En la gráfica de la derecha, arrastra los puntos
            amarillos a las coordenadas que les corresponden, según la actividad
            4.
            <br />
            <br />
          </p>
          <GraficoArrastrePuntos />
        </Col>
      </Row>
      <Row>
        <p>
          Hasta aquí lo que hemos obtenido son sólo puntos aislados que
          pertenecen a la gráfica de la función, mas no la gráfica completa.
          ¿Qué se forma si unimos los puntos que graficamos?
          <ul>
            <li>a) Una recta</li>
            <li>b) Una parábola</li>
            <li>c) El segmento de recta AH</li>
            <li>d) Una curva cúbica</li>
          </ul>
          Ciertamente, cuando unimos los puntos lo que se forma es el segmento
          de recta AH, que es sólo una parte de la gráfica de la función. Usa el
          siguiente botón para dibujar el segmento en la cuadrícula de la
          actividad 5.
          <br />
          <br />
          BOTÓN PARA GRAFICAR EL SEGMENTO DE RECTA
          <br />
          <br />
          De hecho, ni siquiera podemos dibujar la gráfica completa, sino
          solamente la parte que cabe en nuestra cuadrícula. Esto se debe a que
          la función f(x)=2x puede recibir cualquier número de la recta real,
          desde números tan negativos como -10 000 000 000, números irracionales
          como e y pi, números racionales como 5/2 y 234/899, y números
          positivos tan grandes como 999,999,999, y en general cualquier número
          de la recta real. A la totalidad de valores que puede recibir una
          función se le llama dominio de la función, y por ahora basta con saber
          que el dominio de f(x)=2x y de cualquier función polinomial es el
          conjunto de los números reales, puesto que la función es capaz de
          devolver un valor para cada número real que ingresa. Similarmente, a
          la totalidad de valores que devuelve una función se le llama
          codomionio, que en el caso de las funciones polinomiales es igualmente
          el conjunto de los números reales:
          <br />
          Dominio de f(x)=2x: R o (-inf, +inf)
          <br />
          Codominio de f(x)=2x: R o (-inf, +inf)
          <br />
          La consecuencia de esto es que las gráficas de las funciones
          polinomiales son infinitas, por lo que nos limitaremos a dibujar
          únicamente la parte de la gráfica que cabe en la cuadrícula. Usa el
          siguiente botón para dibujar la gráfica de la función f(x)=2x. 
          <br />
          <br />
          BOTÓN DIBUJAR LA RECTA
          <br />
          <br />
          <br />
          <br />
        </p>
      </Row>
      <Row>
        <Col>
        <p>
          <h4>Dominio y codominio puntuales</h4>
          <h4>Dominio y codominio en rangos</h4>
        </p>
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
