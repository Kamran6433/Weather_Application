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
            <p id="data"></p>
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
                var url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&'+parameters;

                fetch(url)
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
                        document.getElementById('data').innerHTML = str['hourly_units'];
                        // document.getElementById('data').innerHTML = JSONDataStore;
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