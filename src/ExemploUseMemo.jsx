import React, { useState, useMemo } from 'react';
import './ExemploUseMemo.css';

function ExemploUseMemo() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);

  // Calcula a soma instantaneamente
  const sum = number1 + number2;

  const [powerBase, setPowerBase] = useState(1);
  const [powerExponent, setPowerExponent] = useState(1);


  const powerResult = useMemo(() => {
    console.log('Calculating power...');
    const future = Date.now() + 1000;
    while (Date.now() < future) {}
    return Math.pow(powerBase, powerExponent);
  },[setPowerExponent, powerBase]);

  return (
    <div className="calculator-container">
      <h1>Calculadora</h1>

      <div className="input-container">
        <label>
          Número 1:
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Número 2:
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="result-container">
        <p>Soma: {sum}</p>
      </div>

      <div className="input-container">
        <label>
          Base:
          <input
            type="number"
            value={powerBase}
            onChange={(e) => setPowerBase(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Expoente:
          <input
            type="number"
            value={powerExponent}
            onChange={(e) => setPowerExponent(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="result-container">
        <p>Potência: {powerResult}</p>
      </div>
    </div>
  );
}

export default ExemploUseMemo;
