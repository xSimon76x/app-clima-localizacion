
import MainWeather from "../components/main-weather.js";
import Statistics from "../components/statistics.js";
import LoadingWeather from "../components/loadingWeather.js";
import { useEffect, useState } from "react";

export default function Weather(props) {


  const [currentTypeGrade, setCurrentTypeGrade] = useState({ celcius: null, fahrenheit: null });
  const [listGradesDay, setListGradesDay] = useState({ celcius: null, fahrenheit: null });

  const [metaciudad, setMetaciudad] = useState(null);
  const headers = new Headers();




  headers.set("Content-Type", "application/json");
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Access-Control-Allow-Origin", "*");
  useEffect(() => {
    ApiClima();
  });

  const ApiClima = async () => {
    // try {
    //let city = "santiago";

    //
    // api = await fetch ("/api/location/search/?query=santiago"); // local
    const api = await fetch("/api/location/search/?query=santiago", {
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

  const cambioTipoFahrenheit = (objWeather, celcius, celciusListDay) => {
    let currentTempApi = objWeather.consolidated_weather[0].the_temp;
    let celciusCambio = 0;
    let tempMinMax = objWeather.consolidated_weather;
    let currentTempMinDay = 0;
    let currentTempMaxDay = 0;
    let index = 0;
    let listMinMaxTempDay = [];

    if (currentTempApi && !celcius && tempMinMax && !celciusListDay) {
      currentTempApi = (currentTempApi * 1.8) + 32;
      for (index in tempMinMax) {
        currentTempMinDay = (tempMinMax[index].min_temp * 1.8) + 32
        currentTempMaxDay = (tempMinMax[index].max_temp * 1.8) + 32
        listMinMaxTempDay.push({ min_temp: currentTempMinDay.toFixed(0), max_temp: (currentTempMaxDay).toFixed(0) })
      };

      return (setCurrentTypeGrade({ celcius: null, fahrenheit: currentTempApi.toFixed(0) }), setListGradesDay({ celcius: null, fahrenheit: listMinMaxTempDay }));
    } else if (celcius && celciusListDay) {
      celciusCambio = (celcius * 1.8) + 32;
      for (index in celciusListDay) {
        currentTempMinDay = (celciusListDay[index].min_temp * 1.8) + 32
        currentTempMaxDay = (celciusListDay[index].max_temp * 1.8) + 32
        listMinMaxTempDay.push({ min_temp: currentTempMinDay.toFixed(0), max_temp: (currentTempMaxDay).toFixed(0) })
      };
      return (setCurrentTypeGrade({ celcius: null, fahrenheit: celciusCambio.toFixed(0) }), setListGradesDay({ celcius: null, fahrenheit: listMinMaxTempDay }));
    }

  }

  const cambioTipoCelcius = (fahrenheit, listFahrenheitDayObj) => {
    let currentTemp = fahrenheit.fahrenheit;
    let tempMinMax = listFahrenheitDayObj;
    let listMinMaxTempDay = [];
    let currentTempMinDay, currentTempMaxDay = 0;
    let index = 0;
    if (currentTemp && tempMinMax) {
      currentTemp = ((currentTemp - 32) * 5) / 9;

      for (index in tempMinMax) {
        currentTempMinDay = ((tempMinMax[index].min_temp - 32) * 5) / 9;
        currentTempMaxDay = ((tempMinMax[index].max_temp - 32) * 5) / 9;
        listMinMaxTempDay.push({ min_temp: (currentTempMinDay).toFixed(0), max_temp: (currentTempMaxDay).toFixed(0) })
      };

      return (setCurrentTypeGrade({ celcius: currentTemp.toFixed(0), fahrenheit: null }), setListGradesDay({ celcius: listMinMaxTempDay, fahrenheit: null }));
    }
  }





  return (
    <div>
      {metaciudad ? (
        <div className="Content columns is-gapless is-mobile is-desktop">
          <div className="column leftContent">
            <MainWeather objWeather={metaciudad} currentTypeGrade={currentTypeGrade} />
          </div>
          <div className="column is-three-quarters-desktop is-three-fifths-tablet is-three-fifths-mobile RightContent">
            <Statistics objWeather={metaciudad} cambioTipoFahrenheit={cambioTipoFahrenheit} cambioTipoCelcius={cambioTipoCelcius} currentTypeGrade={currentTypeGrade} listGradesDay={listGradesDay} />
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
