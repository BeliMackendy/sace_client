import React, { useState, useEffect } from "react";
import axios from "axios";

function Programme(props) {
  const [postprogramme, setPostprogramme] = useState([]);
  let url_programme = "http://localhost:3001/app/sace/programme";

  useEffect(() => {
    axios
      .get(url_programme)
      .then((res) => {
        // console.log(res.data);
        setPostprogramme(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  return (
    <>
      <div className="form-group">
        <label>Programme</label>
        <select
          className="form-control"
          onChange={(e) => props.select_programme_handler(e)}
        >
          <option value="0">Selection Programme</option>
          {postprogramme.map((post, index) => (
            <option key={index} value={post.Id_programme}>
              {post.libelle_programme}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Programme;
