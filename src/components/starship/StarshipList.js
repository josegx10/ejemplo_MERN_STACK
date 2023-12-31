import { useEffect, useState } from "react";
import "../PeopleList.css";
import ver from "../../assets/ver.png";
import AddStarship from "./addStarship";

const StarshipList = ({}) => {
  const [loading, setLoading] = useState(false);
  const [starships, setStarships] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PORT}/api/starship`)
      .then((response) => response.json())
      .then((starship) => {
        setStarships(starship);
        setLoading(true);
      });
  }, []);
  return (
    <>
      {loading ? (
        <table className="headerTable">
          <tbody>
            <tr>
              <th> index </th>
              <th> Nombre </th>
              <th> Modelo </th>
              <th> Clase </th>
              <th> Tamaño </th>
              <th> Número de pasajeros </th>
              <th> Velocidad atmosférica </th>
              <th> Capacidad </th>
              <th> Tiemplo de Combustible </th>
              <th> Acciones </th>
            </tr>
            {starships.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {item?.name === "none" || item?.name === "unknown"
                    ? "n/a"
                    : item?.name}
                </td>

                <td>
                  {item?.model === "none" || item?.model === "unknown"
                    ? "n/a"
                    : item?.model}
                </td>

                <td>
                  {item?.starship_class === "none" ||
                  item?.starship_class === "unknown"
                    ? "n/a"
                    : item?.starship_class}
                </td>
                <td>
                  {item?.length === "none" || item?.length === "unknown"
                    ? "n/a"
                    : item?.length}
                </td>

                <td>
                  {item?.passengers === "none" || item?.passengers === "unknown"
                    ? "n/a"
                    : item?.passengers}
                </td>

                <td>
                  {item?.max_atmosphering_speed === "none" ||
                  item?.max_atmosphering_speed === "unknown"
                    ? "n/a"
                    : item?.max_atmosphering_speed}
                </td>
                <td>
                  {item?.cargo_capacity === "none" ||
                  item?.cargo_capacity === "unknown"
                    ? "n/a"
                    : item?.cargo_capacity}
                </td>

                <td>
                  {item?.consumables === "none" ||
                  item?.consumables === "unknown"
                    ? "n/a"
                    : item?.consumables}
                </td>
                <td>
                  <img
                    src={ver}
                    className="button-accion"
                    onClick={() => {
                      setIsOpen(true);
                      setItem(item);
                      setEnable(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="spinner"> </div>
      )}
      {isOpen && (
        <AddStarship setIsOpen={setIsOpen} item={item} enable={enable} />
      )}
    </>
  );
};

export default StarshipList;
