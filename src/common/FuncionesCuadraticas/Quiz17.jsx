// Quiz17.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
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
      preg: <span>¿Cuál es la imagen de x=40?</span>,
      resps: ["4400", "5000", "40", "870"],
      renderInlineMath: true,
    },

    preg2: {
      preg: <span>¿Qué significa que la imagen de x=50 sea 5000?</span>,
      resps: [
        <span>
          Cuando el lado x mide 50 m, el área es de
          5000 <InlineMath>m^2</InlineMath>
        </span>,
        <span>
          Cuando el lado <InlineMath>y</InlineMath> mide 50 m, el área es de
          5000 <InlineMath>m^2</InlineMath>
        </span>,
        <span>
          El área es de 50 <InlineMath>m^2</InlineMath> cuando el lado mide 5000
          m
        </span>,
      ],
      renderInlineMath: false,
    },

    preg3: {
      preg: (
        <span>
          ¿Cuánto vale <InlineMath>x</InlineMath> si su imagen es 3500{" "}
          <InlineMath>m^2</InlineMath>?
        </span>
      ),
      resps: ["x=28.9", "x=31.2", "x=60"],
      renderInlineMath: true,
    },

    preg4: {
      preg: <span>¿Qué valor es más grande f(55) o f(125)?</span>,

      resps: [
        <span>
          <InlineMath>f(55)</InlineMath>
        </span>,
        <span>
          <InlineMath>f(125)</InlineMath>{" "}
        </span>,
        "Valen lo mismo",
      ],
      renderInlineMath: false,
    },
  };

  const correctAnswers = {
    preg1: "4400",
    preg2: (
      <span>
        Cuando el lado <InlineMath>x</InlineMath> mide 50 m, el área es de 5000{" "}
        <InlineMath>m^2</InlineMath>"
      </span>
    ),
    preg3: "x=28.9",
    preg4: (
      <span>
        <InlineMath>f(55)</InlineMath>
      </span>
    ),
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
