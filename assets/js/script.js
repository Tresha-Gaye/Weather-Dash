var getWeatherData = function(city) {
    console.log("function was called");

    var apiUrl = "https://api.openweathermap.org/data/2.5/" + city + "weather?id=524901&appid=d68ab89bff9a1e94c3d51494c09fbe5d";

    fetch("apiCallUrl").then(function(response) {
        // request was successful
        if(response.ok) {
            response.json().then(function(data) {
            console.log(data, city);
            });
        } else {
            alert("Error: City not found.");
        }
    });
  };
  
  getWeatherData();