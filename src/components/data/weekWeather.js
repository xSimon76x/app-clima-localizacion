import imgWeahter from "../../assets/icons/clima.png";

export default function weekWeather() {
  let ctd = 5;
  const products = ["Tomorrow", "Tomorrow", "Tomorrow", "Tomorrow", "Tomorrow"];

  return (
    <div class="">
      <div class="columns  ">
        {products.map((ct, index) => (
          // cardWeahter
          <div class=" column has-text-white" key={index}>
            <div class="card" style={{ background: "#1a1c31" }}>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p>Tomorrow</p>
                  </div>
                </div>
              </div>
              {/*  px-5 pb-5*/}
              <div class="card-image hast-text-centered px-6 ">
                <figure class="image is-64x64">
                  <img class="" src={imgWeahter} />
                </figure>
              </div>
              <footer
                class="card-footer"
                style={{ background: "#1a1c31", borderColor: "#1a1c31" }}
              >
                <p
                  class="card-footer-item"
                  style={{ background: "#1a1c31", borderColor: "#1a1c31" }}
                >
                  16°C
                </p>
                <p class="card-footer-item">11°C</p>
              </footer>
            </div>
          </div>
        ))}
      </div>

      {/* <div class="wDay">
        <div class="columns wRow">
          <div class="colum">
            <p>Tomorrow</p>
          </div>
        </div>
        <div class="columns">
          <div class="colum">
            <figure class="image is-64x64">
              <img src={imgWeahter}></img>
            </figure>
          </div>
        </div>
        <div class="columns wDayEnd">
          <div class="colum">
            <p>16°C</p>
          </div>
          <div class="colum">
            <p>11°C</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
