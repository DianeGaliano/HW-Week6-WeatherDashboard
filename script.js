//API Key
var apiKey = "7477daa72c434d694f88ffb36209cee3";

//Fetch API
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=97.7278&lon=31.1171&appid=" + apiKey, {
method: "GET"
})
  .then((response) => { 
    console.log(response); 
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })
  .catch((err) => {
    console.error(err);
  });