import React from "react";
import "./luzExtra.css";

const luzExtra = ({ isVioleta }) => {
  return (
    <>
      <div className="bg-secondary containerExtra"
/*       className={`bg-secondary containerExtra ${
          isVioleta ? "visible" : "invisible"
        }`}  */
      >
        <div className="p-2">
          <div className="border mx-auto mt-5 mb-2 luzExtraSize bg-violeta"></div>
        </div>
      </div>
    </>
  );
};

export default luzExtra;
