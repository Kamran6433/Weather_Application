<template>
    <div id="app" class="centering">
      <header>
        <h1>Weather</h1>
      </header>
      <HttpRequest></HttpRequest>
    </div>
</template>

<script>
import HttpRequest from './components/HttpRequest.vue';

export default {
    name: 'App',
    components: {
      HttpRequest
    }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #152238;
    margin-top: 60px;
    margin: auto;
}
.centering {
    max-width: 1200px;
}
header {
  display: flex;
  justify-content: space-between;
}
h1 {
  font-weight: 900;
  font-size: 75px;
}
</style>
