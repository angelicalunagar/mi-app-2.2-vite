import { useContext, useState } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { GraficaFContext } from "../../contexts/GraficaFContext";
import { Button } from "react-bootstrap";

const GraficaF = ({ boardId, funcionGrafica }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { dibujarGrafica, setDibujarGrafica, setDibPuntoM } =
    useContext(GraficaFContext);

  const toggleGraficaF = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (dibujarGrafica) {
        const graficaId = ids.idGraficaF; // Obtener el ID de la recta
        board.removeObject(graficaId, false); // Eliminar el objeto del tablero usando su ID

        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;
        const segmentXAxisId = ids.idSegmentXAxis;
        const segmentYAxisId = ids.idSegmentYAxis;

        if (perpendicularToXAxisId)
          board.removeObject(perpendicularToXAxisId, false);
        if (perpendicularToYAxisId)
          board.removeObject(perpendicularToYAxisId, false);
        if (segmentXAxisId) board.removeObject(segmentXAxisId, false);
        if (segmentYAxisId) board.removeObject(segmentYAxisId, false);

        setIds((prevIds) => ({
          ...prevIds,
          idGraficaF: "",
          idPerpendicularToXAxis: "",
          idPerpendicularToYAxis: "",
          idSegmentXAxis: "",
          idSegmentYAxis: "",
        }));

        setDibujarGrafica(false);
        setDibPuntoM(false);
      } else {
        /* if (ids.idPuntoA && ids.idPuntoB) {
          const grafica = board.create("functiongraph", [
            funcionGrafica
          ]);

          // Guarda el ID de la recta en la lista de IDs
          setIds((prevIds) => ({
            ...prevIds,
            idGraficaF: grafica.id,
          }));

          setDibujarGrafica(true);
        } */
        const grafica = board.create("functiongraph", [funcionGrafica]);

        // Guarda el ID de la recta en la lista de IDs
        setIds((prevIds) => ({
          ...prevIds,
          idGraficaF: grafica.id,
        }));

        setDibujarGrafica(true);
      }
    } else {
      console.log("El tablero brd es null");
    }
  };

  return (
    <div>
      <Button onClick={toggleGraficaF}>
        {dibujarGrafica ? "Borrar la gráfica de f(x)" : "Graficar f(x)"}
      </Button>
    </div>
  );
};

export default GraficaF;
