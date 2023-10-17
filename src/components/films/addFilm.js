import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const AddFilm = ({ item, enable, setIsOpen }) => {
  var [loading, setLoading] = useState(false);
  var [mensaje, setMensaje] = useState("");

  const postFilm = (values) => {
    fetch("http://192.168.1.162:4000/api/film", {
      method: "POST",
      body: JSON.stringify({
        title: values.title,
        director: values.director,
        producer: values.producer,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(true);
        setMensaje("film");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {}, []);
  const formSchema = Yup.object().shape({
    title: Yup.string().required("Campo Obligatorio"),
    director: Yup.string().required("Campo Obgatorio"),
    producer: Yup.string().required("Campo oblogatorio"),
  });
  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="modal-name"> Agregar Pelicula </div>
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <br />
          <br />
          <Formik
            initialValues={{
              title: item?.title,
              director: item?.director,
              producer: item?.producer,
            }}
            validationSchema={formSchema}
            onSubmit={(values) => postFilm(values)}
          >
            <Form>
              <div className="modal-cuadro">
                <div className="modal-inputs-extras">
                  Titulo <br />
                  <Field name="title" disabled={enable} />
                  <ErrorMessage
                    name="title"
                    className="DataError"
                    component="div"
                  />
                  <br />
                  Director <br />
                  <Field name="director" disabled={enable} />
                  <ErrorMessage
                    name="director"
                    className="DataError"
                    component="div"
                  />
                  <br />
                  Productor <br />
                  <Field name="producer" disabled={enable} />{" "}
                  <ErrorMessage
                    name="producer"
                    className="DataError"
                    component="div"
                  />
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

export default AddFilm;
