import { useEffect, useState } from "react";
import "./Sitio.css";
const Sitio = ({ info }) => {
  var [data, setData] = useState({});
  var [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(info)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading ? (
        <>
          {data?.title}
          {data?.name}
        </>
      ) : (
        <div className="spinnerModal"></div>
      )}
    </>
  );
};
export default Sitio;
