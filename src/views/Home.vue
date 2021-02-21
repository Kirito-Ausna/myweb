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
        background: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3889285702,4175964916&fm=11&gp=0.jpg);
        position: fixed;
        top:75px;
        // background-size: 100% 100%;
        width:100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }
    .content{
        background-color: #fff;
        width: 100%;
        height: 100%;
        padding-top: 100%;
    }
</style>