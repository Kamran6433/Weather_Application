<template>
    <div id="app">
        <img alt="Cloud" src="./assets/cloud-png-transparent-11 (1).png" width="750">
        <h1>My Weather Application</h1>
        <WeatherApplication></WeatherApplication>
        <HttpRequest></HttpRequest>
    </div>
</template>

<script>
import WeatherApplication from './components/WeatherApplication.vue';
import HttpRequest from './components/HttpRequest.vue';

export default {
    name: 'App',
    components: {
      WeatherApplication,
      HttpRequest
    }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
