import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/search";
import PeopleList from "./components/PeopleList";
import Modal from "./components/Modal";
import { useCookies } from "react-cookie";
import Barra from "./components/barra";
import FilmsList from "./components/films/FilmsList";
import PlanetList from "./components/homeworld/PlanetList";
import StarshipList from "./components/starship/StarshipList";
import VehicleList from "./components/vehicle/VehicleList";
import AddFilm from "./components/films/addFilm";
import AddPlanet from "./components/homeworld/addPlanet";
import AddVehicle from "./components/vehicle/AddVehicle";
import AddStarship from "./components/starship/addStarship";

function App() {
  var [people, setPeople] = useState([]);
  var [info, setInfo] = useState({});
  var [loading, setLoading] = useState(true);
  var [cont, setCont] = useState(1);
  var [enable, setEnable] = useState(true);
  var [modalFun, setModal] = useState("add");
  var [isOpen, setIsOpen] = useState(false);
  var [sitio, setSitio] = useState("");
  const [cookies, setCookie] = useCookies(["url", "cont", "table"]);
  const signoMayor = ">";
  const signoMenor = "<";
  const Paginacion = (uri) => {
    fetch(uri)
      .then((response) => response.json())
      .then((people) => {
        console.log(people);
        setPeople(people?.results);
        setInfo(people);
        setLoading(false);
        setCont(people.nPage);
        setEnable(true);
      });
    setCookie("url", uri);
  };

  const handleNextPage = () => {
    Paginacion(info.next, 1);
    window.scrollTo(0, 0);
    setEnable(false);
  };

  const handlePreviousPage = () => {
    Paginacion(info.previous, 2);
    window.scrollTo(0, 0);
    setEnable(false);
  };
  useEffect(() => {
    if (cookies.table) {
      setSitio(cookies.table);
    } else {
      setSitio("people");
    }
    if (cookies.url) {
      Paginacion(cookies.url);
    } else {
      Paginacion(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PORT}/api/people`);
    }
  }, []);

  return (
    <>
      <Barra setSitio={setSitio} setCookie={setCookie} />
      <div className="Contenido">
        <Search
          setPeople={setPeople}
          setInfo={setInfo}
          setLoading={setLoading}
          setCont={setCont}
        />
        <div className="cajon">
          <div className="Title">
            {" "}
            <h1>
              {" "}
              Wiki Start Wars | {sitio === "people" && "Personajes"}{" "}
              {sitio === "films" && "Películas"}{" "}
              {sitio === "planet" && "Planetas"}{" "}
              {sitio === "vehicle" && "Vehículos"}{" "}
              {sitio === "starship" && "Naves espaciales"}{" "}
            </h1>
          </div>
          <div className="button-agregar">
            <button onClick={() => setIsOpen(true)}>+ Agregar registro</button>
          </div>
          {sitio === "people" && (
            <>
              <PeopleList people={people} loading={loading}>
                {" "}
                {setInfo?.count === 0 ? (
                  <h2> Sin resultados </h2>
                ) : (
                  "Sin resultado"
                )}{" "}
              </PeopleList>
              <div className="footer">
                {" "}
                <div className="cont">
                  {" "}
                  {people.length} de {info?.count} personas{" "}
                </div>{" "}
                <div className="paginacion">
                  {" "}
                  {info.previous ? (
                    <>
                      {" "}
                      <button
                        className="bottonPaginacion"
                        onClick={handlePreviousPage}
                        disabled={!enable}
                      >
                        {" "}
                        {signoMenor}{" "}
                      </button>{" "}
                      <button
                        className="bottonPaginacion"
                        onClick={handlePreviousPage}
                        disabled={!enable}
                      >
                        {cont - 1}
                      </button>
                    </>
                  ) : null}{" "}
                  <button className="bottonPaginacion" id="botonPrincipal">
                    {" "}
                    {cont}{" "}
                  </button>{" "}
                  {info.next ? (
                    <>
                      <button
                        className="bottonPaginacion"
                        onClick={handleNextPage}
                        disabled={!enable}
                      >
                        {cont + 1}
                      </button>
                      <button
                        className="bottonPaginacion"
                        onClick={handleNextPage}
                        disabled={!enable}
                      >
                        {" "}
                        {signoMayor}{" "}
                      </button>
                    </>
                  ) : null}{" "}
                </div>
              </div>
            </>
          )}
          {sitio === "films" && <FilmsList></FilmsList>}
          {sitio === "planet" && <PlanetList></PlanetList>}
          {sitio === "starship" && <StarshipList></StarshipList>}
          {sitio === "vehicle" && <VehicleList></VehicleList>}
        </div>
      </div>
      <div>
        {isOpen && sitio === "people" && (
          <Modal setIsOpen={setIsOpen} modalFun={modalFun} enable={false} />
        )}
        {isOpen && sitio === "films" && (
          <AddFilm enable={false} setIsOpen={setIsOpen} />
        )}
        {isOpen && sitio === "planet" && (
          <AddPlanet enable={false} setIsOpen={setIsOpen} />
        )}
        {isOpen && sitio === "vehicle" && (
          <AddVehicle enable={false} setIsOpen={setIsOpen} />
        )}
        {isOpen && sitio === "starship" && (
          <AddStarship enable={false} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
}

export default App;
