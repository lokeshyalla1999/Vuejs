<template>
  <h1>If condition</h1>
  <h2 v-if="num === 0 ">{{Text}}</h2>
</template>

<script>
export default {
   name : 'IfCondition',
   data(){
     return{
       num : 0,
       Text: " the number is eqaul to zero"
     }
   }
}
</script>

<style>

</style>