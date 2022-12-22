
  const select = document.getElementById("city-select");
  const latitudeSpan = document.getElementById("latitude");
  const longitudeSpan = document.getElementById("longitude");

  select.addEventListener("change", () => {
    const selectedIndex = select.selectedIndex;
    const city = cities[selectedIndex - 1];
    latitudeSpan.textContent = city.latitude;
    longitudeSpan.textContent = city.longitude;
    let stationLookupUrl =
`https://api.weather.gov/points/${city.latitude},${city.longitude}`;
 
  fetch(stationLookupUrl)
  .then((response) => response.json())
 .then(data => {
 let message = "Weather: " + data.properties.forecast;
 element.innerHTML = message
 let weatherUrl = data.properties.forecast;
 getWeather(weatherUrl);
 });
  }
);




  function displayCities() {

    let citiesDropDown = document.getElementById("city-select");
    
    for(let i = 0; i < cities.length; i++) {
        let dropOption = document.createElement("option");
        dropOption.innerHTML = cities[i].name;
        dropOption.value = cities[i].name;
        citiesDropDown.appendChild(dropOption);
    }
    }

displayCities()

 function getWeather(weatherUrl){

    let element = document.getElementById("Weather");
fetch(weatherUrl)
 .then(response => response.json())
 .then(data => {
  let message = data.properties.periods[0].temperature;
 element.innerHTML = message
 });
 }

 

 //displayWeather();



 







  