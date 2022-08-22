<template>
<Header/>
    <div>
        <h1>Hello,Welcome On Add Restaurant Page</h1>
        <form class="add" action="">
            <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
            <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
            <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
            <button type="button" v-on:click="addRestaurant" >Add New Restaurant</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
  components:{
    Header
  },
    data(){
    return{
        name:'' 
    }
  },
    name:'Add',
    data(){
      return {
        restaurant:{
          name:'',
          address:'',
          contact:''
          
        }
      }
    },
    methods:{
       async addRestaurant(){
           console.warn(this.restaurant)
           const result = await axios.post(" http://localhost:3000/restaurant",{
            name:this.restaurant.name,
            address:this.restaurant.address,
            contact:this.restaurant.address,
           });
           if(result.status==201){
             this.$router.push({name:'HomePage'})
           }
           console.warn("result",result)
        }
    },
      mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
         this.$router.push({name:'SignUp'})
      }
    } 
}
</script>
<style scoped>
  .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
  }
  .add button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
  }
</style>