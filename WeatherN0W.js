
navigator.geolocation.getCurrentPosition(geolocation, error);

function geolocation(position){
   let latitude=position.coords.latitude;
   let longitude=position.coords.longitude;
   console.log(position);
   console.log(latitude);
   console.log(longitude);
   getData(latitude,longitude);
   console.log("here1");
   //getWeather(data);
}

function error(position){
   console.log(position);
}

function getData(latitude, longitude){
let api = 'https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude;

   fetch(api)
      .then(function(response){
         let data=response.json();
         return data;
      })
      .then(function(data){
         console.log("here"+data);
         getWeather(data);
      });
  
}

function getWeather(data){
 let icon = data.weather[0].icon;
 let description=data.weather[0].description;
 let temp= data.main.temp;
 let humidity=data.main.humidity;
 let feelslike=data.main.feels_like;
 let wind_speed=data.wind.speed;
 let place= data.name;
 let country=data.sys.country;
 console.log(description);
 console.log(temp);
 js_html=`
 <div class="weather-contents"> 
 <div class="icons">
 <p>
   <img src="${icon}" alt="">
 </p>
</div>
<div class="temperature">
    <p>
      ${temp}'C
    </p>
</div>
<div class="Description">
   <p>
      ${description}
   </p>
</div>
<div class="Place">
   <p>
      ${place}, ${country} 
   </p>
</div>
</div>
    `
document.querySelector('.weather-contents').innerHTML=js_html;  //selector all didnot work
}


