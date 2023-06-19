<template>
    <div id="app" class="centering">
      <nav-bar></nav-bar>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <section>
        <div id="form" v-if="!userInformation.userName">
          <!-- You need to listen for the event that you emmitted in the child componenet and also catch the data through ¢event -->
          <user-information-form v-bind:user-information="userInformation" v-on:changeUserInformationDataEmitted="updateUserInformation($event)"></user-information-form>
          <!-- You can call the component two ways: kebab-case or camelCase -->
          <!-- <userInformationForm v-bind:user-information="userInformation" v-on:changeUserInformationDataEmitted="updateUserInformation($event)"></userInformationForm> -->
        </div>
        <div v-else>
          <h1>Welcome: {{ userInformation.userName }} {{ userInformation.userEmail }}</h1>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <router-view></router-view>
      </section>
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
    },
    methods: {
      updateUserInformation: function(eventData) {
        this.userInformation.userName = eventData[0];
        this.userInformation.userEmail = eventData[1];
      }
    }
}

</script>

<style>
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #152238;
    margin-top: 60px;
    margin: auto;
}
.centering {
    max-width: 1200px;
}
/* header {
  display: flex;
  justify-content: space-between;
} */
h1 {
  font-weight: 900;
  font-size: 75px;
  margin-left: 5%;
}
#form {
  /* top: 50px;
  width: 100%; */
}
</style>
