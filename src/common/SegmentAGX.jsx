import { useContext, useState } from "react";
import { BoardContext } from "../contexts/BoardContext";

const SegmentAG = () => {
  const { brd, ids, setIds } = useContext(BoardContext);
  const [segmentoDibujado, setSegmentoDibujado] = useState(false);

  const toggleSegmento = () => {
    if (brd !== null) {
      if (segmentoDibujado) {

        const segmentId = ids.idSegBG; // Obtener el ID del segmento desde la propiedad idSegBG
        brd.removeObject(segmentId, false); // Eliminar el objeto del tablero usando su ID
        // Filtrar los IDs para eliminar el ID del segmento de la lista de IDs
        setIds({
          ...ids,
          idSegBG: '',
        } 
        );
        setSegmentoDibujado(false);

      } else {
        if (ids.idB && ids.idG) {
          // Crea un segmento entre los puntos B y G
          const segmento = brd.create("segment", [ids.idB, ids.idG]);
          // Guarda el ID del segmento en la lista de IDs
          setIds({ ...ids, idSegBG: segmento.id });
          setSegmentoDibujado(true);
        }
      }
    }
  };

  return (
    <div>
      <button onClick={toggleSegmento}>
        {segmentoDibujado ? "Borrar Segmento" : "Trazar Segmento"}
      </button>
    </div>
  );
};

export default SegmentAG;
