<template>
  <div id='app'>
  <!-- <NavBar></NavBar>
  <div style="height: 75px;">换行</div> -->
  <div class="fixedBar">
  <NavMenu></NavMenu>
  </div>
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
  .fixedBar{
    display: flex;
    flex-direction: column;
    min-height: 100vh;/*100vh == height:100%,元素撑开与屏幕等高*/
  }

</style>
