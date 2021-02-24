<template>
    <div class="mynav" id="mynav">
        <ul class="leftnav">
            <li v-for="nav in navs" class="nav-item" v-bind:key="nav.name">
                <!-- <a class="nav-link" :href="'#' + nav.id">{{nav.name}}</a> -->
                <a class="nav-link" @click="jump_anchor(nav.id)">{{nav.name}}</a>
            </li>
        </ul>
        <!-- a标签会使得浏览器url变化 -->
        <!-- <div v-for="nav in navs" v-bind:key="nav">
            <a :href="'#' + nav.id">{{nav.name}}</a>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.mynav{
	flex: 0 0 20%;
    .leftnav{
        font-family: 'Sansita',sans-serif;
        list-style-type: none;
        position:fixed;
        padding-top: 10%;
        padding-left: 2%;
        li{
          padding-top:1em;
        }
        a{
            margin:1em;
            text-align: left;
            font-size: 1.2rem;
            color: #767676;
            cursor: pointer;
            &:link, &:visited{
                color:black
            }
            &:hover, &:active{
                color:#00AAA5
            }
        }
    }
}
</style>

<script>
export default {
  props: [
    'navs'
  ],
  data () {
    return {

    }
  },
  methods: {
    jump_anchor (id) {
      console.log(id)
      const downloadEle = document.querySelector('#mynav')
      if (downloadEle) {
        downloadEle.scrollIntoView(true) // true 是默认的
      }
      document.querySelector('#' + id).scrollIntoView(true)
    }
  }
}
</script>
