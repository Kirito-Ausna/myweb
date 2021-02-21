<template>
    <nav>
        <div>
            <router-link to="/" tag="li" class="Navele">
            Home
            </router-link>
            <router-link to="/Human" tag="li" class="Navele">Human</router-link>
            <router-link to="/Model" tag="li" class="Navele">Model</router-link>
            <router-link to="/Parts" tag="li" class="Navele">Parts</router-link>
            <router-link to="/Project" tag="li" class="Navele">Project</router-link>
            <router-link to="/Team" tag="li" class="Navele">Team</router-link>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
    nav{
        position: fixed;
        top: 0px;
        left:0px;
        width:100%;
        height: 75px;
        background: #00AAA5;
        div{
            display: flex;
            li{
                width: 220px;
                flex:1;
                text-align: center;
                margin-left: 20px;
            }
        }
    }
    .Navele{
        background-color: rgb(88, 86, 86);
        color: white;
        font-size: 20px;
        height: 75px;
        width: 220px;
    }
</style>
