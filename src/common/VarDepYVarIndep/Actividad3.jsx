import { React, useState } from "react";

const Actividad3 = () => {

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

  return (
    <div>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 3:</b> Completa los espacios en blanco:
            <br />
          </p>
          <ul>
            <li>
              Si la ganancia del heladero depende del número de helados
              vendidos, se dice que{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vd_1}
                onChange={(e) => handleInputAct3("vd_1", e.target.value)}
              />
              es función (o es una función) de{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vi_1}
                onChange={(e) => handleInputAct3("vi_1", e.target.value)}
              />
            </li>
            <br />
            <li>
              Si el dinero de Cristina depende de los días que han transcurrido
              a partir del cobro de la quincena, se dice que{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vd_2}
                onChange={(e) => handleInputAct3("vd_2", e.target.value)}
              />
              es función (o es una función) de{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vi_2}
                onChange={(e) => handleInputAct3("vi_2", e.target.value)}
              />
            </li>
            <br />
            <li>
              Si el precio final de un viaje en Uber depende de la distancia
              recorrida, se dice que{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vd_3}
                onChange={(e) => handleInputAct3("vd_3", e.target.value)}
              />
              es función (o es una función) de{" "}
              <input
                className="input-act3"
                type="text"
                value={valuesAct3.vi_3}
                onChange={(e) => handleInputAct3("vi_3", e.target.value)}
              />
            </li>
          </ul>
          <div className="button-center">
            <Button>Revisar respuestas</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Actividad3;
