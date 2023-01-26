<template>
    <div class="outer-outer-outer-box">
        <div class="outer-outer-box">
            <div class="outer-box">
                <div class="box">
                    <label>Latitude: </label>
                    <input v-model="latitude" placeholder="e.g. 54.77"><br/><br/>
                    <label>Longitude: </label>
                    <input v-model="longitude" placeholder="e.g. -1.27"><br/><br/>
                    <button id="submitButton" @click="getSpecificWeatherData('User specified location')"><h2>SUBMIT</h2></button>
                </div>
                <br/><br/>
                <div class="box">
                    <label>Capital City: </label>
                    <input v-model="city" placeholder="e.g. Copenhagen"><br/><br/>
                    <label>Continent: </label>
                    <input v-model="continent" placeholder="e.g. Europe"><br/><br/>
                    <button id="submitButton" @click="getCapitalCityWeatherData"><h2>SUBMIT</h2></button>
                </div>
                <br/><br/>
                <button id="currentLocation" @click="getCurrentLocationWeatherData"><h2>Use Current Location</h2></button>
            </div>
            <div class="box2">
                <!-- <h2>Weather data will be displayed here</h2> -->
                <!-- <p id="data"></p> -->
                <h2>Location</h2>
                <p id="location-data"></p>
                <br/><br/><br/><br/><br/><br/>
                <h2>Temperature(Celcius)</h2>
                <span id="temperature-data"></span>
            </div>
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

            getSpecificWeatherData(city) {

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
                        document.getElementById('location-data').innerHTML = city;
                        // var splitTemperature = temperature_2m['temperature_2m'];
                        // var finalTemperature = splitTemperature.split(",");
                        document.getElementById('temperature-data').innerHTML = temperature_2m['temperature_2m'];
                    })
                    .catch(error => {
                        document.getElementById('location-data').innerHTML = `Please enter correct co-ordinates`;
                        console.error('There was an error!', error);
                    });

            },

            getCapitalCityWeatherData() {

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
                        this.getSpecificWeatherData(city);
                    })
                    .catch(error => {
                        document.getElementById('location-data').innerHTML = `API call Failed. Perhaps you should check your spelling!`;
                        console.error('There was an error in the API call!', error);
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
                        console.log(good_response);
                        var location = good_response.data.location;
                        var city = good_response.data.city;

                        console.log(city, location);
                        var latitude_and_longitude = location.split(",", 2);

                        this.latitude = latitude_and_longitude[0];
                        this.longitude = latitude_and_longitude[1];
                        this.getSpecificWeatherData(city);
                    })
                    .catch(error => {
                        document.getElementById('location-data').innerHTML = `Your current location cannot be found`;
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
label {
    font-weight: bold;
    font-size: larger;
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
    border-radius: 10px;
}
.box2{
    /* border: 5px solid red; */
    max-width: 1600px;
}
.outer-box {
    /* border: 5px solid #42b983; */
    display: inline-block;
}
.outer-outer-box {
    /* border: 5px solid #2c3e50; */
    display: inline-flex;
    /* max-width: 1600px; */
}
.outer-outer-outer-box {
    display: inline flex;
}
</style>