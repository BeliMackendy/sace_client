import React from "react";
import { NavLink } from "react-router-dom";

const MenuDossier = () => {
  return (
    <div className="container m-formulaire">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="Ouverture">Identification de l'établissement</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/">Information sur le fondateur/la fondatrice</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/">Documents à soumettre</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuDossier;
