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
    }
  };
  const postFilm = () => {
    if(title.error || director.error || producer.error){
      setLoading(true);
      setMensaje("InputError");
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
            <input value={title.value} onChange={titleChange} disabled={enable} required style={{border: title.color}}/>
            <br />
            Director <br />
            <input
              value={director.value}
              onChange={directorChange}
              disabled={enable}
              required
              style={{border: director.color}} />
            <br />
            Productor <br />
            <input
              value={producer.value}
              onChange={producerChange}
              disabled={enable}
              required
              style={{border: producer.color}} />{" "}

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
