import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const AddPlanet = ({ item, enable, setIsOpen }) => {
  var [loading, setLoading] = useState(false);
  var [mensaje, setMensaje] = useState("");

  const postPlanet = (values) => {
    fetch(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PORT}/api/planet`, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        diameter: values.diameter,
        rotation_period: values.rotation_period,
        orbital_period: values.orbital_period,
        gravity: values.gravity,
        population: values.gravity,
        climate: values.climate,
        terrain: values.terrain,
        surface_water: values.surface_water,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(true);
        setMensaje("planet");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {}, []);
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obligatorio"),
  });
  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="modal-name"> Agregar Planeta </div>
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <br />
          <br />
          <Formik
            initialValues={{
              name: item?.name,
              diameter: item?.diameter,
              rotation_period: item?.rotation_period,
              orbital_period: item?.orbital_period,
              gravity: item?.gravity,
              population: item?.gravity,
              climate: item?.climate,
              terrain: item?.terrain,
              surface_water: item?.surface_water,
            }}
            validationSchema={formSchema}
            onSubmit={(values) => postPlanet(values)}
          >
            <Form>
              <div className="modal-cuadro">
                <div className="modal-inputs-extras">
                  Nombre
                  <Field name="name" />
                  <ErrorMessage
                    name="name"
                    className="DataError"
                    component="div"
                  />
                  Diámetro
                  <Field name="diameter" />
                  Periodo de rotación <br />
                  <Field name="rotation_period" /> Periodo orbital <br />
                  <Field name="orbital_period" />
                  <br />
                  Gravedad <br />
                  <Field name="gravity" />
                  <br />
                  Población <br />
                  <Field name="population" /> Clima <br />
                  <Field name="climate" />
                  <br />
                  Terreno <br />
                  <Field name="terrain" />
                  <br />
                  % de superficie de agua <br />
                  <Field name="surface_water" />{" "}
                </div>
              </div>

              {enable ? (
                ""
              ) : (
                <div className="button-guardar">
                  <button type="submit">Guardar</button>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </article>
      <> </>
      {loading && (
        <Sitio error={false} info={mensaje} setLoading={setLoading} />
      )}
    </>
  );
};

export default AddPlanet;
