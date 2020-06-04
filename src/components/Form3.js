import React, { useState } from "react";
import Eindividuelle from "./E_individuelle";
import Enomscollectifs from "./E_nomscollectifs";
import Personnemorale from "./Personne_morale";

import axios from "axios";

const Form3 = ({ setCurrentform, currentform ,form_data2} ) => {
  // console.log(form_data2);
  const fondateur = [
    "Entreprise individuelle",
    "Entreprise en noms collectifs",
    "Personne morale",
  ];

  const [postfondateur, setPostfondateur] = useState();
  const [postformfondateur, setPostformfondateur] = useState();

  const InitformIndividuelle = (i) => {
    setPostformfondateur(i);
  };
  const Initformnomscollectifs = (i) => {
    setPostformfondateur(i);
  };
  const Initformpersonne_morale = (i) => {
    setPostformfondateur(i);
  };

  const form_fondateur = () => {
    if (postfondateur === "Entreprise individuelle")
      return <Eindividuelle InitformIndividuelle={InitformIndividuelle} />;
    if (postfondateur === "Entreprise en noms collectifs")
      return (
        <Enomscollectifs Initformnomscollectifs={Initformnomscollectifs} />
      );
    if (postfondateur === "Personne morale")
      return (
        <Personnemorale Initformpersonne_morale={Initformpersonne_morale} />
      );
  };

  const select_fondateur_handler = (e) => {
    if (e.target.value === "Entreprise individuelle")
      setPostfondateur(e.target.value);
    if (e.target.value === "Entreprise en noms collectifs")
      setPostfondateur(e.target.value);
    if (e.target.value === "Personne morale") setPostfondateur(e.target.value);
  };

  const sendData = (url, data) => {
    // console.log(data);
    axios
      .post(url, data, { header: { "Content-Type": "multipart/form-data" } })
      .then((res) => {
        console.log(res.data);
        // setOuverture(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const submitForm = () => {
    console.log(postformfondateur);
    const url_ent_individuelle =
      "http://localhost:3001/app/sace/entreprise_individuelle";
    const url_ent_nomscollectif =
      "http://localhost:3001/app/sace/entreprise_nomscollectifs";
    const url_personne_morale =
      "http://localhost:3001/app/sace/personne_morale";
    const formData = new FormData();
    if (postfondateur === "Entreprise individuelle") {
      formData.append("id", form_data2.Id_institution);
      formData.append("nom", postformfondateur.nom);
      formData.append("prenom", postformfondateur.prenom);
      formData.append("nif", postformfondateur.nif);
      formData.append("cin_nin", postformfondateur.cin_nin);
      formData.append("email", postformfondateur.email);
      formData.append("tel", postformfondateur.tel);
      formData.append("niveau_acad", postformfondateur.niveau_acad);
      formData.append("identite", postformfondateur.identite);
      formData.append("certificat_sante", postformfondateur.certificat_sante);
      formData.append(
        "certificat_vie_moeurs",
        postformfondateur.certificat_vie_moeurs
      );
      formData.append("dd_impots", postformfondateur.dd_impots);

      sendData(url_ent_individuelle, formData);
    }
    if (postfondateur === "Entreprise en noms collectifs") {
      formData.append("id", form_data2.Id_institution);
      formData.append("denomination", postformfondateur.denomination);
      formData.append("nature", postformfondateur.nature);
      formData.append("acte_constitutif", postformfondateur.acte_constitutif);
      formData.append("reconnaissance", postformfondateur.reconnaissance);
      formData.append("copie_p_identite", postformfondateur.copie_p_identite);
      sendData(url_ent_nomscollectif, formData);
    }
    if (postfondateur === "Personne morale") {
      formData.append("id", form_data2.Id_institution);
      formData.append("denomination", postformfondateur.denomination);
      formData.append("nature", postformfondateur.nature);
      formData.append("reconnaissance", postformfondateur.reconnaissance);
      formData.append("quitus_patente", postformfondateur.quitus_patente);
      sendData(url_personne_morale, formData);      
      
    }
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
            Informations générales
          </div>
          <div className="form-group">
            <label>Choix du fondateur/fondatrice </label>
            <select
              className="form-control"
              onChange={select_fondateur_handler}
            >
              <option value="0">Selection Catégorie</option>
              {fondateur.map((post, index) => (
                <option key={index} value={post}>
                  {post}
                </option>
              ))}
            </select>
          </div>
          {form_fondateur()}
        </form>
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
      </div>
    </>
  );
};

export default Form3;
