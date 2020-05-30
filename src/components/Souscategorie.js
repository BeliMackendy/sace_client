import React, { useState} from "react";
import axios from "axios";
import Categorie from './Categorie'


function Souscategorie(props) {
    const [postsouscategorie, setPostsouscategorie] = useState([]);
    let url_souscategorie = "http://localhost:3001/app/sace//souscategorie/Idcategorie";

    const selectoption_handler = (e, postcategorie) => {
      const categorie = postcategorie.filter(function (o) {
        return o.Libelle_Categorie === e.target.value;
      });

      // console.log(categorie);
      if (categorie.length !== 0) {
        const Idcategorie = categorie[0].IdCategorie;
        const souscategorie = {
          Id_categorie: Idcategorie,
        };

        axios
          .post(url_souscategorie, souscategorie)
          .then((res) => {
            // console.log(res.data);
            setPostsouscategorie(res.data);
          })
          .catch((err) => {
            console.log(err);
          }, []);
      }
    };

    return (
      <div>
        <Categorie selectoption_handler={selectoption_handler} />
        <fieldset className="border p-2 form-group">
          {postsouscategorie.map((p, index) => (
            <div
              className="form-check form-check-inline form-group"
              key={index}
            >
              <input
                className="form-check-input"
                type="radio"
                name="souscategorie"
                value={p.Id_souscategorie}
                onChange={(e) => props.selectsouscategorie_handler(e)}
              />
              <label className="form-check-label">
                {p.Libelle_souscategorie}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    );
}

export default Souscategorie
