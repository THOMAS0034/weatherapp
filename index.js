const apikey="32c029040fa665e30557bf66580b13cb";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.querySelector(".search-bar input");
const searchbtn=document.querySelector(".search-bar button");
const weatherimage=document.querySelector(".weather-image");
async function check(city)
{
  const response = await fetch(apiurl +city+ `&appid=${apikey}`);
  if(response.status=404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".temp").style.display="none";
  }
  var data=await response.json();
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temperature").innerHTML=data.main.temp + "°C";
  document.querySelector(".humidity-value").innerHTML=data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML=data.wind.speed +"km/h";
  if(data.weather[0].main=="Clouds")
  {
    weatherimage.src="images/clouds.png";
  }
  else if(data.weather[0].main=="Snow"){
    weatherimage.src="images/snow.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherimage.src="images/drizzle.png";
  }
  else if(data.weather[0].main=="Clear"){
    weatherimage.src="images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherimage.src="images/rain.png";
  }
  else if(data.weather[0].main=="Mist"){
    weatherimage.src="images/mist.png";
  }
  
  document.querySelector(".temp").style.display="block";

}
searchbtn.addEventListener("click",()=>{
check(search.value);
});
