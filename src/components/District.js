import React, { useState } from "react";
import axios from "axios";
import Departement from "./Departement";

const Disctrict = (props) => {
  const [postDistrict, setPostDistrict] = useState([]);
  const [postSectionCommunale, setPostSectionCommunale] = useState([]);
  const [postCommune, setPostCommune] = useState([]);

  const url_district = "http://localhost:3001/app/sace/district";
  const url_section_communale =
    "http://localhost:3001/app/sace/section_communale";
  const url_commune = "http://localhost:3001/app/sace/commune_departement";

  const District_handler = (e) => {
    const district = postDistrict.filter(function (o) {
      return o.CodeDistrict === e.target.value;
    });

    if (district.length !== 0) {
      props.initform(e.target.name,district[0].District);
      // props.setBureau(district[0].District);  
      
    }
  };

  const BIZ_handler = (e) => {
    props.initform(e.target.name,e.target.value);
  };
  
  const seccommunale_handler = (e) => {
    props.initform(e.target.name,e.target.value);
  };

  const commune_handler = (e) => {
    const commune = postCommune.filter(function (o) {
      return o.Code_Commune === e.target.value;
    });

    if (commune.length !== 0) {
      props.initform(e.target.name,commune[0].Libelle_Commune);
      // props.setCommune(commune[0].Libelle_Commune);
      const comm = {
        Code_Com: commune[0].Code_Commune,
      };
      axios
        .post(url_section_communale, comm)
        .then((res) => {
          // console.log(res.data);
          setPostSectionCommunale(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }
  };  

  const selectdepartement_handler = (e, postDepartement) => {
    const departement = postDepartement.filter(function (o) {
      return o.Code_direction === e.target.value;
    });
    // console.log(e.target.value);
    if (departement.length !== 0) {
      const Code_direction = departement[0].Code_direction;
      props.initform(e.target.name,departement[0].Libelle_departement);
      // props.setDepartement(departement[0].Libelle_departement);

      // --------------  District ----------
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

      // --------------  Commune ----------
      const commune = {
        Code_Direction: Code_direction,
      };
     
      axios
        .post(url_commune, commune)
        .then((res) => {
          // console.log(res.data);
          setPostCommune(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }
  };

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-6">
          <Departement selectdepartement_handler={selectdepartement_handler} />
        </div>
        <div className="form-group col-md-6">
          <label>Bureau District Scolaire (BDS)</label>
          <select className="form-control" name="bds" onChange={District_handler}>
            <option value="0">Choix du District</option>
            {postDistrict.map((post, index) => (
              <option key={index} value={post.CodeDistrict}>
                {post.District}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Ville/Commune</label>
          <select className="form-control" name="commune" onChange={commune_handler}>
            <option value="0">Choix du Cummune</option>
            {postCommune.map((post, index) => (
              <option key={index} value={post.Code_Commune}>
                {post.Libelle_Commune}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Section Communale</label>
          <select className="form-control" name="section_communale" onChange={seccommunale_handler}>
            <option value="0">Choix Section Communale</option>
            {postSectionCommunale.map((post, index) => (
              <option key={index} value={post.LibelleSec}>
                {post.LibelleSec}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Zone scolaire (BIZ)</label>
          <input type="text" className="form-control" name="biz" onChange={BIZ_handler} />
        </div>
      </div>
    </>
  );
};

export default Disctrict;
