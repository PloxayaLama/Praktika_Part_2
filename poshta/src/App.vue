<template>
  <div id="app">
    <h1>Poshta</h1>
    <!--<div>
           <select @change="handleChange" v-model="ci">
              <option  v-for="city in cities" v-bind:key="city.CityID" >{{ city.Description }}</option>
           </select>
           <br>
           <span>{{ci.Description}}</span>
    </div>-->





   <br>
   <a>Введіть місто</a>
   <br>
   <input type="text" v-model="city">
   <br>
   <a>{{city}}</a>
   <br>
   <button @click="q">Search</button>

   <!--<table v-for="el in cities" v-bind:key="el.CityID">
       <td>{{el.Description}}</td>
   </table>-->
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
data(){
    return {
      cities:[],
      chw:'',
      warehs:[],
      f:false,
      ci:{},
      city:'',
      id:''
    }
  },
   mounted:function(){
    axios.post("https://api.novaposhta.ua/v2.0/json/",{
      "modelName":"AddressGeneral",
      "calledMethod":"getCities",
      "methodProperties":{
        "Warehouse":"1",
      },
      "apiKey":"9a557481f95094531372a9d1b55222c8"
    }).then((response) => {
      console.log(response.data.data);
      this.cities = response.data.data;
    })
  },
  methods:{
    /*handleChange(e) {
      if(e.target.options.selectedIndex >= 0) {
            alert(e.target.options[e.target.options.selectedIndex].dataset.foo)
      }
    },*/
    q:function(){
      for (var i = 0; i < 5368/*this.cities.length*/; i++){
        if (this.cities.Description[i] == this.city){
          alert('URAAAAAAAA');
        }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
