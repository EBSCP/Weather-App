const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '856be95cdefa101f575be316eb391c4f';

const setQuery = (e) => {
    if (e.keyCode === 13) {
        getResult(input.value);
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric`
    fetch(query).then(weather => {
        return weather.json();
    }).then(displayResult);
};

const displayResult = (weatherData) => { 
    let city = document.querySelector('.city');
    city.innerText = `${weatherData.name},${weatherData.sys.country}`;
    
    let temperature = document.querySelector('.degree');
    temperature.innerText = `${weatherData.main.temp}°C`;

    let Hava = document.querySelector('.Hava');
    Hava.innerText = weatherData.weather[0].description

    let maxmin = document.querySelector('.Max');
    maxmin.innerText = `${weatherData.main.temp_max}/${weatherData.main.temp_min}°C`
}

const input = document.getElementById('font');

input.addEventListener('keypress', setQuery);
