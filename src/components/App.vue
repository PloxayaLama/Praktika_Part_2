<template>
<div>
    <input type="text" v-model="newname">Имя
    <br>
    <input type="text" v-model="newmark">Oценка
    <br>
    <input type="text" v-model="newgroup">Группа
    <br>
    <input type="checkbox" v-model="newisDonePr">Сдал/не сдал
    <br>
    <button @click="add">Add</button>
    <br><br><br>
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
                    <td><button v-on:click="removeStudent(Student._id)">Delete</button></td>
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
     data(){
        return{
            students: [],
            newmark:'',
            newgroup:'',
            newisDonePr:'',
            newname:'',
            search:'',
            piece:''
        }
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
        },
        add: function(){
            axios.post("http://46.101.212.195:3000/students", {
                name:this.newname,
                group:this.newgroup,
                mark:this.newmark,
                isDonePr: false
            })
            .then((response) => {
                console.log(response.data)
            })
        },
        getStudents: function(){
            axios.get("http://46.101.212.195:3000/students").then((response) =>{
            console.log(response.data);
            this.students = response.data;
        })
        },
        removeStudent : function(studId){ 
            Vue.axios.delete("http://46.101.212.195:3000/students/"+studId, {}) 
            .then((response)=>{ 
                this.students=this.students.filter(element=>{ 
                return element._id!==student;});
            }) 
              
        },
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