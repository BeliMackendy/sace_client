import React, { Fragment, useState } from "react";
import axios from "axios";

const Form1 = ({ setCurrentform, currentform, form_data1, setFormdata1 }) => {
  const { dde, bds, biz, date_demande } = form_data1;

  const [date_creation, setDate_creation] = useState();
  const [departement, setDepartement] = useState();
  const [bureau, setBureau] = useState();
  const [zone, setZone] = useState();
  const [ouverture, setOuverture] = useState();

  let url_ouverture = "http://localhost:3001/app/sace/ouverture";

  const submitForm = () => {
    setFormdata1({
      ...form_data1,
      date_demande: date_creation,
      dde: departement,
      bds: bureau,
      biz: zone,
    });

    // const setformdata = {
    //   dde: departement,
    //   bds: bureau,
    //   biz: zone,
    //   date_demande: date_creation,
    // };
    setCurrentform(currentform + 1);
  };
  //

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
          <div className="form-group">
            <label>Direction départementale d’éducation (DDE)</label>
            <input
              type="text"
              value={departement}
              onChange={(e) => setDepartement(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Bureau District Scolaire (BDS)</label>
              <input
                type="text"
                value={bureau}
                onChange={(e) => setBureau(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label>Zone scolaire (BIZ)</label>
              <input
                type="text"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <button variant="info" className="btn btn-info" onClick={submitForm}>
            Suivant
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form1;
