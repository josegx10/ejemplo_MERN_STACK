import React, { useState } from "react";
import Modal from "./Modal";
import "./PeopleList.css";

const PeopleList = ({ people, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);

  return (
    <>
      {loading ? (
        <div class="spinner"></div>
      ) : (
        <>
          <>{people.length === 0 ? <h2> Sin resultados </h2> : ""}</>
          <table className="headerTable">
            <tbody>
              <tr>
                <th>Nombre</th>

                <th>Altura</th>

                <th>Peso</th>

                <th>Color de cabello</th>

                <th>Color de piel</th>

                <th>Color de ojos</th>

                <th>Fecha de nacimiento</th>

                <th>Género</th>
              </tr>
            
            {people &&
              people?.map((item) => (
                <>
                  <tr
                    onClick={() => {
                      setIsOpen(true);
                      setItem(item);
                    }}
                  >
                    <td>
                      {item?.name === "none" || item?.name === "unknown"
                        ? "n/a"
                        : item?.name}
                    </td>

                    <td>
                      {item?.height === "none" || item?.height === "unknown"
                        ? "n/a"
                        : item?.height}
                    </td>

                    <td>
                      {item?.mass === "none" || item?.mass === "unknown"
                        ? "n/a"
                        : item?.mass}
                    </td>

                    <td>
                      {item?.hair_color === "none" ||
                      item?.hair_color === "unknown"
                        ? "n/a"
                        : item?.hair_color}{" "}
                    </td>

                    <td>
                      {item?.skin_color === "none" ||
                      item?.skin_color === "unknown"
                        ? "n/a"
                        : item?.skin_color}
                    </td>

                    <td>
                      {item?.eye_color === "none" ||
                      item?.eye_color === "unknown"
                        ? "n/a"
                        : item?.eye_color}
                    </td>

                    <td>
                      {item?.birth_year === "none" ||
                      item?.birth_year === "unknown"
                        ? "n/a"
                        : item?.birth_year}
                    </td>

                    <td>
                      {item?.gender === "none" || item?.gender === "unknown"
                        ? "n/a"
                        : item?.gender}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </>
      )}

      <div>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            films={item?.films}
            place={item?.homeworld}
            vehicles={item?.vehicles}
            ships={item?.starships}
            name={item?.name}
          />
        )}
      </div>
    </>
  );
};

export default PeopleList;
