import { useEffect, useState } from "react";
import "./Body.css";

interface Props {
  title: string;
}

export interface RootObject {
  userId: number;
  id: number;
  title: string;
}

const Body = ({ title }: Props) => {
  useEffect(() => {
    console.log("Se monto el componente");
    fetch("https://clase-backend-dev-tedq.3.us-1.fl0.io") //http://localhost:3000
      .then((response) => response.json())
      .catch((error) => console.log("hubo un error " + error))
      .then((json) => {
        console.log("data " + JSON.stringify(json));
        setdata(data);
      });
    return () => {};
  }, []);
  const [data, setdata] = useState<RootObject[]>([]);

  return (
    <>
      <div className="div_border">
        <h1> {title} </h1>

        <table>
          <thead className="encabezado-tabla">
            <tr>
              <th>item</th>
              <th>nombre</th>
              <th>userId</th>
              {data.map((item) => (
                <tr>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.userId}</p>
                </tr>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <p className="read-the-docs">tabla de consumo microservicio</p>
    </>
  );
};

export default Body;
