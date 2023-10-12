import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddVehicle = ({ item, enable, setIsOpen }) => {
  
  var [name, setName] = useState("");
  var [model, setModel] = useState("");
  var [vehicle_class, setVehicle_class] = useState("");
  var [length, setLength] = useState("");
  var [passengers, setPassengers] = useState("");
  var [max_atmosphering_speed, setMax_atmosphering_speed] = useState("");
  var [cargo_capacity, setCargo_capacity] = useState("");
  var [consumables, setConsumables] = useState("");
  var [loading, setLoading] = useState(false);
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const modelChange = (e) => {
    setModel(e.target.value);
  };
  const vehicle_classChange = (e) => {
    setVehicle_class(e.target.value);
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
  const cargo_capacityChange = (e) => {
    setCargo_capacity(e.target.value);
  };
  const consumablesChange = (e) => {
    setConsumables(e.target.value);
  };
  const postVehicle = () => {
    fetch("http://192.168.1.162:4000/api/vehicle", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        model: model,
        vehicle_class: vehicle_class,
        length: length,
        passengers: passengers,
        max_atmosphering_speed: max_atmosphering_speed,
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
    setVehicle_class(item?.vehicle_class);
    setLength(item?.length);
    setPassengers(item?.passengers);
    setMax_atmosphering_speed(item?.max_atmosphering_speed);
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
              value={vehicle_class}
              onChange={vehicle_classChange}
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
            Capacidad <br />
            <input value={cargo_capacity} onChange={cargo_capacityChange} disabled={enable} required />
            <br />
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
          <div className="button-guardar" onClick={postVehicle.bind(this)}>
            <button>Guardar</button>
          </div>
        )}
      </div>
    </article><> </>
    {loading && <Sitio error={false} info={"vehicle"} />}
    
    </>
  );
};

export default AddVehicle;
