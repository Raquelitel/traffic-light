import React, { useEffect, useState } from "react";
import "./semaforo.css";

const Semaforo = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const activarGreen = () => {
    setIsGreen(!isGreen);
    setIsYellow(false);
    setIsRed(false);
  };

  const activarYellow = () => {
    setIsGreen(false);
    setIsYellow(!isYellow);
    setIsRed(false);
  };

  const activarRed = () => {
    setIsGreen(false);
    setIsYellow(false);
    setIsRed(!isRed);
  };

  const cambiarColor = () => {
    !isGreen ? setIsGreen(activarGreen) : null;
    isGreen ? setIsYellow(activarYellow) : null;
    isYellow ? setIsRed(activarRed) : null;
  };

  const apagar = () => {
    setIsGreen(false);
    setIsYellow(false);
    setIsRed(false);
  };

  const intervalo = () => {
    setInterval(() => {
      cambiarColor();
    }, 1000);
  };

  const luzVioleta = () => {
    console.log("violeta");
  };

  return (
    <div className="row">
      <div className="p-2">
        <div
          className={
            isGreen
              ? "border luzSize bg-success mx-auto my-2 brillo"
              : "border luzSize bg-success mx-auto my-2 bg-opacity-50"
          }
          onClick={activarGreen}
        ></div>
        <div
          className={
            isYellow
              ? "border luzSize bg-warning mx-auto my-2 brillo"
              : "border luzSize bg-warning mx-auto my-2 bg-opacity-50"
          }
          onClick={activarYellow}
        ></div>
        <div
          className={
            isRed
              ? "border luzSize bg-danger mx-auto my-2 brillo"
              : "border luzSize bg-danger mx-auto my-2 bg-opacity-50"
          }
          onClick={activarRed}
        ></div>
      </div>
      <button
        type="button"
        className="btn btn-info text-capitalize my-2"
        onClick={cambiarColor}
      >
        cambiar
      </button>
      <button
        type="button"
        className="btn text-capitalize my-1 bg-esmeralda"
        onClick={intervalo}
      >
        automático
      </button>
      <button
        type="button"
        className="btn btn-danger text-capitalize my-1"
        onClick={apagar}
      >
        apagar
      </button>
      <button
        type="button"
        className="btn text-capitalize my-1 bg-violeta"
        onClick={luzVioleta}
      >
        añadir
      </button>
    </div>
  );
};

export default Semaforo;
