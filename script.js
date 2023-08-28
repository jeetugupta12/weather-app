const api_key= "31483f3877a39370d643921a8e494b64";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city){

    const res= await fetch(api_url+ city +`&appid=${api_key}`);
    if(res.status==404){   // if city name is invalid
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"; // hide the weather info
    }
    else{
        var data= await res.json();

        document.querySelector(".temp").innerHTML=(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind-speed").innerHTML=data.wind.speed+" km/h";
    
        if(data.weather[0].main=='Clouds'){
            weathericon.src="img/cloudy.png"
        }
        if(data.weather[0].main=='Clear'){
            weathericon.src="img/sun.png"
        }
        if(data.weather[0].main=='Rain'){
            weathericon.src="img/rainy.png"
        }
        if(data.weather[0].main=='Storm'){
            weathericon.src="img/storm.png"
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


