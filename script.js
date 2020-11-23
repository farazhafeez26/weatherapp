const searchBar = document.getElementById("search-bar");
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const appId= "53d200bcaf9af02e7c2c5af27ef46713"

// Add fetchweather function as a listener to the  keyup event.
document.addEventListener("keyup", fetchWeather);

function fetchWeather(event) {
  // This only run when enter button is pressed.
  if (event.key === "Enter") {
    console.log(searchBar);
    const city = searchBar.value;
    // Here we build our url
    const url = `${baseUrl}?q=${city}&units=metric&appid=${appId}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('location').innerText=data.name;
        document.getElementById('date').innerHTML=buildDate();
        document.getElementById('temp').innerHTML=data.main.temp;
        document.getElementById('weather').innerHTML= data.weather[0].main;  // how does this work?
    });
   
   
  }
}
function buildDate() {
    let d = new Date();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }