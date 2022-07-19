<template>
<div class="calculator">
    <marquee><h1>calculator</h1></marquee>
   <h1 class="Screen_Board">{{screen_for_calculator}}</h1>
    <button class="button" @click="concatNum('1')">1</button>
    
    <button class="button" @click="concatNum('2')">2</button>
    <button class="button" @click="concatNum('3')">3</button><br />
    <button class="button" @click="concatNum('4')">4</button>
    <button class="button" @click="concatNum('5')">5</button>
    <button class="button" @click="concatNum('6')">6</button><br />
    <button class="button" @click="concatNum('7')">7</button>
    <button class="button" @click="concatNum('8')">8</button>
    <button class="button" @click="concatNum('9')">9</button><br />
    <button class="button" @click="concatNum('0')">0</button><br />
    <button class="button" @click="concatNum('/')">/</button>
    <button class="button" @click="concatNum('*')">*</button>
    <button class="button" @click="concatNum('+')">+</button>
    <button class="button" @click="concatNum('-')">-</button><br />
    <button class="button" @click="clear()">Clear</button>
    <button class="button" @click="evalute()"> = </button>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   name :'CalculatorGame',
   setup(){
   let screen_for_calculator = ref(0);
   function concatNum(num){
        if(screen_for_calculator.value === 0)
            {
                screen_for_calculator.value = num
                console.log("Intial value is 0 ");
            }
        else
            {
                screen_for_calculator.value += num
                console.log("Intial value is not null to the value is added");
            }
   }
   function clear(){
      screen_for_calculator.value = 0;
      console.log("The value is cleared with 0")
   }
   function evalute(){
    screen_for_calculator.value = eval(screen_for_calculator.value);
    console.log("eval function that evalute the value on the screen")
   }
   return {screen_for_calculator , concatNum , clear , evalute}
   }
}
</script>

<style>
*{
    padding: 0px;
    margin: 0px;
}
.button{
    padding : 10px;
    margin: 10px;
    border: solid green 3px;
    border-radius: 10px;
}
.Screen_Board{
    border:solid green 10px;
    background-color: darkred;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} 
.calculator{
    background-color: cadetblue;
    border: dotted black 4px;
    border-radius:10px;
    margin:500px;
}
</style>