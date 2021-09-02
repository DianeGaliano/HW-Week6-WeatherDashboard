var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=";
  
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });