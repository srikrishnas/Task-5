var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function () {
    var data = JSON.parse(this.response);
    for (i in data) {
        var latlon = data[i].latlng;
        try {
            response = weatherdata(latlon[0], latlon[1]);
            console.log(response);
        } 
        catch (error) {
            alert(error);
        }
    }
};

function weatherdata(lat, lon) {
    var request = new XMLHttpRequest();
    var link =
        'http://api.openweathermap.org/data/2.5/weather?lat=' +
        lat +
        '&lon=' +
        lon +
        '&appid=302360b49a2fd37fc704d25824c5e2b2';
    request.open('GET', link, true);
    request.send();
    request.onload = function () {
        var data2 = JSON.parse(this.response);
        console.log(data2);
    };
}


