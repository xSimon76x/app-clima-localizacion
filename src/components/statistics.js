import celcius from "@material-ui/icons/";

// components
import WeekWeather from "../components/data/weekWeather";

export default function Statistics() {
  return (
    <div className="section">
      <div className="container container.is-fullhd container.is-max-desktop px-6">
        <div className="flexContainer">
          <div style={{ paddingRight: "2vh" }}>
            <div className="btnGrados">
              <p className="has-text-weight-semibold">°C</p>
            </div>
          </div>
          <div>
            <div className="btnGrados">
              <p className="has-text-weight-semibold">°F</p>
            </div>
          </div>
        </div>
        {/* componente de clima semanal*/}
        <WeekWeather />
        {/* componente de clima semanal*/}
        <div className="FlexContainerSubtitle">
          <h2 className="subtitle is-3 has-text-white has-text-left-desktop has-text-left-tablet has-text-left-mobile has-text-weight-semibold">
            Todays Hightlights
          </h2>
        </div>
        <div className="FlexContainerInfo"></div>

        <div className="footer pt-4">
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
