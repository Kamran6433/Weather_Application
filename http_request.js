const getRefreshButton = document.getElementById('get-refresh-button');

const getOrRefreshWeatherData = () => {

    fetch('https://api.open-meteo.com/v1/forecast?latitude=54.97&longitude=-1.61&hourly=temperature_2m')
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(ok_response => {
            console.log(ok_response);
        })
        .catch(error => {
            getRefreshButton.parentElement.innerHTML = `Error: ${error}`;
            console.error('There was an error!', error);
        });

}

getRefreshButton.addEventListener('click', getOrRefreshWeatherData);