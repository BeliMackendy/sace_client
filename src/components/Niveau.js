import React, { useState, useEffect} from "react";
import axios from "axios";

function Niveau(props) {
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
        }
        , []);
        return () => {};
        
    });

    return (
      <>
        <div className="form-group">
          <label>Niveau d’enseignement </label>
          <select
            className="form-control"
            onChange={(e) => props.select_niveau_handler(e)}
          >
            <option value="0">Selection Niveau</option>
            {postniveau.map((post, index) => (
              <option key={index} value={post.Id_niveau}>
                {post.libelle_niveau}
              </option>
            ))}
          </select>
        </div>
      </>
    );
}

export default Niveau
