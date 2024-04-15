// Quiz1.js
import React from "react";
import Quiz from "./Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz1 = () => {
  const activityNumber = "16";
  const instruction = (
    <span>
      En la ventana gráfica 7 hemos graficado{" "}
      <InlineMath>f(x)=8.5x+30</InlineMath>. Modifica el coeficiente de x, al
      cual denotaremos con m, y el término independiente, denotado con b.
      Observa cómo se modifica la gráfica de la función y contesta las
      siguientes preguntas:
    </span>
  );
  const correctAnswers = {
    preg1: "Disminuyó",
    preg2: "Cambió su dirección",
    preg3:
      "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
    preg4:
      "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
  };

  const questions = {
    preg1: {
      preg: "Mueve el coeficiente m para que valga 2. ¿Qué sucedió con la inclinación de la recta?",
      resps: ["Aumentó", "Disminuyó", "Permaneció igual"],
    },
    preg2: {
      preg: "Mueve el coeficiente m para que valga -2. ¿Qué sucedió con la inclinación de la recta con respecto a la anterior?",
      resps: ["Cambió su dirección", "Permaneció igual", "Aumentó"],
    },

    preg3: {
      preg: "Siempre que el coeficiente m es positivo, la recta:",
      resps: [
        "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
        "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
        "No es creciente ni decreciente (horizontal).",
      ],
    },
    preg4: {
      preg: "Siempre que el coeficiente m es negativo, la recta:",
      resps: [
        "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
        "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
        "No es creciente ni decreciente (horizontal).",
      ],
    },
  };

  return (
    <div>
      <Quiz
        activityNumber={activityNumber}
        instruction={instruction}
        questions={questions}
        correctAnswers={correctAnswers}
      />
    </div>
  );
};

export default Quiz1;
