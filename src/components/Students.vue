<template>
<div>
    <router-view></router-view>
    <div v-bind:class="changeStyle==''?'bg1':'bg2'">
        <input type="radio" value='true' v-model="changeStyle" @click="send()">
        <br>
        <input type="radio" value='' v-model="changeStyle" @click="send()">
        <br>
        <a>Зміна стилю</a>
        <br><br><br>
    
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
                <template v-if="Student._id==editId">
                    <td><input v-model="Student.name" value="Student.name"></td>
                    <td>{{Student.group}}</td>
                    <td> <button v-on:click="update(editId)" value="update">Change</button></td>
                </template> 
                <template v-else>   
                <tr v-bind:class="Student.name.includes(piece) ? '':'red'">
                <td><img v-bind:src="Student.photo"></td>
                <td>{{Student.mark}}</td>
                <td>{{Student.isDonePr}}</td>
                <td>{{Student._id}} </td>
                <td><router-link v-bind:to="'/student-info/'+Student._id">{{Student.name}}</router-link></td>
                <td>{{Student.group}}</td>
                    <td><div v-if="Student.isDonePr==true">
                        <input type="checkbox" disabled checked="Student.isDonePr">
                    </div>
                    <div v-else><input type="checkbox" disabled ></div> </td>
                    <td><button v-on:click="removeStudent(Student._id)">Delete</button></td>
                    <td><button v-on:click="replaceForm(Student._id)">Изменить</button></td>
                    <td><a href="#" @click.prevent="removeStudent(Student._id)" v-show="Student.group==getCurrentUser.group">Видалити (День 6)</a></td>
                </tr> 
                <br>
                </template>
            </table>
   <a>{{studentsCount}}</a> 
   </div>        
</div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

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
            piece:'',
            editId:'',
            changeStyle: ''
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
        replaceForm: function(id){
            this.editId=id;
        },
        update: function(id){
            let foundStudent = this.students.find((element)=>{
                return element._id == id;
            });

            axios.put("http://46.101.212.195:3000/students/"+id, {
                name: foundStudent.name,
                group: foundStudent.group,
                isDonePr: false
            })
            .then((response) => {
                console.log(response.data)
            })
            this.editId = 0;
        },
        removeStudent : function(studId){ 
            axios.delete("http://46.101.212.195:3000/students/"+studId, {}) 
            .then((response)=>{ 
                this.students=this.students.filter(element=>{ 
                return element._id!==studId;});
            }) 
              
        },
        send:function(){
            this.$store.commit('bg',this.changeStyle);
        }
    },
    computed: {
        studentsCount () {
            let i=0;
            for (i=0;i<this.students.length;i++){};
            this.$store.commit('setCount',i);
                return this.$store.getters.getCount;
                this.changeStyle=this.$store.getters.getback;
        },
        getCount(){
            return this.$store.getters.getCount
        },
        getCurrentUser(){
            return this.$store.getters.getUser
        }
    }

}
</script>
<style scoped>
    
</style>