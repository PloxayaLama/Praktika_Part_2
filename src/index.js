import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Vue.use(VueAxios, axios)

var app=new Vue({
    el:"#app",
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
    
});