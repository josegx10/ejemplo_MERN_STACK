import { useEffect, useState } from "react";
import "../Modal.css";

const AddFilm = ({ item, enable, setIsOpen }) => {
  var [films, setFilms] = useState({ title: "", director: "", productor: "" });

  const postFilm = () => {
    fetch("http://localhost:4000/api/film", {
      method: "POST",
      body: JSON.stringify({
        title: films.title,
        director: films.director,
        productor: films.productor,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    setFilms({
      title: item?.title,
      director: item?.director,
      productor: item?.productor,
    });
  });
  return (
    <article className="modal is-open">
      <div className="modal-pantalla">
        <div className="modal-name"> Agregar Pelicula </div>
        <div className="button-modal">
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
      </div>
    </article>
  );
};

export default AddFilm;
