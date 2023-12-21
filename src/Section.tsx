import { useState } from "react";
import "./App.css";

const Section = () => {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const message = validator(search);
  const handleCheckboxChange = () => {
    // Lógica que se ejecutará cuando el checkbox cambie de estado
    setChecked(!checked); // Cambia el estado del checkbox
  };
  return (
    <>
      <h2>Ingresa una materia:</h2>
      <section>
        <form>
          <input
            type="checkbox"
            name="opcion"
            value="opcion1"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <input
            type="text"
            name="search"
            autoComplete="off"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          ></input>
          <button
            type="submit"
            style={{ display: checked === false ? "none" : "inline-block" }}
          >
            Eliminar
          </button>
          <button type="submit">Crear</button>
          <p>{message}</p>
        </form>
      </section>
    </>
  );
};

const validator = (search: string) => {
  if (search.includes("")) return "valor vacio";
};

export default Section;
