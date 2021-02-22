<template>
  <div id='app'>
  <!-- <NavBar></NavBar>
  <div style="height: 75px;">换行</div> -->
  <NavMenu></NavMenu>
  <div style="height: 55px;">换行</div>
  <router-view></router-view>
  <backtop> </backtop>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import NavMenu from './components/NavMenu'
  import backtop from './components/Backtop'
  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    components: {
      NavBar,
      NavMenu,
      backtop,
    }
  }
</script>
<style lang="scss">
  li{
    list-style:none;
  }
  p,html,body{
    margin:0;
    padding: 0;
  }
</style>
