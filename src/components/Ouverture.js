import React, { useState } from "react";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function Ouverture() {
    const initForm1 = {
      date_creation: "21/07/2014",
      departement: "Ouest",
      bureau: "Delmas",
      zone: "001",
    };

    const [currentform, setCurrentform] = useState(1);
    const [form1_data, setForm1data] = useState(initForm1);

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
            <Form2 setCurrentform={setCurrentform} currentform={currentform} />
          </>
        ) : currentform === 3 ? (
          <>
            <Form3 setCurrentform={setCurrentform} currentform={currentform} />
          </>
        ) : (
          <>
            <Form4 setCurrentform={setCurrentform} currentform={currentform} />
          </>
        )}
      </>
    );

}

export default Ouverture
