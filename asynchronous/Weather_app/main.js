const date = document.querySelector(".date");
const city = document.querySelector(".location");
const temp = document.querySelector(".temp");
const tempImg = document.querySelector(".cloud-img");
const high = document.querySelector(".high");
const low = document.querySelector(".low");

const months = [
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

let dateObj = new Date();
let day = dateObj.getDate();
let month = months[dateObj.getMonth()];
let year = dateObj.getFullYear();

date.innerHTML = `${day} ${month} ${year}`;

const app = document.querySelector(".app");

const getWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=bed6c4ce0b3cebc4fd88f72bb1437d62`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    city.innerHTML = data.name;
    tempImg.src = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png>`;
    temp.innerHTML = `${Math.round(data.main.temp - 273)}°C`;
    high.innerHTML = `${Math.round(data.main.temp_max - 273)}°C`;
    low.innerHTML = `${Math.round(data.main.temp_min - 273)}°C`;
  } catch (error) {
    console.error();
  }
};

getWeather();
