<template>
    <div>
        <div id="map"></div>
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
                var url1 = 'https://timezoneapi.io/api/timezone/?'+continent+'/'+city+'&token=arqTUMsJazDTSojCLmOt';

                fetch(url1)
                    .then(response => {
                        if (!response.ok) {
                            return Promise.reject(response.statusText);
                        }
                        return response.json();
                    })
                    .then(good_response => {
                        var location = good_response.data.timezone.location;
                        var city = good_response.data.timezone.capital;

                        console.log(city, location);
                        var latitude_and_longitude = location.split(",", 2);

                        this.latitude = latitude_and_longitude[0];
                        this.longitude = latitude_and_longitude[1];
                        document.getElementById('location-data').innerHTML = city;
                        this.getSpecificWeatherData();
                    })
                    .catch(error => {
                        document.getElementById('api').innerHTML = `API call Failed.`;
                        console.error('There was an error in the API call!', error);
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
                        console.log(good_response);
                        var temperature_2m = good_response['hourly'];
                        document.getElementById('temperature-data').innerHTML = temperature_2m['temperature_2m'];
                    })
                    .catch(error => {
                        document.getElementById('data').innerHTML = `Please enter correct co-ordinates`;
                        console.error('There was an error!', error);
                    });

            },

            getCurrentLocationWeatherData() {

                var url3 = 'https://timezoneapi.io/api/ip/?token=arqTUMsJazDTSojCLmOt';

                fetch(url3, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            return Promise.reject(response.statusText);
                        }
                        console.log(response);
                        return response.json();
                    })
                    .then(good_response => {
                        var location = good_response.data.location;
                        var city = good_response.data.city;

                        console.log(city, location);
                        var latitude_and_longitude = location.split(",", 2);

                        this.latitude = latitude_and_longitude[0];
                        this.longitude = latitude_and_longitude[1];
                        document.getElementById('location-data').innerHTML = city;
                        this.getSpecificWeatherData();
                    })
                    .catch(error => {
                        document.getElementById('data').innerHTML = `Your current location cannot be found`;
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
    padding: 20px;
    display: inline-block;
    width: 40%;
    background-color: #FAF9F6;
    border-radius: 10px;
}
</style>