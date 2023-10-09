import { useState, useEffect } from "react";
import "./search.css";

const Search = ({ setInfo, setPeople, setLoading, setCont }) => {
  const [busqueda, setBusqueda] = useState("");

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedquery = useDebounce(busqueda, 1000);

  const SearchChange = (e) => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    if (debouncedquery || debouncedquery === "") {
      fetch(`http://localhost:4000/api/people/?search=${debouncedquery}`)
        .then((response) => response.json())
        .then((people) => {
          setPeople(people?.results);
          setInfo(people);
          setLoading(false);
          setCont(1);
        });
    }
  }, [debouncedquery]);
  return (
    <div>
      <input
        name="busqueda"
        value={busqueda}
        className="Buscador"
        placeholder="Buscar por nombre"
        onChange={SearchChange}
      />
    </div>
  );
};

export default Search;
