<template>
    <div>
        <div class='bgpic'>
             <transition name="el-fade-in-linear">
            <div class="animated" v-if="isshow">
                <img src="../assets/Arrow.png" alt="" class="arrow">
            </div>
             </transition>
        </div>

        <div class="videoshow">
            <video muted width="1300px" :autoplay="true" controls loop>
                <source src="http://47.98.210.49:82/download.mp4" type="video/mp4">
                您的浏览器不支持 video 标签。
            </video>
            <!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XMjkzNTUxNDY4' frameborder=0></iframe> -->
        </div>

        <div class="mainpart">
            <div class="part1">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2568440501,3447016001&fm=26&gp=0.jpg">
            <div>
                “想尝试前往，那道光芒之中”高中一年级的夏天，从离岛离家出走，来到东京的帆高。但是他的生活立马变得穷困，在度过孤独的每一天之后终于找到的工作，是为古怪的超自然杂志撰稿。
                如同预示着他接下来的命运一般，连日不断地下雨。此时，在人潮熙熙攘攘的都市一角，帆高遇到了一位少女。
            </div>
            </div>
            <div class="part2">
            <div>
                “想尝试前往，那道光芒之中”高中一年级的夏天，从离岛离家出走，来到东京的帆高。但是他的生活立马变得穷困，在度过孤独的每一天之后终于找到的工作，是为古怪的超自然杂志撰稿。
                如同预示着他接下来的命运一般，连日不断地下雨。此时，在人潮熙熙攘攘的都市一角，帆高遇到了一位少女。
            </div>
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2568440501,3447016001&fm=26&gp=0.jpg">
            </div>
        </div>
        <div class="animated-sec">
            <img src="../assets/Arrow.png" alt="" class="arrow">
        </div>
        <picnav :navs="picnavs"> </picnav>
        <!-- <Bottom></Bottom> -->
    </div>
</template>

<script>
import picnav from "/src/components/picnav.vue"
// import Bottom from "/src/components/Bottom.vue"
export default {
    components:{
        picnav,
        // Bottom
    },
    data(){
        return {
            picnavs:[
                {
                    name:'Background',
                    fig:require("/src/assets/project.png"),
                    location:'/Background'
                },
                {
                    name:'Model',
                    fig:require("/src/assets/model.png"),
                    location:'/Model'
                },
                {
                    name:'Human',
                    fig:require("/src/assets/humanpractice.png"),
                    location:'/Human'
                },
                {
                    name:'Hardware',
                    fig:require("/src/assets/Hardware.png"),
                    location:'/Hardware'
                },
                {
                    name:'Parts',
                    fig:require("/src/assets/parts.png"),
                    location:'/Biodesign'
                }
            ],
            isshow:true,
            scrollTop: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods:{
        handleScroll() {
        // const that = this
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.scrollTop = scrollTop;
        this.isshow = scrollTop>60?false:true;
        }
    }
}
</script>

<style lang="scss" scoped>
    .bgpic{
     width: 100%;
     height: 100vh;
     background: url(../assets/HomeBg.jpeg) no-repeat;
     position: relative;
     background-attachment: fixed;
     background-position: center;
     background-size: 100% 100%;
    }
    .animated{
        font-size: 5.3125rem;
        text-align: center;
        width: 100%;
        height: 6.25rem;
        margin: 0.5625rem auto;
        -webkit-animation: bounce-up 1.4s linear infinite;
        animation: bounce-up 1.4s linear infinite;
        position: absolute;
        bottom: 0;
        z-index: 1;
        img{
            width: 6.5625rem;
            height: 4.875rem;
        }
     }
     .animated-sec{
        font-size: 5.3125rem;
        text-align: center;
        width: 100%;
        height: 6.25rem;
        margin: 11.85rem auto;
        -webkit-animation: bounce-up 1.4s linear infinite;
        animation: bounce-up 1.4s linear infinite;
        z-index: 1;
        img{
            width: 6.5625rem;
            height: 4.875rem;
        }
     }
    @keyframes bounce-up
    {
        25% {
            transform: translateY(1.25rem);
        }
        50%, 100% {
            transform: translateY(0);
        }
        75% {
            transform: translateY(-1.25rem);
        }
    }

    @-webkit-keyframes bounce-up /*Safari and Chrome*/
    {
        25% {
            transform: translateY(1.25rem);
        }
        50%, 100% {
            transform: translateY(0);
        }
        75% {
            transform: translateY(-1.25rem);
        }
    }
    .videoshow{
        object-fit: contain;
        text-align: center;
        direction: ltr;
        padding-top: 60px;
    }
    video{
        display: inline-block;
        vertical-align: baseline;
    }
    .mainpart{
        width: 100%;
        .part1{
            padding-top:220px;
            width: 60.25rem;
            height: 28.75rem;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            img{
                width: 500px;
                padding-right: 100px;
                // flex-grow:1
            }
            div{
                text-align: justify;
                flex-basis: 670px!important;
                font-size: 1.6rem!important;
                color: #999999;
                font-family: 'Manjari', sans-serif!important;
                margin-block-start: 0em;
                margin-block-end: 0em;
                // flex-grow: 2;
            }
        }
        .part2{
            padding-top:220px;
            width: 60.25rem;
            height: 28.75rem;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            img{
                width: 500px;
                flex-grow:1
            }
            div{
                text-align: justify;
                width: 670px!important;
                font-size: 1.6rem!important;
                color: #999999;
                font-family: 'Manjari', sans-serif!important;
                margin-block-start: 0em;
                margin-block-end: 0em;
                flex-grow: 2;
                margin-right: 100px;
            }
        }

    }
    
</style>