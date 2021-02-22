<template>
    <div>
        <div class='bgpic'>
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
            <p>
                “想尝试前往，那道光芒之中”高中一年级的夏天，从离岛离家出走，来到东京的帆高。但是他的生活立马变得穷困，在度过孤独的每一天之后终于找到的工作，是为古怪的超自然杂志撰稿。
                如同预示着他接下来的命运一般，连日不断地下雨。此时，在人潮熙熙攘攘的都市一角，帆高遇到了一位少女。
            </p>
            </div>
            <div class="part2">
            <p>
                “想尝试前往，那道光芒之中”高中一年级的夏天，从离岛离家出走，来到东京的帆高。但是他的生活立马变得穷困，在度过孤独的每一天之后终于找到的工作，是为古怪的超自然杂志撰稿。
                如同预示着他接下来的命运一般，连日不断地下雨。此时，在人潮熙熙攘攘的都市一角，帆高遇到了一位少女。
            </p>
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2568440501,3447016001&fm=26&gp=0.jpg">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bgpic{
     width: 100%;
     height: 100vh;
     background: url(https://i0.hdslb.com/bfs/article/2ef8e5897dc75d81aec22f293b7f82f7bbf15a56.jpg@1320w_780h.webp) no-repeat;
     position: relative;
     background-attachment: fixed;
     background-position: center;
     background-size: 100% 100%;
    }
    .videoshow{
        object-fit: contain;
        text-align: center;
        direction: ltr;
        padding: 60px;
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
                padding-right: 150px;
                flex-grow:1
            }
            p{
                text-align: justify;
                width: 670px!important;
                font-size: 1.6rem!important;
                color: #999999;
                font-family: 'Manjari', sans-serif!important;
                margin-block-start: 0em;
                margin-block-end: 0em;
                flex-grow: 2;
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
            p{
                text-align: justify;
                width: 670px!important;
                font-size: 1.6rem!important;
                color: #999999;
                font-family: 'Manjari', sans-serif!important;
                margin-block-start: 0em;
                margin-block-end: 0em;
                flex-grow: 2;
                padding-right: 150px;
            }
        }

    }
    
</style>