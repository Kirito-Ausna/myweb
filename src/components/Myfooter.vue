<template>
    <div class="footer">
        <div class="box">
            <div class="logo"></div>
            
            <div class="box-item">
                <ul>
                    <li>IGEM Team1</li>
                    <li>Develop by Waston</li>
                </ul>
            </div>
        </div>
        <div class="downside">
            <!-- <hr> -->
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
            <a href="https://github.com/Kirito-Ausna" class="mylink">Kirito-Ausna</a>.
            </p>
            <p>
                <a href="http://beian.miit.gov.cn" target="_blank" rel="noreferrer noopener" class="mylink">浙ICP备2020043314号</a>
            </p>
        </div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
    .box{
        display:flex;
        .box-item{
            margin-left:0;
            ul li{
                list-style-type:none;
                padding-top:1em;
                // padding-bottom:1em;
            }
            ul{
                padding:0;
            }
            width:30%;
        }
    }
    
    margin:5% 10% 2% 10%;
    z-index:1;
    bottom:0;
    width:100%;
    position:fixed;
}
.mylink{
  // font-size: 13px;
  // color: black;
  // font-family: 'Open Sans', sans-serif;
  font-style: italic;
  letter-spacing: 1px;
  transition: color 100ms linear;
  text-decoration: none;
  &:link, &:visited{
    color:black
  }
  &:hover, &:active{
    color: blueviolet
  }
}
</style>

<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
    }
}
</script>