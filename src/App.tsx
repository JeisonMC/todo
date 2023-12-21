import { useState } from "react";
import "./App.css";

const App = () => {
  const [elementos, setElementos] = useState<string[]>([]);
  const [nuevoElemento, setNuevoElemento] = useState<string>("");

  const agregarElemento = () => {
    if (nuevoElemento.trim() !== "") {
      setElementos((prevElementos) => [...prevElementos, nuevoElemento]);
      setNuevoElemento("");
    }
  };

  const eliminarElemento = (index: number) => {
    const nuevaLista = [...elementos];
    nuevaLista.splice(index, 1);
    setElementos(nuevaLista);
  };

  return (
    <>
      <h1>My todos</h1>
      <label>
        <input
          type="text"
          name="search"
          autoComplete="off"
          value={nuevoElemento}
          onChange={(ev) => setNuevoElemento(ev.target.value)}
        ></input>
        &nbsp;
        <button onClick={agregarElemento}>Save</button>
      </label>

      {elementos.map((elemento, index) => (
        <li key={index}>
          <input type="checkbox" />
          &nbsp;&nbsp;
          <span>{elemento}</span>&nbsp;&nbsp;
          <button onClick={() => eliminarElemento(index)}>Eliminar</button>
        </li>
      ))}

      <br></br>
    </>
  );
};

export default App;
