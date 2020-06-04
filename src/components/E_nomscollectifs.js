import React,{useState,useEffect} from "react";

function E_nomscollectifs(props) {
  const nature = ["Noms collectifs", "Société Anonyme (SA)", "Autre"];
  const [postInputform, setPostInputform] = useState({
    denomination: "",
    nature: "",
    acte_constitutif: "",
    reconnaissance: "",
    copie_p_identite: "",
  });

   useEffect(() => {
     props.Initformnomscollectifs(postInputform);
   });

  const Initform = (e) => {
    // setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
    // props.Initformnomscollectifs(postInputform);
    if (e.target.type !== "file") {
      setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
      // props.Initformnomscollectifs(postInputform);
    } else {
      setPostInputform({
        ...postInputform,
        [e.target.name]: e.target.files[0],
      });
      // console.log(postInputform);
      // props.Initformnomscollectifs(postInputform);
    }
  };

  return (
    <>
      <div className="form-group">
        <label>Dénomination</label>
        <input
          type="text"
          name="denomination"
          onChange={Initform}
          className="form-control"
        />
      </div>
      {/* <div class="form-group">
        <label>Nature</label>
      </div> */}
      <label>Nature</label>
      <div className="form-group">
        {nature.map((n, index) => (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="nature"
              onChange={Initform}
              value={n}
            />
            <label className="form-check-label">{n}</label>
          </div>
        ))}
      </div>

      <div className="form-row">
        <div class="form-group col-md-3">
          <label>Acte constitutif</label>
          <input
            type="file"
            name="acte_constitutif"
            onChange={Initform}
            // value={postInputform.acte_constitutif}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-3">
          <label>Reconnaissance légale à jour</label>
          <input
            type="file"
            name="reconnaissance"
            onChange={Initform}
            // value={postInputform.reconnaissance}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label>Copie des pièces d’identité valides des actionnaires </label>
          <input
            type="file"
            name="copie_p_identite"
            onChange={Initform}
            // value={postInputform.copie_p_identite}
            className="form-control"
          />
        </div>
      </div>
    </>
  );
}

export default E_nomscollectifs;
