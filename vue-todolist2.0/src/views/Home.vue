<template>
  <div>
    <nav-header></nav-header>
    <nav-input></nav-input>
    <nav-event></nav-event>
  </div>

</template>

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

