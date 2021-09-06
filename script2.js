var apiKey = "7477daa72c434d694f88ffb36209cee3";

var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var repoContainerEl = document.querySelector("repos-container");


//Search Button
var formSubmitHandler = function (event) {
    event.preventDefault();
    var city = cityInputEl.value.trim();

    if (city) {
        gitCityRepos(city);

        repoContainerEl.textContent = "";
        cityInputEl.value = "";
    }else {
        alert("Please enter city")
    }
};

//Fetch Function

var getWeatherRepos = function (weather) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayRepos(data, weather);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert("Unable to get weather");
      });
  };

var displayRepos = function (repos) {
    if (repos.length === 0) {
        repoContainerEl.textContent = "No Weather Found";
        return;
    }
    for (var i = 0; i < repos.length; i++) {
        // The result will be `<github-username>/<github-repository-name>`
        var repoName = repos[i].owner.login + '/' + repos[i].name;
    
        var repoEl = document.createElement('div');
        repoEl.classList = 'list-item flex-row justify-space-between align-center';
    
        var titleEl = document.createElement('span');
        titleEl.textContent = repoName;
    
        repoEl.appendChild(titleEl);
    
        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';
    
        if (repos[i].open_issues_count > 0) {
          statusEl.innerHTML =
            "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
        } else {
          statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }
    
        repoEl.appendChild(statusEl);
    
        repoContainerEl.appendChild(repoEl);
      }

}