<template>
    <div class="backtop-item" v-if="isshow">
      <img :src="require('/src/assets/logo.png')" style="width: 100%;" @click="backtop" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            isshow:false,
            scrollTop: 0,
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods: {
        handleScroll() {
        // const that = this
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.scrollTop = scrollTop;
        this.isshow = scrollTop>60?true:false;
        },

        backtop () {
        const that = this
        const timer = setInterval(() => {
            const ispeed = Math.floor(-that.scrollTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
            if (that.scrollTop === 0) {
            clearInterval(timer)
            }
        }, 10)
        }
    }
}
</script>

<style lang="scss" scoped>
.backtop-item{
    display: inline;
    position: fixed;
    z-index: 90;
    right: 30px;
    bottom: 31px;
    width: 50px;
    height: 50px;
    cursor:pointer;
    line-height: 50px;
    border-radius: 50%;
    transition: all 0.5s;
    text-align: center;
    box-shadow: 0 0.9px 1px 0 rgba(0,0,0,0.16), 0 1px 3px 0 rgba(0,0,0,0.12);
}
</style>