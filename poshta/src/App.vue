<template>
  <div id="app">
    <h1>Poshta</h1>
   <br>
   <a>Введіть місто</a>
   <br>
   <input type="text" v-model="city">
   <br>
   <a>{{city}}</a>
   <br>
   <button @click="q">Search</button>
   <br>
   <a>{{cRef}}</a>
   <br>
   <button @click="otdel">Вітділи</button>
   <br>

   <table v-for="el in otd" v-bind:key="el.Description">
       <td>{{el.Description}}</td>
   </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
data(){
    return {
      cities:[],
      ci:{},
      city:'',
      otd:[],
      cRef:'',
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
    q:function(){
      for (var i = 0; i < this.cities.length; i++){
        if (this.cities[i].Description == this.city){
          this.ci = this.cities[i];
          this.cRef = this.ci.Ref;
        }
      }
    },
    otdel:function(){
      axios.post("https://api.novaposhta.ua/v2.0/json/",{
        "modelName": "AddressGeneral",
        "calledMethod": "getWarehouses",
        "methodProperties": {
            "SettlementRef": "e71629ab-4b33-11e4-ab6d-005056801329"
        },
        "apiKey": "9a557481f95094531372a9d1b55222c8"
      }).then((response) =>{
        console.log(response.data.data);
        this.otd = response.data.data;
      })
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
