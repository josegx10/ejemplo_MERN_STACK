import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddStarship = ({ item, enable, setIsOpen }) => {
  
  var [name, setName] = useState("");
  var [model, setModel] = useState("");
  var [starship_class, setStarship_class] = useState("");
  var [length, setLength] = useState("");
  var [passengers, setPassengers] = useState("");
  var [max_atmosphering_speed, setMax_atmosphering_speed] = useState("");
  var [hyperdrive_rating, setHyperdrive_rating] = useState("");
  var [MGLT, setMGLT] = useState("");
  var [cargo_capacity, setCargo_capacity] = useState("");
  var [consumables, setConsumables] = useState("");
  var [loading, setLoading] = useState(false);
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const modelChange = (e) => {
    setModel(e.target.value);
  };
  const starship_classChange = (e) => {
    setStarship_class(e.target.value);
  };
  const lengthChange = (e) => {
    setLength(e.target.value);
  };
  const passengersChange = (e) => {
    setPassengers(e.target.value);
  };
  const max_atmosphering_speedChange = (e) => {
    setMax_atmosphering_speed(e.target.value);
  };
  const hyperdrive_ratingChange = (e) => {
    setHyperdrive_rating(e.target.value);
  };
  const MGLTChange = (e) => {
    setMGLT(e.target.value);
  };
  const cargo_capacityChange = (e) => {
    setCargo_capacity(e.target.value);
  };
  const consumablesChange = (e) => {
    setConsumables(e.target.value);
  };
  const postStarship = () => {
    fetch("http://192.168.1.162:4000/api/starship", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        model: model,
        starship_class: starship_class,
        length: length,
        passengers: passengers,
        max_atmosphering_speed: max_atmosphering_speed,
        hyperdrive_rating: hyperdrive_rating,
        MGLT: MGLT,
        cargo_capacity: cargo_capacity,
        consumables: consumables,
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
    setModel(item?.model);
    setStarship_class(item?.starship_class);
    setLength(item?.length);
    setPassengers(item?.passengers);
    setMax_atmosphering_speed(item?.max_atmosphering_speed);
    setHyperdrive_rating(item?.hyperdrive_rating);
    setMGLT(item?.MGLT);
    setCargo_capacity(item?.cargo_capacity);
    setConsumables(item?.consumables);
  }, []);
  return (
    <><article className="modal is-open">
      <div className="modal-pantalla">
        <div className="modal-name"> Agregar Pelicula </div>
        <div className="button-modal">
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className="modal-cuadro">
          <div className="modal-inputs-extras">
            Nombre <br />
            <input value={name} onChange={nameChange} disabled={enable} required />
            <br />
            Modelo <br />
            <input
              value={model}
              onChange={modelChange}
              disabled={enable}
              required />
            <br />
            Clase <br />
            <input
              value={starship_class}
              onChange={starship_classChange}
              disabled={enable}
              required />{" "}
            Tamaño <br />
            <input value={length} onChange={lengthChange} disabled={enable} required />
            <br />
            Número de pasajeros <br />
            <input
              value={passengers}
              onChange={passengersChange}
              disabled={enable}
              required />
            <br />
            Velocidad atmosférica <br />
            <input
              value={max_atmosphering_speed}
              onChange={max_atmosphering_speedChange}
              disabled={enable}
              required />{" "}
            Hiperimpulsor <br />
            <input value={hyperdrive_rating} onChange={hyperdrive_ratingChange} disabled={enable} required />
            <br />
            MGLT <br />
            <input
              value={MGLT}
              onChange={MGLTChange}
              disabled={enable}
              required />
            <br />
            Capacidad <br />
            <input
              value={cargo_capacity}
              onChange={cargo_capacityChange}
              disabled={enable}
              required />{" "}
            Tiempo de combustible<br />
            <input
              value={consumables}
              onChange={consumablesChange}
              disabled={enable}
              required />
            <br />
          </div>
        </div>
        {enable ? (
          ""
        ) : (
          <div className="button-guardar" onClick={postStarship.bind(this)}>
            <button>Guardar</button>
          </div>
        )}
      </div>
    </article><> </>
    {loading && <Sitio error={false} info={"starship"} />}
    
    </>
  );
};

export default AddStarship;
