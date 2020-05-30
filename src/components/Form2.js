import React, { useState } from "react";
import axios from "axios";

import Souscategorie from "./Souscategorie";
import Niveau from "./Niveau";
import Vacation from "./Vacation";
import Programme from "./Programme";
import Publiccible from "./Public_cible";

const Form2 = ({
  setCurrentform,
  currentform,
  form_data1,
  form_data2,
  setFormdata2,
}) => {
  // console.log(form_data1);
  const { dde, bds, biz, date_demande } = form_data1;

  const [postIdCategorie, setPostIdCategorie] = useState();
  const [postIdNiveau, setPostIdNiveau] = useState();
  const [postIdVacation, setPostIdVacation] = useState();
  const [postIdProgramme, setPostIdProgramme] = useState();
  const [postIdPublicCible, setPostIdPublicCible] = useState();

  const [postDenomination, setPostDenomination] = useState();
  const [postAdresse, setPostAdresse] = useState();
  const [postCommune, setPostCommune] = useState();
  const [postSec_communale, setPostSec_communale] = useState();
  const [postTel, setPostTel] = useState();
  const [postEmail, setPostEmail] = useState();


  // const [ouverture, setOuverture] = useState();

  const selectsouscategorie_handler = (e) => {
    setPostIdCategorie(e.target.value);
  };

  const select_niveau_handler = (e) => {
    setPostIdNiveau(e.target.value);
  };

  const select_vacation_handler = (e) => {
    setPostIdVacation(e.target.value);
  };
  const select_programme_handler = (e) => {
    setPostIdProgramme(e.target.value);
  };
  const select_public_cible_handler = (e) => {
    setPostIdPublicCible(e.target.value);
  };

  // console.log(
  //   `Categorie: ${postIdCategorie},Niveau: ${postIdNiveau},Vacation: ${postIdVacation},Programme: ${postIdProgramme}, Public_cible: ${postIdPublicCible}`
  // );
  let url_ouverture = "http://localhost:3001/app/sace/ouverture";

  const submitForm = () => {
    setFormdata2({
      ...form_data2,
      denomination: postDenomination,
      adresse: postAdresse,
      tel: postTel,
      email: postEmail,
      commune: postCommune,
      section_communale: postSec_communale,
      categorie: postIdCategorie,
      typecategorie: "",
      niveau: postIdNiveau,
      vacation: postIdVacation,
      programme: postIdProgramme,
      cible: postIdPublicCible,
    });

    const setformdata = {
      denomination: postDenomination,
      adresse: postAdresse,
      tel: postTel,
      email: postEmail,
      dde: dde,
      commune: postCommune,
      section_communale: postSec_communale,
      bds: bds,
      biz: biz,
      categorie: postIdCategorie,
      typecategorie: "",
      niveau: postIdNiveau,
      vacation: postIdVacation,
      programme: postIdProgramme,
      cible: postIdPublicCible,
      date_demande: date_demande,
    };
    // console.log(setformdata);

    axios
      .post(url_ouverture, setformdata)
      .then((res) => {
        console.log(res.data);
        // setOuverture(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
    // console.log(ouverture);
    setCurrentform(currentform + 1);
  };
  return (
    <>
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
            <label>Dénomination de l'établissement</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPostDenomination(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Adresse</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPostAdresse(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Section communale/localité </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPostSec_communale(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Ville/Commune</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPostCommune(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Tel</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPostTel(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setPostEmail(e.target.value)}
              />
            </div>
          </div>
          <Souscategorie
            selectsouscategorie_handler={selectsouscategorie_handler}
          />
          <Niveau select_niveau_handler={select_niveau_handler} />
          <Vacation select_vacation_handler={select_vacation_handler} />
          <Programme select_programme_handler={select_programme_handler} />
          <Publiccible
            select_public_cible_handler={select_public_cible_handler}
          />
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
          <button onClick={submitForm} className="btn btn-info">
            Suivant
          </button>
        </div>
      </div>
    </>
  );
};

export default Form2;
