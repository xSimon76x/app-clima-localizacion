import GpsFixed from "@material-ui/icons/GpsFixed";
import LocationOn from "@material-ui/icons/LocationOn";
import imgWeather from "../assets/icons/clima.png";

export default function MainWeather() {
  return (
    <div>
      <div class="containerGlobal">
        <div class="is-flex-direction-row">
          <div class="columns is-mobile is-desktop">
            <div class="column containerButton is-8 is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <button class="button">
                <p style={{ color: "white", fontSize: "14px" }}>
                  Buscar por lugar
                </p>
              </button>
            </div>
            <div class="column is-4 conGps ">
              <GpsFixed class="btnWeather" style={{ color: "#d9d9d9" }} />
            </div>
          </div>
          <div class="columns" style={{ paddingTop: "6vh" }}>
            <div class="column">
              <img class="imgClimaMainWeather" src={imgWeather}></img>
            </div>
          </div>
          <div
            class="columns is-desktop is-mobile is-gapless"
            style={{ paddingTop: "6vh" }}
          >
            <div class="column is-8">
              <h1
                style={{
                  fontSize: "110px",
                  fontFamily: "Merriweather",
                  float: "right",
                }}
              >
                15
              </h1>
            </div>
            <div class="column is-4" style={{ display: "flex" }}>
              <h2 class="grados">°C</h2>
            </div>
          </div>
          <div
            class="columns is-desktop is-mobile is-gapless"
            style={{ paddingTop: "8vh" }}
          >
            <div class="column ">
              <h5 style={{ textAlign: "center", opacity: "0.4" }}>Shower</h5>
            </div>
          </div>
          <div
            class="columns is-desktop is-mobile is-gapless"
            style={{ paddingTop: "6vh" }}
          >
            <div
              class="column is-5"
              style={{ textAlign: "end", opacity: "0.4" }}
            >
              <p>Today</p>
            </div>
            <div
              class="column is-1"
              style={{ textAlign: "center", opacity: "0.4" }}
            >
              <p> | </p>
            </div>
            <div
              class="column is-6"
              style={{ textAlign: "start", opacity: "0.4" }}
            >
              <p>Fri, 5 Jun</p>
            </div>
          </div>

          <div
            class="columns is-desktop is-mobile is-gapless"
            style={{ paddingTop: "2vh" }}
          >
            <div
              class="column is-5"
              style={{ textAlign: "end", opacity: "0.4" }}
            >
              <LocationOn style={{ height: "22px" }} />
            </div>
            <div
              class="column "
              style={{
                textAlign: "start",
                alignSelf: "center",
                opacity: "0.4",
              }}
            >
              <p>Ubicacion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
