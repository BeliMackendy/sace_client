import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Login = () => {
  return (
    <div className="container mainformulaire">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Connexion</h5>
              <form className="form-signin">
                <div className="form-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email"
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase">
                  Connecter
                </button>
                Vous n'avez pas de compte?
                <a href="ouverturedossier">Inscrivez-vous ici</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
