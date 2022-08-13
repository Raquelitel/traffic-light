import React from "react";
import "./luzExtra.css";

const luzExtra = ({activarColor, isColor}) => {
  return (
    <>
      <div className="bg-secondary containerExtra">
        <div className="p-3">
          <div 
          id="violeta" 
          className= {`border mx-auto mt-5 mb-2 luzExtraSize bg-violeta ${(isColor === "violeta") ? "brilloExtra" : "bg-opacity-50"}`}
          onClick={activarColor}></div>
        </div>
      </div>
    </>
  );
};

export default luzExtra;

