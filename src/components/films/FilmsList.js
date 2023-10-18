import { useEffect, useState } from "react";
import "../PeopleList.css";
import ver from "../../assets/ver.png";
import AddFilm from "./addFilm";
const FilmsList = ({}) => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    fetch("http://192.168.1.162:4000/api/film")
      .then((response) => response.json())
      .then((film) => {
        setFilms(film);
        setLoading(true);
      });
  }, []);
  return (
    <>
      {loading ? (
        <table className="headerTable">
          <tbody>
            <tr>
              <th> index </th>
              <th> Titulo </th>
              <th> Director </th>
              <th> Productor </th>
              <th> Acciones </th>
            </tr>
            {films.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {item?.title === "none" || item?.title === "unknown"
                    ? "n/a"
                    : item?.title}
                </td>

                <td>
                  {item?.director === "none" || item?.director === "unknown"
                    ? "n/a"
                    : item?.director}
                </td>

                <td>
                  {item?.producer === "none" || item?.producer === "unknown"
                    ? "n/a"
                    : item?.producer}
                </td>

                <td>
                  <img
                    src={ver}
                    className="button-accion"
                    onClick={() => {
                      setIsOpen(true);
                      setItem(item);
                      setEnable(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="spinner"> </div>
      )}
      {isOpen && <AddFilm setIsOpen={setIsOpen} item={item} enable={enable} />}
    </>
  );
};

export default FilmsList;
