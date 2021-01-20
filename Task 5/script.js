var requestCountryData = new XMLHttpRequest();

requestCountryData.open('GET', 'https://restcountries.eu/rest/v2/all', true);

requestCountryData.send();

requestCountryData.onload = function () {
    var countryData = JSON.parse(this.response);

    for (i in countryData) 
    {
        try {
            var countryName = countryData[i].name;
            var latLong = countryData[i].latlng;
            if (latLong.length === 0) 
            {
                throw new Error('Lat Long not found');
            }
            weatherData(countryName, latLong[0],latLong[1]);
        } 
        catch (error) 
        {
            console.log('Invalid co-ordinate data for country: ' + countryName + ' ' + error.message);
        }
    }
};

var weatherData = function (name, lat, lng) {
    var apiKey = '302360b49a2fd37fc704d25824c5e2b2';
    var URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' +lat+'&lon='+lng+'&appid='+apiKey;

    var requestWeatherData = new XMLHttpRequest();

    requestWeatherData.open('GET', URL, true);

    requestWeatherData.send();

    requestWeatherData.onload = function () {
        try 
        {
            var WeatherData = JSON.parse(this.response);
            console.log(name , WeatherData.main.temp);
        } 
        catch (e) 
        {
            console.log('Invalid response from API for ' + name);
        }
    };
};