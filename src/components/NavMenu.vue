<template>
  <div class="toolman">
    <el-menu :default-active="activeIndex" class="NavBar" mode="horizontal" @select="handleSelect" :router='true'
    background-color=#00AAA5 text-color=#fff>
      <div class="logo">
      <div class="logo-part1">iGEM</div>
      <div class="logo-part2">ZJU-China 2021</div>
      </div>
      <el-menu-item index="/" class='bgc'>Home</el-menu-item>
      <el-menu-item index="/Background" class="bgc">Background</el-menu-item>
    <el-submenu index="/Parts" background-color=#3E4747>
      <template slot="title">Parts</template>
      <el-menu-item index="/Biodesign">Biodesign</el-menu-item>
      <el-menu-item index="/Feasibility">Feasibility</el-menu-item>
    </el-submenu>
    <el-submenu index="/Projects">
      <template slot="title" >Projects</template>
      <el-menu-item index="/Model">Model</el-menu-item>
      <el-menu-item index="2-2">Hardware</el-menu-item>
    </el-submenu>
    <el-menu-item index="/Human" class="bgc">Human</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toolman{
    position: fixed;
    z-index: 2;
    width: 100%;
    margin: 0 auto;
  }
  .el-menu{
    width: 100%;
  }
 .NavBar{
     display: flex;
     justify-content: flex-end;
     width:100%;
     padding: 0;
     margin: 0;
 }
 .el-menu-item{
     font-weight: bold;
     margin-right: 35px!important;
    //  padding-right: 50px;
    //  width: 220px;
   
 }
 
 .el-submenu{
     font-weight: bold;
     margin-right: 25px;
 
 }
 .logo{
     margin-right: auto;
     color: white;
     padding-left: 10px;
     .logo-part1{
         font-weight: bold;
         font-size: 30px;
         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
     }
     .logo-part2{
         font-size: 5px;
     }
 }
 div{
   padding: 0;
   margin: 0;
 }

</style>
