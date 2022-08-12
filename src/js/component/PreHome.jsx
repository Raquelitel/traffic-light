import React, { useState } from "react";
import Semaforo from "./Semaforo/Semaforo.jsx";
import Botones from "./Botones/Botones.jsx";

const PreHome = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [isVioleta, setIsVioleta] = useState(false);

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
    setIsVioleta(false);
  };

  const intervalo = () => {
    setInterval(() => {
      setIsGreen(false);
      setIsYellow(false);
      setIsRed(false);
      cambiarColor();
    }, 1000);
  };

  const luzVioleta = () => {
    setIsVioleta(!isVioleta)
  };
  return (
    <>
      <div className="container row mt-5">
        <div className="col-3">
          <Semaforo
            isGreen={isGreen}
            activarGreen={activarGreen}
            isRed={isRed}
            activarRed={activarRed}
            isYellow={isYellow}
            activarYellow={activarYellow}
            isVioleta={isVioleta}
          />
        </div>
        <div className="col-3">
          <Botones
            cambiarColor={cambiarColor}
            intervalo={intervalo}
            apagar={apagar}
            activarVioleta={luzVioleta}
          />
        </div>
      </div>
    </>
  );
};

export default PreHome;
