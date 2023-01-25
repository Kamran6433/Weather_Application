<template>
    <div>
        <p>
            Hello My Name Is Kamran.<br/>
            This is my Weather Application where users can display the weather in a specified location.<br/>
            You can enter the Longitude and Latitude to get the Weather in that area.<br/>
            Alternatively, you can enter a Capital City along with the corresponding Continent.<br/>
            Or you can simply press the red button to get the weather in your current location.<br/>
        </p>
    </div>
</template>

<script>
export default {
    name: 'WeatherApplication',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.centering {
    display: grid;
    justify-content: center;
    align-items: center;
}
</style>