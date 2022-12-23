<template>
    <p>
        {{ weatherData.text }} Hello My Name Is Kamran
    </p>
</template>

<script>
export default {
    props: {
        weatherData: {
            type: String,
            default: ''
        }
    }
}
</script>
