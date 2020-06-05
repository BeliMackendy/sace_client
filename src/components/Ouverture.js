import React, { useState } from "react";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function Ouverture() {
  const initForm1 = {
    date_demande: "",
    dde: "",
    bds: "",
    biz: "",
  };
  
  const initForm2 = {
    id:"",
    denomination: "",
    adresse: "",
    tel: "",
    email: "",
    commune: "",
    section_communale: "",
    categorie: "",
    typecategorie: "",
    niveau: "",
    vacation: "",
    programme: "",
    cible: "",
  };
  
  

  const [currentform, setCurrentform] = useState(1);
  const [form1_data, setForm1data] = useState(initForm1);
  const [form2_data, setForm2data] = useState(initForm2);

  // console.log(form1_data);
  // console.log(form2_data);
  
  return (
    <>
      <h3 className="text-center font-weight-bold">Ouverture de Dossier</h3>
      {/* {JSON.stringify(form_data1)} */}
      {currentform === 1 ? (
        <>
          <Form1
            setCurrentform={setCurrentform}
            currentform={currentform}
            form_data1={form1_data}
            setFormdata1={setForm1data}
          />
        </>
      ) : currentform === 2 ? (
        <>
          <Form2
            setCurrentform={setCurrentform}
            currentform={currentform}
            form_data1={form1_data}
            form_data2={form2_data}
            setFormdata2={setForm2data}
          />
        </>
      ) : currentform === 3 ? (
        <>
          <Form3
            setCurrentform={setCurrentform}
            currentform={currentform}            
            form_data2={form2_data}
            // setFormdata2={setForm2data}
          />
        </>
      ) : (
        <>
          <Form4 setCurrentform={setCurrentform} currentform={currentform} />
        </>
      )}
    </>
  );
}

export default Ouverture;
