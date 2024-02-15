import {useState} from "react";
import "../styles/Bloque5.css";

import {Form } from "react-bootstrap";


function Bloque5() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      {/* <Form>
        <Form.Group>
          <Form.Check
            type="radio"
            id="opcionA"
            name="opciones"
            value="a"
            checked={opcionSeleccionada === "a"}
            onChange={() => handleSeleccion("a")}
            label="Una recta"
          />
          <Form.Check
            type="radio"
            id="opcionB"
            name="opciones"
            value="b"
            checked={opcionSeleccionada === "b"}
            onChange={() => handleSeleccion("b")}
            label="Una parábola"
          />

          <Form.Check
            type="radio"
            id="opcionC"
            name="opciones"
            value="c"
            checked={opcionSeleccionada === "c"}
            onChange={() => handleSeleccion("c")}
            label="El segmento de recta AH"
          />
          <Form.Check
            type="radio"
            id="opcionD"
            name="opciones"
            value="d"
            checked={opcionSeleccionada === "d"}
            onChange={() => handleSeleccion("d")}
            label="d) Una curva cúbica"
          />
        </Form.Group>
      </Form> */}
       <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
    </div>
  );
}
export default Bloque5;
