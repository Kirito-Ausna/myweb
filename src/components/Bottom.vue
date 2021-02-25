<template>
  <div class="bottom">
    <div class="left">
        <p class="left-top">
            Contact Us
        </p>
    <div class="left-part">
        <div class="contactway">
            <img src="../assets/facebook.png" class="picture">
            <div class="name">TEAM ZJU_China</div>
        </div>
        <div class="contactway">
            <img src="../assets/Twitter.png" class="picture">
            <div class="name">@Team1_ZJUigemWP</div>
        </div>
        <div class="contactway">
            <img src="../assets/email.png" class="picture">
            <div class="name">igemzju@gmail.com</div>
        </div>
        <div class="contactway">
            <img src="../assets/location.png" class="picture">
            <div class="name">
               <p> Zhejiang University, Zhejiang, Chnia</p>
               <p>Zijingang Campus:No.866 Yuhangtang Road, Xihu District, Hangzhou</p>
            </div>
        </div>
    </div>
  </div>
  <div class="center">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=863625398,1183931889&fm=26&gp=0.jpg">
  </div>
  <div class="right">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1378301775,670760891&fm=26&gp=0.jpg">
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .bottom{
        display: flex;
        height: 31.25rem;
        width:70vw;
        justify-content: space-around;
        margin: 250px auto 0 auto;
        padding: 0 10rem 0 10rem;
        .left-top{
        font-size:43px;
        font-family: 'Times New Roman', Times, serif;
    }
        .left-part{
            padding-top: 10px;
            height: 21.875rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        .contactway{
            display: flex;
            margin-left: 0.625rem;
            img{
                width: 3.75rem;
                height: 3.75rem;
            }
            .name{
                font-family: "Arial",Helvetica,sans-serif;
                text-align: justify;
                font-size: 1.5625rem!important;
                padding-left: 0.9375rem;
                line-height: 3.75rem;
                p{
                    line-height: 1.875rem;
                    margin:0
                }
            }
        }
        }
        .center{
            img{
            width: 10rem;
            height: 10rem;
            }
            padding: 125px 110px 0 0;
        }
        .right{
            img{
            width:10rem;
            height: 10rem;
            }
            padding: 112px 50px 0 0;
        }
    }
</style>