import React, { useEffect, useState } from 'react';
import { JSXGraph } from 'jsxgraph';

const VariacionFunciones = () => {
  const [functionExpression, setFunctionExpression] = useState('');
  const [selectedFunc, setSelectedFunc] = useState('2 * x');
  
  const handleFuncChange = (e) => {
    setSelectedFunc(e.target.value);
  };

  useEffect(() => {
    const board = JSXGraph.initBoard('variation-container', {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      pan: {
        needShiftToPan: true,
        enabled: true,
      },
      showcopyright: false,
    });

    const selectedFunction = (x) => {
      setFunctionExpression(selectedFunc); // Actualiza la expresión de la función
      return Function("x", `return ${selectedFunc}`)(x);
    };

    const f = board.create('functiongraph', [
      x => selectedFunction(x)
    ]);
/* 
    // Actualizar la función cuando cambia la función seleccionada
    f.updateCurve(() => [x => selectedFunction(x)]);
 */
    // Crear los puntos A y B
    const gliderA = board.create('glider', [0.6, 1.2, f], { name: 'A'});
    const gliderB = board.create('glider', [1.5, 3, f], { name: 'B' });

    const areaX = board.create('polygon', [
      function(){return [gliderA.X(), 0];},
      function(){return [gliderA.X(), gliderA.Y()]},
      function(){return [gliderB.X(), gliderB.Y()]},
      function(){return [gliderB.X(), 0]},
    ], { fillColor: 'rgba(0, 0, 255, 0.5)', fixed: true });

    const areaY = board.create('polygon', [
      function(){return[0, gliderA.Y()]},
      function(){return[gliderA.X(), gliderA.Y()]},
      function(){return[gliderB.X(), gliderB.Y()]},
      function(){return[0, gliderB.Y()]}  
    ], { fillColor: 'rgba(255, 165, 0, 0.5)', fixed: true });

    // Ocultar los vértices de los polígonos
    areaX.vertices.forEach(v => v.setAttribute({ visible: false }));
    areaY.vertices.forEach(v => v.setAttribute({ visible: false }));

        // Función para actualizar las áreas cuando los puntos A y B se mueven
        const updateAreas = () => {
          areaX.vertices[0].moveTo([gliderA.X(), 0]);
          areaX.vertices[1].moveTo([gliderA.X(), gliderA.Y()]);
          areaX.vertices[2].moveTo([gliderB.X(), gliderB.Y()]);
          areaX.vertices[3].moveTo([gliderB.X(), 0]);
    
          areaY.vertices[0].moveTo([0, gliderA.Y()]);
          areaY.vertices[1].moveTo([gliderA.X(), gliderA.Y()]);
          areaY.vertices[2].moveTo([gliderB.X(), gliderB.Y()]);
          areaY.vertices[3].moveTo([0, gliderB.Y()]);
    
          board.update();
        };
    
        // Actualizar las áreas cuando los puntos A y B se mueven
        gliderA.on('drag', updateAreas);
        gliderB.on('drag', updateAreas);


  }, [selectedFunc]);

  return (
    <div className='variation-container'>
       <div>
        <label htmlFor="selectFunction">Selecciona una función:</label>
        <select id="selectFunction" value={selectedFunc} onChange={handleFuncChange}>
          <option value="x">f(x) = x</option>
          <option value="2 * x">f(x) = 2x</option>
          <option value="10 * x">f(x) = 10x</option>
          <option value="x ** 2">f(x) = x^2</option>
          <option value="2 * x ** 2">f(x) = 2x^2</option>
          <option value="10 * x ** 2">f(x) = 10x^2</option>
        </select>
      </div>
      <div>
        <p>Función seleccionada: {functionExpression}</p>
      </div>
      <div id="variation-container" className='jxgbox color-marco' style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default VariacionFunciones;
