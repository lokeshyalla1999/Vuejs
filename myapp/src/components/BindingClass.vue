<template>
<h1>binding class</h1>
  <h2  :class="isSoldout ? 'sold-out' : 'sold-in'">soldout</h2>
</template>

<script>
export default {
  name : 'BindingClass',
  data(){
    return {
        isSoldout:true
    }
  }
}
</script>

<style>
.sold-out{
    color : green
}
.sold-in{
    color:blue
}
</style>