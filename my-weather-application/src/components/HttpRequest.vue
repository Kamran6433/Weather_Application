<template>
    <div class="outer-outer-box">
        <button id="currentLocation" @click="getCurrentLocationWeatherData"><h2>Use Current Location</h2></button>
        <br/><br/>
        <div class="outer-box"> 
            <div class="box">
                <label>Latitude: </label>
                <input v-model="latitude" placeholder="e.g. 54.77"><br/><br/>
                <label>Longitude: </label>
                <input v-model="longitude" placeholder="e.g. -1.27"><br/><br/>
                <button id="submitButton" @click="getSpecificWeatherDataAndStore('User specified location')"><h2>SUBMIT</h2></button>
            </div>
            <br/><br/>
            <div class="box">
                <label>Capital City: </label>
                <input v-model="city" placeholder="e.g. Copenhagen"><br/><br/>
                <label>Continent: </label>
                <input v-model="continent" placeholder="e.g. Europe"><br/><br/>
                <button id="submitButton" @click="getCapitalCityWeatherData"><h2>SUBMIT</h2></button>
            </div>
        </div>
        <br/><br/>
        <label>Location: </label>
        <label id="location-data"></label>
        <div v-if="weatherData.eachTimeSplitUp">
            <div>
                <div class="card-container" v-for="items in weatherData" :key="items">
                    <div class="card" v-for="item in items" :key="item">
                        <label>
                            {{ item }}
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <div class="card-container" v-for="items in weatherData2" :key="items">
                    <div class="card-container card" v-for="item in items" :key="item">
                        <label>
                            {{ items }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <label v-else>No Weather Data</label> 
    </div>
</template>

<script>
// Make sure to wrap API calls with exception handling to limit/lower my dependency on the API

export default {
    name: 'HttpRequest',
    data() {
        return {
            latitude: '',
            longitude: '',
            city: '',
            continent: '',
            hourly: '',
            eachTemperature: '',
            eachTime: '',
            weatherData: {
                eachTemperatureSplitUp: '',
                eachTimeSplitUp: ''
            },
            weatherData2: {

            }
        }
    },
    methods: {
        
        getLocationAndCityFromDataAndStore(good_response) {
            let location = good_response.data.timezone.location;
            let city = good_response.data.timezone.capital;

            // console.log(city, location);
            let latitudeAndLongitude = location.split(",", 2);

            this.latitude = latitudeAndLongitude[0];
            this.longitude = latitudeAndLongitude[1];
            this.getSpecificWeatherDataAndStore(city);
        },

        getSpecificWeatherDataAndStore(city) {
            let latitude = this.latitude;
            let longitude = this.longitude;
            let parameters = 'hourly=temperature_2m';
            let url2 = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&'+parameters;

            fetch(url2)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(good_response => {
                // console.log(good_response);
                this.hourly = good_response['hourly'];
                this.eachTemperature = this.hourly['temperature_2m'];
                this.eachTime = this.hourly['time'];
                // This should not happen
                // TODO: save it in data and data is reactive so link data to template
                document.getElementById('location-data').innerHTML = city;
                // Can swap the iteration for a parameter to enable limiting cards
                this.weatherData.eachTemperatureSplitUp = String(this.eachTemperature).split(/,/, 5);
                this.weatherData.eachTimeSplitUp = String(this.eachTime).split(/,/, 5);
                let eachTemperatureSplitUp1 = String(this.eachTemperature).split(/,/, 5);
                let eachTimeSplitUp1 = String(this.eachTime).split(/,/, 5);
                // var dictionary = {
                //     eachTemperatureSplitUp1,
                //     eachTimeSplitUp1
                // }
                for (let index = 0; index < eachTemperatureSplitUp1.length; index++) {
                    this.weatherData2 = {
                        eachTemperatureSplitUp1, eachTimeSplitUp1
                    };
                }
                console.log(this.weatherData2);
                // console.log(this.weatherData.eachTemperatureSplitUp);
                // console.log(this.weatherData.eachTimeSplitUp);
                // console.log(this.weatherData);
            })
            .catch(error => {
                document.getElementById('location-data').innerHTML = `Please enter correct co-ordinates`;
                console.error('There was an error!', error);
            });
        },

        getCapitalCityWeatherData() {
            let continent = this.continent;
            let city = this.city;
            let url1 = 'https://timezoneapi.io/api/timezone/?'+continent+'/'+city+'&token=arqTUMsJazDTSojCLmOt';

            fetch(url1)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(good_response => {
                this.getLocationAndCityFromDataAndStore(good_response);
            })
            .catch(error => {
                document.getElementById('location-data').innerHTML = `API call Failed. Perhaps you should check your spelling!`;
                console.error('There was an error in the API call!', error);
            });
        },

        getCurrentLocationWeatherData() {
            let url3 = 'https://timezoneapi.io/api/ip/?token=arqTUMsJazDTSojCLmOt';

            fetch(url3, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();  
            })
            .then(good_response => {
                this.getLocationAndCityFromDataAndStore(good_response);
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
    font-weight: 900;
    font-size: 2em;
}
#currentLocation {
    background-color: crimson;
}
#currentLocation:hover {
    background-color: #2c3e50;
    border-color: crimson;
}
#location-data {
    color: #6592a8;
    font-size: 75px;
}
ul {
    font-weight: 900;
    font-size: 1.5em;
}
.box {
    border: 6px solid #152238;
    padding: 20px;
    border-radius: 20px;
    margin-right: 20px;
}
.outer-box {
    display: inline-flex;
    flex-direction: row;
}
.card-container {
    display: flex;
    flex-wrap: wrap;
}
.card{
    background-color: #6592a8;
    border-radius: 20px;
    padding: 10px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 10px 8px #888888;
}
/* .outer-outer-box {
} */
</style>