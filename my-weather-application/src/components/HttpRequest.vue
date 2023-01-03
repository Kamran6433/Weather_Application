<template>
    <div>
        <label>Latitude: </label>
        <input v-model="latitude" placeholder="e.g. 54.77"><br/><br/>
        <label>Longitude: </label>
        <input v-model="longitude" placeholder="e.g. -1.27"><br/><br/>
        <!-- <label></label>
        <input> -->
        <button id="submitButton" @click="getOrRefreshWeatherData"><h2>SUBMIT</h2></button>
        <div>
            <h3>Weather data will be displayed here</h3>
            <hr/>
            <h1>First API call</h1>
            <p id="api"></p>
            <p id="data"></p>
            <h1>Location</h1>
            <p id="location-data"></p>
            <h1>Temperature(Celcius)</h1>
            <p id="temperature-data"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HttpRequest',
        data() {
            return {
                data: {
                    latitude: '',
                    longitude: ''
                }
            }
        },
        methods: {
            getOrRefreshWeatherData() {

                var latitude = this.latitude;
                var longitude = this.longitude;
                var parameters = 'hourly=temperature_2m';
                var url1 = 'https://timezoneapi.io/api/address/?Hacker+Way+1+Menlo+Park+California&token=BOqSQMWnZEml';
                var url2 = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&'+parameters;

                fetch(url1)
                    .then(response => {
                        if (!response.ok) {
                            return Promise.reject(response.statusText);
                        }
                        return response.json();
                    })
                    .then(good_response => {
                        var JSONDataStore = JSON.stringify(good_response, null, 4);
                        localStorage.setItem("./assets/LocationData.JSON", JSONDataStore);

                        var text = localStorage.getItem("./assets/LocationData.JSON");
                        var str = JSON.parse(text);
                        console.log(str);
                        document.getElementById('api').innerHTML = str
                    })
                    .catch(error => {
                        document.getElementById('api').innerHTML = `API call Failed.`;
                        console.error('There was an error in first API call!', error);
                    });


                fetch(url2)
                    .then(response => {
                        if (!response.ok) {
                            return Promise.reject(response.statusText);
                        }
                        return response.json();
                    })
                    .then(good_response => {
                        var JSONDataStore = JSON.stringify(good_response, null, 4);
                        localStorage.setItem("./assets/WeatherData.JSON", JSONDataStore);

                        var text = localStorage.getItem("./assets/WeatherData.JSON");
                        var str = JSON.parse(text);
                        console.log(str);
                        var temperature_2m = str['hourly'];
                        document.getElementById('temperature-data').innerHTML = temperature_2m['temperature_2m'];
                        document.getElementById('location-data').innerHTML = temperature_2m['temperature_2m'];
                    })
                    .catch(error => {
                        document.getElementById('data').innerHTML = `Please enter correct co-ordinates`;
                        console.error('There was an error!', error);
                    });

            }
        }
    };
</script>

<style scoped>
#submitButton {
    border-radius: 20px;
    border: 5px solid #2c3e50;
    background-color: #42b983;
    color: white;
}
#submitButton:hover {
    transition-duration: 200ms;
    border: 5px solid #42b983;
    background-color: #2c3e50;
}
</style>