import { useEffect, useState } from "react";
import "./Modal.css";
import Sitio from "./Sitio";
import Select from "react-select";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

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

  var [homeworld, setHomeworld] = useState("");
  var [mensaje, setMensaje] = useState("");
  var [error, setError] = useState(false);
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    setHomeworld(item?.homeworld);
  }, []);
  const addPeople = (values) => {
    if (modalFun === "add") {
      fetch("http://192.168.1.162:4000/api/people", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          height: values.height,
          mass: values.mass,
          hair_color: values.hair_color,
          skin_color: values.skin_color,
          eye_color: values.eye_color,
          birth_year: values.birth_year,
          gender: values.gender,
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
    } else if (modalFun === "put") {
      fetch(`http://192.168.1.162:4000/api/people/${item?._id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: values.name,
          height: values.height,
          mass: values.mass,
          hair_color: values.hair_color,
          skin_color: values.skin_color,
          eye_color: values.eye_color,
          birth_year: values.birth_year,
          gender: values.gender,
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
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obligatorio"),
    birth_year: Yup.string().required("Campo Obgatorio"),
  });
  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="modal-name"> Agregar Personaje </div>
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <br />
          <br />

          <Formik
            initialValues={{
              name: item?.name,
              height: item?.height,
              mass: item?.mass,
              hair_color: item?.hair_color,
              skin_color: item?.skin_color,
              eye_color: item?.eye_color,
              birth_year: item?.birth_year,
              gender: item?.gender,
            }}
            validationSchema={formSchema}
            onSubmit={(values) => addPeople(values)}
          >
            <Form>
              <div className="modal-cuadro">
                Datos Generales
                <div className="modal-info">
                  <div className="modal-inputs">
                    Nombre
                    <Field name="name" disabled={enable} />
                    <ErrorMessage
                      name="name"
                      className="DataError"
                      component="div"
                    />
                    Color de ojos
                    <Field name="eye_color" disabled={enable} />
                    Color de Cabello
                    <Field name="hair_color" disabled={enable} />
                    Masa
                    <Field name="mass" disabled={enable} />
                  </div>
                  <div className="modal-inputs">
                    Fecha de nacimiento
                    <Field name="birth_year" disabled={enable} />
                    <ErrorMessage
                      name="birth_year"
                      className="DataError"
                      component="div"
                    />
                    Genero
                    <Field name="gender" disabled={enable} />
                    Altura
                    <Field name="height" disabled={enable} />
                    Color de piel
                    <Field name="skin_color" disabled={enable} />
                  </div>
                </div>
              </div>
              <div className="modal-select">
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
              <div className="modal-select">
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
              <div className="modal-select">
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
              <div className="modal-select">
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
                <div className="button-guardar">
                  <button type="submit">Guardar</button>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </article>
      {loading && (
        <Sitio error={error} info={mensaje} setLoading={setLoading} />
      )}
    </>
  );
};

export default Modal;
