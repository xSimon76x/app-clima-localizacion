//import celcius from "@material-ui/icons/";
// components
import WeekWeather from "../components/data/weekWeather";
import TodayStadistics from "./data/todayStadistics";
import React from "react";

export default function Statistics(props) {
  const { objWeather, cambioTipoFahrenheit, cambioTipoCelcius, currentTypeGrade, listGradesDay } = props;
  const celcius = currentTypeGrade.celcius;
  const celciusListDay = listGradesDay.celcius;




  return (
    <div className="section">
      <div className="container container.is-fullhd container.is-max-desktop px-6">
        <div className="flexContainer">
          <div style={{ paddingRight: "2vh" }} onClick={(() => cambioTipoCelcius(currentTypeGrade, listGradesDay.fahrenheit))}>
            <div className="btnGrados">
              <p className="is-size-1-desktop is-size-3-widescreen is-size-3-touch has-text-weight-semibold">°C</p>
            </div>
          </div>
          <div>
            <div className="btnGrados" onClick={(() => cambioTipoFahrenheit(objWeather, celcius, celciusListDay))}>
              <p className="is-size-1-desktop is-size-3-widescreen is-size-3-touch has-text-weight-semibold">°F</p>
            </div>
          </div>
        </div>
        {/* componente de clima semanal*/}
        <WeekWeather objWeather={objWeather} listGradesDay={listGradesDay} />
        {/* componente de clima semanal*/}
        <div className="FlexContainerSubtitle">
          <h2 className="subtitle is-3 has-text-white has-text-left-desktop has-text-left-tablet has-text-left-mobile has-text-weight-semibold">
            Todays Hightlights
          </h2>
        </div>
        {/*Componente de estadisticas*/}
        <TodayStadistics objWeather={objWeather} />

        <div className="CustomFooter pt-6">
          <p>
            creada por{" "}
            <span className="has-text-weight-bold">Simon Bustamante</span> -
            devChallenges.io
          </p>
        </div>
      </div>
    </div>
  );
}
