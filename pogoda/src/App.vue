<template>
  <div id="app">
    <h1>Nedo Sinoptic Ua</h1>
    <input type="text" v-model="a">
    <br><button @click="p">Додати місто</button>
    <br><select name="sel" id="sel" v-model="b">
      <option disabled value="">Выберіть пункт</option>
      <option v-for="city in cities" :key="city">{{city}}</option>
    </select>
    <br>
    <button @click="q">Погода</button>
    <br>
    <!--<table v-for="po in pog" :key="po">
      <td>{{po.weather}}</td>
    </table>-->
    <a>{{pog}}</a>
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
        API_KEY: '217565af7a4e04cc7287a346fa739cb8',
    }
  },
  mounted:function(){
    axios.get('api.openweathermap.org/data/2.5/weather?q=London&appid=217565af7a4e04cc7287a346fa739cb8')
      .then((response) => {
        console.log(response.data);
        this.pog = response.data;
      })
  },
  methods: {
    p: function(){
      this.cities.push(this.a);
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
