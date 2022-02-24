import { colors } from "@material-ui/core";
import MainWeather from "../components/main-weather.js";
import Statistics from "../components/statistics.js";

export default function Weather() {
  return (
    <div>
      <div className="Content columns is-gapless is-mobile is-desktop">
        <div className="column leftContent">
          <MainWeather />
        </div>
        <div className="column is-three-quarters-desktop is-three-fifths-tablet is-three-fifths-mobile RightContent">
          <Statistics />
        </div>
      </div>
    </div>
  );
}

function gps() {
  console.log("no se encontro la geolocalizacion");
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
