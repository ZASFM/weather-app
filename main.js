const key='3265874a2c77ae4a04bb96236a642d2f';
const APIURL=(location)=>{
   `http://api.waqi.info/feed/shanghai/?token=${location}`
}

async function getWeatherByLocation(location){
   const response=await fetch(APIURL(location),{origin:'cors'});
   const data= await response.json();
   console.log(data);
}

getWeatherByLocation('london')

