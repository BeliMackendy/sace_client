import React, { useState, useEffect } from "react";

function E_individuelle(props) {
  // const [postfile, setPostfile] = useState();
  // const [postfilename, setPostfilename] = useState();

  const [postInputform, setPostInputform] = useState({
    nom: "",
    prenom: "",
    nif: "",
    cin_nin: "",
    email: "",
    tel: "",
    niveau_acad: "",
    identite: "",
    certificat_sante: "",
    certificat_vie_moeurs: "",
    dd_impots: "",
  });

  useEffect(() => {
    props.InitformIndividuelle(postInputform);
  });

  const Initform = (e) => {
    
    if (e.target.type !== "file") {
      setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
      // props.Initformnomscollectifs(postInputform);
    } else {
      setPostInputform({
        ...postInputform,
        [e.target.name]: e.target.files[0],
      });
      // console.log(postInputform);
      // props.Initformnomscollectifs(postInputform);
    }
  };

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            onChange={Initform}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Prenom</label>
          <input
            type="text"
            name="prenom"
            onChange={Initform}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Nif</label>
          <input
            type="text"
            name="nif"
            onChange={Initform}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label>CIN/NIN</label>
          <input
            type="text"
            name="cin_nin"
            onChange={Initform}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={Initform}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Tel</label>
          <input
            type="text"
            name="tel"
            onChange={Initform}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label>Niveau Academique</label>
          <input
            type="text"
            name="niveau_acad"
            onChange={Initform}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <div className="form-group">
            <label>Pièce Identité</label>
            <input
              type="file"
              name="identite"
              onChange={Initform}
              // value={postInputform.identite}
              // value={postfilename}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Certificat de santé</label>
            <input
              type="file"
              name="certificat_sante"
              onChange={Initform}
              // value={postInputform.certificat_sante}
              // value={postfilename}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="form-group">
            <label>Certificat de bonne vie et mœurs </label>
            <input
              type="file"
              name="certificat_vie_moeurs"
              onChange={Initform}
              // value={postInputform.certificat_vie_moeurs}
              // value={postfilename}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Déclaration définitive d’impôts </label>
            <input
              type="file"
              name="dd_impots"
              onChange={Initform}
              // value={postInputform.dd_impots}
              // value={postfilename}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default E_individuelle;
