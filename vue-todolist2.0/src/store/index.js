import Vue from 'vue'
import Vuex from 'vuex'
import event from './eventModule/index'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules:{
    event
  }
})

export default store
