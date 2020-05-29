import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Form2 = ({ setCurrentform, currentform }) => {
  const [postcategorie, setPostcategorie] = useState([]);
  const [postsouscategorie, setPostsouscategorie] = useState([]);
  const [postniveau, setPostniveau] = useState([]);
  const [postprogramme, setPostprogramme] = useState([]);
  const [postpublic_cible, setPostpublic_cible] = useState([]);

  let url_categorie = "http://localhost:3001/app/sace/categorie";
  let url_niveau = "http://localhost:3001/app/sace/niveau";
  let url_programme = "http://localhost:3001/app/sace/programme";
  let url_public_cible = "http://localhost:3001/app/sace/public_cible";
 

  // useEffect(() => {
  //   axios
  //     .get(url_categorie)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setPostcategorie(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }, []);    
  // });

  const load_categorie = () => {
    axios
      .get(url_categorie)
      .then((res) => {
        // console.log(res.data);
        setPostcategorie(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
    return (
      <div className="form-group">
        <label>Catégorie</label>
        <select className="form-control" onChange={selectoption_handler}>
          <option value="0">Selection Catégorie</option>
          {postcategorie.map((post, index) => (
            <option key={index} value={post.Idcategorie}>
              {post.Libelle_Categorie}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const load_niveau = () => {
    axios
      .get(url_niveau)
      .then((res) => {
        console.log(res.data);
        setPostniveau(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
      return (
        <>
          {postniveau.map((p, index) => (
            <div
              className="form-check form-check-inline form-group"
              key={index}
            >
              <input
                className="form-check-input"
                type="radio"
                name="niveau"
                value={p.Id_niveau}
                // onChange={(e) => selectsouscategorie_handler(e)}
              />
              <label className="form-check-label">
                {p.libelle_niveau}
              </label>
            </div>
          ))}
        </>
      );
  };

  const load_programme = () => {
    axios
      .get(url_programme)
      .then((res) => {
        // console.log(res.data);
        setPostprogramme(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const load_public_cible = () => {
    axios
      .get(url_public_cible)
      .then((res) => {
        // console.log(res.data);
        setPostpublic_cible(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const selectsouscategorie_handler = (e) => {
    const Idsouscategorie = e.target.value;
    console.log(Idsouscategorie);
  };

  const selectoption_handler = (e) => {
    const categorie = postcategorie.filter(function (o) {
      return o.Libelle_Categorie === e.target.value;
    });

    if (categorie.length !== 0) {
      const Idcategorie = categorie[0].IdCategorie;
      const souscategorie = {
        Id_categorie: Idcategorie,
      };
      axios
        .post(
          "http://localhost:3001/app/sace//souscategorie/Idcategorie",
          souscategorie
        )
        .then((res) => {
          // console.log(res.data);
          setPostsouscategorie(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }    
  };

  const getsouscategorie = () => {
    return postsouscategorie.length === 0 ? null : (
      <fieldset className="border p-2 form-group">
        {postsouscategorie.map((p, index) => (
          <div className="form-check form-check-inline form-group" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="souscategorie"
              value={p.Id_souscategorie}
              onChange={(e) => selectsouscategorie_handler(e)}
            />
            <label className="form-check-label">
              {p.Libelle_souscategorie}
            </label>
          </div>
        ))}
      </fieldset>
    );
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
            Etape 2: Identification de l'établissement scolaire
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
          {/* <div className="form-group">
            <label>Catégorie</label>
            <select className="form-control" onChange={selectoption_handler}>
              <option value="0">Selection Catégorie</option>
              {postcategorie.map((post, index) => (
                <option key={index} value={post.Idcategorie}>
                  {post.Libelle_Categorie}
                </option>
              ))}
            </select>
          </div> */}
          {load_categorie()}
          {getsouscategorie()}
          {load_niveau()}
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
