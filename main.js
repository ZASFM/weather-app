const main=document.getElementById('main')
const form=document.getElementById('form')
const search=document.getElementById('search')
const APIKEY='3265874a2c77ae4a04bb96236a642d2f';

const url=(location)=>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`;

async function getWeatherByLocation(location){
      const response=await fetch(url(location),{origin:'cors'})
      const data=await response.json()
      addWeatherToPage(data,location);
}

function addWeatherToPage(data,location){
   const temp=toCelsius(data.main.temp);
   const weather=document.createElement('div');
   weather.classList.add('weather');
   main.innerHTML='';
   weather.innerHTML=
   `
      <h3>It is:</h3>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> <br>
      <h3>And there are:</h3>
      <h3>${temp}°C</h3>
      <p>in ${location}</p>
   `
   main.appendChild(weather);
}

getWeatherByLocation('london');

function toCelsius(temp){
   return(temp - 273.15).toFixed(2);
}

form.addEventListener('submit',(event)=>{
   event.preventDefault();

   const location=search.value;
   if(location){
      getWeatherByLocation(location);
   }
})