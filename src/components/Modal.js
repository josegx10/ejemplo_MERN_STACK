import { useEffect, useState } from "react";
import "./Modal.css";
import Sitio from "./Sitio";
import Select from "react-select";
import { TextField } from "@mui/material";


const Modal = ({
  setIsOpen,
  films,
  place,
  vehicles,
  ships,
  item,
  modalFun,
  enable,
}) => {
  var resultsFilms = [];
  var resultsPlace = [];
  var resultsVehicles = [];
  var resultsShips = [];
  var registerFilms = [];
  var registerPlace = [];
  var registerVehicle = [];
  var registerShips = [];
  var homeworld = "";
  var [name, setName] = useState("");
  var [gender, setGender] = useState("");
  var [eye_color, setEye] = useState("");
  var [hair_color, setHair] = useState("");
  var [mass, setMass] = useState("");
  var [birth_year, setBirth] = useState("");
  var [height, setHeight] = useState("");
  var [skin_color, setSkin] = useState("");
  var [mensaje, setMensaje] = useState("");
  var [error, setError] = useState(false);
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(item?.name);
    setGender(item?.gender);
    setEye(item?.eye_color);
    setHair(item?.hair_color);
    setMass(item?.mass);
    setBirth(item?.birth_year);
    setHeight(item?.height);
    setSkin(item?.skin_color);
  }, []);
  const addPeople = () => {
    if (modalFun === "add") {
      if (
        name !== "" &&
        mass !== "" &&
        gender !== "" &&
        eye_color !== "" &&
        hair_color !== "" &&
        birth_year !== "" &&
        height !== "" &&
        skin_color !== ""
      ) {
        fetch("http://localhost:4000/api/people", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            height: height,
            mass: mass,
            hair_color: hair_color,
            skin_color: skin_color,
            eye_color: eye_color,
            birth_year: birth_year,
            gender: gender,
            homeworld: homeworld,
            films: films,
            species: [],
            vehicles: vehicles,
            starships: ships,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log(res);
            setMensaje("post");
            setError(false);
          })
          .catch((err) => {
            console.error(err);
            setMensaje("post");
            setError(true);
          });
        setMensaje("post");
      } else {
        alert('No funciona');
      }
    } else if (modalFun === "put") {
      fetch(`http://localhost:4000/api/people/${item?._id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          height: height,
          mass: mass,
          hair_color: hair_color,
          skin_color: skin_color,
          eye_color: eye_color,
          birth_year: birth_year,
          gender: gender,
          homeworld: homeworld,
          films: films,
          species: [],
          vehicles: vehicles,
          starships: ships,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          setMensaje("put");
          setError(false);
        })
        .catch((err) => {
          console.error(err);
          setMensaje("put");
          setError(true);
        });
      setMensaje("put");
    }

    setLoading(true);
  };
  const selectPlanet = (e) => {
    place = [];
    e.forEach((element) => {
      place.push(element.value);
      homeworld = element.value;
    });
  };
  const selectStarship = (e) => {
    ships = [];
    e.forEach((element) => {
      ships.push(element.value);
    });
  };
  const selectVehicles = (e) => {
    vehicles = [];
    e.forEach((element) => {
      vehicles.push(element.value);
    });
  };
  const selectFilms = (e) => {
    films = [];
    e.forEach((element) => {
      films.push(element.value);
    });
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const genderChange = (e) => {
    setGender(e.target.value);
  };
  const eyeChange = (e) => {
    setEye(e.target.value);
  };
  const hairChange = (e) => {
    setHair(e.target.value);
  };
  const massChange = (e) => {
    setMass(e.target.value);
  };
  const birthChange = (e) => {
    setBirth(e.target.value);
  };
  const heightChange = (e) => {
    setHeight(e.target.value);
  };
  const skinChange = (e) => {
    setSkin(e.target.value);
  };
  fetch("http://localhost:4000/api/planet")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsPlace.push({ value: element.name, label: element.name });
      });
    });
  fetch("http://localhost:4000/api/starship")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsShips.push({ value: element.name, label: element.name });
      });
    });
  fetch("http://localhost:4000/api/film")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsFilms.push({ value: element.title, label: element.title });
      });
    });
  fetch("http://localhost:4000/api/vehicle")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsVehicles.push({ value: element.name, label: element.name });
      });
    });
  if (modalFun === "add") {
  } else {
    registerPlace.push({ value: place, label: place });
    if (films?.length === 0) {
      resultsFilms.push(<> n/a </>);
    } else {
      films.forEach((employee) => {
        registerFilms.push({ value: employee, label: employee });
      });
    }

    if (vehicles?.length === 0) {
      resultsVehicles.push(<> n/a </>);
    } else {
      vehicles.forEach((employee) => {
        registerVehicle.push({ value: employee, label: employee });
      });
    }

    if (ships?.length === 0) {
      resultsShips.push(<> n/a </>);
    } else {
      ships.forEach((employee) => {
        registerShips.push({ value: employee, label: employee });
      });
    }
  }
  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="modal-name"> Agregar Personaje </div>
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="modal-cuadro">
            Datos generales
            <div className="modal-info">
              <div className="modal-inputs">
                Nombre <br />
                <input value={name} onChange={nameChange} disabled={enable} required />
                <br />
                Color de ojos <br />
                <input
                  value={eye_color}
                  onChange={eyeChange}
                  disabled={enable}
                  required
                />
                <br />
                Color de cabello <br />
                <input
                  value={hair_color}
                  onChange={hairChange}
                  disabled={enable}
                  required
                />{" "}
                <br />
                Masa <br />
                <input value={mass} onChange={massChange} disabled={enable} />
                <br />
              </div>
              <div className="modal-inputs">
                Fecha de nacimiento <br />
                <input
                  value={birth_year}
                  onChange={birthChange}
                  disabled={enable}
                  required
                />{" "}
                <br />
                Genero <br />
                <input
                  value={gender}
                  onChange={genderChange}
                  disabled={enable}
                  required
                />{" "}
                <br />
                Altura <br />
                <input
                  value={height}
                  onChange={heightChange}
                  disabled={enable}
                  required
                />{" "}
                <br />
                Color de piel <br />
                <input
                  value={skin_color}
                  onChange={skinChange}
                  disabled={enable}
                  required
                  
                />{" "}
                <br />
              </div>
            </div>
          </div>
          <div className="modal-cuadro">
            Planeta natal
            <div className="modal-info">
              <Select
                isMulti
                name="homeworld"
                isDisabled={enable}
                defaultValue={registerPlace}
                options={resultsPlace}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={selectPlanet}
              ></Select>
            </div>
          </div>
          <div className="modal-cuadro">
            Películas
            <div className="modal-info">
              <Select
                isMulti
                name="colors"
                isDisabled={enable}
                defaultValue={registerFilms}
                options={resultsFilms}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={selectFilms}
              ></Select>
            </div>
          </div>
          <div className="modal-cuadro">
            Naves espaciales
            <div className="modal-info">
              <Select
                isMulti
                name="colors"
                isDisabled={enable}
                defaultValue={registerShips}
                options={resultsShips}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={selectStarship}
              ></Select>
            </div>
          </div>
          <div className="modal-cuadro">
            Vehículos
            <div className="modal-info">
              <Select
                isMulti
                name="colors"
                isDisabled={enable}
                defaultValue={registerVehicle}
                options={resultsVehicles}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={selectVehicles}
              ></Select>
            </div>
          </div>
          {enable ? (
            ""
          ) : (
            <div className="button-guardar" onClick={addPeople.bind(this)}>
              <button>Guardar</button>
            </div>
          )}
        </div>
      </article>
      {loading && <Sitio error={error} info={mensaje} />}
    </>
  );
};

export default Modal;
