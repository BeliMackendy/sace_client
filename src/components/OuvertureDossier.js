import React, { useState } from "react";
import Form1Inscription from "./Form1Inscription";
import Form2Inscription from "./Form2Inscription";
import Form3Inscription from "./Form3Inscription";
import DossierEtablissement from "./DossierEtablissement";

const OuvertureDossier = () => {
  const form1data = {
    nom: "",
    prenom: "",
    email: "",
    tel: "",
  };

  const form2_data = {
    denomination: "",
    dde: "",
    commune: "",
    section_communale: "",
    bds: "",
    biz: "",
  };

  const form3_data = {
    password: "",
  };

  const [currentform, setCurrentform] = useState(1);
  const [postDemandeur, setPostDemandeur] = useState(form1data);
  const [postInstitution, setPostInstitution] = useState(form2_data);
  const [postConnexion, setPostConnexion] = useState(form3_data);

  // console.log(postInstitution)

  return (
    <>
      {currentform === 1 ? (
        <>
          <Form1Inscription
            setCurrentform={setCurrentform}
            currentform={currentform}
            setPostDemandeur={setPostDemandeur}
            postDemandeur={postDemandeur}
          />
        </>
      ) : currentform === 2 ? (
        <>
          <Form2Inscription
            setCurrentform={setCurrentform}
            currentform={currentform}
            setPostInstitution={setPostInstitution}
            postInstitution={postInstitution}
          />
        </>
      ) : currentform === 3 ? (
        <>
          <Form3Inscription
            setCurrentform={setCurrentform}
            currentform={currentform}
            setPostConnexion={setPostConnexion}
            postConnexion={postConnexion}
            postInstitution={postInstitution}
            postDemandeur={postDemandeur}
          />
        </>
      ) : (
        <>
        <DossierEtablissement/>
          {/* <Form4 setCurrentform={setCurrentform}  currentform={currentform}  form_data2={form2_data} /> */}
        </>
      )}
    </>
  );
};

export default OuvertureDossier;
