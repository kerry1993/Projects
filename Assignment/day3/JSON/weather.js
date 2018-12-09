// Create method to get the data
var url = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/history/city?q=London,UK&appid=b1b15e88fa797225412429c1c50c122a1';


document.body.onload = () => {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var weather = JSON.parse(xhr.responseText);

            bindWeatherTemplate(weather);
        }
    }

    xhr.open('GET', url);
    xhr.send();
};

// set interval to fire every 1 second
//var greetingInterval = setInterval(() => {
// console.log('hello World');
// },1000000000);

setTimeout(() => {
    console.log('Executed after 5 seconds');
});

function bindWeatherTemplate(weather) {
        if (weather) {
            var icon = document.getElementById('icon');
            icon.src = "https://openweathermap.org/img/w/" + ".png";

            var minTemp = document.getElementById('mintemp');
            minTemp.innerText = "Minimum Temperature " + (weather.list[0].main.temp_min - 273) + "°C";

            var maxTemp = document.getElementById('maxtemp');
            maxTemp.innerText = "Maximum Temperature " + (weather.list[0].main.temp_max - 273) + "°C";

            var windSpeed = document.getElementById('windspeed');
            windSpeed.innerText = "Wind Speed " + weather.list[1].wind.speed;

            var humidity = document.getElementById('humidity');
            humidity.innerText = "Humidity " + weather.list[0].main.humidity;
        }
    }