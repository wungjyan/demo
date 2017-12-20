export default {
  addevent({commit},params){
    commit('ADDEVENT',{items:params});
  },
  eventdone({commit},params){
    commit('EVENTDONE',{id:params});
  },
  eventtodo({commit},params){
    commit('EVENTTODO',{id:params});
  },
  eventcancel({commit},params){
    commit('EVENTCANCEL',{id:params});
  }
}
