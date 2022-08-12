import React from "react";

const Botones = ({cambiarColor, intervalo, apagar, activarVioleta}) => {
  return (
    <div className="container row">
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
        onClick={activarVioleta}
      >
        añadir
      </button>
    </div>
  );
};

export default Botones