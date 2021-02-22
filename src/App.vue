<template>
  <div id='app'>
    <NavMenu></NavMenu>
    <!-- <div style="height: 55px;">换行</div> -->
    <div :class="{'wrapper':true, 'isbottom':isbottom}" ref="wrapper">
      <router-view></router-view>
    </div>

    <backtop> </backtop>
    <transition name="footer">
      <myfooter v-if="isbottom"> </myfooter>
    </transition>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import NavMenu from './components/NavMenu'
  import backtop from './components/Backtop'
  import myfooter from "./components/Myfooter"
  export default {
    data () {
      return {
        isbottom:false,
        scrollTop:0,
        clientHeight:0,
        scrollHeight:0
      }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods: {
        handleScroll() {
          // const that = this
          this.scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
          this.scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          if(this.scrollTop + this.clientHeight >= this.scrollHeight - 1){
          // if(document.documentElement.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight){
            this.isbottom=true
            // console.log('is bottom')
          }else{
            this.isbottom=false
            // console.log('is not bottom')
          }
        },
    },
    components: {
      NavBar,
      NavMenu,
      backtop,
      myfooter,
    }
  }
</script>

<style lang="scss">
// *{
//   margin:0;
// }
body{
  margin:0;
  background:tomato;
}
// #app{
//   // background-color: black;
// }
.footer-enter{
  opacity:0;
  transform: translateY(50px);
}
.footer-enter-active{
  transition: all 0.6s;
}
.footer-enter-to{
  opacity: 1;
}
.wrapper{
  z-index:2;
  box-shadow: 0px 22px 54px rgba(0, 0, 0, 0.5);
  margin:0 auto;
  top:7%;
  padding-bottom:5%;
  transition: all 0.6s;
  background:white;
}
.isbottom{
  transform: translateY(-60px) scale(0.9);
  cursor: pointer;
}
</style>