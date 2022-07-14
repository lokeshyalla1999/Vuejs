<template>
 <BindingAll class="binding" />
 <BindingClass class="binding2" />
 <AlertBox />
 <IfCondition />
 <IfElse />
 <RefComponent />
</template>

<script>
import BindingAll from './components/BindingAll.vue'
import BindingClass from './components/BindingClass.vue'
import AlertBox from './components/AlertBox.vue'
import IfCondition from './components/IfCondition.vue'
import IfElse from './components/IfElse.vue'
import RefComponent from './components/RefComponent.vue'
export default {
  name: 'App',
  components: {
    BindingAll,BindingClass,AlertBox,IfCondition,IfElse,RefComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
