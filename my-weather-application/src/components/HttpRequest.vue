<template>
    <div>
        <label>Latitude: </label>
        <input v-model="latitude" placeholder="e.g. 54.77">
        <label>Longitude: </label>
        <input v-model="longitude" placeholder="e.g. -1.27">
        <!-- <label></label>
        <input> -->
        <button id="get-refresh-button" @click="getOrRefreshWeatherData">GET OR REFRESH WEATHER DATA</button>
        <p id="output"></p>
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

                const getRefreshButton = document.getElementById('get-refresh-button');

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
                        var str = JSON.stringify(good_response, null, 4);
                        console.log(str);
                        document.getElementById('output').innerHTML = str;
                    })
                    .catch(error => {
                        getRefreshButton.parentElement.innerHTML = `Error: ${error}`;
                        console.error('There was an error!', error);
                    });

            }
        }
    }
</script>

<style scoped>

</style>