<template>
    <div>
        <div class="box">
            <label>Latitude: </label>
            <input v-model="latitude" placeholder="e.g. 54.77"><br/><br/>
            <label>Longitude: </label>
            <input v-model="longitude" placeholder="e.g. -1.27"><br/><br/>
            <button id="submitButton" @click="getSpecificWeatherData"><h2>SUBMIT</h2></button>
        </div>
        <br/><br/>
        <div class="box">
            <label>Capital City: </label>
            <input v-model="city" placeholder="e.g. Copenhagen"><br/><br/>
            <label>Continent: </label>
            <input v-model="continent" placeholder="e.g. Europe"><br/><br/>
            <button id="submitButton" @click="getCityWeatherData"><h2>SUBMIT</h2></button>
        </div>
        <br/><br/>
        <button id="currentLocation" @click="getCurrentLocationWeatherData"><h2>Use Current Location</h2></button>
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
                    longitude: '',
                    city: '',
                    continent: ''
                }
            }
        },
        methods: {

            getCityWeatherData() {

                var continent = this.continent;
                var city = this.city;
                var url1 = 'https://timezoneapi.io/api/timezone/?'+continent+'/'+city+'&token=AVfZgODCXKwY';

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
                        document.getElementById('api').innerHTML = str;
                    })
                    .catch(error => {
                        document.getElementById('api').innerHTML = `API call Failed.`;
                        console.error('There was an error in first API call!', error);
                    });

            },

            getSpecificWeatherData() {

                var latitude = this.latitude;
                var longitude = this.longitude;
                var parameters = 'hourly=temperature_2m';
                var url2 = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&'+parameters;

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

            },

            getCurrentLocationWeatherData() {

                fetch('https://timezoneapi.io/api/ip/?token=AVfZgODCXKwY')
                    .then(response => {
                        if (!response.ok) {
                            return Promise.reject(response.statusText);
                        }
                        return response.json();
                    })
                    .then(good_response => {
                        var JSONDataStore = JSON.stringify(good_response, null, 4);
                        localStorage.setItem("./assets/CurrentLocation.JSON", JSONDataStore);

                        var text = localStorage.getItem("./assets/CurrentLocation.JSON");
                        var str = JSON.parse(text);
                        var location = str.data.location
                        var array = location.split(",", 2)

                        this.latitude = array[0];
                        this.longitude = array[1];
                        this.getOrRefreshWeatherData()
                    })
                    .catch(error => {
                        document.getElementById('data').innerHTML = `Current Location hasn't worked`;
                        console.error('There was an error!', error);
                    });

            }

        }
    };
</script>

<style scoped>
button {
    border-radius: 20px;
    border: 5px solid #2c3e50;
    background-color: #42b983;
    color: white;
}
button:hover {
    transition-duration: 200ms;
    border: 5px solid #42b983;
    background-color: #2c3e50;
}
#currentLocation {
    background-color: crimson;
}
#currentLocation:hover {
    background-color: #2c3e50;
    border-color: crimson;
}
.box {
    border: 2px solid #2c3e50;
    padding: 20px;
    display: inline-block;
    width: 40%;
    background-color: lightgrey;
}
</style>