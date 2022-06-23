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
             name2:"vasu"
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



Vue.createApp({
    data(){
        return{
        namee:"chitti nani"
        }
    }
}).mount(".pair");


Vue.createApp({
    data(){
        return{
            card_title:"my_image",
            card_text: "my_image is having the text",
            image:"image"
        }
    }
}).mount(".cards");



Vue.createApp({
    data(){
        return {
            courselist : [{
            coursename : "c lang",
            coursedescription : "c lang is used for desktop application and also to create opreating systems",
            courseprice:1999,
            courseimage:clang.png,
            courseurl:""
            },
            {
                coursename : "frontend",
                coursedescription : "front end development is course that used ti create the UI",
                courseprice:1999,
                courseimage:html.png,
                courseurl:""
            },
        {
            coursename : "backend",
            coursedescription : "backend  development ",
            courseprice:1999,
            courseimage:backend.png,
            courseurl:""  
        }]
        }
    }
}).mount(".cardinarray");
