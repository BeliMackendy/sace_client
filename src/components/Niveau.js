import React, { useState, useEffect} from "react";
import axios from "axios";

function Niveau() {
    const [postniveau, setPostniveau] = useState([]);
    let url_niveau = "http://localhost:3001/app/sace/niveau";

    useEffect(() => {
      axios
        .get(url_niveau)
        .then((res) => {
          // console.log(res.data);
          setPostniveau(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    });

    return (
      <>
        <div className="form-group">
          <label>Niveau d’enseignement </label>
          <select className="form-control">
            <option value="0">Selection Niveau</option>
            {postniveau.map((post, index) => (
              <option
                key={index}
                value={post.Id_niveau}
                // onChange={select_niveau_handler()}
              >
                {post.libelle_niveau}
              </option>
            ))}
          </select>
        </div>
      </>
    );
}

export default Niveau
