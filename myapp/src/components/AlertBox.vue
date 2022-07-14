<template>
  <button onclick="alert('alert box in template')">Alert box</button>
  <button onclick="alertmassage">alert in script</button>
</template>

<script>


export default {
  name:'AlertBox',
  data(){
    return{
        alertmassage : "alert('single')",
    }
  }
}
</script>

<style>

</style>