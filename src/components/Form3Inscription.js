import React from "react";
import axios from "axios";


const Form3Inscription = ({
  setCurrentform,
  currentform,
  setPostConnexion,
  postConnexion,
  postInstitution,
  postDemandeur,
}) => {
  const initform = (e) => {
    setPostConnexion({ ...postConnexion, [e.target.name]: e.target.value });
  };

  let url_ouverture = "http://localhost:3001/app/sace/ouverture";
  let url_addUser = "http://localhost:3001/app/sace/addUser";

  const submitForm = (e) => {
    
    const setformdataInstitution = {
      denomination: postInstitution.denomination,
      adresse: "",
      tel: "",
      email: "",
      dde: postInstitution.dde,
      commune: postInstitution.commune,
      section_communale: postInstitution.section_communale,
      bds: postInstitution.bds,
      biz: postInstitution.biz,
      categorie: "0",
      typecategorie: "0",
      niveau: "0",
      vacation: "0",
      programme: "0",
      cible: "0",
      date_demande: "2020-03-06",
    };

    const setformdatauser = {
      nom:postDemandeur.nom,
      prenom:postDemandeur.prenom,
      tel:postDemandeur.tel,
      email:postDemandeur.email,
      password:postConnexion.password,
      role:"Admin"
    }
   
    axios
    .post(url_addUser, setformdatauser)
    .then((res) => {
      // console.log(res.data);     
    })
    .catch((err) => {
      console.log(err);
    }, []);

    axios
      .post(url_ouverture, setformdataInstitution)
      .then((res) => {
        // console.log(res.data);        
      })
      .catch((err) => {
        console.log(err);
      }, []);

     
    setCurrentform(currentform + 1);
  };

  return (
    <div className="container mainformulaire">
      <div className="row">
        <div className="col-sm-9 col-md-9 col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">Creation de Compte</div>
            <div className="card-body">
              <h5 className="card-title">Information de Connexion</h5>
              <form className="form-signin">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={postDemandeur.email}
                  />
                </div>
                <div className="form-group">
                  <label>Mot de Passe</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={initform}
                  />
                </div>
              </form>
              <button className="btn btn-primary" onClick={submitForm}>
                Terminer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3Inscription;
