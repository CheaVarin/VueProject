npm install axios

<template>
<div>
    <img class="logo" src="../assets/logo.png">
    <h1>Sing Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" >
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button type="submit" v-on:click="signUp">SingUp</button>
        <p>
          <router-link to="/login">you have account ?</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SingUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
       async signUp(){
            console.warn("hello",this.name,this.email,this.password)
            let result = await axios.post(" http://localhost:3000/users",{   
                email: this.email,
                name: this.name,
                password: this.password
            });
            console.warn(result.data);
            if(result.status==201){
                      localStorage.setItem("user-info",JSON.stringify(result.data))
                      this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
         this.$router.push({name:'HomePage'})
      }
    }
}
</script>
<style scoped>
  .logo{
    width: 100px;
  }
  .register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
  }
  .register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
  }
</style>
