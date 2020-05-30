import React, { useState, useEffect } from "react";
import axios from "axios";

function Public_cible() {
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
    });

    return (
      <>
        <div className="form-group">
          <label>Public cible </label>
          <select className="form-control">
            <option value="0">Selection Public cible </option>
            {postpublic_cible.map((post, index) => (
              <option
                key={index}
                value={post.Id_public_cible}
                // onChange={select_niveau_handler()}
              >
                {post.libelle_cible}
              </option>
            ))}
          </select>
        </div>
      </>
    );
}

export default Public_cible
