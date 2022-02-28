import ArrowCircleDownIcon from "@material-ui/icons/ArrowDropDownCircle";

export default function todayStadistics(props) {
  const { objWeather } = props;
  const weatherToday = objWeather.consolidated_weather[0];
  //console.log(weatherToday);
  return (
    <div className="ContainerFlexMt ">
      {/* Wind status */}
      <div className="cardFlexMt ">
        <div className="tituloCardToday">
          <p>Wind status</p>
        </div>
        <div className="medidaCardToday">
          <p>{weatherToday.wind_speed.toFixed(0)}</p>
          <span className="has-text-white">mph</span>
        </div>
        <div className="infoCardToday">
          <ArrowCircleDownIcon />{" "}
          <p className="pl-2"> {weatherToday.wind_direction_compass}</p>
        </div>
      </div>
      {/* Humidity */}
      <div className="cardFlexMt">
        <div className="tituloCardToday">
          <p>Humidity</p>
        </div>
        <div className="medidaCardToday">
          <p>{weatherToday.humidity}</p>
          <span className="has-text-white">%</span>
        </div>
        <div className="infoCardToday px-6">
          <div>
            <div>
              <h3>0</h3>
              <h3>50</h3>
              <h3>100</h3>
            </div>
            <progress
              className="progress is-warning"
              value={weatherToday.humidity}
              max="100"
            ></progress>
            <span>%</span>
          </div>
        </div>
      </div>
      {/* Visibility */}
      <div className="cardFlexMt">
        <div className="tituloCardToday">
          <p>Visibility</p>
        </div>
        <div className="medidaCardToday">
          <p>{weatherToday.visibility.toFixed(1)}</p>
          <span className="has-text-white">miles</span>
        </div>
      </div>
      {/* Air Pressure */}
      <div className="cardFlexMt">
        <div className="tituloCardToday">
          <p>Air Pressure</p>
        </div>
        <div className="medidaCardToday">
          <p>{weatherToday.air_pressure.toFixed(0)}</p>
          <span className="has-text-white">mb</span>
        </div>
      </div>
    </div>
  );
}
