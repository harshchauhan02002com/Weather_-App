console.log("helo jee");

let API_key ="6f3d5d12962dc009e6c51c2dad749d29";

function renderInformation(data){
    let newpara = document.createElement("p");
    newpara.textContent =`${data?.main?.temp.toFixed(2)} C`

    document.body.appendChild(newpara);
}
async function fetchWeatherDetails(){
    
    try{

       let city = "goa";
       let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
       let data =  await responce.json();
       console.log("Weather Data =>", data);

       renderInformation(data);
    }
    catch(err){
        // console.log("No data here");
    }
    
}

async function getCustomWeatherDetails(){
    try{

        let latitude = 15.6333;
        let longitude = 17.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`);
    
        let data = (await result).json();
        console.log(data);
    }
    catch(err){
        console.log("Error found" ,err);

    }
}

function getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geolocation support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

getLocation();

