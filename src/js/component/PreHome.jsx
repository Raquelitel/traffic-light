import React, { useEffect, useState } from "react";
import Semaforo from "./Semaforo/Semaforo.jsx";
import Botones from "./Botones/Botones.jsx";

const PreHome = () => {
  const [isColor, setIsColor] = useState("");
  const [isBotonAdd, setIsBotonAdd] = useState("Añadir");
  const [isVioleta, setIsVioleta] = useState(false);
  const [isAutomatico, setIsAutomatico] = useState(false);

  const colorLight = ["green", "yellow", "red"];

  const activarColor = (e) => {
    if (isColor === "") {
      const clicked = e.target.id;
      setIsColor(clicked);
    } else {
      setIsColor("");
    }
  };

  const cambiarColor = () => {
    colorLight.forEach((color, i) => {
      if (isColor === "green") {
        setIsColor("yellow") 
      } else if (isColor === "yellow") {
        setIsColor("red") 
      } else {setIsColor("green")}
    });
  };

  const apagar = () => {
    setIsColor("");
  };

  const luzVioleta = () => {
    setIsVioleta(!isVioleta);
    {
      !isVioleta ? setIsBotonAdd("quitar") : setIsBotonAdd("añadir");
    }
  };

  /*   useEffect(() => {
    if (isAutomatico) {
      let colorId = 0;
      const colorLight = ["green", "yellow", "red"];
      setInterval(() => {
        if (colorId <= colorLight.length) {
          setIsColor(colorLight(colorId));
        } 
      }, 1000);
    }
  }, [isAutomatico]);
 */
  const colorAutomatico = () => {
    let colorId = 0;
    setInterval(() => {
      if (colorId <= colorLight.length) {
        setIsColor(colorLight[colorId]);
        colorId++;
      } else {
        return false;
      }
    }, 1000);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div>
          <Semaforo
            isColor={isColor}
            activarColor={activarColor}
            isVioleta={isVioleta}
          />
        </div>
        <div>
          <Botones
            cambiarColor={cambiarColor}
            automatico={colorAutomatico}
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
