<template>
  <div>
    <comp-header/>
    <router-view/>
    <comp-footer/>
  </div>
</template>

<script>
  import compHeader from './components/Header_Footer/Header';
  import compFooter from './components/Header_Footer/Footer';

export default {
 components:{
   compHeader,
   compFooter,
 },
 created(){
   this.$store.dispatch('admin/refreshToken')
 }

}
</script>

<style>
  @import './assets/style.css';
</style>

