import "./Modal.css";
import Sitio from "./Sitio";

const Modal = ({ setIsOpen, films, place, vehicles, ships, name }) => {
  var resultsFilms = [];
  var resultsPlace = [];
  var resultsVehicles = [];
  var resultsShips = [];

  resultsPlace.push(
    <>
      <Sitio info={place} />
      <br />
    </>
  );

  if (films.length === 0) {
    resultsFilms.push(<> n/a </>);
  } else {
    films.forEach((employee) => {
      resultsFilms.push(
        <>
          <Sitio info={employee} />
          <br />
        </>
      );
    });
  }

  if (vehicles.length === 0) {
    resultsVehicles.push(<> n/a </>);
  } else {
    vehicles.forEach((employee) => {
      resultsVehicles.push(
        <>
          <Sitio info={employee} />
          <br />
        </>
      );
    });
  }

  if (ships.length === 0) {
    resultsShips.push(<> n/a </>);
  } else {
    ships.forEach((employee) => {
      resultsShips.push(
        <>
          <Sitio info={employee} />
          <br />
        </>
      );
    });
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
              Nombre <br/>
              <input></input> <br/>
              Nombre <br/>
              <input></input> <br/>
              Nombre <br/>
              <input></input> <br/>
              Nombre <br/>
              <input></input> <br/>
            </div>
          </div>
          <div className="modal-cuadro">
            Planeta natal
            <div className="modal-info"> En trabajo </div>
          </div>
          <div className="modal-cuadro">
            Películas
            <div className="modal-info"> En trabajo </div>
          </div>
          <div className="modal-cuadro">
            Naves espaciales
            <div className="modal-info"> En trabajo </div>
          </div>
          <div className="modal-cuadro">
            Vehículos
            <div className="modal-info"> En trabajo </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Modal;
