api();
function api() {
  var urlField = "https://www.metaweather.com/api/location/44418/";
  doCORSRequest(
    {
      method: "GET",
      url: urlField,
    },
    function printResult(result) {
      console.log("=======================");
      console.log(JSON.parse(result));
    }
  );
}
//   if (typeof console === "object") {
//     console.log(
//       "// To test a local CORS Anywhere server, set cors_api_url. For example:"
//     );
//     console.log('cors_api_url = "http://localhost:8080/"');
//   }
var cors_api_url = "https://cors-anywhere.herokuapp.com/";
function doCORSRequest(options, printResult) {
  var x = new XMLHttpRequest();
  x.open(options.method, options.url);
  x.onload = x.onerror = function () {
    printResult(x.responseText);
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  x.send(options.data);
}
