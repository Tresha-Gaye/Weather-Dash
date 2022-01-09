var searchButton = document.getElementById("search-btn");
// console.log(searchButton);

var today = new Date().toLocaleDateString();
// console.log(today);

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("click");

    var cityName = document.getElementById('city-name').value;
    var cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=d68ab89bff9a1e94c3d51494c09fbe5d&units=imperial";
    // console.log(cityNameUrl);

    // function for adding to and retrieving from localStorage
    localStorage.setItem("savedCities", cityName);
    event.preventDefault();
    console.log("savedCities", cityName);
    var savedCities = localStorage.getItem("savedCities");
    console.log(savedCities);
    var cityListEl = document.getElementById("city-list");
    var cityBtn = document.createElement("BUTTON");
    cityListEl.appendChild(cityBtn);
    cityBtn.classList.add("btn", "btn-secondary", "btn-lg", "btn-block", "w-100");
    cityBtn.textContent = savedCities;
    

    //first api call for input city current weather data
    fetch(cityNameUrl)
    .then(function(response) {
        // call was successful
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            var nameEl = document.getElementById("name");
            nameEl.textContent = data.name + " (" + today + ")";
            // var iconEl = document.querySelector(".icon");  // adds the small weather icon
            // var grabIcon = data.weather[0].icon;
            // iconEl.textContent = "http://openweathermap.org/img/w/" + grabIcon + ".png"
            var tempEl = document.getElementById("temperature");
            tempEl.textContent = "Temp: " + data.main.temp + "℉";
            var windEl = document.getElementById("wind-speed");
            windEl.textContent = "Wind: " + data.wind.speed + " MPH";
            var humidEl = document.getElementById("humidity");
            humidEl.textContent = "Humidity: " + data.main.humidity + " %";
            // alert(data)

            //this calls the five day forecast function, below
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

// second api call (using onecall api) for uv index & five day forecase using lat & lon values
var fiveDayForecast = function(lat, lon) {
    // lat = data.coord.lat;
    // lon = data.coord.lon;
    // console.log(lat, lon);
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&" + "lon=" + lon + "&exclude=minutely,alerts&appid=d68ab89bff9a1e94c3d51494c09fbe5d&units=imperial&cnt=5";
    fetch(fiveDayUrl)
    .then(function(response) {
        // call was successful
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            var uvNumEl = document.getElementById("uv-index");      
            uvNumEl.classList.add("badge", "bg-success");
            uvNumEl.textContent = data.current.uvi; // 
                        
            // DAY 1-TOMORROW'S FORECAST    
            var dayOneEl = document.getElementById("date-1");
            var dateString = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");  //converts unix to MM/DD/YYYY format
            console.log(dateString);
            dayOneEl.textContent =  dateString;         
            var temp1El = document.getElementById("temp-1");
            temp1El.textContent = "Temp: " + data.daily[1].temp.day + "℉";
            var wind1El = document.getElementById("wind-1");
            wind1El.textContent = "Wind: " + data.daily[1].wind_speed + " MPH";
            var humid1El = document.getElementById("humid-1");
            humid1El.textContent = "Humidity: " + data.daily[1].humidity + " %";
            
            // DAY 2 FORECAST
            var day2El = document.getElementById("date-2");
            var dateString2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");  //converts unix to MM/DD/YYYY format
            console.log(dateString2);
            day2El.textContent =  dateString2; 
            var temp2El = document.getElementById("temp-2");
            temp2El.textContent = "Temp: " + data.daily[2].temp.day + "℉";
            var wind2El = document.getElementById("wind-2");
            wind2El.textContent = "Wind: " + data.daily[2].wind_speed + " MPH";
            var humid2El = document.getElementById("humid-2");
            humid2El.textContent = "Humidity: " + data.daily[2].humidity + " %";

            // DAY 3 FORECAST
            var day3El = document.getElementById("date-3");
            var dateString3 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");  //converts unix to MM/DD/YYYY format
            console.log(dateString3);
            day3El.textContent =  dateString3; 
            var temp3El = document.getElementById("temp-3");
            temp3El.textContent = "Temp: " + data.daily[3].temp.day + "℉";
            var wind3El = document.getElementById("wind-3");
            wind3El.textContent = "Wind: " + data.daily[3].wind_speed + " MPH";
            var humid3El = document.getElementById("humid-3");
            humid3El.textContent = "Humidity: " + data.daily[3].humidity + " %";

            // DAY 4 FORECAST
            var day4El = document.getElementById("date-4");
            var dateString4 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");  //converts unix to MM/DD/YYYY format
            console.log(dateString4);
            day4El.textContent =  dateString4; 
            var temp4El = document.getElementById("temp-4");
            temp4El.textContent = "Temp: " + data.daily[4].temp.day + "℉";
            var wind4El = document.getElementById("wind-4");
            wind4El.textContent = "Wind: " + data.daily[4].wind_speed + " MPH";
            var humid4El = document.getElementById("humid-4");
            humid4El.textContent = "Humidity: " + data.daily[4].humidity + " %";

            // DAY 5 FORECAST
            var day5El = document.getElementById("date-5");
            var dateString5 = moment.unix(data.daily[5].dt).format("MM/DD/YYYY");  //converts unix to MM/DD/YYYY format
            console.log(dateString5);
            day5El.textContent =  dateString5; 
            var temp5El = document.getElementById("temp-5");
            temp5El.textContent = "Temp: " + data.daily[5].temp.day + "℉";
            var wind5El = document.getElementById("wind-5");
            wind5El.textContent = "Wind: " + data.daily[5].wind_speed + " MPH";
            var humid5El = document.getElementById("humid-5");
            humid5El.textContent = "Humidity: " + data.daily[5].humidity + " %";
            }
        )}
    })
    .catch(function(error) {
        alert("Unable to connect to Open Weather")
        console.log(error);
    })
}
     


// var nameEl = document.getElementById("name");
// nameEl.textContent = data.name + " (" + today + ")";
// use this api to get five day forecast


// create a function using 
// pass in latitute & longitute from city name function & use that to call onecall api
// isolate data from fetch request, instead of console log, assign values into variables & then append variables to divs in html
      


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

//   search for city, write city name, enter, current weather + 5 day forecast
//   2 apis - one for uv indexedDB
//   put in a  section in html that appends to a button, adds each as a recent search section

// click back on a  city in recent search and get the 5 day forecast

//  local storage save as an array