<template>
  <h1>Ref component with Composition api</h1>
  <h1 ref="p">my name is  {{name}} and age is {{age}}</h1>
    
  <button @click="handleclick">click the  button to change the total sentence</button>
  <h1>{{name}}</h1>
  <button @click="singleword">click the button to change the words</button>
</template>

<script>


import {ref} from 'vue'
export default {
    name : 'RefComponent',
    setup(){
        console.log("setup function is working");
        console.log(this);
        let name = ref("chitti");
        let age = ref(30);
        const p = ref(null);
        const handleclick =() =>{
          console.log("button is working ")
          console.log(p,p.value)
          p.value.classList.add('nani')
          p.value.textContent="i love u chitti";
        };
        const singleword = () =>{
            console.log("this single word button is working");
            name.value  = "nani"
        }




        return {name , age , handleclick , p , singleword}
    }
}
</script>

<style>

</style>