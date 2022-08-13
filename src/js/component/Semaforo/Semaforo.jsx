import React from "react";
import "./semaforo.css";
import LuzExtra from "../LuzExtra/LuzExtra.jsx";

const Semaforo = ({
isColor,
activarColor,
isVioleta

}) => {
  return (
    <>
      <div className="bg-secondary position-relative containerSize">
        <div className="p-2">
          <div id="green"
            className={`border luzSize bg-success mx-auto my-2 ${(isColor === "green") ? "brillo" : "bg-opacity-50"}`}
            onClick={activarColor}
          ></div>
          <div id="yellow"
            className={`border luzSize bg-warning mx-auto my-2 ${(isColor === "yellow") ? "brillo" : "bg-opacity-50"}`}
            onClick={activarColor}
          ></div>
          <div id="red"
            className={`border luzSize bg-danger mx-auto my-2 ${(isColor === "red") ? "brillo" : "bg-opacity-50"}`}
            onClick={activarColor}
          ></div>
        </div>
      </div>
      {isVioleta ? <LuzExtra
      isColor={isColor}
      activarColor={activarColor}/> : null} 
    </> 
  );
};

export default Semaforo;
