import { createContext, useState } from "react";

export const SegmentContext = createContext();

export const SegmentContextProvider = ({ children }) => {
  const [dibujarSeg, setDibujarSeg] = useState(false);
  

  return (
    <SegmentContext.Provider value={{ dibujarSeg, setDibujarSeg }}>
      {children}
    </SegmentContext.Provider>
  );
};


