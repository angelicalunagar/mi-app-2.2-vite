import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import { FaRegFilePdf } from "react-icons/fa6";
import { RiQuestionnaireLine } from "react-icons/ri";
import iceCreamMan from "../assets/iceCreamMan.jpg";

const ValoresVarIndep = () => {
  return (
    <Container>
      <h4>Valores que adquiere la variable independiente</h4>
      <Row className="main-row">
        <Col>
          <p>
            Siguiendo con el caso del heladero, cuyas ganancias{" "}
            <InlineMath>{"g(x)"}</InlineMath> están en función del número de
            helados vendidos <InlineMath>x</InlineMath> de acuerdo con la regla
            de correspondencia <InlineMath>{"g(x)=5x"}</InlineMath>, en la
            sección anterior tabulamos valores de <InlineMath>{"x"}</InlineMath>
            , desde <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"5"}</InlineMath>, con sus respectivos valores de{" "}
            <InlineMath>{"g(x)"}</InlineMath>.
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
      <br />
      <br />
      <br />
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex justify-content-center">
          <Button variant="primary" href="" target="_blank">
            <RiQuestionnaireLine /> ENCUESTA
          </Button>
        </Col>
        <Col xs="auto" className="d-flex justify-content-center">
          <Button variant="secondary" href="https://correobuap-my.sharepoint.com/:f:/g/personal/angelica_lunagar_alumno_buap_mx/EkgnK55fJRNIrWK2wyFHlV8B1H0S9Q1_2efWfoEf4xryEA?e=XfeD6V" target="_blank">
            <FaRegFilePdf /> SUBE TUS EVIDENCIAS
          </Button>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
};

export default ValoresVarIndep;
