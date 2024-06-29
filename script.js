const apiurl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apikey = "7c944db53ad7d6f8f9b127f7620d65fc";
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind');
const city_name =document.querySelector('.city-n');
const locationnotfound = document.querySelector('.location-not-found');
const h_w =document.querySelector('.hw');
const weather_content =document.querySelector('.weather-info');
async function checkweather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    const data = await response.json();
    city_name.innerHTML=`${data.name}`;
    console.log("run")



    if(data.cod== `404`){
    locationnotfound.style.display="grid";
    weather_content.style.display="none"
    h_w.style.display="none"
    return;
    }
    locationnotfound.style.display="none";
    weather_content.style.display="grid"
    h_w.style.display="flex"


    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind_speed.innerHTML = `${data.wind.speed} km/h`;

    switch (data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloudy.png";
            break;
        case 'Clear':
            weather_img.src = "sun (1).png";
            break;
        case 'Rain':
            weather_img.src = "rainy-day.png";
            break;
        case 'Mist':
            weather_img.src = "weather.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkweather(inputBox.value);
});
