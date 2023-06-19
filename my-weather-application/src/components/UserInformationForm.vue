<template>
    <div class="form form-control form-control-lg form-group form-check">
        <p> {{ userInformation }} </p>
        <div>
            <h3>Name: </h3>
            <input v-model="userName" placeholder="John">
            <h3>Email: </h3>
            <input v-model="userEmail" placeholder="John@mail.com">
            <button><h3>Submit</h3></button>
        </div>
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

<style>
.form {
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
</style>