import React, { useState, useEffect } from "react";

function Personne_morale(props) {
  const nature = [
    "Congrégation",
    "Mission",
    "Fondation",
    "ONG",
    "Organisation",
    "Autre",
  ];

  const [postInputform, setPostInputform] = useState({    
    denomination: "",
    nature: "",
    reconnaissance: "",
    quitus_patente: "",
  });

  useEffect(() => {
    props.Initformpersonne_morale(postInputform);
  });

  const Initform = (e) => {
    // setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
    // props.Initformpersonne_morale(postInputform);
    if (e.target.type !== "file") {
      setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
      // props.Initformnomscollectifs(postInputform);
    } else {
      setPostInputform({
        ...postInputform,
        [e.target.name]: e.target.files[0],
      });
      // console.log(postInputform);
      // props.Initformnomscollectifs(postInputform);
    }
  };

  return (
    <>
      <div className="form-group">
        <label>Dénomination</label>
        <input
          type="text"
          name="denomination"
          onChange={Initform}
          className="form-control"
        />
      </div>
      {/* <div class="form-group">
        <label>Nature</label>
      </div> */}
      <label>Nature</label>
      <div className="form-group">
        {nature.map((n, index) => (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="nature"
              onChange={Initform}
              value={n}
            />
            <label className="form-check-label">{n}</label>
          </div>
        ))}
      </div>
      <div className="form-row">
        <div class="form-group col-md-3">
          <label>Reconnaissance légale à jour</label>
          <input
            type="file"
            name="reconnaissance"
            onChange={Initform}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-3">
          <label>Quitus fiscal et/ou Patente valide </label>
          <input
            type="file"
            name="quitus_patente"
            onChange={Initform}
            className="form-control"
          />
        </div>
      </div>
    </>
  );
}

export default Personne_morale;
