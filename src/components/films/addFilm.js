import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";

const AddFilm = ({ item, enable, setIsOpen }) => {
  
  var [title, setTitle] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [director, setDirector] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [producer, setProducer] = useState({
    value: "",
    error: true,
    color: "1px red solid",
  });
  var [invalid, setInvalidad] = useState({
    title: false,
    director: false,
    producer: false
  })
  var [loading, setLoading] = useState(false);
  var [mensaje, setMensaje] = useState("");
  const titleChange = (e) => {
    if (e.target.value === "") {
      setTitle({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setTitle({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
      setInvalidad({title: title.error, director: invalid.director, producer: invalid.producer})
    }
  };
  const directorChange = (e) => {
    if (e.target.value === "") {
      setDirector({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setDirector({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
      setInvalidad({title: invalid.title, director: director.error, producer: invalid.producer})
    }
  };
  const producerChange = (e) => {
    if (e.target.value === "") {
      setProducer({
        value: e.target.value,
        error: true,
        color: "1px solid red",
      });
    } else {
      setProducer({
        value: e.target.value,
        error: false,
        color: "1px solid green",
      });
      setInvalidad({title: invalid.title, director: invalid.director, producer: producer.error})
    }
  };
  const postFilm = () => {
    if(title.error || director.error || producer.error){
      setInvalidad({title: title.error, director: director.error, producer: producer.error})
    }else {
    fetch("http://192.168.1.162:4000/api/film", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        director: director.value,
        producer: producer.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setLoading(true);
      setMensaje("film")
    })
    .catch((err) => {
      console.error(err);
    });;}
  };

  useEffect(() => {
    if(item?.title){
      setTitle({ value: item?.title, error: false, color: "1px solid green" });
    setDirector({ value: item?.director, error: false, color: "1px solid green" });
    setProducer({ value: item?.producer, error: false, color: "1px solid green" });
    }
    
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
            <input value={title.value} onChange={titleChange} disabled={enable} required style={{border: invalid.title && title.color}}/>
            {invalid.title && (<div className="DataError"> campo obligatorio </div>)}
            <br />
            Director <br />
            <input
              value={director.value}
              onChange={directorChange}
              disabled={enable}
              required
              style={{border: invalid.director && director.color}} />
            {invalid.director && (<div className="DataError"> campo obligatorio </div>)}
            <br />
            Productor <br />
            <input
              value={producer.value}
              onChange={producerChange}
              disabled={enable}
              required
              style={{border: invalid.producer && producer.color}} />{" "}
            {invalid.producer && (<div className="DataError"> campo obligatorio </div>)}
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
    {loading && <Sitio error={false} info={mensaje} setLoading={setLoading}/>}
    
    </>
  );
};

export default AddFilm;
