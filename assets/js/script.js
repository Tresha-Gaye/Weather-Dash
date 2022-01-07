var searchButton = document.getElementById("search-btn");
console.log(searchButton);

var today = new Date().toLocaleDateString();
console.log(today);

// var inputValue = document.querySelector(".inputValue");
// var name = document.querySelector(".name");
// var description = document.querySelector(".description");
// var temperature = document.querySelector(".temperature");
// var cityCallUrl = "api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=d68ab89bff9a1e94c3d51494c09fbe5d";


searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click");
    // alert("hello");
    var cityName = document.getElementById('city-name').value;
    var cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=d68ab89bff9a1e94c3d51494c09fbe5d&units=imperial";
    // console.log(cityNameUrl);

    fetch(cityNameUrl)
    .then(function(response) {
        // call was successful
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            var nameEl = document.getElementById("name");
            nameEl.textContent = data.name + " (" + today + ")";
            var tempEl = document.getElementById("temperature");
            tempEl.textContent = "Temp: " + data.main.temp + "℉";
            var windEl = document.getElementById("wind-speed");
            windEl.textContent = "Wind: " + data.wind.speed + " MPH";
            var humidEl = document.getElementById("humidity");
            humidEl.textContent = "Humidity: " + data.main.humidity + " %";
            // alert(data)
            fiveDayForecast(data.coord.lat, data.coord.lon); 
            });
        } else {
            alert("Error: City not found.");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to Open Weather")
        console.log(error);
    }); 
});

var fiveDayForecast = function(lat, lon) {
    // lat = data.coord.lat;
    // lon = data.coord.lon;
    console.log(lat, lon);
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&" + "lon=" + lon + "&exclude=minutely,hourly,alerts&appid=d68ab89bff9a1e94c3d51494c09fbe5d&units=imperial";
    fetch(fiveDayUrl)
    .then(function(response) {
        // call was successful
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            var uviEl = document.getElementById("uv-index");
            uviEl.textContent = "UV Index: " + data.current.uvi;
            }
        )}
    })
    .catch(function(error) {
        alert("Unable to connect to Open Weather")
        console.log(error);
    })
};
     

// use this api to get five day forecast


// create a function using 

//pass in latitute & longitute from city name function & use that to call onecall api


// isolate data from fetch request, instead of console log, assign values into variables & then append variables to divs in html
      
// var getForecast = function() {
//     var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=d68ab89bff9a1e94c3d51494c09fbe5d";
    
//     fetch(forecastUrl)
//     .then(function(response) {
//         // call was successful
//         if(response.ok) {
//             response.json().then(function(data) {
//             console.log(data);
//             // alert(data)
//             });
//         } else {
//             alert("Error: City not found.");
//         }
//     })
// };

// getForecast();

// var displayWeatherData = function(currentWeather, cityName) {
//     console.log(currentWeather);
//     console.log(cityName);

   

            // .catch(err => alert ("Wrong city name!"))
    
    // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}


// function getWeatherData(cityName) {
//     var key = "d68ab89bff9a1e94c3d51494c09fbe5d";
//     var cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?id= + cityName + '&appid=' + key";
    
    
//     fetch("cityNameUrl").then(function(response) {
//         // request was successful
//         if(response.ok) {
//             response.json().then(function(data) {
//             console.log(data, city);
//                     });
//         } else {
//             alert("Error: City not found.");
//         }
//         });
//         };

// getWeatherData();
  

// function drawWeather( d ) {
// 	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
// 	document.getElementById('description').innerHTML = d.weather[0].description;
// 	document.getElementById('temp').innerHTML = celcius + '&deg;';
// 	document.getElementById('location').innerHTML = d.name;
// }

// function weatherBalloon( cityID ) {
// 	var key = '{yourkey}';
// 	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
// 	.then(function(resp) { return resp.json() }) // Convert data to json
// 	.then(function(data) {
// 		drawWeather(data); // Call drawWeather
// 	})
// 	.catch(function() {
// 		// catch any errors
// 	});
// }


// var apiKey = d68ab89bff9a1e94c3d51494c09fbe5d;


// var getWeatherData = function(city) {
//     console.log("function was called");

//     var cityNameUrl = "https://api.openweathermap.org/data/2.5/" + city + "weather?id=524901&appid=d68ab89bff9a1e94c3d51494c09fbe5d";

//     var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key";

//     fetch("apiCallUrl").then(function(response) {
//         // request was successful
//         if(response.ok) {
//             response.json().then(function(data) {
//             console.log(data, city);
//             });
//         } else {
//             alert("Error: City not found.");
//         }
//     });
//   };
  
//   getWeatherData();


//   // Add click function to save user input in text area to localStorage
//   saveClickerEl.click(function(event) {
//     event.preventDefault();
//     console.log($(this).siblings("textarea").val()); // 'this' points to the button element, siblings are in the same div- need to get the input in textarea
//     console.log($(this).attr("id")); // finds the id attribute in the button element
//     localStorage.setItem($(this).attr("id"), $(this).siblings("textarea").val());
//  });


// // function to get user inputs saved in localStorage so they persist after a refresh
// for (var i = 9; i < 18; i++) { 
//  console.log(localStorage.getItem(i)); // i = id of the button element (#9, #10, #11 etc)
//  console.log($("#due-" + i)); // due-x is the id of the textarea
//  $("#due-" + i).val(localStorage.getItem(i));
// };

//   - search for city, write city name, enter, current weather + 5 day forecast

//   - 2 apis - one for uv indexedDB

//   - put in a  section in html taht appends to a button, adds each as a recent search section

// click back ona  city in recent search and get the 5 day forecast

//  local storage save as an array