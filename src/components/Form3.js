import React from "react";
// import axios from "axios";

const Form3 = ({ setCurrentform, currentform }) => {
  
  return (
   <>
      <div className="form-row">
        <div className="form-group col-md-2">
          <button
            onClick={(e) => setCurrentform(currentform - 1)}
            className="btn btn-info"
          >
            Precedent
          </button>
        </div>
        <div className="form-group col-md-2">
          <button
            onClick={(e) => setCurrentform(currentform + 1)}
            className="btn btn-info"
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
};

export default Form3;
