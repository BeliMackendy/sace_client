import React, { Fragment, useState, useEffect } from "react";
import Disctrict from "./Disctrict";


const Form1 = ({ setCurrentform, currentform, form_data1, setFormdata1 }) => {
  const [date_creation, setDate_creation] = useState();
  const [departement, setDepartement] = useState();
  const [bureau, setBureau] = useState();
  const [zone, setZone] = useState();

  const submitForm = () => {
    setFormdata1({
      ...form_data1,
      date_demande: date_creation,
      dde: departement,
      bds: bureau,
      biz: zone,
    });
    setCurrentform(currentform + 1);
  }; //

  useEffect(() => {});

  const initDerpartement = (dep) => {
    setDepartement(dep);
  };
  const initBureau = (bureau) => {
    setBureau(bureau);
  };
  const initZone = (zon) => {
    setZone(zon);
  };
  

  return (
    <Fragment>
      <div className="container">
        <form className="form">
          <div
            style={{
              backgroundColor: "#ADD8E6",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "20px",
              paddingLeft: "10px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            Informations générales
          </div>

          <div className="form-group">
            <label>Date de la demande</label>
            <input
              type="date"
              value={date_creation}
              onChange={(e) => setDate_creation(e.target.value)}
              className="form-control"
            />
          </div>
          <Disctrict
            initDerpartement={initDerpartement}
            initBureau={initBureau}
            initZone={initZone}
          />
        </form>
        <button variant="info" className="btn btn-info" onClick={submitForm}>
          Suivant
        </button>
      </div>
    </Fragment>
  );
};

export default Form1;
