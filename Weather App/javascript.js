const apiKey = '856be95cdefa101f575be316eb391c4f';
const city =  document.getElementById('font').value;
function Search() {
    fetch(`https://api.openweathermap.org/data/2.5/`)
    .then(response =>response.json())
    .then(data => {
        const Info = document.getElementById('Weather');
        Info.innerHTML = `<h2>${data.name},${data.sys.country}</h2> 
        <p> ${data.weather[0].description}</p>
        <p>Sıcaklık:${Math.round(data.main.temp-273.15)}</p>
        <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>`;

    })
    .catch(error => {
        console.error('Hava durumu bilgileri alınamadı:', error);
    });
 };