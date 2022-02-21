import GpsFixed from "@material-ui/icons/GpsFixed";
import LocationOn from "@material-ui/icons/LocationOn";

export default function MainWeather() {
  return (
    <div>
      <button>Buscar por localizacion</button>
      <GpsFixed />
      <h1>15 °C</h1>
      <h5>Clima</h5>
      <p>Hoy</p>
      <p>Fecha</p>
      <LocationOn />
      <p>Ubicacion</p>
    </div>
  );
}
