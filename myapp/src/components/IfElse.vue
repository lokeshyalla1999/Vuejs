<template>
  <h1>If_Else condition</h1>
  <h1 v-if="num === 1">{{text}}</h1>
  <h1 v-else>{{text2}}</h1>
</template>

<script>
export default {
   name : 'IfElse',
   data(){
     return {
        num : 0 ,
        text : "the number is equal to zero",
        text2 : "the number is not eqaul to zero"
     }
   }
}
</script>

<style>

</style>