<template>
    <div id="app" class="centering">
        <!-- <img alt="Cloud" src="./assets/cloud-png-transparent-11 (1).png" width="750"> -->
        <span><h1>My Weather Application</h1></span>
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
html {
  background-image: url(./assets/taylor-van-riper-yQorCngxzwI-unsplash.jpg);
  background-position: center;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FAF9F6;
    margin-top: 60px;
}
.centering {
    display: flow-root;
    justify-content: center;
    align-content: center;
}
h1 {
  background-color: #6592a8;
  width: 100%;
  position: absolute;
  top: -22px;
  left: 0;
  padding: 10px;
}
</style>
