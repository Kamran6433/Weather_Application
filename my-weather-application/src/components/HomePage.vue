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
        <label id="location-data">{{ city | to-uppercase }}</label>
        <div v-if="eachTime">    
            <div class="card-container">
                <!-- This is just for understanding custome directives and to figure out what links where -->
                <div class="card" v-for="(time, temperature) in weatherData" :key="temperature" v-rainbow:argument="'value'"> 
                    <label>
                    {{ temperature }} <br/> {{ time }}
                    </label>
                </div>
            </div>
        </div>
        <label v-else>No Weather Data</label> 
    </div>
</template>

<script>
// Make sure to wrap API calls with exception handling to limit/lower my dependency on the API

export default {
    name: 'HomePage',
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
                '': '',
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
                this.hourly = good_response['hourly'];
                this.eachTemperature = this.hourly['temperature_2m'];
                this.eachTime = this.hourly['time'];
                this.city = city;
                // Can swap the iteration for a parameter to enable limiting cards
                let eachTemperatureSplitUp = String(this.eachTemperature).split(/[\s,]+/, 5);
                let eachTimeSplitUp = String(this.eachTime).split(/[\s,]+/, 5);
                const dictionary = {}
                var timeOnly;
                for (let index = 0; index < eachTimeSplitUp.length; index++) {
                    timeOnly = eachTimeSplitUp[index].slice(Math.max(eachTimeSplitUp[index].length - 5, 1));
                    console.log(timeOnly);
                    dictionary[eachTemperatureSplitUp[index]] = timeOnly;
                }
                this.weatherData = dictionary;
                console.log(this.weatherData);
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
        },

        // lifecycle hooks
        beforeCreate() {
            alert('beforeCreate');
        },
        created() {
            alert('created');
        },
        beforeMount() {
            alert('beforeMount');
        },
        mounted() {
            alert('mounted');
        },
        beforeUpdate() {
            alert('beforeUpdate');
        },
        updated() {
            alert('updated');
        }
    }
};
</script>

<style scoped>
.outer-outer-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #ecc2ec;
}
button {
    border-radius: 15px;
    background-color: #2196f3;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: #0c7cd5;
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
    border: 4px solid #152238;
    padding: 20px;
    border-radius: 20px;
    margin-right: 20px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}
.outer-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
}
.card {
    background-color: #6592a8;
    color: white;
    border: 4px solid #152238;
    border-radius: 15px;
    padding: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}
/* label {
} */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>