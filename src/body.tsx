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
        setdata(json);
      });
    return () => {};
  }, []);
  const [data, setdata] = useState<RootObject[]>([]);

  return (
    <>
      <div>{title}</div>
      <table className="default">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>userId</th>
        </tr>
        
        {data.map((item) => (
          
            <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.userId}</td>
            </tr>
          
        ))}
        
      </table>
      
    </>
  );
};

export default Body;
