import { useEffect, useState } from "react";
import "./Sitio.css";

import exito from "../assets/exito.png";
import errorImg from "../assets/error.png";
const Sitio = ({ info, error, id, setLoading }) => {
  var data = [];
  const [cargarMensaje, setCargar] = useState(false);
  const reinicio = () => {
    window.location.reload();
  };
  const volver = () => {
    setLoading(false);
  }
  const eliminar = () => {
    fetch(`http://localhost:4000/api/people/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    setCargar(true);
  };

  useEffect(() => {}, []);

  return (
    <>
      <article className="message is_open">
        <div className="message-panel">
          {cargarMensaje === false && info === "delete" && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>
              <br />{" "}
              <div className="message-texto">
                {" "}
                ¿Estas seguro que deseas eliminar este registro?{" "}
              </div>
              <button onClick={eliminar} className="message-condicional">
                Si{" "}
              </button>
              <button onClick={reinicio} className="message-condicional">
                No
              </button>
            </>
          )}
          {cargarMensaje && info === "delete" && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto">
                {" "}
                Tu registro se eliminó con exito{" "}
              </h4>{" "}
            </>
          )}
          {info === "post" && error === false && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto"> Registro guardado con exito </h4>{" "}
            </>
          )}
          {info === "post" && error === true && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={errorImg} className="message-img"></img>{" "}
              <h4 className="message-texto"> Registro no guardado </h4>{" "}
            </>
          )}
          {info === "put" && error === false && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto">
                {" "}
                Registro actualizado con exito{" "}
              </h4>{" "}
            </>
          )}
          {info === "put" && error === true && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={errorImg} className="message-img"></img>{" "}
              <h4 className="message-texto"> Registro no actualizado </h4>{" "}
            </>
          )}
          {info === "film" && error === false && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto"> Película registada con exito </h4>{" "}
            </>
          )}
          {info === "planet" && error === false && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto"> Planeta registada con exito </h4>{" "}
            </>
          )}
          {info === "vehicle" && error === false && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto"> Vehiculo registada con exito </h4>{" "}
            </>
          )}
          {info === "starship" && error === false && (
            <>
              <button onClick={reinicio} className="message-button">
                x
              </button>{" "}
              <img src={exito} className="message-img"></img>{" "}
              <h4 className="message-texto">
                {" "}
                Nave espacial registrada con exito{" "}
              </h4>{" "}
            </>
          )}
          {info === "InputError" && (
            <>
              <button onClick={volver} className="message-button">
                x
              </button>{" "}
              <img src={errorImg} className="message-img"></img>{" "}
              <h4 className="message-texto">
                {" "}
                Te falto rellanar uno o más campo obligatorio{" "}
              </h4>{" "}
            </>
          )}
        </div>
      </article>
    </>
  );
};
export default Sitio;
