import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import funcion_maquina from '../assets/funcion_maquina.png';
import puntoG from '../assets/puntoG.png';
import Table from 'react-bootstrap/Table';
import GraficoArrastrePuntos from './GraficoArrastrePuntos';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';


const Bloque1_1 = () => {
  return (
    <Container>     
    <Row>
      <Col md={8}>
        <p style={{ textAlign: 'justify'}}>
          Una función es como una "máquina matemática" que toma
          un número como entrada, realiza alguna operación con ese
          número, y nos da otro número como resultado. Puedes pensar 
          en ello como una especie de "regla" matemática.
          <br />
          <br />
          Por ejemplo, imagina una máquina que duplica cualquier número que le des.
          Si le das el número 3, la máquina te devuelve 6. Si le das el 
          número 5, la máquina te devuelve 10. Esta máquina es una función simple
          : duplica cualquier número que le des. 
          <br/>
          <br/>
          <b>Actividad 1:</b> Completa la siguiente tabla tomando en cuenta que tienes
          una función que duplica cualquier número:  
        </p>
      </Col>
      <Col md={4}>
        <img src={funcion_maquina} alt="" />
      </Col>
    </Row> 
    <Row>
    <Col md={4}>
        <br/>
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
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>-2</td>
            </tr>
            <tr>
              <td>0</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
            </tr>
            
            <tr>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>2.6</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>6</td>
            </tr>
          </tbody>
        </Table> 
    </Col>
    <Col md={8}>
    <p style={{ textAlign: 'justify' }}>
      <br />
        En matemáticas se acostumbra representar las
        funciones con letras, como <InlineMath>{'f'}</InlineMath>, <InlineMath>{'g'}</InlineMath>, <InlineMath>{'h'}</InlineMath>,
        etc. Del mismo modo, el número que ingresa a una función se 
        denota generalmente con <InlineMath>{'x'}</InlineMath>, pero
        puede ser <InlineMath>{'a'}</InlineMath>, <InlineMath>{'t'}</InlineMath>,
        etc. Y finalmente, el número que devuelve 
        la función se escribe como <InlineMath>{'f(x)'}</InlineMath>.
        Por ejemplo, para nuestro caso podríamos representar la función 
        que duplica el número que recibe como:
        <BlockMath>{'f(x)=2x'}</BlockMath>
        Donde <InlineMath>{'f'}</InlineMath> es el nombre de la función, <InlineMath>{'x'}</InlineMath> es
        el valor que recibe y <InlineMath>{'f(x)'}</InlineMath> es el valor que devuelve, que 
        en nuestro contexto específico es <InlineMath>{'2x'}</InlineMath> porque devuelve el doble del número que ingresa. 
      
        Concretamente, si <InlineMath>{'f'}</InlineMath> recibe el valor
        <InlineMath>{'-2'}</InlineMath>, es decir <InlineMath>{'x=-2'}</InlineMath>,
        el valor devuelto es <InlineMath>{'-4'}</InlineMath>, o sea 
        <InlineMath>{'f(-2)= -4'}</InlineMath>:
        <BlockMath>{'f(-2) = 2(-2)'}</BlockMath>
        <BlockMath>{'f(-2) = -4'}</BlockMath>
        Si <InlineMath>{'f'}</InlineMath> recibe el valor <InlineMath>{'-1.5'}</InlineMath>,
        es decir <InlineMath>{'x=-1.5'}</InlineMath>, el valor devuelto es <InlineMath>{'-3'}</InlineMath>,
        o sea <InlineMath>{'f(-1.5)= -3'}</InlineMath>:
        <BlockMath>{'f(-1.5) = 2(-1.5)=-3'}</BlockMath>
      </p>
    </Col>
    </Row> 
    <Row>
      <p style={{ textAlign: 'justify' }}>
      Si la función recibe el valor <InlineMath>{'a=-1'}</InlineMath>, la función no devuelve nada
        porque la función <InlineMath>{'f'}</InlineMath>, por cómo está definida, <InlineMath>{'f(x)= 2x'}</InlineMath>, 
        sólo recibe valores para la variable <InlineMath>{'x'}</InlineMath>, no para la variable <InlineMath>{'a'}</InlineMath>.
        Al proceso mediante el cuál una función recibe un valor,
        realizamos las operaciones que la función indica con dicho valor y 
        obtenemos el valor que la función devuelve se llama evaluar a una función.
        <br/>
        <br/>
        <b>Actividad 2:</b> Evalúa nuestra función <InlineMath>{'f(x)= 2x'}</InlineMath> en <InlineMath>{'x=-1, 0, 1, 2, 2.6'}</InlineMath>:

        <BlockMath>{'f(-1)=2()='}</BlockMath>
        <BlockMath>{'f(0)=2()='}</BlockMath>
        <BlockMath>{'f(1)=2()='}</BlockMath>
        <BlockMath>{'f(2)=2()='}</BlockMath>
        <BlockMath>{'f(2.6)=2()='}</BlockMath>
  
        Lo que acabas de hacer es volver a calcular los valores de la segunda columna de
        la tabla, sólo que de manera sistemática.<br/>
        <br/>
        <b>Actividad 3:</b> Ahora que ya sabes qué representan <InlineMath>{'f'}</InlineMath>, <InlineMath>{'x'}</InlineMath> y <InlineMath>{'f(x)'}</InlineMath>,
        reemplaza los encabezados de la tabla seleccionando el encabezado adecuado.
        <br/>
        <br />
      </p> 
    </Row>
    <Row style={{ marginBottom: '30px' }}>
      <Col md={8}>
        <p style={{ textAlign: 'justify' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem'}}>Gráficos de funciones</span> 
          <br />
          Cuando graficamos funciones, mostramos en el plano cartesiano
          cómo los valores <InlineMath>{'x'}</InlineMath> que recibe la función se relacionan 
          con los valores <InlineMath>{'f(x)'}</InlineMath> que devuelve. Lo que hacemos es graficar un
          punto por cada pareja (<InlineMath>{'x, f(x)'}</InlineMath>) ubicando el valor <InlineMath>{'x'}</InlineMath> en
          el eje <InlineMath>{'x'}</InlineMath> y
          el valor <InlineMath>{'f(x)'}</InlineMath> en el eje <InlineMath>{'y'}</InlineMath> (es decir, <InlineMath>{'y=f(x)'}</InlineMath>) para obtener
          puntos con coordenadas <InlineMath>{'(x, y)'}</InlineMath>. Por ejemplo, para nuestra función
          <InlineMath>{'f(x)=2x'}</InlineMath> el punto (<InlineMath>{'2.6, f(2.6)'}</InlineMath>) es en realidad el punto <InlineMath>{'(2.6, 5.2)'}</InlineMath>, 
          y para graficar este punto debemos ubicar la coordenada <InlineMath>{'2.6'}</InlineMath>
          en el eje <InlineMath>{'x'}</InlineMath> y luego buscar la coordenada <InlineMath>{'5.2'}</InlineMath> en el eje <InlineMath>{'y'}</InlineMath>, como se aprecia en la
          imagen de la derecha. Al punto obtenido lo hemos llamado <InlineMath>{'G'}</InlineMath>. 
        </p>
      </Col>
      <Col md={4}>
        <img src={puntoG} alt="Punto G" style={{ width: 'auto', height: '95%' }}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <GraficoArrastrePuntos />
      </Col>
      <Col>
      <p style={{ textAlign: 'justify'}}>
        <b>Actividad 4:</b> Tomando en cuenta tus resultados de la
        actividad 2, completa la siguiente información:
        <ul>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'-2'}</InlineMath> y <InlineMath>{'f(-2)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'A( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'-1.5'}</InlineMath> y <InlineMath>{'f(-1.5)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'B( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'-1'}</InlineMath> y <InlineMath>{'f(-1)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'C( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'0'}</InlineMath> y <InlineMath>{'f(0)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'D( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'1'}</InlineMath> y <InlineMath>{'f(1)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'E( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'2'}</InlineMath> y <InlineMath>{'f(2)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'F( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'2.6'}</InlineMath> y <InlineMath>{'f(2.6)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'G( , )'}</InlineMath></li>
          <li style={{ marginBottom: '8px' }}><InlineMath>{'3'}</InlineMath> y <InlineMath>{'f(3)'}</InlineMath> se pueden graficar como el punto <InlineMath>{'H( , )'}</InlineMath></li>
        
         y en general:
         <br/>
         <li><InlineMath>{'x'}</InlineMath> y <InlineMath>{'f(x)'}</InlineMath> se puede graficar como el punto <InlineMath>{'P(x, y)'}</InlineMath>.</li>
         </ul>
         <br/>
         <b>Actividad 5:</b> En la gráfica de la derecha, arrastra los puntos
         amarillos a las coordenadas que les corresponden, según la actividad 4.   
      </p>
      </Col>
    </Row>
      
   
  </Container>
  )
}

export default Bloque1_1
