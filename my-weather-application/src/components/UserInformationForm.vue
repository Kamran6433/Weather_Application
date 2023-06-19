<template>
        <!-- <div class="form form-control form-control-lg form-group form-check"> -->
        <div class="outer-form">
            <h1 aria-describedby="signUp">Sign up to the <span>Jawa</span> Project (Example)</h1>
            <p id="signUp">To recieve news and updates on the Jawa project.</p>
            <div class="form">
                <div class="form-group">
                    <input id="name" type="text" class="form-control" v-model="userName" placeholder="Name">
                </div>
                <div class="form-group">
                    <input id="email" type="email" class="form-control" v-model="userEmail" placeholder="Email" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We will never share your email with anyone else.</div>
                </div>
            </div>
            <br/>
            <button id="submit" v-on:click="changeUserInformation"><h3>Submit</h3></button>
        </div>
</template>

<script>
export default {
    props: {
        userInformation: {
            type: Object,
            required: true
        }
    },
    name: 'UserInformationForm',
    data() {
        return {
            userName: this.userInformation.userName,
            userEmail: this.userInformation.userEmail
        }
    },
    methods: {
        changeUserInformation: function() {
            // $emit(name of the event which will be listened for by the parent, the DATA you want to pass up)
            this.$emit('changeUserInformationDataEmitted', [this.userName, this.userEmail]);
        }
    }
}
</script>

<style scoped>
.outer-form {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}
span {
    color: #AA5AAA;
    font-size: 80px;
    font-family: Jaldi, Avenir, Helvetica, Arial, sans-serif;
}
.form {
    display: inline-flex; 
    margin: 20px;
}
.form input {
    width: 100%;
    border: 2px solid #AA5AAA;
    margin: auto;
    border-radius: 15px;
    padding: 10px;
    font-size: 25px;
    box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.075);
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.form input:focus {
  border-color: #ffaf46;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(170, 90, 170, 0.25);
}
.form-group {
    margin-bottom: 15px;
    margin-left: 50px;
    margin-right: 50px;
}
#submit {
    text-align: center;
    font-family: Jaldi, Avenir, Helvetica, Arial, sans-serif;
    border-radius: 15px;
    background-color: #AA5AAA;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
#submit:hover {
    background-color: #ffaf46;
}
h1 {
    font-size: 60px;
    color: black;
}
#signUp {
    font-size: 30px;
    color: black;
}
</style>