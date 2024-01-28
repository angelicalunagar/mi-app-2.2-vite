import React, { useEffect, useState } from 'react';
import { JSXGraph } from 'jsxgraph';

const VariacionFunciones2 = () => {
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
      setFunctionExpression(selectedFunc);
      return Function("x", `return ${selectedFunc}`)(x);
    };

    const f = board.create('functiongraph', [
      x => selectedFunction(x)
    ]);

    const gliderA = board.create('glider', [0.6, 1.2, f], { name: 'A', face: 'o', size: 4 });
    const gliderB = board.create('glider', [1.5, 3, f], { name: 'B', face: 'o', size: 4 });
    
    const curve = board.create('curve', [
      () => [gliderA.X(), gliderA.Y()],
      () => [gliderB.X(), gliderB.Y()],
    ], { strokeWidth: 10, strokeColor: 'red' });

    const updateCurve = () => {
      curve.updateDataArray([
        () => [gliderA.X(), gliderA.Y()],
        () => [gliderB.X(), gliderB.Y()],
      ]);
      board.update();
    };

    gliderA.on('drag', updateCurve);
    gliderB.on('drag', updateCurve);

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

export default VariacionFunciones2;
