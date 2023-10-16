import { useEffect, useState } from "react";
import "./Modal.css";
import Sitio from "./Sitio";
import Select from "react-select";


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

  var [name, setName] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [gender, setGender] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [eye_color, setEye] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [hair_color, setHair] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [mass, setMass] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [birth_year, setBirth] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [height, setHeight] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [skin_color, setSkin] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [homeworld, setHomeworld] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [mensaje, setMensaje] = useState("");
  var [error, setError] = useState(false);
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item?.name) {
      setName({ value: item?.name, error: false, color: "1px solid green" });
      setGender({
        value: item?.gender,
        error: false,
        color: "1px solid green",
      });
      setEye({
        value: item?.eye_color,
        error: false,
        color: "1px solid green",
      });
      setHair({
        value: item?.hair_color,
        error: false,
        color: "1px solid green",
      });
      setMass({ value: item?.mass, error: false, color: "1px solid green" });
      setBirth({
        value: item?.birth_year,
        error: false,
        color: "1px solid green",
      });
      setHeight({
        value: item?.height,
        error: false,
        color: "1px solid green",
      });
      setSkin({
        value: item?.skin_color,
        error: false,
        color: "1px solid green",
      });
    }
    setHomeworld(item?.homeworld);
  }, []);
  const addPeople = () => {
    if (modalFun === "add") {
      console.log(name.value, name.error);
      if (
        name.error ||
        gender.error ||
        hair_color.error ||
        eye_color.error ||
        mass.error ||
        birth_year.error ||
        height.error ||
        skin_color.error
      ) {
        setLoading(true);
        setMensaje("InputError");
      } else {
        fetch("http://192.168.1.162:4000/api/people", {
          method: "POST",
          body: JSON.stringify({
            name: name.value,
            height: height.value,
            mass: mass.value,
            hair_color: hair_color.value,
            skin_color: skin_color.value,
            eye_color: eye_color.value,
            birth_year: birth_year.value,
            gender: gender.value,
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
        setLoading(true);
      }
    } else if (modalFun === "put") {
      fetch(`http://192.168.1.162:4000/api/people/${item?._id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name.value,
          height: height.value,
          mass: mass.value,
          hair_color: hair_color.value,
          skin_color: skin_color.value,
          eye_color: eye_color.value,
          birth_year: birth_year.value,
          gender: gender.value,
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
      setLoading(true);
    }
  };
  const selectPlanet = (e) => {
    place = [];
    e.forEach((element) => {
      place.push(element.value);
      setHomeworld(element.value);
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
  const genderChange = (e) => {
    if (e.target.value === "") {
      setGender({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setGender({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const eyeChange = (e) => {
    if (e.target.value === "") {
      setEye({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setEye({ value: e.target.value, error: false, color: "1px solid green" });
    }
  };
  const hairChange = (e) => {
    if (e.target.value === "") {
      setHair({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setHair({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const massChange = (e) => {
    if (e.target.value === "") {
      setMass({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setMass({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const birthChange = (e) => {
    if (e.target.value === "") {
      setBirth({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setBirth({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const heightChange = (e) => {
    if (e.target.value === "") {
      setHeight({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setHeight({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  const skinChange = (e) => {
    if (e.target.value === "") {
      setSkin({ value: e.target.value, error: true, color: "1px solid red" });
    } else {
      setSkin({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
    }
  };
  fetch("http://192.168.1.162:4000/api/planet")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsPlace.push({ value: element.name, label: element.name });
      });
    });
  fetch("http://192.168.1.162:4000/api/starship")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsShips.push({ value: element.name, label: element.name });
      });
    });
  fetch("http://192.168.1.162:4000/api/film")
    .then((response) => response.json())
    .then((people) => {
      people.forEach((element) => {
        resultsFilms.push({ value: element.title, label: element.title });
      });
    });
  fetch("http://192.168.1.162:4000/api/vehicle")
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
                <input
                  value={name.value}
                  onChange={nameChange}
                  disabled={enable}
                  required
                  style={{ border: name.color }}
                />
                <br />
                Color de ojos <br />
                <input
                  value={eye_color.value}
                  onChange={eyeChange}
                  disabled={enable}
                  required
                  style={{ border: eye_color.color }}
                />
                <br />
                Color de cabello <br />
                <input
                  value={hair_color.value}
                  onChange={hairChange}
                  disabled={enable}
                  required
                  style={{ border: hair_color.color }}
                />{" "}
                <br />
                Masa <br />
                <input
                  value={mass.value}
                  onChange={massChange}
                  disabled={enable}
                  style={{ border: mass.color }}
                />
                <br />
              </div>
              <div className="modal-inputs">
                Fecha de nacimiento <br />
                <input
                  value={birth_year.value}
                  onChange={birthChange}
                  disabled={enable}
                  required
                  style={{ border: birth_year.color }}
                />{" "}
                <br />
                Genero <br />
                <input
                  value={gender.value}
                  onChange={genderChange}
                  disabled={enable}
                  required
                  style={{ border: gender.color }}
                />{" "}
                <br />
                Altura <br />
                <input
                  value={height.value}
                  onChange={heightChange}
                  disabled={enable}
                  required
                  style={{ border: height.color }}
                />{" "}
                <br />
                Color de piel <br />
                <input
                  value={skin_color.value}
                  onChange={skinChange}
                  disabled={enable}
                  required
                  style={{ border: skin_color.color }}
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
      {loading && (
        <Sitio error={error} info={mensaje} setLoading={setLoading} />
      )}
    </>
  );
};

export default Modal;
