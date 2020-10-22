<template>
    <div> 
        <table >
            <td><img v-bind:src="this.arrayInfo.photo"></td>
            <td>{{this.arrayInfo.mark}}</td>
            <td>{{this.arrayInfo.isDonePr}}</td>
            <td>{{this.arrayInfo._id}} </td>
            <td>{{this.arrayInfo.name}}</td>
            <td>{{this.arrayInfo.group}}</td>
        </table>   
    </div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default{
    props:{
        id:'',
    },
    data(){
        return{
            arrayInfo: {},
        }
    },
    mounted: function(){
        axios.get("http://46.101.212.195:3000/students/"+this.id).then((response) =>{
            console.log(response.data);
            this.arrayInfo = response.data;
        })
    },
}
</script>
<style scoped>
    .large{
             width:100px;
             height:100px;
    
            }
            .fancyb{
             width:486;
             height:630px;
    
            }
            .red{
             color:red;
            }
            .black{
             color:black;
            }
</style>