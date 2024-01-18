import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import funcion_maquina from '../assets/funcion_maquina.png';
import Table from 'react-bootstrap/Table';
import GraficoArrastrePuntos from './GraficoArrastrePuntos';


const Bloque1_1 = () => {
  return (
    <Container>
    <Row>
      <Col md={8}>
        <p style={{ textAlign: 'justify' }}>
          Una función es como una "máquina matemática" que toma
          un número como entrada, realiza alguna operación con ese
          número, y nos da otro número como resultado. Puedes pensar 
          en ello como una especie de "regla" matemática.
          <br />
          <br />
          Por ejemplo, imagina una máquina que duplica cualquier número que le des.
          Si le das el número 3, la máquina te devuelve 6. Si le das el 
          número 5, la máquina te devuelve 10. Esta máquina es una función 
          porque tiene una regla simple: duplica cualquier número que le des. Completa
          la siguiente tabla tomando en cuenta que tienes una función que 
          duplica cualquier número:
          
        </p>
      </Col>
      <Col md={4}>
        <img src={funcion_maquina} alt="" />
      </Col>
    </Row>
      <Col >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Número que ingresa a la función</th>
              <th>Número que devuelve la función</th>
              <th>Parejas (x, y)</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-3</td>
              <td></td>
              <td>A(, )</td>
            </tr>
            <tr>
              <td>-2</td>
              <td></td>
              <td>B(, )</td>
            </tr>
            <tr>
              <td>-1</td>
              <td></td>
              <td>C(, )</td>
            </tr>
            <tr>
              <td>0</td>
              <td></td>
              <td>D(, )</td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td>E(, )</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td>F(, )</td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td>G(, )</td>
            </tr>
            
          </tbody>
        </Table>
        <p>
          En matemáticas, para simplificar la escritura, representamos
          funciones con letras, como f, g, h, etc. Del mismo modo, el
          número que ingresa a una función se denota generalmente con
          x, pero puede ser a, t, etc. Y finalmente, el número que 
          la función se representa como con la letra que representa la 
          función, seguido de la letra que representa al número que 
          ingresa entre paréntesis. Por ejemplo:
          •	f(x) es el valor que devuelve la función f cuando recibe el valor x
          •	f(a) es el valor que devuelve la función f cuando recibe el valor a
          •	g(a) es el valor que devuelve la función g cuando recibe el valor a

          Entonces, cómo quedarían los encabezados de la tabla 1.1? Completa 
          encabezados y verifica tu respuesta. 

          Gráficos de funciones:
          Cuando graficamos funciones, mostramos cómo los valores que
          recibe la función (eje x) se relacionan con los valores de 
          salida (eje y). En realidad, cada fila de la tabla 1.1 es 
          un punto que podemos graficar en el plano cartesiano como 
          pareja (x, y), donde “x” representa el número que ingresa a 
          la función y se ubica en el eje x y “y” representa el número
          que devuelve la función (f(x)) y se ubica en el eje y. Así, 
          de la Tabla 1.1 formamos los siguientes puntos (completa los
          puntos):
        </p>
        <GraficoArrastrePuntos />
      </Col>
    <Row>

    </Row> 
  </Container>
  )
}

export default Bloque1_1