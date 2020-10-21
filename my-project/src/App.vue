<template>
  <div>  
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>Converter</h1>
    <br>
    
      <table v-for="elem in array" v-bind:key="elem">
          <td>{{elem.ccy}}</td>
          <td><button @click="q(elem.ccy)">Обрати</button></td>
      </table>
      <br>
      <a>Convert from: {{arr.ccy}}, To: UAH</a>
      <br>

      <br>
      <a>Enter emount</a>
      <input type='text' v-model="ent">
      <br>
      <button @click="calc">Calculate</button>
      <br>
      <a>Buy: {{BUY}}</a>
      <br>
      <a>Sale: {{SALE}}</a>
   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Vue from 'vue'
import axios from 'axios'
//import VueAxios from 'vue-axios'

export default {
  name: 'App',
  data(){
    return {
      array: [],
      arr:[],
      kName: '',
      ent:'',
      BUY:'',
      SALE:''
    }
  },
  components: {
    //HelloWorld
  },
  mounted:function(){
    axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((response) =>{
            console.log(response.data);
            this.array = response.data;
    })
  },
  methods:{
    q:function(kName){
       this.arr = this.array.find((element) => { 
       return element.ccy == kName; 
      });
    },
    calc:function(){
        this.BUY = this.ent * this.arr.buy;
        this.SALE = this.ent * this.arr.sale;
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
