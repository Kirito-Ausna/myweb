<template>
    <div class="picnav-main">
        <br>
        <div class="nav-item" v-for="nav in navs" v-bind:key="nav.name">
            <router-link :to='nav.location'>
            <img :src="nav.fig" class="nav-fig">
            </router-link>
            <div class="nav-text">
                {{nav.name}}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.picnav-main{
    display: flex;
    width: 75%;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0 2rem;
    // padding-top:220px;
    .nav-item{
        margin:auto;
        height: 6.25rem;
        .nav-fig{
            margin: 10% 0 10% 0;
            width: 8.5625rem;
            height: 10.375rem;
            cursor: pointer;  
            transition: all 0.6s;
            &:hover{
                transform: scale(1.2); 
            }
        }
        .nav-text{
            font-weight: bold;
            font-size: 24px;
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