import React, { useState, useEffect } from "react";
import axios from "axios";
// import Disctrict from "./Disctrict";

const Departement = (props) => {
  const [postDepartement, setPostDepartement] = useState([]);

  const url_departement = "http://localhost:3001/app/sace/departement";

  useEffect(() => {
    axios
      .get(url_departement)
      .then((res) => {
        // console.log(res.data);
        setPostDepartement(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  // const selectoption_handler = (e) => {
  //   // console.log(e.target.value);
  //   const dep = postDepartement.filter(function (o) {
  //     return o.Code_direction === e.target.value;
  //   });
  //   props.initDerpartement(dep);
  //   // console.log(dep);
  // };

  return (
    <>
      <div className="form-group">
        <label>Direction départementale d’éducation (DDE)</label>
        <select
          className="form-control"
          onChange={(e) => props.selectoption_handler(e, postDepartement)}
        >
          <option value="0">Choix du Departement</option>
          {postDepartement.map((post, index) => (
            <option key={index} value={post.Code_direction}>
              {post.Libelle_departement}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Departement;
