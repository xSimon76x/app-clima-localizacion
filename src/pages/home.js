import MainWeather from "../components/main-weather.js";
import Statistics from "../components/statistics.js";
import imgBack from "../assets/images/back-image.png";

export default function Weather() {
  return (
    <div class="containerGlobal">
      <div class="columns is-desktop is-mobile">
        <div class="column leftContent ">
          <div class="imgBack"></div>

          <MainWeather />
        </div>
        <div class="column is-three-quarters rightContent">
          <Statistics />
        </div>
      </div>
    </div>
  );
}

// const ApiClima = async () => {
//   const api = await fetch("/api/location/search/?query=santiago", {
//     mode: "cors",
//     headers: {
//       "Access-Control-Allow-Origin": "https://www.metaweather.com/",
//       "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
//   const idCity = await api.json();
//   console.log(idCity);
// };
