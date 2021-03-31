const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), { origin: "cors" });
  const respData = await resp.json();

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
  <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" /> ${temp}°C </h2>
  <small>${data.weather[0].main}</small>
  `;

  //cleanup
  main.innerHTML = "";
  main.appendChild(weather);
  console.log(data.main);
}

function KtoC(K) {
  return Math.floor(K - 273.15).toFixed(2);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});