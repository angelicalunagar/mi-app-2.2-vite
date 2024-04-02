import { useContext, useState } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { GraficaFRContext } from "../../contexts/GraficaFRContext";
import {Button} from "react-bootstrap";

const GraficaFR = ( {boardId} ) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const {dibujarGrafica, setDibujarGrafica} = useContext(GraficaFRContext);

  const toggleRecta = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (dibujarGrafica) {

        const graficaId = ids.idGraficaFR; // Obtener el ID de la recta
        board.removeObject(graficaId, false); // Eliminar el objeto del tablero usando su ID
     
        setIds(prevIds=>({
          ...prevIds,
          idGraficaFR:'',
        }));

        setDibujarGrafica(false);

      } else {
        if (ids.idPuntoA && ids.idPuntoG) {
          const grafica = board.create("functiongraph", [function(x){ return 2/x;}]);
          
          // Guarda el ID de la recta en la lista de IDs
          setIds(prevIds=>({
            ...prevIds,
            idGraficaFR: grafica.id
          }));


          setDibujarGrafica(true);
        }
      }
    } else {
      console.log('El tablero brd es null')
    }
  };

  return (
    <div>
      <Button onClick={toggleRecta}>
        {dibujarGrafica? "Borrar Gráfica" : "Trazar Gráfica"}
      </Button>
    </div>
  );
};

export default GraficaFR;
