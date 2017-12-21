<template>
  <transition name="home">
    <div class="wrap">
      <nav-header></nav-header>
      <nav-input></nav-input>
      <nav-event></nav-event>
    </div>
  </transition>


</template>

<style>
  .wrap{
    width:100%;
    position: fixed;
    top:0;
  }
  .home-enter{
    transform: translateX(100%);
  }
  .home-enter-active,
  .home-leave-active{
    transition: all 1s;
  }
  .home-enter-to,
  .home-leave{
    transform: translateX(0);
  }

  .edit-leave-to{
    transform: translateX(-100%);
  }
</style>
<script>
	import NavHeader from '../components/NavHeader.vue'
  import NavInput from '../components/NavInput.vue'
  import NavEvent from '../components/NavEvent.vue'
	export default {
		components:{
			NavHeader,
      NavInput,
      NavEvent
		}
	}
</script>

