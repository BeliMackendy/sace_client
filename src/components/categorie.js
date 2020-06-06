import React, { useState, useEffect } from "react";
import axios from "axios";

function Categorie(props) {
  const [postcategorie, setPostcategorie] = useState([]);

  let url_categorie = "http://localhost:3001/app/sace/categorie";

  useEffect(() => {
    axios
      .get(url_categorie)
      .then((res) => {
        // console.log(res.data);
        setPostcategorie(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });  

  return (
    <>
      <div className="form-group col-sm-5">
        <label>Catégorie</label>
        <select
          className="form-control"
          onChange={(e)=>props.selectoption_handler(e,postcategorie)}
        >
          <option value="0">Selection Catégorie</option>
          {postcategorie.map((post, index) => (
            <option key={index} value={post.Idcategorie}>
              {post.Libelle_Categorie}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Categorie;
