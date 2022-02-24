import GpsFixed from "@material-ui/icons/GpsFixed";
import LocationOn from "@material-ui/icons/LocationOn";
import { useEffect, useState } from "react";
import imgWeather from "../assets/icons/clima.png";

export default function MainWeather(props) {
  // obtener variable definida en la page, que relaciona al objeto de datos

  // if (metaciudad) {
  //   console.log(metaciudad.consolidated_weather[0]);
  // }
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
              <img className="imgClimaMainWeather" src={imgWeather}></img>
            </div>
          </div>
        </div>
        <div className="columns is-desktop is-mobile is-gapless">
          <div className="gradosValor column is-two-thirds">
            <h1>15</h1>
          </div>
          <div className="gradosMedida column">
            <h2 className="grados is-size-3 ">°C</h2>
          </div>
        </div>
        <div className="columns is-desktop is-mobile is-gapless">
          <div className="column ">
            <div className="containerWeather">
              <p className="typeWeather">Shower</p>
            </div>
          </div>
        </div>
        {/*  */}
        {/* <div className="columns">
          <div className="column is-full">
            
          </div>
        </div> */}
        <footer className="footer">
          <div className="footerContent">
            <div className="columns is-desktop is-mobile is-gapless">
              <div
                className="column is-full"
                style={{ textAlign: "end", opacity: "0.4" }}
              >
                <div className="tiempoDescripcion">
                  <p>Today | Fri, 5 Jun </p>
                </div>
              </div>
            </div>

            <div className="columns is-desktop is-mobile is-gapless">
              <div className="column" style={{ opacity: "0.4" }}>
                <div className="ubicacion">
                  <LocationOn style={{ height: "20px", color: "white" }} />
                  <p> - </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
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
