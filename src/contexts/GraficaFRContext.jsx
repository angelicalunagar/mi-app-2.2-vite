import { createContext, useState } from "react";

export const GraficaFRContext = createContext();

export const GraficaFRContextProvider = ({ children }) => {
  const [dibujarGrafica, setDibujarGrafica] = useState(false);
  
  return (
    <GraficaFRContext.Provider value={{ dibujarGrafica, setDibujarGrafica }}>
      {children}
    </GraficaFRContext.Provider>
  );
};