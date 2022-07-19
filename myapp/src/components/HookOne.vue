<template>
  <h1>{{hook1}}</h1>
</template>

<script>
export default {
   name:'HookOne',
   setup(){
     let hook1 = "Hook concept";
     return {
         hook1
     }
   }
}
</script>

<style>

</style>