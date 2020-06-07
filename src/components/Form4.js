import React, { useState } from "react";
import axios from "axios";

const Form4 = ({ setCurrentform, currentform,form_data2 }) => {
  const [postDocuments, setPostDocuments] = useState({
    lettre_demande: "",
    titre_propriete: "",
    photos: "",
    autorisation_mairie: "",
    projet_ecole: "",
  });

  const Initform = (e) => {
    if (e.target.type !== "file") {
      setPostDocuments({ ...postDocuments, [e.target.name]: e.target.value });
      // props.Initformnomscollectifs(postInputform);
    } else {
      setPostDocuments({
        ...postDocuments,
        [e.target.name]: e.target.files[0],
      });
      // console.log(postInputform);
      // props.Initformnomscollectifs(postInputform);
    }
  };

  const sendData = (url, data) => {
    // console.log(data);
    axios
      .post(url, data, { header: { "Content-Type": "multipart/form-data" } })
      .then((res) => {
        // console.log(res.data);
        // setOuverture(res.data);
        // setCurrentform(currentform + 1);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };
  const submitForm = () => {
    // console.log(postformfondateur);
    const url_documents_soumettre =
      "http://localhost:3001/app/sace/documents_soumettre";

    const formData = new FormData();

    // formData.append("id", form_data2.Id_institution);
    formData.append("id", form_data2.Id_institution);
    formData.append("lettre_demande", postDocuments.lettre_demande);
    formData.append("titre_propriete", postDocuments.titre_propriete);
    formData.append("photos", postDocuments.photos);
    formData.append("autorisation_mairie", postDocuments.autorisation_mairie);
    formData.append("projet_ecole", postDocuments.projet_ecole);

    sendData(url_documents_soumettre, formData);
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <div className="bar_etape">Autres documents à soumettre</div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="form-group">
                <label>
                  Accusé de réception de la lettre demande d’ouverture
                </label>
                <input
                  type="file"
                  name="lettre_demande"
                  className="form-control"
                  onChange={Initform}
                />
              </div>
              <div className="form-group">
                <label>
                  Titre de propriété ou Bail à ferme (pour 5 ans au moins) ; Si
                  en construction : autorisation et plan de construction 
                </label>
                <input
                  type="file"
                  name="titre_propriete"
                  className="form-control"
                  onChange={Initform}
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="form-group">
                <label>Photos (4 façades) du local</label>
                <input
                  type="file"
                  name="photos"
                  className="form-control"
                  onChange={Initform}
                />
              </div>
              <div className="form-group">
                <label>
                  Projet d’école incluant le fonds de garantie ou preuve de
                  fonds espérés ou partenaire de financement et autres
                </label>
                <input
                  type="file"
                  name="autorisation_mairie"
                  className="form-control"
                  onChange={Initform}
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="form-group">
                <label>Autorisation de la Mairie</label>
                <input
                  type="file"
                  name="projet_ecole"
                  className="form-control"
                  onChange={Initform}
                />
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={submitForm}
          className="btn btn-info"
        >
          Terminer
        </button>
        {/* <button onClick={(e) => setCurrentform(currentform + 1)}>suivant</button> */}
      </div>
    </>
  );
};

export default Form4;
