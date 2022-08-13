import React from "react";
import "./semaforo.css";
import LuzExtra from "../LuzExtra/LuzExtra.jsx";

const Semaforo = ({

  isGreen,
  activarGreen,
  isRed,
  activarRed,
  isYellow,
  activarYellow,
  isVioleta,
}) => {
  return (
    <>
      <div className="bg-secondary containerSize position-relative">
        <div className="p-2">
          <div
            className={`border luzSize bg-success mx-auto my-2 ${isGreen ? "brillo" : "bg-opacity-50"}`}
            onClick={activarGreen}
          ></div>
          <div
            className={`border luzSize bg-warning mx-auto my-2 ${isYellow ? "brillo" : "bg-opacity-50"}`}
            onClick={activarYellow}
          ></div>
          <div
            className={`border luzSize bg-danger mx-auto my-2 ${isRed ? "brillo" : "bg-opacity-50"}`}
            onClick={activarRed}
          ></div>
        </div>
      </div>
      {isVioleta ? <LuzExtra/> : null}
    </> 
  );
};

export default Semaforo;
