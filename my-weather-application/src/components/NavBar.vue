<template>
    <div class="navbar">
        <nav class="navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <img id="logo" src="../assets/jawa-logo.png" alt="Jawa-Logo" height="50px"/>
                    <li class="nav-item">
                        <router-link to="/" class="text">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="text">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="text">Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #ffffff;
    position: fixed;
    top: 0px;
    font-family: Jaldi, Avenir, Helvetica, Arial, sans-serif;
    padding: 10px;
    left: 0;
    right: 0;
    font-size: larger;
    font-weight: 700;
    color: #ffffff;
    box-shadow: 0px 1px 1px #AA5AAA;
}
li {
    padding: 10px;
    margin-left: 20%;
    margin-right: 20%;
}
ul {
    max-width: 1200px;
    left: 50px;
}
.text {
    color: #AA5AAA;
    text-decoration: none;
}
</style>