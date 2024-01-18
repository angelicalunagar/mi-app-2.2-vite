//GraficoArrastrePuntos.jsx
import React, { useEffect } from 'react';
import JXG from 'jsxgraph';

const GraficoArrastrePuntos = () => {
  useEffect(() => {
    // Inicializar el tablero
    const board = JXG.JSXGraph.initBoard('jsxgraph-container', { boundingbox: [-4, 7, 4, -5], axis: true });

    // Definir los puntos A, B, C
    const puntoA = board.create('point', [-2, -4], { name: 'A', size: 3, color: 'blue', fixed: true });
    const puntoB = board.create('point', [-1, -2], { name: 'B', size: 3, color: 'blue', fixed: true });
    const puntoC = board.create('point', [0, 0], { name: 'C', size: 3, color: 'blue', fixed: true});

    // Definir las coordenadas objetivo de los puntos D, E, Fx
    const coordsObjetivo = {
      D: { x: 1, y: 2 },
      E: { x: 2, y: 4 },
      F: { x: 3, y: 6 },
    };

    // Crear puntos D, E, F en la esquina superior izquierda
    const puntoD = board.create('point', [-3, 5], { name: 'D', size: 3, color: 'orange' });
    const puntoE = board.create('point', [-3, 4], { name: 'E', size: 3, color: 'orange' });
    const puntoF = board.create('point', [-3, 3], { name: 'F', size: 3, color: 'orange' });

    // Función para manejar el arrastre de puntos D, E, F
    const handleDragMove = (punto) => {
      const puntoArrastrado = punto.name;
      const coordsArrastrado = punto.coords.usrCoords;
      //console.log(coordsArrastrado);

      // Verificar si el punto se acerca a las coordenadas objetivo
      const distancia = Math.sqrt(
        Math.pow(coordsObjetivo[puntoArrastrado].x - coordsArrastrado[1], 2) +
          Math.pow(coordsObjetivo[puntoArrastrado].y - coordsArrastrado[2], 2)
      );

      // Si la distancia es menor que un umbral, acercar automáticamente el punto a las coordenadas objetivo
      const umbral = 0.5;
      if (distancia < umbral) {
        punto.moveTo([coordsObjetivo[puntoArrastrado].x, coordsObjetivo[puntoArrastrado].y], 0);
        //punto.setAttribute({ fixed: true });
      }
    };

    // Función para manejar el evento cuando se suelta el punto arrastrado
    const handleDragEnd = (punto) => {
      const puntoArrastrado = punto.name;
      const coordsArrastrado = punto.coords.usrCoords;

      // Verificar si el punto se soltó en la coordenada correcta
      if (
        coordsArrastrado[1] === coordsObjetivo[puntoArrastrado].x &&
        coordsArrastrado[2] === coordsObjetivo[puntoArrastrado].y
      ) {
        // Si es correcto, dejar el punto en su lugar
        punto.setAttribute({ fixed: true });
      } else {
        // Si es incorrecto, devolver el punto a la esquina superior izquierda
        punto.moveTo([-3, 5 - Object.keys(coordsObjetivo).indexOf(puntoArrastrado)], 0);
      }
    };

    // Agregar manejadores de eventos de arrastre para los puntos D, E, F
    puntoD.on('drag', () => handleDragMove(puntoD));
    puntoE.on('drag', () => handleDragMove(puntoE));
    puntoF.on('drag', () => handleDragMove(puntoF));

    puntoD.on('up', () => handleDragEnd(puntoD));
    puntoE.on('up', () => handleDragEnd(puntoE));
    puntoF.on('up', () => handleDragEnd(puntoF));

    // Limpiar al desmontar el componente
    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <div id="jsxgraph-container" className="border" style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export default GraficoArrastrePuntos;