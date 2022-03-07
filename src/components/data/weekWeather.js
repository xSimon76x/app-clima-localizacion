// import imgWeahter from "../../assets/icons/clima.png";
import imgWeahter from "./clima.png";

export default function weekWeather(props) {
  const { objWeather } = props;
  const weatherWeek = objWeather.consolidated_weather;
  // console.log(weatherWeek);

  return (
    <div className="flexContainerWeahter">

      {weatherWeek.map((ct, index) => (
        <div className="myCard" key={index}>
          <div className="tituleDay">{weatherWeek[index].applicable_date}</div>
          <div className="imageWeather">
            <img className="image is-64x64" src={imgWeahter} alt="imgClima" />
          </div>
          <div className="tituleDegrees">
            <div>
              <p>{weatherWeek[index].max_temp.toFixed(0)}°C</p>
            </div>
            <div>
              <p>{weatherWeek[index].min_temp.toFixed(0)}°C</p>
            </div>
          </div>
        </div>
      ))}


    </div>
  );
}
