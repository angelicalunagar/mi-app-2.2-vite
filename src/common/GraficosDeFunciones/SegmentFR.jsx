import { useContext, useState } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { SegmentFRContext } from "../../contexts/SegmentFRContext";
import {Button} from "react-bootstrap";

const SegmentFR = ( {boardId} ) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { segDibujado, setSegDibujado, setDibPuntoM } = useContext(SegmentFRContext);

  const toggleSegmento = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (segDibujado) {

        const segmentIdI = ids.idSegFRI; 
        const segmentIdD = ids.idSegFRD; 
        board.removeObject(segmentIdI, false);
        board.removeObject(segmentIdD, false);

        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;

        if (perpendicularToXAxisId) board.removeObject(perpendicularToXAxisId, false);
        if (perpendicularToYAxisId) board.removeObject(perpendicularToYAxisId, false);
      
        setIds((prevIds) => ({
          ...prevIds,
          idSegFRI: '',
          idSegFRD: '',
          idPerpendicularToXAxis: '',
          idPerpendicularToYAxis: '',
        }));

        setSegDibujado(false);
        setDibPuntoM(false);

      } else {
        if (ids.idPuntoA && ids.idPuntoG) {
      
          const segmentoI = board.create("functiongraph", [function(x){ return 2/x;}, -25, -0.03]);
          const segmentoD = board.create("functiongraph", [function(x){ return 2/x;}, 0.03, 25]);
          
          setIds((prevIds) => ({
            ...prevIds,
            idSegFRI: segmentoI.id,
            idSegFRD: segmentoD.id,
          }));

          setSegDibujado(true);
        }
      }
    }
  };

  return (
    <div>
      <Button onClick={toggleSegmento}>
      {segDibujado? "Desunir puntos" : "Unir puntos"}
      </Button>
    </div>
  );
};

export default SegmentFR;
