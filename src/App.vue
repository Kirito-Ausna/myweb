<template>
  <div id='app'>
  <NavBar></NavBar>
  <div style="height: 75px;">换行</div>
  <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    components: {
      NavBar
    }

  }
</script>
<style lang="scss">
  li{
    list-style:none;
  }

</style>
