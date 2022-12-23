<template>
    <div id="app">
        <h1>My Weather Application?</h1>
        <WeatherApplication></WeatherApplication>
    </div>
</template>

<script>
import WeatherApplication from './components/WeatherApplication.vue'

export default {
    name: 'App',
    components: {
        WeatherApplication
    }
}
</script>

<style>

/* *, *::before, *::after {
	box-sizing: border-box;
} */

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

h1 {
	text-align: center;
}

p {
    text-align: center;
    color: aqua;
}

</style>
