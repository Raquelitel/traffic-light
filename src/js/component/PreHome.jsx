import React, { useEffect, useState } from "react";
import Semaforo from "./Semaforo/Semaforo.jsx";
import Botones from "./Botones/Botones.jsx";

const PreHome = () => {

  const [isGreen, setIsGreen] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [isVioleta, setIsVioleta] = useState(false);
  const [isBotonAdd, setIsBotonAdd] = useState("Añadir");
  const [isIntervalo, setIsIntervalo] = useState(false);

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

/*     if(isGreen) {
      setIsGreen(activarGreen)
      return 
    } if {

    } */
    !isGreen ? setIsGreen(activarGreen) : null; 
    console.log("linea 1");
    isGreen ? setIsYellow(activarYellow) : null; 
    console.log("linea 2");
    isYellow ? setIsRed(activarRed) : null;
    console.log("linea 3");
    console.log(isGreen, isYellow, isRed);
  }; 

  const apagar = () => {
    setIsGreen(false);
    setIsYellow(false);
    setIsRed(false);
    setIsVioleta(false);
  };


/* 
useEffect(()=>{
  let pepito;
  if(isIntervalo) {
  pepito = setInterval(() => {cambiarColor(); }, 1000)

  } else {clearInterval(pepito)}

  return clearInterval(pepito)



},[isIntervalo]) */
  


    const intervalo = () => {
      setIsIntervalo(!isIntervalo);
  
      {isIntervalo ? (setInterval(() => {cambiarColor(); }, 3000)) : null}
      console.log(isIntervalo)
    };



  const luzVioleta = () => {
    setIsVioleta(!isVioleta);
    {
      !isVioleta ? setIsBotonAdd("quitar") : setIsBotonAdd("añadir");
    }
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
            botonAdd={isBotonAdd}
          />
        </div>
      </div>
    </>
  );
};

export default PreHome;
