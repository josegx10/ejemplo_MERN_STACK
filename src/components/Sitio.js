import { useEffect, useState } from "react";
import "./Sitio.css";

import exito from "../assets/exito.png"
import errorImg from "../assets/error.png"
const Sitio = ({ info, error, id }) => {
  var data = []
  const [cargarMensaje, setCargar] = useState(false)
  const reinicio = () => {
    window.location.reload();
  }
  const eliminar=()=>{
    fetch( `http://localhost:4000/api/people/${id}`, {
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
  }

  useEffect(() => {
    console.log('entro a sitio')
    console.log(info);
    if(info === 'post' && error === false){
      console.log('entro')
      data.push(
        <>
          <div className="message-panel">
            <button onClick={reinicio}>x</button>
            <img src={exito}></img>
            Registro guardado con exito
          </div>
        </>
      )
    }else if(info === 'post' && error){
      console.log('entro')
      data.push(
        <>
          <div className="message-panel">
            <button onClick={reinicio}>x</button>
            <img src={errorImg}></img>
            Registro no guardado
          </div>
        </>
      )
    }else if(info === 'put' && error === false){
      console.log('entro')
      data.push(
        <>
          <div>
            <button onClick={reinicio}>x</button>
            <img src={exito}></img>
            Registro actualizado con exito
          </div>
        </>
      )
    }else if(info === 'put' && error){
      console.log('entro')
      data.push(
        <>
          <div>
            <button onClick={reinicio}>x</button>
            <img src={errorImg}></img>
            Registro no actualizado
          </div>
        </>
      )
    }else if(info === 'delete' && error === false){
      console.log('entro')
      data.push(
        <>
          <div>
            {cargarMensaje === false && (<div className="message-panel"><button onClick={reinicio}>X</button> ¿Estas seguro que deseas eliminar este registro? <button onClick={eliminar}>Si </button> <button onClick={reinicio}>No</button></div>) }
           
          </div>
        </>
      )
    }else if(info === 'delete' && error){
      console.log('entro')
      data.push(
        <>
          <div>
            <button onClick={reinicio}>x</button>
            <img src={errorImg}></img>
            Tu registro no se eliminó
          </div>
        </>
      )
    }
  }, []);

  return (
    <>
      <article className="message is_open">
        <div className="message-panel">
          {cargarMensaje === false &&  info === 'delete' && (<><button onClick={reinicio} className="message-button">x</button><br/> <div className="message-texto"> ¿Estas seguro que deseas eliminar este registro? </div><button onClick={eliminar} className="message-condicional">Si </button><button onClick={reinicio} className="message-condicional">No</button></>) }
          {cargarMensaje && info === 'delete' && (<><button onClick={reinicio} className="message-button">x</button> <img src={exito} className="message-img"></img> <h4 className="message-texto"> Tu registro se eliminó con exito  </h4> </>)}
          {info === 'post' && error === false && (<><button onClick={reinicio} className="message-button">x</button> <img src={exito} className="message-img"></img> <h4 className="message-texto"> Registro guardado con exito </h4> </>)}
          {info === 'post' && error === true && (<><button onClick={reinicio} className="message-button">x</button> <img src={error} className="message-img"></img> <h4 className="message-texto"> Registro no guardado </h4> </>)}
          {info === 'put' && error === false && (<><button onClick={reinicio} className="message-button">x</button> <img src={exito} className="message-img"></img> <h4 className="message-texto"> Registro actualizado con exito </h4> </>)}
          {info === 'put' && error === true && (<><button onClick={reinicio} className="message-button">x</button> <img src={error} className="message-img"></img> <h4 className="message-texto"> Registro no actualizado </h4> </>)}
        </div>
        
      </article>
      
    </>
  );
};
export default Sitio;
