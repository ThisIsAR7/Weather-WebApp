const apiKey = "45556a9df8aac5d2a96310c490770250";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const reaponse = await fetch(apiUrl + city +`&appid=${}`);
    if(reaponse.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".waether").style.display = "none";
    } else {
        var data = await reaponse.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "css/img/clouds.png";
        } else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "css/img/clear.png";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "css/img/rain.png";
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "css/img/drizzle.png";
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "css/img/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
