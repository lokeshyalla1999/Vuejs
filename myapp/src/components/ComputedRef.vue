<template>
  <h1>{{Name}}</h1><h2>{{component}}</h2>
</template>

<script>

export default {
  name:'ComputedRef',
  setup(){
   let Name = 'Component'
   let component = 'Component Ref'
   return {Name , component}
  }
}
</script>

<style>
</style>