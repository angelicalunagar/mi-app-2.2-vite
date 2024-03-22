import { useContext} from "react";
import { BoardContext } from "../contexts/BoardContext";
import { SegmentContext } from "../contexts/SegmentContext";

const SegmentAG = () => {
  const { brd, ids, setIds } = useContext(BoardContext);
const {dibujarSeg, setDibujarSeg} = useContext(SegmentContext);

  const toggleSegmento = () => {
    if (brd !== null) {
      if (dibujarSeg) {

        const segmentId = ids.idSegBG; // Obtener el ID del segmento desde la propiedad idSegBG
        brd.removeObject(segmentId, false); // Eliminar el objeto del tablero usando su ID
     
        setIds({
          ...ids,
          idSegBG: '',
        } 
        );
        setDibujarSeg(false);

      } else {
        if (ids.idPuntoA && ids.idPuntoG) {
          // Crea un segmento entre los puntos B y G
          const segmento = brd.create("segment", [ids.idPuntoA, ids.idPuntoG]);
          // Guarda el ID del segmento en la lista de IDs
          setIds(prevIds=>({
            ...prevIds,
            idSegBG: segmento.id
          }));


          setDibujarSeg(true);
        }
      }
    }
  };

  return (
    <div>
      <button onClick={toggleSegmento}>
        {dibujarSeg ? "Borrar Segmento" : "Trazar Segmento"}
      </button>
    </div>
  );
};

export default SegmentAG;
