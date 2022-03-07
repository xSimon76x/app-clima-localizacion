import { ApiWeather } from "../api/ApiWeahter"

export default function loadingWeather() {

  // const result = ApiWeather("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/")
  // if (result) {
  //   console.log(result);
  // }


  return (
    <div>
      <div className="FlexLoading">
        <p style={{ color: "white", fontSize: "72px" }}>Cargando...</p>
      </div>
    </div>
  );
}
