var apiKey = "7477daa72c434d694f88ffb36209cee3";
var city;
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch (url), {
   method: "GET",
}
.then((response) => {
    console.log(response);
    return response.jason();
})
.then(function(data) {
    console.log(data);  
    
})
.catch((err) => {
    console.error(err);
});

//Search Button

