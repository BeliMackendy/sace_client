import React, { useState, useEffect } from "react";
import axios from "axios";

function Public_cible(props) {
  const [postpublic_cible, setPostpublic_cible] = useState([]);
  let url_public_cible = "http://localhost:3001/app/sace/public_cible";

  useEffect(() => {
    axios
      .get(url_public_cible)
      .then((res) => {
        // console.log(res.data);
        setPostpublic_cible(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
      return () => {};
  });

  return (
    <>
      <div className="form-group">
        <label>Public cible </label>
        <select
          className="form-control"
          onChange={(e) => props.select_public_cible_handler(e)}
        >
          <option value="0">Selection Public cible </option>
          {postpublic_cible.map((post, index) => (
            <option key={index} value={post.id_public_cible}>
              {post.libelle_cible}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Public_cible;
