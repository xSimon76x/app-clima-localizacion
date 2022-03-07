let cors_api_url = "https://cors-anywhere.herokuapp.com/";
let ciudad = "santiago";
var objRespuesta = new Array();
let urlField =
  "https://www.metaweather.com/api/location/search/?query=" + ciudad;
let opt = {
  method: "GET",
  url: urlField,
};
try {
  let x = new XMLHttpRequest();
  x.open(opt.method, cors_api_url + opt.url);
  x.onload = x.onerror = function expApi() {
    let respuesta = x.responseText;
    objRespuesta = JSON.parse(respuesta)[0];
    //console.log(objRespuesta);
    //let objRespuesta = JSON.parse(respuesta)[0];
  };
  x.send(opt.data);
} catch (error) {
  console.error(error)
}

let prueba = 0;
export default prueba;
