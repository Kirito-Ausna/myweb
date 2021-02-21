<template>
  <div id='app'>
  <!-- <NavBar></NavBar>
  <div style="height: 75px;">换行</div> -->
  <NavMenu></NavMenu>
  <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import NavMenu from './components/NavMenu'
  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    components: {
      NavBar,
      NavMenu
    }

  }
</script>
<style lang="scss">
  li{
    list-style:none;
  }
</style>
