import React, { Fragment, useState } from "react";
// import axios from "axios";

const Form1 = ({ setCurrentform, currentform, form_data1, setFormdata1 }) => {
  const { date_creation, departement, bureau, zone } = form_data1;

  const [date_creation_, setDate_creation_] = useState(date_creation);
  const [departement_, setDepartement_] = useState(departement);
  const [bureau_, setBureau_] = useState(bureau);
  const [zone_, setZone_] = useState(zone);

  const submitForm = () => {
    setFormdata1({
      ...form_data1,
      date_creation: date_creation_,
      departement: departement_,
      bureau: bureau_,
      zone: zone_,
    });
    setCurrentform(currentform + 1);
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
            Etape 1: Informations générales
          </div>

          <div className="form-group">
            <label>Date de la demande</label>
            <input
              type="text"
              value={date_creation_}
              onChange={(e) => setDate_creation_(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Direction départementale d’éducation (DDE)</label>
            <input
              type="text"
              value={departement_}
              onChange={(e) => setDepartement_(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Bureau District Scolaire (BDS)</label>
              <input
                type="text"
                value={bureau_}
                onChange={(e) => setBureau_(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label>Zone scolaire (BIZ)</label>
              <input
                type="text"
                value={zone_}
                onChange={(e) => setZone_(e.target.value)}
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
