<template>
    <div id="app" class="centering">
      <nav-bar></nav-bar>
      <section>
        <div id="form">
          <!-- You need to listen for the event that you emmitted in the child componenet and also catch the data through ¢event -->
          <user-information-form v-bind:user-information="userInformation" v-on:changeUserInformationDataEmitted="updateUserInformation($event)"></user-information-form>
          <!-- You can call the component two ways: kebab-case or camelCase -->
          <!-- <userInformationForm v-bind:user-information="userInformation" v-on:changeUserInformationDataEmitted="updateUserInformation($event)"></userInformationForm> -->
        </div>
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #152238;
    margin-top: 60px;
    margin: auto;
}
.centering {
    /* max-width: 1200px; */
}
h1 {
  font-weight: 900;
  font-size: 75px;
  margin-left: 5%;
}
#form {
  padding: 40px;
  margin: 40px;
}
</style>
