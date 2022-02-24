import imgWeahter from "../../assets/icons/clima.png";

export default function weekWeather() {
  let ctd = 5;
  const products = ["Tomorrow", "Tomorrow", "Tomorrow", "Tomorrow", "Tomorrow"];

  return (
    <div className="flexContainerWeahter">
      {products.map((ct, index) => (
        <div className="myCard" key={index}>
          <div className="tituleDay">Tomorrow</div>
          <div className="imageWeather">
            <img className="image is-64x64" src={imgWeahter} />
          </div>
          <div className="tituleDegrees">
            <div>
              <p>16°C</p>
            </div>
            <div>
              <p>11°C</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
