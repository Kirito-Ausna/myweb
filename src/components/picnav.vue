<template>
    <div class="picnav-main">
        <br>
        <div class="nav-item" v-for="nav in navs" v-bind:key="nav.name">
            <img :src="nav.fig" class="nav-fig">
            <div class="nav-text">
                {{nav.name}}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.picnav-main{
    display: flex;
    margin:auto;
    padding-top: 220px;
    .nav-item{
        width:20%;
        margin:auto;
        .nav-fig{
            margin: 10% 0 10% 0;
            width:100%;
            cursor: pointer;  
            transition: all 0.6s;
            &:hover{
                transform: scale(1.2); 
            }
        }
        .nav-text{
            font-weight: bold;
            font-size: 20px;
            text-align: center;
        }
    }   
}
</style>

<script>
export default {
    props:['navs'],
    data(){
        return {
            testnavs:[
                {
                    name:'test name',
                    fig:require("/src/assets/wang.jpg")
                }
            ]
        }
    }
}
</script>