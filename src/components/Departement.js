import React, { useState, useEffect } from "react";
import axios from "axios";


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

  // const dde_handler = (e) => {
  //   const departement = postDepartement.filter(function (o) {
  //     return o.Code_direction === e.target.value;
  //   });
  // };

  return (
    <>
      <label>Direction départementale d’éducation (DDE)</label>
      <select className="form-control" name="dde" onChange={(e) => props.selectdepartement_handler(e, postDepartement)}>
        <option value="0">Choix du Departement</option>
        {postDepartement.map((post, index) => (
          <option key={index} value={post.Code_direction}>
            {post.Libelle_departement}
          </option>
        ))}
      </select>
    </>
  );
};

export default Departement;
