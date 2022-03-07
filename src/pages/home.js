//import { colors } from "@material-ui/core";
import MainWeather from "../components/main-weather.js";
import Statistics from "../components/statistics.js";
import LoadingWeather from "../components/loadingWeather.js";
import { useEffect, useState } from "react";
import axios from "axios";
//import { Details } from "@material-ui/icons";

export default function Weather(props) {
  const { apiFunction } = props;
  console.log(apiFunction);
  const [idciudad, setIdciudad] = useState(["null"]);
  //Consumo de metadata
  let ciudad = `london`;
  const [metaciudad, setMetaciudad] = useState(null);
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Access-Control-Allow-Origin", "*");
  useEffect(() => {
    ApiClima();
  }, []);

  const ApiClima = async () => {
    // try {
    //let city = "santiago";

    //
    // api = await fetch ("/api/location/search/?query=santiago"); // local
    const api = await fetch("/api/location/search/?query=london", {
      mode: "no-cors",
      cache: "no-cache",
      credentials: "omit",
      headers,
    }).catch(function (err) {
      console.error(err);
    });

    const idCity = await api.json(); // host

    //const idCity = await  api.json(); local

    //metadata del clima
    let urlMt = "/api/location/" + idCity[0].woeid + "/"; // host
    //let urlMt = "/api/location/" + idCity[0].woeid + "/"; // local
    const apiMT = await fetch(urlMt, {
      mode: "no-cors",
      cache: "no-cache",
      credentials: "omit",
      headers,
    });
    // const climaMT = await apiMT.json(); local
    const climaMT = await apiMT.json();

    setMetaciudad(climaMT);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const cambioTipoGrados = () => {
    console.log("first");
  }

  return (
    <div>
      {metaciudad ? (
        <div className="Content columns is-gapless is-mobile is-desktop">
          <div className="column leftContent">
            <MainWeather objWeather={metaciudad} cambioTipoGrados={cambioTipoGrados()} />
          </div>
          <div className="column is-three-quarters-desktop is-three-fifths-tablet is-three-fifths-mobile RightContent">
            <Statistics objWeather={metaciudad} />
          </div>
        </div>
      ) : (
        // fragmen para permitir dicho codigo por sintaxis JSX
        // Codigo de carga mientra se espera la promesa de la api
        <>
          <div>
            <div>
              <LoadingWeather />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
