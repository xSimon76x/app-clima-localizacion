import GpsFixed from "@material-ui/icons/GpsFixed";
import LocationOn from "@material-ui/icons/LocationOn";
import imgWeather from "../assets/icons/clima.png";

export default function MainWeather(props) {
  const { objWeather, currentTypeGrade } = props;
  const weatherToday = objWeather.consolidated_weather[0];
  const fahrenheit = currentTypeGrade.fahrenheit;
  const celcius = currentTypeGrade.celcius;



  return (
    <div className="section">
      <div className="container container.is-fullhd container.is-max-desktop">
        <div className="columns is-mobile is-desktop ">
          <div className="column">
            <div className="btnBuscar">
              <p style={{ color: "white" }}>Search for places</p>
            </div>
          </div>
          <div className="column btnWeather is-two-fifths-tablet is-two-fifths-mobile">
            <div className="gps">
              <GpsFixed
                className="icon is-medium"
                style={{ fill: "white", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        <div className="columns is-mobile is-desktop">
          <div className="column is-full">
            <div className="imgContenido ">
              <img
                className="imgClimaMainWeather"
                src={imgWeather}
                alt="imgClimaActual"
              ></img>
            </div>
          </div>
        </div>
        <div className="columns is-desktop is-mobile is-gapless">
          <div className="gradosValor column is-two-thirds">
            {!fahrenheit && !celcius ? (
              <h1>{weatherToday.the_temp.toFixed(0)}</h1>
            ) : (
              celcius ? (
                <h1> {celcius} </h1>
              ) : (
                <h1> {fahrenheit} </h1>
              )
            )}
          </div>
          <div className="gradosMedida column">
            {currentTypeGrade.fahrenheit ? (
              <h2 className="grados is-size-3 ">°F</h2>
            ) : (
              <h2 className="grados is-size-3 ">°C</h2>
            )}
          </div>
        </div>
        <div className="columns is-desktop is-mobile is-gapless">
          <div className="column ">
            <div className="containerWeather">
              <p className="typeWeather">{weatherToday.weather_state_name}</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footerContent">
            <div className="columns is-desktop is-mobile is-gapless">
              <div
                className="column is-full"
                style={{ textAlign: "end", opacity: "0.4" }}
              >
                <div className="tiempoDescripcion">
                  <p>Today | {weatherToday.applicable_date} </p>
                </div>
              </div>
            </div>

            <div className="columns is-desktop is-mobile is-gapless">
              <div className="column" style={{ opacity: "0.4" }}>
                <div className="ubicacion">
                  <LocationOn style={{ height: "20px", color: "white" }} />
                  <p> {objWeather.title} </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div >
  );
}

// codigo antes añadido al fetch de la url, al parece no tiene mucho efecto
// , {
//   mode: "cors",
//   headers: {
//     "Access-Control-Allow-Origin": "https://www.metaweather.com/",
//     "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
//     "Access-Control-Allow-Headers": "Content-Type",
//   },
// }
