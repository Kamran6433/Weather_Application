<template>
    <div class="navbar">
        <nav class="navbar navbar-expand-lg bg-secondary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link text-white">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link text-white">Contact</router-link>
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

<style>
.navbar {
    width: 100%;
    font-size: larger;
    font-weight: 600;
    color: white;
}
a {
    color: white;
}
</style>