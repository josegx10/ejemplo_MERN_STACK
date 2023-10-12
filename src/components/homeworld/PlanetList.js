import { useEffect, useState } from "react";
import "../PeopleList.css";
import ver from "../../assets/ver.png";
import AddPlanet from "./addPlanet";
const PlanetList = ({}) => {
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    fetch("http://192.168.1.162:4000/api/planet")
      .then((response) => response.json())
      .then((planet) => {
        setPlanet(planet);
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
              <th> Diámetro </th>
              <th> Periodo de rotación </th>
              <th> Periodo orbital </th>
              <th> Gravedad </th>
              <th> Población </th>
              <th> Clima </th>
              <th> Terreno </th>
              <th> % superficie de agua </th>
              <th> Acciones </th>
            </tr>
            {planet.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {item?.name === "none" || item?.name === "unknown"
                    ? "n/a"
                    : item?.name}
                </td>

                <td>
                  {item?.diameter === "none" || item?.diameter === "unknown"
                    ? "n/a"
                    : item?.diameter}
                </td>

                <td>
                  {item?.rotation_period === "none" || item?.rotation_period === "unknown"
                    ? "n/a"
                    : item?.rotation_period}
                </td>
                <td>
                  {item?.orbital_period === "none" || item?.orbital_period === "unknown"
                    ? "n/a"
                    : item?.orbital_period}
                </td>

                <td>
                  {item?.gravity === "none" || item?.gravity === "unknown"
                    ? "n/a"
                    : item?.gravity}
                </td>

                <td>
                  {item?.population === "none" || item?.population === "unknown"
                    ? "n/a"
                    : item?.population}
                </td>
                <td>
                  {item?.climate === "none" || item?.climate === "unknown"
                    ? "n/a"
                    : item?.climate}
                </td>
                <td>
                  {item?.terrain === "none" || item?.terrain === "unknown"
                    ? "n/a"
                    : item?.terrain}
                </td>

                <td>
                  {item?.surface_water === "none" || item?.surface_water === "unknown"
                    ? "n/a"
                    : item?.surface_water}
                </td>

                <td>
                  <img src={ver} className="button-accion" onClick={() => {
                    setIsOpen(true);
                    setItem(item);
                    setEnable(true);
                  }} />
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      ) : (
        <div className="spinner"> </div>
      )}
      {isOpen && (
          <AddPlanet
            setIsOpen={setIsOpen}
            item={item}
            enable={enable}
            
          />  
        )}
    </>
  );
};

export default PlanetList;





