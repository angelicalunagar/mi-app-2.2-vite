import React, { useEffect } from "react";
import { JSXGraph } from "jsxgraph";

const RectanguloArea = () => {
  useEffect(() => {
    const board = JSXGraph.initBoard("variation-container2", {
      boundingbox: [-15, 170, 170, -15],
      axis: true,
      pan: {
        needShiftToPan: true,
        enabled: true,
      },
      showcopyright: false,
    });

    // Crear los ejes x e y
    const xAxis = board.create(
      "segment",
      [
        [0, 0],
        [150, 0],
      ],
      { name: "x" }
    );
    const yAxis = board.create(
      "segment",
      [
        [0, 0],
        [0, 150],
      ],
      { name: "y" }
    );

    // Definir gliderA y gliderB con valores iniciales
    const gliderA = board.create("glider", [0, 100, yAxis], { name: "A" });
    const gliderB = board.create("glider", [50, 0, xAxis], { name: "B" });

    const updateCoords = () => {
      const newXCoord = 150 - gliderA.Y();
      const newYCoord = 150 - gliderB.X();

      gliderA.moveTo([0, newYCoord]);
      gliderB.moveTo([newXCoord, 0]);
      board.update();

      // Calcular el área del rectángulo
      const areaValue = newXCoord * newYCoord;
      
      // Actualizar el texto del área
      areaLabel.setText(`Área: ${areaValue.toFixed(2)}`);
    };

    gliderA.on("drag", updateCoords);
    gliderB.on("drag", updateCoords);

    const area = board.create(
      "polygon",
      [
        function () {
          return [0, 0];
        },
        function () {
          return [0, gliderA.Y()];
        },
        function () {
          return [gliderB.X(), gliderA.Y()];
        },
        function () {
          return [gliderB.X(), 0];
        },
      ],
      { fillColor: "rgba(0, 0, 255, 0.5)", fixed: true }
    );

    // Crear el texto del área
    const areaLabel = board.create(
      "text",
      [20, 80, ""], // Posición del texto
      { fontSize: 18, fixed: true }
    );

    updateCoords(); // Actualizar las coordenadas iniciales y el área al cargar
  }, []);

  return (
    <div>
      <div>
        <p></p>
      </div>
      <div
        id="variation-container2"
        className="jxgbox color-marco"
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default RectanguloArea;
