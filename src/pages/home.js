import MainWeather from "../components/main-weather.js";
import Statistics from "../components/statistics.js";

export default function Weather() {
  return (
    <div>
      <div className="Content columns is-gapless is-mobile is-desktop">
        <div className="column leftContent">
          {/* <div class="imgBack">
          </div> */}
          <MainWeather />
        </div>
        <div className="column is-three-quarters-desktop is-three-fifths-tablet is-three-fifths-mobile RightContent">
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
