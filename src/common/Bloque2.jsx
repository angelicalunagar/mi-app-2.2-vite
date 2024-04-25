import React from "react";
import "../styles/Bloque2.css";
import VarDepYVarIndep from "./VarDepYVarIndep";
import ReglaDeCorrespondencia from "./ReglaDeCorrespondencia/ReglaDeCorrespondencia";
import EvaluarLaReglaDeCorrespon from "./EvaluarLaReglaDeCorrespon";
import ValoresVarIndep from "./ValoresVarIndep";
import ValoresVarDependiente from "./ValoresVarDependiente/ValoresVarDependiente";
import QueEsFuncion from "./QueEsFuncion";
import NomenclaturaFunciones from "./NomenclaturaFunciones";
import FuncionesDosVariables from "./FuncionesDosVariables/FuncionesDosVariables";
import TablaDeFuncion from "./TablaDeFuncion";
/* import GraficosDeFunciones from "./GraficosDeFunciones"; */
import GraficosDeFunciones from "./GraficosDeFunciones/GraficosDeFunciones";
import FuncLineales from "./FuncLineales";
import FuncionesCuadraticas from "./FuncionesCuadraticas/FuncionesCuadraticas";

function Bloque2() {
  return (
    <div className="bloque2-contenedor">
      <div className="h-center">
        <h1>Bloque 2</h1>
        <h2>Funciones</h2>
      </div>
      <VarDepYVarIndep />
      <ReglaDeCorrespondencia />
      <EvaluarLaReglaDeCorrespon />
      <ValoresVarIndep />
      <ValoresVarDependiente />
      <QueEsFuncion />
      <NomenclaturaFunciones />
      <FuncionesDosVariables />
      <TablaDeFuncion />
      {/* <GraficosDeFunciones /> */}
      <GraficosDeFunciones />
      <FuncLineales />
      <FuncionesCuadraticas />
    </div>
  );
}
export default Bloque2;
