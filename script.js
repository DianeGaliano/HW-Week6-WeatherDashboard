var apiKey = "7477daa72c434d694f88ffb36209cee3";

fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04" + "&appid=" + apiKey, {
  method: "GET",
})
.then((response) => {
  console.log(response);
  return response.json();
})
.then(function(data) {
  console.log(data);

  
})
.catch((err) =>{
  console.error(err);
});

var getCityName = function () {
  var querySelector = document.location.search;
  var cityName = queryString.split("=")[1];

  if (cityName){
    cityNameEl.textContent = cityName;
    getCityWeather(cityName);
  }
};

var getCityWeather = function (onecall) {
  var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" +lon + "&appid=" + apiKey;

  fetch(url).then(function (response) {
    if (response.ok) {
      response.jason().then(function (data) {
        displayWeather(data);
      })
    }
  });
};