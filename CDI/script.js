console.log("i love u chitti");
const app = {
    data (){
        return{
            name:"nani",
            name2:"chitti"
        }
    }
}
const app1 = {
    data(){
        return {
            name:"lokesh"
        }
    }
}
const app2 = {
     data (){
        return {
             name2:"vasavi"
        }
     }
}

const app3 ={
     data (){
        return {
             clg : "rich and poor clg "
        }
     }
}


const app4 = {
     data(){
        methods: {
            alert("i love u chitti")
          } 
     }
}
Vue.createApp(app).mount('#app');
Vue.createApp(app1).mount('.class1');
Vue.createApp(app2).mount('.class2');
Vue.createApp(app3).mount('.class3');
