import React from "react";

const Form4 = ({ setCurrentform, currentform }) => {
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
                <input type="file" name="lettre_demande" className="form-control" />
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
                />
              </div>
              <div className="form-group">
                <label>
                  Projet d’école incluant le fonds de garantie ou preuve de
                  fonds espérés ou partenaire de financement et autres
                </label>
                <input type="file" name="autorisation_mairie" className="form-control" />
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="form-group">
                <label>
                Autorisation de la Mairie
                </label>
                <input type="file" name="projet_ecole" className="form-control" />
              </div>
            </div>
          </div>
        </form>
        <button onClick={(e) => setCurrentform(currentform + 1)} className="btn btn-info">
          Terminer
        </button>
        {/* <button onClick={(e) => setCurrentform(currentform + 1)}>suivant</button> */}
      </div>
    </>
  );
};

export default Form4;
