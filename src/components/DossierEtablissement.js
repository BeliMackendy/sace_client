import React from "react";
import MenuDossier from "./MenuDossier";
import { BrowserRouter, Route } from "react-router-dom";

const DossierEtablissement = () => {
  return (
    // <div className="container mainformulaire">
    //    <MenuDossier/>
    // </div>

    <div className="mainformulaire">
      <BrowserRouter>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <MenuDossier />
          </div>
          <div className="col-sm-6 col-md-8">
            <div className="route_main2 overflow-auto">
              {/* <Route exact path="/Ouverture" component={Ouverture} /> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DossierEtablissement;
