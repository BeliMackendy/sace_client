import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Form3 = ({ setCurrentform, currentform }) => {
  const [postniveau, setPostniveau] = useState([]);
  const [postvacation, setPostvacation] = useState([]);
  // const [postprogramme, setPostprogramme] = useState([]);
  // const [postpublic_cible, setPostpublic_cible] = useState([]);

  let url_niveau = "http://localhost:3001/app/sace/niveau";
  let url_vacation = "http://localhost:3001/app/sace/vacation";

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

  const load_vacation = () => {
    axios
      .get(url_vacation)
      .then((res) => {
        // console.log(res.data);
        setPostvacation(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const select_niveau_handler =(e)=>{  
      load_vacation();
      console.log(postvacation);
  }

  return (
    <Fragment>
      <div className="container">
        <form className="form">
          <div
            style={{
              backgroundColor: "#ADD8E6",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "20px",
              paddingLeft: "10px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            Identification de l'établissement scolaire
          </div>
          <div className="form-group">
            <label>Niveau d’enseignement </label>
            <select className="form-control">
              <option value="0">Selection Niveau</option>
              {postniveau.map((post, index) => (
                <option key={index} value={post.Id_niveau} onChange={select_niveau_handler()}>
                  {post.libelle_niveau}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="form-row">
        <div className="form-group col-md-2">
          <button
            onClick={(e) => setCurrentform(currentform - 1)}
            className="btn btn-info"
          >
            Precedent
          </button>
        </div>
        <div className="form-group col-md-2">
          <button
            onClick={(e) => setCurrentform(currentform + 1)}
            className="btn btn-info"
          >
            Suivant
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Form3;
