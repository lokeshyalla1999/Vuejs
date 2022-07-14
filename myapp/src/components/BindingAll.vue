<template>
  <div>
    <h1>Binding</h1>
     <p>Binding are three types they are 1.binding Text 2.Binding Html 3.Binding attributes</p>

     <h1>{{name}}</h1>
     <h1 v-html="name2"></h1>
     
     <button :onclick="isDisabled">Binding</button>
     </div>
</template>

<script>
export default {
    name : 'BindingAll',
    data(){
        return{
            name : 'Zensar',
            name2 : <b>tech</b>,
            isDisabled : false & alert('single')     
        }
        
    }
}
</script>

<style>

</style>