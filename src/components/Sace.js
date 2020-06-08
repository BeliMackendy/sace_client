import React, { Component } from "react";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Accueil from "./Accueil";
import Autorisation from "./Autorisation";
import OuvertureDossier from "./OuvertureDossier";

class Sace extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/accueil" component={Accueil} />
          {/* <Route exact path="/formulaire" component={Formulaire} /> */}
          <Route exact path="/autorisation" component={Autorisation} />
          <Route exact path="/ouverturedossier" component={OuvertureDossier}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Sace;
