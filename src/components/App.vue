<template>
<div>
    <input type="text" v-model="piece">
            <table v-for="Student in students" v-bind:key="Student._id">    
               <tr v-bind:class="Student.name.includes(piece) ? '':'red'">
                <td>{{Student.photo}}</td>
                <td>{{Student.mark}}</td>
                <td>{{Student.isDonePr}}</td>
                <td>{{Student._id}} </td>
                <td>{{Student.name}}</td>
                <td>{{Student.group}}</td>
                    <td><div v-if="Student.isDonePr==true">
                        <input type="checkbox" disabled checked="Student.isDonePr">
                    </div>
                    <div v-else><input type="checkbox" disabled ></div> </td>
                    <td><a href="#" v-on:click="del(Student._id)">Delete</a></td>
                </tr> 
                <br>
            </table>
</div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Vue.use(VueAxios, axios)

export default{
     data:{
        students: [],
        newmark:'',
        newgroup:'',
        newisDonePr:'',
        newname:'',
        search:'',
        piece:''
    },
    mounted: function(){
        axios.get("http://46.101.212.195:3000/students").then((response) =>{
            console.log(response.data);
            this.students = response.data;
        })
    },
    methods: {
        clickme: function(id){
            alert("OK");
            this.students = this.students.filter((element) => {
                return element.id != id;
            });
        }
    },
    add:function(){
        this.students.push({
            'mark':this.newmark,
            'name': this.newname,
            'group': this.newgroup,
            'isDonePr':this.newisDonePr,
            '_id':this.students.length
        })
    }
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