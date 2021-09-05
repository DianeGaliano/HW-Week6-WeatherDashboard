var apiKey = "7477daa72c434d694f88ffb36209cee3";

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + apiKey, {
  method: "GET",
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