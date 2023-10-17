import { useEffect, useState } from "react";
import "../Modal.css";
import Sitio from "../Sitio";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const AddVehicle = ({ item, enable, setIsOpen }) => {
  var [loading, setLoading] = useState(false);
  var [mensaje, setMensaje] = useState("");

  const postVehicle = (values) => {
    fetch("http://192.168.1.162:4000/api/vehicle", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        model: values.model,
        vehicle_class: values.vehicle_class,
        length: values.length,
        passengers: values.passengers,
        max_atmosphering_speed: values.max_atmosphering_speed,
        cargo_capacity: values.cargo_capacity,
        consumables: values.consumables,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(true);
        setMensaje("vehicle");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {}, []);
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Campo Obligatorio"),
    model: Yup.string().required("Campo Obgatorio"),
  });
  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="modal-name"> Agregar Vehiculo </div>
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <br />
          <br />
          <Formik
            initialValues={{
              name: item?.name,
              model: item?.model,
              vehicle_class: item?.vehicle_class,
              length: item?.length,
              passengers: item?.passengers,
              max_atmosphering_speed: item?.max_atmosphering_speed,
              cargo_capacity: item?.cargo_capacity,
              consumables: item?.consumables,
            }}
            validationSchema={formSchema}
            onSubmit={(values) => postVehicle(values)}
          >
            <Form>
              <div className="modal-cuadro">
                <div className="modal-inputs-extras">
                  Nombre <br />
                  <Field name="name" disabled={enable}/>
                  <ErrorMessage name="name" className="DataError" component="div"/>
                  <br />
                  Modelo <br />
                  <Field name="model" disabled={enable}/>
                  <ErrorMessage name="model" className="DataError" component="div"/>
                  <br />
                  Clase <br />
                  <Field name="vehicle_class" disabled={enable}/>{" "}
                  Tamaño <br />
                  <Field name="length" disabled={enable}/>
                  <br />
                  Número de pasajeros <br />
                  <Field name="passengers" disabled={enable}/>
                  <br />
                  Velocidad atmosférica <br />
                  <Field name="max_atmosphering_speed" disabled={enable}/>{" "}
                  Capacidad <br />
                  <Field name="cargo_capacity" disabled={enable}/>
                  <br />
                  Tiempo de combustible
                  <br />
                  <Field name="consumables" disabled={enable}/>
                  <br />
                </div>
              </div>
              {enable ? (
                ""
              ) : (
                <div
                  className="button-guardar"
                  
                >
                  <button>Guardar</button>
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

export default AddVehicle;
