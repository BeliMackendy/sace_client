import React, { useState, useEffect} from "react";
import axios from "axios";

function Vacation(props) {
    const [postvacation, setPostvacation] = useState([]);
    let url_vacation = "http://localhost:3001/app/sace/vacation";

    useEffect(() => {
      axios
        .get(url_vacation)
        .then((res) => {
          // console.log(res.data);
          setPostvacation(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    });

    return (
      <>
        <div className="form-group">
          <label>Vacation </label>
          <select
            className="form-control"
            onChange={(e) => props.select_vacation_handler(e)}
          >
            <option value="0">Selection Vacation</option>
            {postvacation.map((post, index) => (
              <option key={index} value={post.Id_vacation}>
                {post.libelle_vacation}
              </option>
            ))}
          </select>
        </div>
      </>
    );
}

export default Vacation
