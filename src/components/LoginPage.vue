<template>
<div>
    <img class="logo" src="../assets/logo.png">
    <h1>Login Page</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button type="submit" v-on:click="login">Login</button>
        <p>
            <router-link to="/sing-up">you don't have account ?</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({
                    name: 'HomePage'
                })
            }
        },
    },
      mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
         this.$router.push({name:'HomePage'})
      }
    }
};
</script>

<style scoped>
.logo {
    width: 100px;
}

.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>
