import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddStarship = ({ item, enable, setIsOpen }) => {
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
  var [starship_class, setStarship_class] = useState({
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
  var [hyperdrive_rating, setHyperdrive_rating] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [MGLT, setMGLT] = useState({
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
  const nameChange = (e) => {
    if (e.target.value === "") {
      setName({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setName({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
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
    }
  };
  const starship_classChange = (e) => {
    if (e.target.value === "") {
      setStarship_class({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setStarship_class({
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
      setPassengers({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
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
      setMax_atmosphering_speed({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setMax_atmosphering_speed({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const hyperdrive_ratingChange = (e) => {
    if (e.target.value === "") {
      setHyperdrive_rating({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setHyperdrive_rating({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const MGLTChange = (e) => {
    if (e.target.value === "") {
      setMGLT({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setMGLT({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const cargo_capacityChange = (e) => {
    if (e.target.value === "") {
      setCargo_capacity({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
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
      setConsumables({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setConsumables({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const postStarship = () => {
    if (
      name.error ||
      model.error ||
      starship_class.error ||
      length.error ||
      passengers.error ||
      max_atmosphering_speed.error ||
      hyperdrive_rating.error ||
      MGLT.error ||
      cargo_capacity.error ||
      consumables.error
    ) {
      setMensaje("InputError");
      setLoading(true);
    } else {
      fetch("http://192.168.1.162:4000/api/starship", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          model: model.value,
          starship_class: starship_class.value,
          length: length.value,
          passengers: passengers.value,
          max_atmosphering_speed: max_atmosphering_speed.value,
          hyperdrive_rating: hyperdrive_rating.value,
          MGLT: MGLT.value,
          cargo_capacity: cargo_capacity.value,
          consumables: consumables.value,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          setLoading(true);
          setMensaje("starship");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    if (item?.name) {
      setName({ value: item?.name, error: false, color: "1px solid green" });
      setModel({ value: item?.model, error: false, color: "1px solid green" });
      setStarship_class({
        value: item?.starship_class,
        error: false,
        color: "1px solid green",
      });
      setLength({
        value: item?.length,
        error: false,
        color: "1px solid green",
      });
      setPassengers({
        value: item?.passengers,
        error: false,
        color: "1px solid green",
      });
      setMax_atmosphering_speed({
        value: item?.max_atmosphering_speed,
        error: false,
        color: "1px solid green",
      });
      setHyperdrive_rating({
        value: item?.hyperdrive_rating,
        error: false,
        color: "1px solid green",
      });
      setMGLT({ value: item?.MGLT, error: false, color: "1px solid green" });
      setCargo_capacity({
        value: item?.cargo_capacity,
        error: false,
        color: "1px solid green",
      });
      setConsumables({
        value: item?.consumables,
        error: false,
        color: "1px solid green",
      });
    }
  }, []);
  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="modal-name"> Agregar Pelicula </div>
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="modal-cuadro">
            <div className="modal-inputs-extras">
              Nombre <br />
              <input
                value={name.value}
                onChange={nameChange}
                disabled={enable}
                required
                style={{ border: name.color }}
              />
              <br />
              Modelo <br />
              <input
                value={model.value}
                onChange={modelChange}
                disabled={enable}
                required
                style={{ border: model.color }}
              />
              <br />
              Clase <br />
              <input
                value={starship_class.value}
                onChange={starship_classChange}
                disabled={enable}
                required
                style={{ border: starship_class.color }}
              />{" "}
              Tamaño <br />
              <input
                value={length.value}
                onChange={lengthChange}
                disabled={enable}
                required
                style={{ border: length.color }}
              />
              <br />
              Número de pasajeros <br />
              <input
                value={passengers.value}
                onChange={passengersChange}
                disabled={enable}
                required
                style={{ border: passengers.color }}
              />
              <br />
              Velocidad atmosférica <br />
              <input
                value={max_atmosphering_speed.value}
                onChange={max_atmosphering_speedChange}
                disabled={enable}
                required
                style={{ border: max_atmosphering_speed.color }}
              />{" "}
              Hiperimpulsor <br />
              <input
                value={hyperdrive_rating.value}
                onChange={hyperdrive_ratingChange}
                disabled={enable}
                required
                style={{ border: hyperdrive_rating.color }}
              />
              <br />
              MGLT <br />
              <input
                value={MGLT.value}
                onChange={MGLTChange}
                disabled={enable}
                required
                style={{ border: MGLT.color }}
              />
              <br />
              Capacidad <br />
              <input
                value={cargo_capacity.value}
                onChange={cargo_capacityChange}
                disabled={enable}
                required
                style={{ border: cargo_capacity.color }}
              />{" "}
              Tiempo de combustible
              <br />
              <input
                value={consumables.value}
                onChange={consumablesChange}
                disabled={enable}
                required
                style={{ border: consumables.color }}
              />
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
      </article>
      <> </>
      {loading && (
        <Sitio error={false} info={mensaje} setLoading={setLoading} />
      )}
    </>
  );
};

export default AddStarship;
