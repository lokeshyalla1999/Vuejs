<template>
  <h1>Ref component part 2</h1>
  <p>My name is {{name}} i love {{name2}}</p>
  <button @click="Handlingbutton">Click me</button>
  <h1> {{count}}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name : 'RefComponent2',
    setup(){
       let name = ref("lokesh")
       let name2 = ref("vasavi");
       let count = ref(0);
       let Handlingbutton = () =>{
          name.value = "vasavi"
          name2.value = "lokesh"    
       }
       let increment = () => {
         count = count + 1
       }
       let decrement = () => { 
        count = count - 1
       }
       return {name , name2 , Handlingbutton , increment , decrement}
    }
}
</script>

<style>

</style>