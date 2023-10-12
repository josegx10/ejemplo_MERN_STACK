import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddFilm = ({ item, enable, setIsOpen }) => {
  
  var [title, setTitle] = useState("");
  var [director, setDirector] = useState("");
  var [producer, setProducer] = useState("");
  var [loading, setLoading] = useState(false);
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const directorChange = (e) => {
    setDirector(e.target.value);
  };
  const producerChange = (e) => {
    setProducer(e.target.value);
  };
  const postFilm = () => {
    fetch("http://192.168.1.162:4000/api/film", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        director: director,
        producer: producer,
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
    
    setTitle(item?.title);
    setDirector(item?.director);
    setProducer(item?.producer);
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
            Titulo <br />
            <input value={title} onChange={titleChange} disabled={enable} required />
            <br />
            Director <br />
            <input
              value={director}
              onChange={directorChange}
              disabled={enable}
              required />
            <br />
            Productor <br />
            <input
              value={producer}
              onChange={producerChange}
              disabled={enable}
              required />{" "}

          </div>
        </div>
        {enable ? (
          ""
        ) : (
          <div className="button-guardar" onClick={postFilm.bind(this)}>
            <button>Guardar</button>
          </div>
        )}
      </div>
    </article><> </>
    {loading && <Sitio error={false} info={"film"} />}
    
    </>
  );
};

export default AddFilm;
