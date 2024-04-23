// Quiz16.js
import React from "react";
import Quiz from "../GraficosDeFunciones/Quiz";
import { InlineMath } from "react-katex";

const Quiz17 = () => {
  const md = 12;
  const activityNumber = "17";
  const instruction = (
    <span>
      Grafica la función <InlineMath>{"f(x)= 150x−x^2"}</InlineMath> en la
      Ventana gráfica 9 y responde a estas preguntas. Recuerda que por ahora
      estamos considerando a la función dentro del contexto del área del
      terreno.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          ¿Cuánto tiene que medir el lado x para que el área A(x) sea de 3000 m2?
        </span>
      ),
      resps: ["x=23.8", "x=12.5", "x=61"],
      renderInlineMath: true,
    },

    preg2: {
      preg: (
        <span>
          
        ¿Cuánto vale el área cuando el lado x mide 20 m?
        </span>
      ),
      resps: [
        "A(x)=2600",
        "A(x)=200",
        "A(x)=5000",
      ],
      renderInlineMath: false,
    },

    preg3: {
      preg: (
        <span>
          ¿Cuánto vale el área cuando el lado x mide 60 m?
        </span>
      ),
      resps: [
        "A(x)=5400",
        "A(x)=5000",
        "A(x)=5950",
      ],
      renderInlineMath: false,
    },

    preg4: {
      preg: (
        <span>
          Desliza el punto M de manera gradual dentro del intervalo de dominio 20 ≤ x ≤ 60, incrementando x. ¿Cómo varía el área A(x) a medida que el punto M se desplaza?
        </span>
      ),

      resps: ["Va aumentando", "Va disminuyendo", "Siempre es igual"],
      renderInlineMath: true,
    },

    preg5: {
      preg: (
        <span>
          ¿Cómo dirías que es A(x) en el intervalo de dominio 20 ≤ x ≤ 60?
        </span>
      ),

      resps: ["Creciente", "Decreciente", "Constante"],
      renderInlineMath: true,
    },

    preg6: {
      preg: (
        <span>
          ¿En qué intervalo el área A(x) es creciente?
        </span>
      ),

      resps: ["0 ≤ x ≤ 75", "0 ≤ x ≤ 80.5", "20 ≤ x ≤ 120"],
      renderInlineMath: false,
    },

    preg7: {
      preg: (
        <span>
          ¿En qué intervalo el área A(x) es decreciente?
        </span>
      ),

      resps: ["75 ≤ x ≤ 150", "0 ≤ x ≤ 150", "75 ≤ x ≤ 120"],
      renderInlineMath: false,
    },

    preg8: {
      preg: (
        <span>
          ¿Cuál de los siguientes puntos de la función es el punto máximo? Toma en cuenta que punto máximo es aquella pareja (x, f(x)) para la cual f(x) es el máximo valor posible del rango. 
        </span>
      ),

      resps: ["Punto = (75, 5625)", "Punto = (80, 5600)", "Punto = (110, 4400)"],
      renderInlineMath: false,
    },

    preg9: {
      preg: (
        <span>
          ¿Cuáles de los siguientes puntos es uno de los puntos mínimos de la función? Toma en cuenta que punto mínimo es aquella pareja (x, f(x)) para la cual f(x) es el mínimo valor posible del rango. 
        </span>
      ),

      resps: ["Punto = (150, 0)", "Punto = (145, 725)", "Punto = (5, 725)"],
      renderInlineMath: true,
    },

    preg10: {
      preg: (
        <span>
          ¿Cuántos puntos máximos tiene la función?
        </span>
      ),

      resps: [
        'Uno',
        'Dos',
        "Tres",
      ],
      renderInlineMath: false,
    },
  };

  const correctAnswers = {
    preg1: "x=23.8",
    preg2:
      "A(x)=2600",
    preg3:
      "A(x)=5400",
    preg4: "Va aumentando",
    preg5: "Creciente",
    preg6: "0 ≤ x ≤ 75",
    preg7: "75 ≤ x ≤ 150",
    preg8: "Punto = (75, 5625)",
    preg9: "Punto = (150, 0)",
    preg10: 'Dos',
  };

  return (
    <div>
      <Quiz
        activityNumber={activityNumber}
        instruction={instruction}
        questions={questions}
        correctAnswers={correctAnswers}
        md={md}
      />
    </div>
  );
};

export default Quiz17;
