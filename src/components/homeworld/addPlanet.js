import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddPlanet = ({ item, enable, setIsOpen }) => {
  
  var [name, setName] = useState("");
  var [diameter, setDiameter] = useState("");
  var [rotation_period, setRotation_period] = useState("");
  var [orbital_period, setOrbital_period] = useState("");
  var [gravity, setGravity] = useState("");
  var [population, setPopulation] = useState("");
  var [climate, setClimate] = useState("");
  var [terrain, setTerrain] = useState("");
  var [surface_water, setSurface_water] = useState("");
  var [loading, setLoading] = useState(false);
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const diameterChange = (e) => {
    setDiameter(e.target.value);
  };
  const rotation_periodChange = (e) => {
    setRotation_period(e.target.value);
  };
  const orbital_periodChange = (e) => {
    setOrbital_period(e.target.value);
  };
  const gravityChange = (e) => {
    setGravity(e.target.value);
  };
  const populationChange = (e) => {
    setPopulation(e.target.value);
  };
  const climateChange = (e) => {
    setClimate(e.target.value);
  };
  const terrainChange = (e) => {
    setTerrain(e.target.value);
  };
  const surface_waterChange = (e) => {
    setSurface_water(e.target.value);
  };
  const postPlanet = () => {
    fetch("http://192.168.1.162:4000/api/planet", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        diameter: diameter,
        rotation_period: rotation_period,
        orbital_period: orbital_period,
        gravity: gravity,
        population: population,
        climate: climate,
        terrain: terrain,
        surface_water: surface_water,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setLoading(true);
    })
    .catch((err) => {
      console.error(err);
    });;
  };

  useEffect(() => {
    
    setName(item?.name);
    setDiameter(item?.diameter);
    setRotation_period(item?.rotation_period);
    setOrbital_period(item?.orbital_period);
    setGravity(item?.gravity);
    setPopulation(item?.population);
    setClimate(item?.climate);
    setTerrain(item?.terrain);
    setSurface_water(item?.surface_water);
  }, []);
  return (
    <><article className="modal is-open">
      <div className="modal-pantalla">
        <div className="modal-name"> Agregar Planeta </div>
        <div className="button-modal">
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className="modal-cuadro">
          <div className="modal-inputs-extras">
            Nombre <br />
            <input value={name} onChange={nameChange} disabled={enable} required />
            <br />
            Diámetro <br />
            <input
              value={diameter}
              onChange={diameterChange}
              disabled={enable}
              required />
            <br />
            Periodo de rotación <br />
            <input
              value={rotation_period}
              onChange={rotation_periodChange}
              disabled={enable}
              required />{" "}
            Periodo orbital <br />
            <input value={orbital_period} onChange={orbital_periodChange} disabled={enable} required />
            <br />
            Gravedad <br />
            <input
              value={gravity}
              onChange={gravityChange}
              disabled={enable}
              required />
            <br />
            Población <br />
            <input
              value={population}
              onChange={populationChange}
              disabled={enable}
              required />{" "}
             Clima <br />
            <input value={climate} onChange={climateChange} disabled={enable} required />
            <br />
            Terreno <br />
            <input
              value={terrain}
              onChange={terrainChange}
              disabled={enable}
              required />
            <br />
            % de superficie de agua <br />
            <input
              value={surface_water}
              onChange={surface_waterChange}
              disabled={enable}
              required />{" "}

          </div>
        </div>
        {enable ? (
          ""
        ) : (
          <div className="button-guardar" onClick={postPlanet.bind(this)}>
            <button>Guardar</button>
          </div>
        )}
      </div>
    </article><> </>
    {loading && <Sitio error={false} info={"planet"} />}
    
    </>
  );
};

export default AddPlanet;
