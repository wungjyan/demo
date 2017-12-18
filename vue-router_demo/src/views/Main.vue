<template>
    <div class="warp">
      <div class="main">
        <section class="nav-left">
          <h2>Vue</h2>
          <hr>
          <ul>
            <li>
              <router-link to="/nav1">Nav1</router-link>
            </li>
            <li>
              <router-link to="/nav2">Nav2</router-link>
            </li>
            <li>
              <router-link to="/nav3">Nav3</router-link>
            </li>
            <li>
              <router-link to="/nav4">Nav4</router-link>
            </li>
            <li>
              <router-link to="/nav5">Nav5</router-link>
            </li>
          </ul>
          <hr>
          <div>
            <a href="javascript:;"><img src="static/img/wx.png"></a>
            <a href="javascript:;"><img src="static/img/wb.png"></a>
            <a href="javascript:;"><img src="static/img/xf.png"></a>
          </div>
        </section>
        <section class="show-main">
          <transition :name="names">
            <router-view  class="center"/>
          </transition>

        </section>
        <div class="footer">© 2017 <a href="https://wungjyan.github.io/" target="_blank">wungjyan</a> 强力驱动</div>
      </div>
    </div>
</template>


<script>
    export default {
      data(){
        return {
          names:'top'
        }
      },

      watch:{
        $route(to,from){
          if(to.meta.index>from.meta.index){
            this.names='top'
          }else{
            this.names='bottom'
          }
        }
      }
    }
</script>

<style>
  .top-enter{
    opacity: 0;
    transform: translateY(100%);
  }
  .top-enter-to{
    opacity: 1;
    transform: translateY(0);
  }

  .top-enter-active,
  .top-leave-active{
    transition:all 0.7s;
  }

  .top-leave{
    opacity: 1;
    transform: translateY(0);
  }
  .top-leave-to{
    opacity: 0;
    transform: translateY(-100%);
  }

  .bottom-enter{
    opacity: 0;
    transform: translateY(-100%);
  }
  .bottom-enter-to{
    opacity: 1;
    transform: translateY(0);
  }

  .bottom-enter-active,
  .bottom-leave-active{
    transition:all 0.7s;
  }

  .bottom-leave{
    opacity: 1;
    transform: translateY(0);
  }
  .bottom-leave-to{
    opacity: 0;
    transform: translateY(100%);
  }


</style>
