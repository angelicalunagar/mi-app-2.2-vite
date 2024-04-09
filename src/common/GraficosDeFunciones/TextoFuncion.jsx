import React from "react";
import { FuncLinealContext } from "../../contexts/FuncLinealContext";
import { useContext } from "react";

const TextoFuncion = () => {
  const { intercept, slope } = useContext(FuncLinealContext);

  return (
    
      <p>
        f(x) = {intercept} + {slope}x
      </p>
    
  );
};

export default TextoFuncion;
