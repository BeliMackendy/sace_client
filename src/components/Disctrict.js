import React, { useState, useEffect } from "react";
import axios from "axios";
import Departement from "./Departement";

const Disctrict = () => {
  const [postDistrict, setPostDistrict] = useState([]);

  const url_district = "http://localhost:3001/app/sace/district";
  

  const selectoption_handler = (e, postDepartement) => {
    // console.log(postDepartement);
    const departement = postDepartement.filter(function (o) {
      return o.Code_direction === e.target.value;
    });

    if (departement.length !== 0) {
      const Code_direction = departement[0].Code_direction;

      const district = {
        Code_Direction: Code_direction,
      };
    //   console.log(district);

      axios
        .post(url_district, district)
        .then((res) => {
        //   console.log(res.data);
          setPostDistrict(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }
    
  };

  return (
    <>
      <Departement selectoption_handler={selectoption_handler} />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Bureau District Scolaire (BDS)</label>
          <select className="form-control">
            <option value="0">Choix du District</option>
            {postDistrict.map((post, index) => (
              <option key={index} value={post.District}>
                {post.District}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-md-6">
          <label>Zone scolaire (BIZ)</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    </>
  );
};

export default Disctrict;
