//import { colors } from "@material-ui/core";
import MainWeather from "../components/main-weather.js";
import Statistics from "../components/statistics.js";
import LoadingWeather from "../components/loadingWeather.js";
import { useEffect, useState } from "react";
//import { Details } from "@material-ui/icons";

export default function Weather() {
  //Consumo de metadata
  const [metaciudad, setMetaciudad] = useState(null);

  useEffect(() => {
    ApiClima();
  }, []);
  const ApiClima = async () => {
    //let city = "santiago";
    let url = "/api/location/search/?query=santiago"; // + city;
    const api = await fetch(url, {
      mode: "cors",
      cache: "no-cache",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://www.metaweather.com/",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
    const idCity = await api.json();
    // console.log(idCity);
    //metadata del clima
    let urlMt = "api/location/" + idCity[0].woeid + "/"; // + city;
    const apiMT = await fetch(urlMt);
    const climaMT = await apiMT.json();
    setMetaciudad(climaMT);
  };

  return (
    <div>
      {metaciudad ? (
        <div className="Content columns is-gapless is-mobile is-desktop">
          <div className="column leftContent">
            <MainWeather objWeather={metaciudad} />
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

// $(document).ready(function () {
//   //Click al boton para pedir permisos
//   $("#pedirvan").click(function () {
//     //Si el navegador soporta geolocalizacion
//     if (!!navigator.geolocation) {
//       //Pedimos los datos de geolocalizacion al navegador
//       navigator.geolocation.getCurrentPosition(
//         //Si el navegador entrega los datos de geolocalizacion los imprimimos
//         function (position) {
//           window.alert("nav permitido");
//           $("#nlat").text(position.coords.latitude);
//           $("#nlon").text(position.coords.longitude);
//         },
//         //Si no los entrega manda un alerta de error
//         function () {
//           window.alert("nav no permitido");
//         }
//       );
//     }
//   });
// });

/**
 * Esta función le permite modificar una promesa JS añadiendo algunas propiedades de estado.
 * basado en: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 * Pero modificado de acuerdo con las especificaciones de las promesas : https://promisesaplus.com/
 */
//  function MakeQuerablePromise(promise) {
//   // No modifique ninguna promesa que ya haya sido modificada.
//   if (promise.isFulfilled) return promise;

//   // Establecer estado inicial
//   var isPending = true;
//   var isRejected = false;
//   var isFulfilled = false;

//   // Observe la promesa, guardando el cumplimiento en un alcance de cierre.
//   var result = promise.then(
//     function (v) {
//       isFulfilled = true;
//       isPending = false;
//       return v;
//     },
//     function (e) {
//       isRejected = true;
//       isPending = false;
//       throw e;
//     }
//   );

//   result.isFulfilled = function () {
//     return isFulfilled;
//   };
//   result.isPending = function () {
//     return isPending;
//   };
//   result.isRejected = function () {
//     return isRejected;
//   };
//   return result;
// }

// var myPromise = MakeQuerablePromise(ApiClima("santiago"));
// myPromise.then(function obtDatos(data) {
//   console.log(data); // "Yeah !"
//   return data;
//   console.log("Final fulfilled:", myPromise.isFulfilled());
//   console.log("Final rejected:", myPromise.isRejected());
//   console.log("Final pending:", myPromise.isPending());
// });
