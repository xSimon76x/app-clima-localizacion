import celcius from "@material-ui/icons/";

// components
import WeekWeather from "../components/data/weekWeather";

export default function Statistics() {
  return (
    <div class="containerStatistics">
      <div class="columns">
        <div
          class="column "
          style={{
            display: "flex",
            justifyContent: "end",
            lineHeight: "20px",
          }}
        >
          <div style={{ paddingRight: "1vw" }}>
            <span
              class="icon is-medium "
              style={{ background: "#2c2b3b", borderRadius: "50%" }}
            >
              <p class="has-text-weight-semibold " style={{ color: "white" }}>
                °C
              </p>
            </span>
          </div>
          <div>
            <span
              class="icon is-medium"
              style={{ background: "#2c2b3b", borderRadius: "50%" }}
            >
              <p class="has-text-weight-semibold" style={{ color: "white" }}>
                °F
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* componente de  */}
      <WeekWeather />
    </div>
  );
}
