<template>
    <div>
        <div class='bgpic'>
            这是标题
        </div>
        
        <div class="content">
            这是视频
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bgpic{
     width: 100%;
     height: 100vh;
     background: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1363590258,2617258036&fm=11&gp=0.jpg) no-repeat;
     position: relative;
    /* top: -4.625rem; */
     background-attachment: fixed;
     background-position: center;
     background-size: 100% 100%;
    }
    .content{
        background-color: #fff;
        width: 100%;
        height: 100%;
        padding-top: 100%;
    }
</style>