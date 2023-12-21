import React, { useState } from "react";

interface props {
  title: String;
}

const SectionList = ({ title }: props) => {
  const [checked, setChecked] = useState(false);
 

  const handleCheckboxChange = () => {
    // Lógica que se ejecutará cuando el checkbox cambie de estado
    setChecked(!checked); // Cambia el estado del checkbox
  };
  return (
    <>
      <section>
        <label>
          
          <input
            type="checkbox"
            name="opcion"
            value="opcion1"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          &nbsp;
          {title}&nbsp;&nbsp;
        </label>
      </section>
    </>
  );
};

export default SectionList;
