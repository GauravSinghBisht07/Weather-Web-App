const cityname = document.getElementById("weather-input");
const search = document.getElementById("search");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icons = document.querySelector(".icons");

const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
const apikey = "d79c17be9d6c1d3fd6e9149dadda86e0";



async function weather(){
    let nameofcity = cityname.value;
    const response = await fetch(apiurl +`q=${nameofcity}` +`&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    temperature.textContent = Math.round(data.main.temp) + "°C";
    city.textContent = data.name;
    humidity.textContent = data.main.humidity + "%";
    wind.textContent = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        icons.src = "./images/cloudy.png"
    }
    else if(data.weather[0].main == "Clear"){
        icons.src = "./images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        icons.src = "./images/rainy.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icons.src = "./images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        icons.src = "./images/misty.png"
    }
    else if(data.weather[0].main == "Smoke"){
        icons.src = "./images/smoke.png"
    }
    else if(data.weather[0].main == "Haze"){
        icons.src = "./images/haze.png"
    }
    
}
search.addEventListener("click",()=>{
    weather();  
})

