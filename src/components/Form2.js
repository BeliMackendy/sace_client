import React, {  Fragment } from "react";
// import axios from "axios";

import Souscategorie from "./Souscategorie";
import Niveau from "./Niveau";
import Vacation from "./Vacation";
import Programme from "./Programme";
import Publiccible from "./Public_cible";

const Form2 = ({ setCurrentform, currentform }) => {
  // const [postIdCategorie, setPostIdCategorie] = useState(1);

  const selectsouscategorie_handler = (e) => {
    // console.log(e.target.value);
    // setPostIdCategorie(e.target.value);
    // console.log(postIdCategorie);
    // load_niveau();
    return e.target.value;
  };

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
            <label>Dénomination de l'établissement</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Adresse</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Section communale/localité </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Ville/Commune</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label>Tel</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <Souscategorie
            selectsouscategorie_handler={selectsouscategorie_handler}
          />
          {/* {selectsouscategorie_handler} */}
          <Niveau />
          <Vacation />
          <Programme />
          <Publiccible />
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

export default Form2;
