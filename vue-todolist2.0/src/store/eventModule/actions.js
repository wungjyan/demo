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
  eventcancel({commit},params){   //这是取消未完成的，不是删除
    commit('EVENTCANCEL',{id:params});
  },
  cancelevent({commit},params){
    commit('CANCELEVENT',{id:params});
  }
}
