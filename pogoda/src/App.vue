<template>
  <div id="app">
    <h1>Nedo Sinoptic Ua</h1>
    <div v-if='show == true'>
      Coordinates:{{pog.coord}} <br>
      Temperature:{{pog.main.temp}} <br>
      Pressure:{{pog.main.pressure}} <br>
      Humidity:{{pog.main.humidity}} <br>
      Wind speed:{{pog.wind.speed}} <br>
      <br>
      <button @click="show = false">Згорнути</button>
      <br><br><br><br>
    </div>
    <div else>
      <input type="text" v-model="a">
      <br><button @click="p">Додати місто</button>
      <br><select name="sel" id="sel" v-model="b">
        <option disabled value="">Выберіть пункт</option>
        <option v-for="city in cities" :key="city">{{city}}</option>
      </select>
      <br>
      <button @click="q">Погода</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  data() {
    return{
        a:'',
        cities:[],
        b:'',
        pog:[],
        show: false
    }
  },
  
  methods: {
    p: function(){
      this.cities.push(this.a);
    },
    q:function(){
    axios.post('https://api.openweathermap.org/data/2.5/weather?q='+this.b+'&appid=b8d67052dc6c85fb12d75983c11d464b')
      .then((response) => {
        console.log(response.data);
        this.pog = response.data;
        this.show = true;
      })
  },
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
