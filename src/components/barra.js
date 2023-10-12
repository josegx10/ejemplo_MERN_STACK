import personaje from "../assets/personaje.png"
import pelicula from "../assets/pelicula.png"
import planeta from "../assets/planeta.png"
import starship from "../assets/starships.png"
import vehiculo from "../assets/vehiculos.png"

import "./barra.css"

const Barra = ({setSitio, setCookie }) => {
  const cambiarTabla = (tabla) => {
    setCookie("table", tabla);
    setSitio(tabla)
  }
  return (
    <div className="barraMenu">
      <img src={personaje} alt="" onClick={() => cambiarTabla('people')  }/>
      <img src={pelicula} alt="" onClick={( ) => cambiarTabla('films')}/>
      <img src={planeta} alt="" onClick={() => cambiarTabla('planet')}/>
      <img src={starship} alt="" onClick={()=> cambiarTabla('starship')}/>
      <img src={vehiculo} alt="" onClick={()=> cambiarTabla('vehicle')}/>
    </div>
  );
};

export default Barra;
