<template>
    <div>
        <p>
            Hello My Name Is Kamran.<br/>
            This is my Weather Application built using Vue.JS where users can display the weather in a specified location.<br/>
            You can enter the Longitude and Latitude to get the Weather in that area.<br/>
            Alternatively, you can enter a Capital City along with the corresponding Continent.<br/>
            Or, you can simply press the red button to get the weather in your current location.<br/>
        </p>
    </div>
</template>

<script>
export default {
    name: 'WeatherApplication',
}
</script>

<style scoped>
.centering {
    display: grid;
    justify-content: center;
    align-items: center;
}
p {
    color: #FAF9F6;
    font-size: large;
    font-weight: bold;
}
</style>