import React from "react";
import MenuFormulaire from "./MenuFormulaire";
import { BrowserRouter, Route } from "react-router-dom";
import Ouverture from "./Ouverture";


function Formulaire() {  
  return (
    <div className="mainformaulaire">
      <BrowserRouter>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <MenuFormulaire />
          </div>
          <div className="col-sm-6 col-md-9">
            <div className="route_main2">
              <Route exact path="/Ouverture" component={Ouverture} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Formulaire;
