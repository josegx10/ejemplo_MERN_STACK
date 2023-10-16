import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddVehicle = ({ item, enable, setIsOpen }) => {
  
  var [name, setName] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [model, setModel] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [vehicle_class, setVehicle_class] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [length, setLength] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [passengers, setPassengers] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [max_atmosphering_speed, setMax_atmosphering_speed] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [cargo_capacity, setCargo_capacity] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [consumables, setConsumables] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [loading, setLoading] = useState(false);
  var [mensaje, setMensaje] = useState("");
  var [invalid, setInvalidad] = useState({
    name: false,
    model: false
  })
  const nameChange = (e) => {
    if (e.target.value === "") {
      setName({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setName({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
      setInvalidad({name: name.error, model: invalid.model});
    }
  };
  const modelChange = (e) => {
    if (e.target.value === "") {
      setModel({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setModel({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
      setInvalidad({name: invalid.name, model: model.error})
    }
  };
  const vehicle_classChange = (e) => {
    if (e.target.value === "") {
      setVehicle_class({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setVehicle_class({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const lengthChange = (e) => {
    if (e.target.value === "") {
      setLength({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setLength({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const passengersChange = (e) => {
    if (e.target.value === "") {
      setPassengers({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setPassengers({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const max_atmosphering_speedChange = (e) => {
    if (e.target.value === "") {
      setMax_atmosphering_speed({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setMax_atmosphering_speed({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const cargo_capacityChange = (e) => {
    if (e.target.value === "") {
      setCargo_capacity({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setCargo_capacity({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const consumablesChange = (e) => {
    if (e.target.value === "") {
      setConsumables({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setConsumables({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const postVehicle = () => {
    if(name.error || model.error){
      setInvalidad({name: name.error, model: model.error})
    }else{
      fetch("http://192.168.1.162:4000/api/vehicle", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        model: model.value,
        vehicle_class: vehicle_class.value,
        length: length.value,
        passengers: passengers.value,
        max_atmosphering_speed: max_atmosphering_speed.value,
        cargo_capacity: cargo_capacity.value,
        consumables: consumables.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setLoading(true);
      setMensaje("vehicle");
    })
    .catch((err) => {
      console.error(err);
    });;}
  };

  useEffect(() => {
    if(item?.name){
      setName({value: item?.name, error: false, color: "1px solid green"});
    setModel({value: item?.model, error: false, color: "1px solid green"});
    setVehicle_class({value: item?.vehicle_class, error: false, color: "1px solid green"});
    setLength({value: item?.length, error: false, color: "1px solid green"});
    setPassengers({value: item?.passengers, error: false, color: "1px solid green"});
    setMax_atmosphering_speed({value: item?.max_atmosphering_speed, error: false, color: "1px solid green"});
    setCargo_capacity({value: item?.cargo_capacity, error: false, color: "1px solid green"});
    setConsumables({value: item?.consumables, error: false, color: "1px solid green"});
    }
    
  }, []);
  return (
    <><article className="modal is-open">
      <div className="modal-pantalla">
        <div className="modal-name"> Agregar Vehiculo </div>
        <div className="button-modal">
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className="modal-cuadro">
          <div className="modal-inputs-extras">
            Nombre <br />
            <input value={name.value} onChange={nameChange} disabled={enable} required style={{border: invalid.name && name.color}}/>
            {invalid.name && (<div className="DataError"> campo obligatorio </div>)}
            <br />
            Modelo <br />
            <input
              value={model.value}
              onChange={modelChange}
              disabled={enable}
              required 
              style={{border: invalid.model && model.color}}/>
            {invalid.model && (<div className="DataError"> campo obligatorio </div>)}
            <br />
            Clase <br />
            <input
              value={vehicle_class.value}
              onChange={vehicle_classChange}
              disabled={enable}
              required />{" "}
            Tamaño <br />
            <input value={length.value} onChange={lengthChange} disabled={enable} required />
            <br />
            Número de pasajeros <br />
            <input
              value={passengers.value}
              onChange={passengersChange}
              disabled={enable}
              required />

            <br />
            Velocidad atmosférica <br />
            <input
              value={max_atmosphering_speed.value}
              onChange={max_atmosphering_speedChange}
              disabled={enable}
              required />{" "}
              
            Capacidad <br />
            <input value={cargo_capacity.value} onChange={cargo_capacityChange} disabled={enable} required />
            <br />
            Tiempo de combustible<br />
            <input
              value={consumables.value}
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
    {loading && <Sitio error={false} info={mensaje} setLoading={setLoading}/>}
    
    </>
  );
};

export default AddVehicle;
