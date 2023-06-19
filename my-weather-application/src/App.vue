<template>
    <div id="app" class="centering bg-light">
      <nav-bar></nav-bar>
      <div id="form">
        <user-information-form v-if="!userInformation.userName" v-bind:user-information="userInformation"></user-information-form>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
// import HomePage from './components/HomePage.vue';
// import AboutPage from './components/AboutPage.vue';
// import ContactPage from './components/ContactPage.vue';
import NavBar from './components/NavBar.vue';
import userInformationForm from './components/UserInformationForm.vue';

export default {
    name: 'App',
    components: {
      // HomePage,
      // AboutPage,
      // ContactPage,
      NavBar,
      userInformationForm
    },
    // props: {
    //   userName: '',
    //   userEmail: ''
    // },
    data() {
      return {
        userInformation: {
          userName: '',
          userEmail: ''
        }
      }
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
  margin-left: 5%;
}
#form {
  z-index: 1;
  position: fixed;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
