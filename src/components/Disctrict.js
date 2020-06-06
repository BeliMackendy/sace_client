import React, { useState } from "react";
import axios from "axios";
import Departement from "./Departement";

const Disctrict = (props) => {
  const [postDistrict, setPostDistrict] = useState([]);

  const url_district = "http://localhost:3001/app/sace/district";

  const District_handler = (e) => {
    const district = postDistrict.filter(function (o) {
      return o.CodeDistrict === e.target.value;
    });

    if (district.length !== 0) {
      props.initBureau(district[0].Disctrict);
    }
  };

  const BIZ_handler = (e) => {
    props.initZone(e.target.value)
  };

  const selectoption_handler = (e, postDepartement) => {
    const departement = postDepartement.filter(function (o) {
      return o.Code_direction === e.target.value;
    });

    if (departement.length !== 0) {
      const Code_direction = departement[0].Code_direction;
      props.initDerpartement(departement[0].Libelle_departement);

      const district = {
        Code_Direction: Code_direction,
      };

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
          <select className="form-control" onChange={District_handler}>
            <option value="0">Choix du District</option>
            {postDistrict.map((post, index) => (
              <option key={index} value={post.CodeDistrict}>
                {post.District}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-md-6">
          <label>Zone scolaire (BIZ)</label>
          <input type="text" className="form-control" onChange={BIZ_handler} />
        </div>
      </div>
    </>
  );
};

export default Disctrict;
