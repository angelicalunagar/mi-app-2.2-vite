import { useContext, useState } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { GraficaFRContext } from "../../contexts/GraficaFContext";
import { Button } from "react-bootstrap";

const GraficaFR = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { dibujarGrafica, setDibujarGrafica, setDibPuntoM} = useContext(GraficaFRContext);

  const toggleGraficaFR = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (dibujarGrafica) {
        const graficaId = ids.idGraficaFR; // Obtener el ID de la recta
        board.removeObject(graficaId, false); // Eliminar el objeto del tablero usando su ID

        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;

        if (perpendicularToXAxisId)
          board.removeObject(perpendicularToXAxisId, false);
        if (perpendicularToYAxisId)
          board.removeObject(perpendicularToYAxisId, false);

        setIds((prevIds) => ({
          ...prevIds,
          idGraficaFR: "",
          idPerpendicularToXAxis: "",
          idPerpendicularToYAxis: "",
        }));

        setDibujarGrafica(false);
        setDibPuntoM(false);

      } else {
        if (ids.idPuntoA && ids.idPuntoG) {
          const grafica = board.create("functiongraph", [
            function (x) {
              return 2 / x;
            },
          ]);

          // Guarda el ID de la recta en la lista de IDs
          setIds((prevIds) => ({
            ...prevIds,
            idGraficaFR: grafica.id,
          }));

          setDibujarGrafica(true);
        }
      }
    } else {
      console.log("El tablero brd es null");
    }
  };

  return (
    <div>
      <Button onClick={toggleGraficaFR}>
        {dibujarGrafica ? "Borrar la gráfica de f(x)" : "Graficar f(x)"}
      </Button>
    </div>
  );
};

export default GraficaFR;
