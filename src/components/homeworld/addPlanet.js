import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddPlanet = ({ item, enable, setIsOpen }) => {
  
  var [name, setName] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [diameter, setDiameter] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [rotation_period, setRotation_period] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [orbital_period, setOrbital_period] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [gravity, setGravity] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [population, setPopulation] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [climate, setClimate] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [terrain, setTerrain] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [surface_water, setSurface_water] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [loading, setLoading] = useState(false);
  var [mensaje, setMensaje] = useState("");
  const nameChange = (e) => {
    if (e.target.value === "") {
      setName({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setName({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const diameterChange = (e) => {
    if (e.target.value === "") {
      setDiameter({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setDiameter({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const rotation_periodChange = (e) => {
    if (e.target.value === "") {
      setRotation_period({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setRotation_period({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const orbital_periodChange = (e) => {
    if (e.target.value === "") {
      setOrbital_period({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setOrbital_period({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const gravityChange = (e) => {
    if (e.target.value === "") {
      setGravity({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setGravity({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const populationChange = (e) => {
    if (e.target.value === "") {
      setPopulation({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setPopulation({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const climateChange = (e) => {
    if (e.target.value === "") {
      setClimate({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setClimate({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const terrainChange = (e) => {
    if (e.target.value === "") {
      setTerrain({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setTerrain({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const surface_waterChange = (e) => {
    if (e.target.value === "") {
      setSurface_water({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setSurface_water({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const postPlanet = () => {
    if(name.error || diameter.error || rotation_period.error || orbital_period.error || gravity.error || population.error || climate.error || climate.error || terrain.error || surface_water.error){
      setLoading(true);
      setMensaje("InputError");
    }else {
    fetch("http://192.168.1.162:4000/api/planet", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        diameter: diameter.value,
        rotation_period: rotation_period.value,
        orbital_period: orbital_period.value,
        gravity: gravity.value,
        population: population.value,
        climate: climate.value,
        terrain: terrain.value,
        surface_water: surface_water.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setLoading(true);
      setMensaje("planet")
    })
    .catch((err) => {
      console.error(err);
    });;}
  };

  useEffect(() => {
    if(item?.name){
      setName({ value: item?.name, error: false, color: "1px solid green" });
    setDiameter({ value: item?.diameter, error: false, color: "1px solid green" });
    setRotation_period({ value: item?.rotation_period, error: false, color: "1px solid green" });
    setOrbital_period({ value: item?.orbital_period, error: false, color: "1px solid green" });
    setGravity({ value: item?.gravity, error: false, color: "1px solid green" });
    setPopulation({ value: item?.population, error: false, color: "1px solid green" });
    setClimate({ value: item?.climate, error: false, color: "1px solid green" });
    setTerrain({ value: item?.terrain, error: false, color: "1px solid green" });
    setSurface_water({ value: item?.surface_water, error: false, color: "1px solid green" });
    }
    
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
            <input value={name.value} onChange={nameChange} disabled={enable} required style={{border: name.color}}/>
            <br />
            Diámetro <br />
            <input
              value={diameter.value}
              onChange={diameterChange}
              disabled={enable}
              required
              style={{border: diameter.color}} />
            <br />
            Periodo de rotación <br />
            <input
              value={rotation_period.value}
              onChange={rotation_periodChange}
              disabled={enable}
              required
              style={{border: rotation_period.color}} />{" "}
            Periodo orbital <br />
            <input value={orbital_period.value} onChange={orbital_periodChange} disabled={enable} required style={{border: orbital_period.color}}/>
            <br />
            Gravedad <br />
            <input
              value={gravity.value}
              onChange={gravityChange}
              disabled={enable}
              required
              style={{border: gravity.color}} />
            <br />
            Población <br />
            <input
              value={population.value}
              onChange={populationChange}
              disabled={enable}
              required 
              style={{border: population.color}}/>{" "}
             Clima <br />
            <input value={climate.value} onChange={climateChange} disabled={enable} required style={{border: climate.color}}/>
            <br />
            Terreno <br />
            <input
              value={terrain.value}
              onChange={terrainChange}
              disabled={enable}
              required
              style={{border: terrain.color}} />
            <br />
            % de superficie de agua <br />
            <input
              value={surface_water.value}
              onChange={surface_waterChange}
              disabled={enable}
              required
              style={{border: surface_water.color}} />{" "}

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
    {loading && <Sitio error={false} info={mensaje} setLoading={setLoading}/>}
    
    </>
  );
};

export default AddPlanet;
