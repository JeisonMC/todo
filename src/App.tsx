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
          className="inputStyle"
          type="text"
          name="search"
          autoComplete="off"
          value={nuevoElemento}
          onChange={(ev) => setNuevoElemento(ev.target.value)}
        ></input>
        &nbsp;&nbsp;
        <button onClick={agregarElemento}>Save</button>
      </label>

      {elementos.map((elemento, index) => (
        <li key={index}>
          <table>
            <tr>
              <td style={{ border: "none" }}>
                <input type="checkbox" />
              </td>
              &nbsp;&nbsp;
              <td className="tdF">
                <span>{elemento}</span>
              </td>
              &nbsp;&nbsp;
              <td style={{ border: "none" }}>
                <button onClick={() => eliminarElemento(index)}>
                  Eliminar
                </button>
              </td>
            </tr>
          </table>
        </li>
      ))}

      <br></br>
    </>
  );
};

export default App;
