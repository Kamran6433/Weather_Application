<template>
    <div class="card-container">
        <div class="card">
            <p>
                {{ time }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InformationCard',
    props: {
        time: {
            type: Array
        },
        temperature: {
            type: Array
        }
    },
    data() {
        return {
            data: 1
        }
    }
}
</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
}
.card{
    background-color: #6592a8;
    border-radius: 20px;
    padding: 10px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 10px 8px #888888;
}
</style>