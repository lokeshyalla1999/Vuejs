<template>
 <BindingAll class="binding" />
 <BindingClass class="binding2" />
 <AlertBox />
 <IfCondition />
 <IfElse />
 <RefComponent />
 <ComputedRef />
 <WatcherComponent />
 <WatcherEffect />
 <props-component />
 <HookOne />
 <DataFromJson />
 <RefComponent2 />
 <CalculatorGame />
 
</template>

<script>
import BindingAll from './components/BindingAll.vue'
import BindingClass from './components/BindingClass.vue'
import AlertBox from './components/AlertBox.vue'
import IfCondition from './components/IfCondition.vue'
import IfElse from './components/IfElse.vue'
import RefComponent from './components/RefComponent.vue'
import ComputedRef from './components/ComputedRef.vue'
import WatcherComponent from './components/WatcherComponent.vue'
import WatcherEffect from './components/WatcherEffect.vue'
import PropsComponent from './components/PropsComponent.vue'
import HookOne from './components/HookOne.vue'
import DataFromJson from './components/DataFromJson.vue'
import RefComponent2 from './components/RefComponent2.vue'
import CalculatorGame from './games/CalculatorGame.vue'
export default {
  name: 'App',
  components: {
    BindingAll,
    BindingClass,
    AlertBox,
    IfCondition,
    IfElse,
    RefComponent,
    ComputedRef,
    WatcherComponent,
    WatcherEffect,
    PropsComponent,
    HookOne,
    DataFromJson,
    RefComponent2,
    CalculatorGame
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
