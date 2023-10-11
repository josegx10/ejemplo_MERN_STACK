import personaje from "../assets/personaje.png"
import pelicula from "../assets/pelicula.png"
import planeta from "../assets/planeta.png"
import starship from "../assets/starships.png"
import vehiculo from "../assets/vehiculos.png"
import "./barra.css"

const Barra = ({setSitio}) => {
  return (
    <div className="barraMenu">
      <img src={personaje} alt="" onClick={() => setSitio('people')}/>
      <img src={pelicula} alt="" onClick={( ) => setSitio('films')}/>
      <img src={planeta} alt="" onClick={() => setSitio('planet')}/>
      <img src={starship} alt="" onClick={()=>setSitio('starship')}/>
      <img src={vehiculo} alt="" onClick={()=> setSitio('vehicle')}/>
    </div>
  );
};

export default Barra;
