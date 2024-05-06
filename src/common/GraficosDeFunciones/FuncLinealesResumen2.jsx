import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { InlineMath } from "react-katex";

const FuncLinealesResumen2 = ({ md }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showIcons, setShowIcons] = useState(false);

  const correctAnswers = {
    select1: "una línea recta",
    select2: "f(x)=mx+b",
    select3: "dependiente",
    select4: "independiente",
    select5: "qué tan inclinada es la recta",
    select6: "cruza al eje y",
    select7: "-\\infty < x < +\\infty",
    select8: "-\\infty < x < +\\infty",
  };

  const handleOptionChange = (e, selectKey) => {
    const { value } = e.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [selectKey]: value,
    }));
  };

  const checkAnswers = () => {
    setShowIcons(true);
  };

  const resetSelection = () => {
    setSelectedOptions({});
    setShowIcons(false);
  };

  const renderIcon = (selectKey, option) => {
    if (!showIcons) return null;
    return selectedOptions[selectKey] === option ? (
      selectedOptions[selectKey] === correctAnswers[selectKey] ? (
        <BsCheckCircle style={{ color: "green" }} />
      ) : (
        <BsExclamationCircle style={{ color: "red" }} />
      )
    ) : null;
  };

  return (
    
    <>
      <Row >
        <Col style={{ display: 'flex', alignItems: 'center' }} md={md}>
        <span>
            Toda función lineal tiene por gráfica a
            <Form.Select
              aria-label="Default select example"
              className="select1"
              value={selectedOptions["select1"] || ""}
              onChange={(e) => handleOptionChange(e, "select1")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px"}}
            >
              <option>---</option>
              <option value="una línea recta">una línea recta</option>
              <option value="una curva">una curva</option>
            </Form.Select>
            {renderIcon("select1", selectedOptions["select1"])} 
            y su forma algebraica puede generalizarse como{" "}
            <Form.Select
              aria-label="Default select example"
              className="select2"
              value={selectedOptions["select2"] || ""}
              onChange={(e) => handleOptionChange(e, "select2")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px"}}
            >
              <option>---</option>
              <option value="f(x)=mx+b">f(x)=mx+b</option>
              <option value="f(x)=b/x">f(x)=b/x</option>
              <option value="f(x)=x^2+3x">(<span>{<InlineMath>{'f(x)=x^2+3x'}</InlineMath>}</span>)</option>
            </Form.Select>
            {renderIcon("select2", selectedOptions["select2"])}, donde f(x)
            representa a la variable{" "}
            <Form.Select
              aria-label="Default select example"
              className="select3"
              value={selectedOptions["select3"] || ""}
              onChange={(e) => handleOptionChange(e, "select3")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px"}}
            >
              <option>---</option>
              <option value="dependiente">dependiente</option>
              <option value="independiente">independiente</option>
            </Form.Select>
            {renderIcon("select3", selectedOptions["select3"])} y{" "}
            <InlineMath>x</InlineMath> representa a la variable{" "}
            <Form.Select
              aria-label="Default select example"
              className="select4"
              value={selectedOptions["select4"] || ""}
              onChange={(e) => handleOptionChange(e, "select4")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px"}}
            >
              <option>---</option>
              <option value="dependiente">dependiente</option>
              <option value="independiente">independiente</option>
            </Form.Select>
            {renderIcon("select4", selectedOptions["select4"])}.
          
          
            Por su parte,{" "}
            <InlineMath>m</InlineMath> es el coeficiente de{" "}
            <InlineMath>x</InlineMath> e indica{" "}
            <Form.Select
              aria-label="Default select example"
              className="select5"
              value={selectedOptions["select5"] || ""}
              onChange={(e) => handleOptionChange(e, "select5")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px" }}
            >
              <option>---</option>
              <option value="qué tan inclinada es la recta">
                qué tan inclinada es la recta
              </option>
              <option value="qué tan lejos está la recta del origen">
                qué tan lejos está la recta del origen
              </option>
            </Form.Select>
            {renderIcon("select5", selectedOptions["select5"])} y{" "}
            <InlineMath>b</InlineMath> es el término independiente de{" "}
            <InlineMath>x</InlineMath> e indica la coordenada{" "}
            <InlineMath>y</InlineMath> del punto donde la recta{" "}
            <Form.Select
              aria-label="Default select example"
              className="select6"
              value={selectedOptions["select6"] || ""}
              onChange={(e) => handleOptionChange(e, "select6")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px" }}
            >
              <option>---</option>
              <option value="cruza al eje y">
                cruza al eje 'y'
              </option>
              <option value="cruza al eje x">
                cruza al eje 'x'
              </option>
            </Form.Select>
            {renderIcon("select6", selectedOptions["select6"])}.
          
        
            Toda función lineal, puesto que consiste en un producto mx y su
            suma con b, no posee restricciones para x, por lo que su dominio es{" "}
            <Form.Select
              aria-label="Default select example"
              className="select7"
              value={selectedOptions["select7"] || ""}
              onChange={(e) => handleOptionChange(e, "select7")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px" }}
            >
              <option>---</option>
              <option value="-\infty < x < +\infty">
              -∞ {"<"} x {"<"} ∞
              </option>
              <option value="0 < x < +\infty">
              0 {"<"} x {"<"} ∞
              </option>
            </Form.Select>
            {renderIcon("select7", selectedOptions["select7"])}.
         
            Finalmente, el rango de las funciones lineales es{" "}
            <Form.Select
              aria-label="Default select example"
              className="select8"
              value={selectedOptions["select8"] || ""}
              onChange={(e) => handleOptionChange(e, "select8")}
              style={{ width: "15rem", display: "inline-block", marginLeft: "10px", marginRight: "10px" }}
            >
              <option>---</option>
              <option value="-\infty < x < +\infty">
              -∞ {"<"} x {"<"} ∞
              </option>
              <option value="0 < x < +\infty">
              0 {"<"} x {"<"} ∞
              </option>
            </Form.Select>
            {renderIcon("select8", selectedOptions["select8"])}.
            </span>
        </Col>
      </Row>

      <div className="button-center">
        {showIcons ? (
          <Button onClick={resetSelection}>Modificar respuestas</Button>
        ) : (
          <Button onClick={checkAnswers}>Revisar respuestas</Button>
        )}
      </div>
    </>
  );
};

export default FuncLinealesResumen2;
