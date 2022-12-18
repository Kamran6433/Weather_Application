const getRefreshButton = document.getElementById('get-refresh-button');

const getOrRefreshWeatherData = () => {

    var latitude = '54.97';
    var longitude = '12.61';
    var parameters = 'hourly=temperature_2m';
    var url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&'+parameters;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(good_response => {
            str = JSON.stringify(good_response, null, 4);
            console.log(str);
            document.getElementById('output').innerHTML = str;
        })
        .catch(error => {
            getRefreshButton.parentElement.innerHTML = `Error: ${error}`;
            console.error('There was an error!', error);
        });

}

getRefreshButton.addEventListener('click', getOrRefreshWeatherData);